from django.contrib import admin
from .models import News, Categories
from .forms import NewsForm


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    form = NewsForm
    list_display = ['title', 'post_id', 'active', 'car_active', 'post_views', 'pubdate', 'creator', 'category',
                    'pictures']
    list_editable = ['category', 'active', 'car_active', 'post_views']
    ordering = ['-post_id']
    list_per_page = 20
    search_fields = ['title']
    exclude = ['pubdate']
    prepopulated_fields = {'url': ("title",), 'category_en': ("category",)}


@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ['cat_ru', 'cat_en', 'active', 'sub_active', 'car_active']
    list_editable = ['active', 'sub_active', 'car_active']
    ordering = ['cat_ru']
    search_fields = ['cat_ru']
    prepopulated_fields = {'cat_en': ("cat_ru",)}

