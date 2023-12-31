# Generated by Django 4.1.7 on 2023-09-05 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('post_id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(verbose_name='Название')),
                ('pubdate', models.DateTimeField(verbose_name='Дата публикации')),
                ('creator', models.CharField(default='Admin', max_length=30, verbose_name='Автор')),
                ('description', models.TextField(verbose_name='Описание')),
                ('ptext', models.TextField(verbose_name='Текст')),
                ('category', models.CharField(choices=[('Аналитика', 'Аналитика'), ('Архитектура', 'Архитектура'), ('Балкон', 'Балкон'), ('Без рубрики', 'Без рубрики'), ('Бизнес', 'Бизнес'), ('Ванная', 'Ванная'), ('Ванная и туалет', 'Ванная и туалет'), ('Веранда', 'Веранда'), ('Видеоконференции', 'Видеоконференции'), ('Водоснабжение', 'Водоснабжение'), ('Вяжущие материалы', 'Вяжущие материалы'), ('Гараж', 'Гараж'), ('Гидроизоляция', 'Гидроизоляция'), ('Гостинная', 'Гостинная'), ('Двери', 'Двери'), ('Дерево', 'Дерево'), ('ЖБИ', 'ЖБИ'), ('Застройщик', 'Застройщик'), ('Изделия из металла', 'Изделия из металла'), ('Изоляционные материалы', 'Изоляционные материалы'), ('Интерьер', 'Интерьер'), ('Квартира', 'Квартира'), ('Криптовалюта', 'Криптовалюта'), ('Кровля', 'Кровля'), ('Кухня', 'Кухня'), ('Ландшафтный дизайн', 'Ландшафтный дизайн'), ('Мебель', 'Мебель'), ('Недвижимость', 'Недвижимость'), ('Недвижимость Москвы', 'Недвижимость Москвы'), ('Недвижимость Санкт-Петербурга', 'Недвижимость Санкт-Петербурга'), ('Несущие конструкции', 'Несущие конструкции'), ('Новости', 'Новости'), ('Новости России', 'Новости России'), ('Новости недвижимости', 'Новости недвижимости'), ('Обои', 'Обои'), ('Оборудование', 'Оборудование'), ('Окна', 'Окна'), ('Отделка', 'Отделка'), ('Отдых', 'Отдых'), ('Покраска', 'Покраска'), ('Полезные советы', 'Полезные советы'), ('Полы', 'Полы'), ('Потолок', 'Потолок'), ('Прихожая', 'Прихожая'), ('Разное', 'Разное'), ('Сайдинг', 'Сайдинг'), ('Стены', 'Стены'), ('Стройматериалы', 'Стройматериалы'), ('Стройтехника', 'Стройтехника'), ('Тепло', 'Тепло'), ('Товары', 'Товары'), ('Услуги', 'Услуги'), ('Финансы', 'Финансы'), ('Штукатурка', 'Штукатурка'), ('Электричество', 'Электричество')], default='Без рубрики', max_length=30, verbose_name='Категория')),
                ('pictures', models.ImageField(upload_to='images/', verbose_name='Картинка')),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
                'db_table': 'news',
                'managed': False,
            },
        ),
    ]
