from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.tokens import default_token_generator
from .forms import SignupForm
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.contrib.auth.models import User
from django.core.mail import EmailMessage
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import PasswordResetForm
from django.core.mail import send_mail
from django.urls import reverse
from White_Helmet import settings

def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            # save form in the memory not in database
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            # to get the domain of the current site
            current_site = get_current_site(request)
            mail_subject = 'Подтверждение регистрации на сайте "Белая Каска"'
            message = render_to_string('account/acc_active_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
            })
            to_email = form.cleaned_data.get('email')
            email = EmailMessage(
                mail_subject, message, to=[to_email]
            )
            email.send()
            return render(request, 'account/status_page.html', {'stat': 'На Ваш E-Mail отправлено письмо для '
                                                                        'подтверждения регистации'})
    else:
        form = SignupForm()
    return render(request, 'account/signup.html', {'form': form})


def activate(request, uidb64, token):
    User = get_user_model()
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        return render(request, 'account/status_page.html',
                      {'stat': 'Благодарим за регистрацию на сайте! Теперь Вы можете войти!'})
    else:
        return render(request, 'account/status_page.html',
                      {'stat': 'Ссылка недействительна'})


def password_reset(request):

    if request.method == 'POST':
        form = PasswordResetForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            try:
                user = User.objects.get(email=email)
                user_name = user.username
                print(user_name)
                uid = urlsafe_base64_encode(force_bytes(user.pk))
                token = default_token_generator.make_token(user)
                reset_url = request.build_absolute_uri(reverse('password_reset_confirm', kwargs={'uidb64': uid, 'token': token}))
                subject = 'Сброс пароля на сайте "Белая каска"'
                current_site = get_current_site(request)
                # message = render_to_string('registration/password_reset_email.html', {'reset_url': reset_url})
                message = render_to_string('registration/password_reset_email.html', {
                    'user': user_name,
                    'reset_url': reset_url,
                })
                # send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [email])
                send_email = EmailMessage(
                    subject, message, to=[email]
                )
                send_email.send()
                return render(request, 'registration/password_reset_done.html')
            except Exception as err:
                print(err)
                cont = {
                    'form': form,
                    'check_mail': 'Пользователь с таким email не найден, попробуйте еще раз.'
                        }
                return render(request, 'registration/password_reset_form.html', context=cont)
    else:
        form = PasswordResetForm()
    cont = {
        'form': form,
        'check_mail': 'Введите E-Mail от Вашего аккаунта, на него будет отправлено письмо с ссылкой по сбросу пароля.'
    }
    return render(request, 'registration/password_reset_form.html', context=cont)
