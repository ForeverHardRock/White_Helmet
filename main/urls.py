from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

from django.contrib.syndication.views import Feed
from.models import News
import email.utils
import datetime
# class LatestPostsFeed(Feed):
#     title = "White-Helmet's RSS"
#     link = "/rss/"
#     description = "Construction news"
#
#     def items(self):
#         return News.objects.order_by('-post_id')[:1]
#
#     def item_guid(self, item):
#         return item.post_id
#
#     def item_title(self, item):
#         return item.title
#
#     def item_link(self, item):
#         return '/'+item.category_en+'/'+item.url
#
#     def item_pubdate(self, item):
#         time = datetime.datetime.strptime(str(item.pubdate), '%Y-%m-%d %H:%M:%S.%f%z')
#         return time
#
#     def item_description(self, item):
#         pass
#
#     def item_categories(self):
#         return 'format-article', 'index'
#
#     def item_content(self, item):
#         return item.ptext
#
#     def item_enclosure(self, item):
#         print(item.pictures)
#         return item.pictures


urlpatterns = [
    path('', views.home, name='home'),
    path('search/<str:filter_mode>/<str:filter_time>', views.search_results, name='search_results'),
    path('<slug:cat_slug>/<slug:post_slug>', views.show_post, name='url_post'),
    path('<slug:cat_slug>', views.show_category, name='cat_name'),
    path('load-categories/<str:button_id>/', views.load_categories, name='load_categories'),
    path('rss/', views.rss_feed, name='rss_feed'),

    # path('load-content-1/<str:button_id>/', views.load_content_1, name='load_content'),
    # path('load-content-1/last/', views.load_content_1, name='load_content'),
    # path('load-content-2/<str:button_id>/', views.load_content_2, name='load_content'),
    # path('load-content-2/last/', views.load_content_2, name='load_content'),
    # path('load-content-3/<str:button_id>/', views.load_content_3, name='load_content'),
    # path('load-content-3/last/', views.load_content_3, name='load_content'),

    path('about', views.about)
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)