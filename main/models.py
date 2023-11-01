from django.db import models
import pytz
from datetime import datetime, timedelta


class Categories(models.Model):
    cat_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    cat_ru = models.CharField('Категория', max_length=30)
    cat_en = models.CharField('Транслитерация', max_length=30)
    active = models.BooleanField(default=True, verbose_name='Активно')
    car_active = models.BooleanField(default=False, verbose_name='Карусель')
    sub_active = models.BooleanField(default=False, verbose_name='Боковое меню')

    class Meta:
        managed = False
        db_table = 'categories'
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.cat_ru


class News(models.Model):
    post_id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    title = models.CharField('Название', max_length=100)
    url = models.CharField('Ссылка', max_length=255)
    pubdate = models.DateTimeField('Дата публикации', auto_now_add=False)
    creator = models.CharField('Автор', max_length=30, default='Admin')
    description = models.TextField('Описание')
    ptext = models.TextField('Текст')
    category = models.CharField('Категория', max_length=30, choices=[(x.cat_ru, x.cat_ru) for x in Categories.objects.all().order_by('cat_ru')], default='Без рубрики')
    category_en = models.CharField('Транслитерация', max_length=30)
    pictures = models.ImageField(upload_to='images/',  verbose_name='Картинка')
    active = models.BooleanField(default=True, verbose_name='Активно')
    car_active = models.BooleanField(default=False, verbose_name='Карусель')
    post_views = models.IntegerField('Просмотры')

    class Meta:
        managed = False
        db_table = 'news'
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.pubdate:
            self.pubdate = datetime.utcnow().replace(tzinfo=pytz.utc)+timedelta(hours=3)
        if not self.category_en:
            self.category_en = 'bez-rubriki'
        super().save(*args, **kwargs)



