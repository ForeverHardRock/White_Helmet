from django import forms
from .models import News, Categories, TextImages
from ckeditor.widgets import CKEditorWidget
from django.utils.html import format_html


class MultipleFileInput(forms.ClearableFileInput):
    allow_multiple_selected = True


class MultipleFileField(forms.FileField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault("widget", MultipleFileInput())
        super().__init__(*args, **kwargs)

    def clean(self, data, initial=None):
        single_file_clean = super().clean
        if isinstance(data, (list, tuple)):
            result = [single_file_clean(d, initial) for d in data]
        else:
            result = single_file_clean(data, initial)
        return result

    # def clean(self, data, initial=None):
    #     single_file_clean = super().clean
    #     if isinstance(data, (list, tuple)):
    #         file_names = []
    #         result = []
    #         for d in data:
    #             print(data)
    #             print(d)
    #             cleaned_data = single_file_clean(d, initial)
    #             print(cleaned_data)
    #             result.append(cleaned_data)
    #             file_names.append(file_name)
    #     else:
    #         result, file_names = single_file_clean(data, initial)
    #     print(result)
    #     return result, file_names


class NewsForm(forms.ModelForm):
    class Meta:
        model = News
        fields = ['title', 'creator',  'pictures', 'category', 'description', 'active', 'car_active', 'post_views']
        labels = {
            'title': 'Название',
            # 'url': 'Ссылка',
            'creator': 'Автор',
            'category': 'Категория',
            # 'category_en': 'Транслитерация',
            'description': 'Описание',
            'pictures': 'Обложка',
            'active': 'Активно',
            'car_active': 'Карусель',
            'post_views': 'Просмотры',
        }
        widgets = {
            # 'category_en': forms.TextInput(attrs={'readonly': 'readonly', }),
            # 'url': forms.TextInput(attrs={'readonly': 'readonly', }),
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


class TextImageForm(forms.ModelForm):
    images = MultipleFileField()
    text = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = TextImages
        fields = ['text', 'images']

