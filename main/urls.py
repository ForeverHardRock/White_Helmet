from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('search/<str:filter_mode>/<str:filter_time>', views.search_results, name='search_results'),
    path('<slug:cat_slug>/<slug:post_slug>', views.show_post, name='url_post'),
    path('<slug:cat_slug>', views.show_category, name='cat_name'),
    path('load-categories/<str:button_id>/', views.load_categories, name='load_categories'),
    path('rss/', views.rss_feed, name='rss_feed'),
    path('rss/turbo/', views.rss_turbo_feed),
    path('sitemap.xml', views.sitemap_load),


    # path('load-content-1/<str:button_id>/', views.load_content_1, name='load_content'),
    # path('load-content-1/last/', views.load_content_1, name='load_content'),
    # path('load-content-2/<str:button_id>/', views.load_content_2, name='load_content'),
    # path('load-content-2/last/', views.load_content_2, name='load_content'),
    # path('load-content-3/<str:button_id>/', views.load_content_3, name='load_content'),
    # path('load-content-3/last/', views.load_content_3, name='load_content'),

    # path('about', views.about)
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)