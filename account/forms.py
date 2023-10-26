from django.contrib.auth.models import User
from django import forms
from django.contrib.auth.forms import UserCreationForm


class SignupForm(UserCreationForm):
    email = forms.EmailField(max_length=200)
    class Meta:
        model = User
        fields = ('username', 'first_name', 'email', 'password1', 'password2', )

