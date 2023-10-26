from django import forms
from .models import News


class ImageForm(forms.ModelForm):
    class Meta:
        model = News.pictures
        fields = ['Картинка']

