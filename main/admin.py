from django.contrib import admin
from .models import News, Categories
from .forms import NewsForm, CategoriesForm
from django.contrib.messages import error
from django.http import HttpResponseRedirect

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
    form = CategoriesForm
    list_display = ['cat_ru', 'cat_en', 'active', 'sub_active', 'car_active']
    list_editable = ['active', 'sub_active', 'car_active']
    ordering = ['cat_ru']
    search_fields = ['cat_ru']
    prepopulated_fields = {'cat_en': ('cat_ru',)}

    # actions = ['delete_selected']
    #
    # def get_actions(self, request):
    #     actions = super().get_actions(request)
    #     if 'delete_selected' in actions:
    #         del actions['delete_selected']
    #     return actions

    def delete_model(self, request, obj):
        if News.objects.filter(category_en=obj.cat_en).exists():
            error(request, f"Нельзя удалить категорию {obj.cat_ru}, так как в ней есть новости")
        else:
            super().delete_model(request, obj)

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            if News.objects.filter(category_en=obj.cat_en).exists():
                error(request, f"Нельзя удалить категорию {obj.cat_ru}, так как в ней есть новости")
            else:
                super().delete_model(request, obj)

