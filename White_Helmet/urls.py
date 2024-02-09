from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
# from django_email_verification import urls as email_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('tinymce/', include('tinymce.urls')),
    # path('summernote/', include('django_summernote.urls')),
    # path('account/', include('account.urls')),
    # path('email/', include(email_urls)),
    path('', include('main.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# urlpatterns += [
#     path('accounts/', include('django.contrib.auth.urls')),
# ]