# Generated by Django 4.1.7 on 2023-09-08 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('cat_id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cat_ru', models.CharField(max_length=30, verbose_name='Категория')),
                ('cat_en', models.CharField(max_length=30, verbose_name='Транслитерация')),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
                'db_table': 'categories',
                'managed': False,
            },
        ),
    ]
