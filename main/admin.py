from django.contrib import admin
from .models import News, Categories, TextImages
from .forms import NewsForm, CategoriesForm, TextImageForm
from django.contrib.messages import error
from django.utils.html import format_html
from django.db.models import QuerySet


class ImageInline(admin.TabularInline):
    form = TextImageForm
    model = TextImages
    extra = 1


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    form = NewsForm
    list_display = ['title', 'post_id', 'active', 'car_active', 'post_views', 'pubdate', 'creator', 'category',
                    'image_preview']
    list_editable = ['category', 'active', 'car_active', 'post_views']
    ordering = ['-post_id']
    list_per_page = 20
    search_fields = ['title']
    exclude = ['pubdate']
    prepopulated_fields = {'url': ("title",), 'category_en': ("category",)}
    inlines = [ImageInline]
    actions = ['set_active', 'unset_active', 'set_car_active', 'unset_car_active', 'reset_views']

    def image_preview(self, obj):
        if obj.pictures:
            return format_html(f'<img src="{obj.pictures.url}" style="max-width: 100px; max-height: 100px;">')
        else:
            return 'No image'

    image_preview.short_description = 'Обложка'

    @admin.action(description='Показывать Новости')
    def set_active(self, request, qs: QuerySet):
        count_updated = qs.update(active=1)
        self.message_user(request, f'Выбранные {count_updated} записей будут видны на сайте')

    @admin.action(description='Скрыть Новости')
    def unset_active(self, request, qs: QuerySet):
        count_updated = qs.update(active=0)
        self.message_user(request, f'Выбранные {count_updated} записей будут скрыты')

    @admin.action(description='Добавить в карусель Новости')
    def set_car_active(self, request, qs: QuerySet):
        count_updated = qs.update(car_active=1)
        self.message_user(request, f'В карусель добавлено {count_updated} записей')

    @admin.action(description='Убрать из карусели Новости')
    def unset_car_active(self, request, qs: QuerySet):
        count_updated = qs.update(car_active=0)
        self.message_user(request, f'Из карусели убрано {count_updated} записей')

    @admin.action(description='Сбросить просмотры Новостей')
    def reset_views(self, request, qs: QuerySet):
        count_updated = qs.update(post_views=0)
        self.message_user(request, f'Просмотры сброшены у {count_updated} записей')


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

