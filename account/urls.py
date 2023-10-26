from django.urls import path, include
from .views import signup, activate, password_reset
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('signup/', signup, name='signup'),
    path('activate/<str:uidb64>/<str:token>/', activate, name='activate'),
    path('password_reset', password_reset, name='password_reset'),

    path('login', auth_views.LoginView.as_view(), name='login'),

    path('logout', auth_views.LogoutView.as_view(), name='logout'),


    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(),
         name ='password_reset_done'),
    path('reset/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(),
          name ='password_reset_confirm'),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(),
         name ='password_reset_complete'),
    # path('', include('django.contrib.auth.urls')),
]

