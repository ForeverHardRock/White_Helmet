from django import forms
from .models import News, Categories


# class ImageForm(forms.ModelForm):
#     class Meta:
#         model = News.pictures
#         fields = ['Картинка']



class NewsForm(forms.ModelForm):
    class Meta:
        model = News
        fields = ['title', 'url', 'creator', 'description', 'ptext', 'category', 'category_en', 'pictures', 'active', 'car_active', 'post_views']
        labels = {
            'title': 'Название',
            'url': 'Ссылка',
            'creator': 'Автор',
            'description': 'Описание',
            'ptext': 'Текст',
            'category': 'Категория',
            'category_en': 'Транслитерация',
            'pictures': 'Картинка',
            'active': 'Активно',
            'car_active': 'Карусель',
            'post_views': 'Просмотры',
        }
        widgets = {
            'category_en': forms.TextInput(attrs={'readonly': 'readonly', }),
            'url': forms.TextInput(attrs={'readonly': 'readonly', }),
        }


class CategoriesForm(forms.ModelForm):
    class Meta:
        model = Categories
        fields = ['cat_ru', 'cat_en', 'active', 'car_active', 'sub_active']
        labels = {
            'cat_ru': 'Категория на русском',
            'cat_en': 'Транслитерация',
            'active': 'Активно',
            'car_active': 'Карусель',
            'sub_active': 'Верхнее меню'
        }
        widgets = {
            'cat_en': forms.TextInput(attrs={'readonly': 'readonly', }),
        }
