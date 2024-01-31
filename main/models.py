from django.db import models
import pytz
from datetime import datetime, timedelta
from tinymce import models as tinymce_models
from django.core.exceptions import ValidationError
from django.contrib import messages



class Categories(models.Model):
    cat_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    cat_ru = models.CharField('Категория', max_length=30)
    cat_en = models.CharField('Транслитерация', max_length=30)
    active = models.BooleanField(default=True, verbose_name='Активно')
    car_active = models.BooleanField(default=False, verbose_name='Карусель')
    sub_active = models.BooleanField(default=False, verbose_name='Верхнее меню')

    class Meta:
        managed = False
        db_table = 'categories'
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.cat_ru

    def clean(self):
        if Categories.objects.filter(cat_ru=self.cat_ru).exists() or Categories.objects.filter(cat_en=self.cat_en).exists():
            raise ValidationError("Такая категория уже существует")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)



class News(models.Model):
    post_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    title = models.CharField('Название', max_length=255)
    url = models.CharField('Ссылка', max_length=255)
    pubdate = models.DateTimeField('Дата публикации', auto_now_add=False)
    creator = models.CharField('Автор', max_length=30, default='Admin')
    description = models.TextField('Описание')
    # ptext = models.TextField('Текст')
    ptext = tinymce_models.HTMLField('Текст')
    category = models.CharField('Категория', max_length=30, choices=[(x.cat_ru, x.cat_ru) for x in Categories.objects.all().order_by('cat_ru')], default='Без рубрики')
    category_en = models.CharField('Транслитерация', max_length=30)
    pictures = models.ImageField(upload_to='images/',  verbose_name='Картинка')
    active = models.BooleanField(default=True, verbose_name='Активно')
    car_active = models.BooleanField(default=False, verbose_name='Карусель')
    post_views = models.IntegerField('Просмотры', default=0)

    class Meta:
        managed = False
        db_table = 'news'
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self):
        return self.title

    # def clean(self):
    #     if News.objects.filter(title=self.title).exists():
    #         raise ValidationError("Такая новость уже существует")

    def save(self, *args, **kwargs):
        if not self.pubdate:
            self.pubdate = datetime.utcnow().replace(tzinfo=pytz.utc)+timedelta(hours=3)
        if not self.category_en:
            self.category_en = 'bez-rubriki'
        # self.full_clean()
        super().save(*args, **kwargs)

        while len(News.objects.filter(active=1, car_active=1)) > 80:
            last_car_active = News.objects.filter(active=1, car_active=1).order_by('post_id')[0]
            last_car_active.car_active = 0
            last_car_active.save()
            print('Post '+str(last_car_active.post_id)+' removed from carousel')






