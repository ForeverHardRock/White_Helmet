from django.shortcuts import render, get_object_or_404
from .models import News, Categories
from django.core.paginator import Paginator
from django.db.models import Q
import random
import json
from django.core import serializers
from django.template.loader import get_template
from django.http import HttpResponse


def home(request):
    latest_news = News.objects.filter(active=1).order_by('-post_id')[:12]
    car_news = News.objects.filter(active=1, car_active=1).order_by('-post_id')
    car_news_list = []
    car_news_list_ad = []
    for i in range(len(car_news)):
        car_news_list_ad.append(car_news[i])
        if (i+1) % 8 == 0:
            random.shuffle(car_news_list_ad)
            car_news_list.append(car_news_list_ad)
            car_news_list_ad = []
    if car_news_list_ad:
        car_news_list.append(car_news_list_ad)
    car_cat = Categories.objects.filter(active=1, car_active=1).order_by('cat_ru')
    sub_cat = Categories.objects.filter(active=1, sub_active=1).order_by('cat_ru')



    # cat_news_list = []
    # # cat_news_list = {}
    # for i in range(3):
    #     # cat_news_list['cat_news_list_'+str(i+1)] = (News.objects.filter(active=1).order_by('-post_id')[i * 12:(i + 1) * 12])
    #     cat_news_list.append(News.objects.filter(active=1).order_by('-post_id')[i * 12:(i + 1) * 12])

    # cat_news_in_page = 12
    # cat_pages = 3
    # news_by_cat = {}
    # cat_news_list = []
    # for cat in car_cat:
    #     for i in range(cat_pages):
    #         cat_news_list.append(News.objects.filter(active=1, category=cat).order_by('-post_id')[i*cat_news_in_page:(i+1)*cat_news_in_page])
    #     news_by_cat[cat] = cat_news_list
    #

    # three_posts = []
    # while len(three_posts) != 3:
    #     one_of_three_cat = random.sample([x.cat_ru for x in Categories.objects.all()], 1)[0]
    #     try:
    #         one_post = News.objects.filter(active=1, category=one_of_three_cat).order_by('-post_id')[:1][0]
    #     except:
    #         one_post = None
    #     if one_post in news or one_post in three_posts or one_post is None:
    #         continue
    #     else:
    #         three_posts.append(one_post)

    home_data = {
        'latest_news': latest_news,
        'car_news_list': car_news_list,
        'car_news': car_news,
        'car_cat': car_cat,
        'sub_cat': sub_cat,


        # 'cat_news_list': cat_news_list,

        # 'news_by_cat': news_by_cat,

        # 'three_posts': three_posts,


        'bottom': 'relative',
    }

    return render(request, 'main/home.html', context=home_data)


def load_content(request, button_id):
    cat_news_list = []
    # cat_news_dict = {}
    if button_id == 'last':
        for i in range(3):
            queryset = News.objects.filter(active=1).order_by('-post_id')[i *12:(i + 1) * 12]
            news_json = serializers.serialize('json', list(queryset))
            cat_news_list.append(news_json)
            # cat_news_dict[f'cat_news_list_{i+1}'] = (News.objects.filter(active=1).order_by('-post_id')[i * 12:(i + 1) * 12])

    else:
        for i in range(3):
            queryset = News.objects.filter(active=1).order_by('-post_id')[i * 12:(i + 1) * 12]
            news_json = serializers.serialize('json', list(queryset))
            cat_news_list.append(news_json)
            # cat_news_dict[f'cat_news_list_{i+1}'] = (News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[i * 12:(i + 1) * 12])

    # context = {'cat_news_list': cat_news_list}
    # template = get_template('main/template-cat-news.html')
    # response = HttpResponse(template.render(cat_news_dict))
    # return response
    # return render(request, 'main/template-cat-news.html', cat_news_dict)

    print(type(cat_news_list), type(cat_news_list[0]), type(cat_news_list[0][0]))

    # json.dump(cat_news_list)
    return HttpResponse(cat_news_list, content_type='application/json')

    # return render(request, 'main/template-cat-news.html', {'cat_news_list': cat_news_list})


def show_category(request, cat_slug: str):
    description = get_object_or_404(Categories, cat_en=cat_slug)
    news = News.objects.filter(category=description, active=1).order_by('-post_id')
    paginator = Paginator(news, 10)
    page_number = request.GET.get('page', 1)
    news = paginator.get_page(page_number)
    sub_cat = Categories.objects.filter(active=1, sub_active=1).order_by('cat_ru')

    three_posts = []
    while len(three_posts) != 3:
        one_of_three_cat = random.sample([x.cat_ru for x in Categories.objects.all()], 1)[0]
        try:
            one_post = News.objects.filter(active=1, category=one_of_three_cat).order_by('-post_id')[:1][0]
        except:
            one_post = None
        if one_post in news or one_post in three_posts or one_of_three_cat == description or one_post == None:
            continue
        else:
            three_posts.append(one_post)

    desc_data = {
        'description_category': description,
        'news': news,
        'three_posts': three_posts,
        'sub_cat': sub_cat,
        'bottom': 'relative'
    }
    return render(request, 'main/category.html', context=desc_data)


def show_post(request, post_slug: str, cat_slug: str):
    car_cat = Categories.objects.filter(active=1, car_active=1).order_by('cat_ru')
    post = get_object_or_404(News, url=post_slug)
    if post:
        description = get_object_or_404(Categories, cat_en=cat_slug)

        latest_news = News.objects.filter(active=1).order_by('-post_id')[:12]
        sub_cat = Categories.objects.filter(active=1, sub_active=1).order_by('cat_ru')

        news_for_column = News.objects.filter(active=1, category=description, post_id__lt=post.post_id).order_by('-post_id')[:20]

        three_posts = []
        three_posts_list = []
        while len(three_posts_list) < 3:
            one_of_three_cat = random.sample([x.cat_ru for x in Categories.objects.all()], 1)[0]
            try:
                one_post = News.objects.filter(active=1, category=one_of_three_cat, pictures__isnull=False).order_by('-post_id')[:1][0]
            except:
                continue
            if one_post in three_posts or one_of_three_cat == description or one_post.category == description:
                continue
            else:
                three_posts.append(one_post)
            if len(three_posts) == 3:
                three_posts_list.append(three_posts)
                three_posts = []
        post_data = {
            'post': post,
            'three_posts_list': three_posts_list,
            'sub_cat': sub_cat,
            'bottom': 'relative',
            'latest_news': latest_news,
            'news_for_column': news_for_column,
            'car_cat': car_cat,
        }
        return render(request, 'main/post.html', context=post_data)


def about(request):
    return render(request, 'main/about.html')


def search_results(request):
    search_query = request.GET.get('search', '')

    print('!!!!!', search_query)
    if search_query:
        posts = News.objects.filter(Q(title__iregex=search_query) | Q(ptext__iregex=search_query)).order_by(
            '-post_id')
        if len(posts) > 0:

            bottom = 'relative'
            paginator = Paginator(posts, 10)
            page_number = request.GET.get('page', 1)
            posts = paginator.get_page(page_number)
        else:
            bottom = 'fixed'
            posts = None
    else:
        bottom = 'fixed'
        posts = None
    sub_cat = Categories.objects.filter(active=1, sub_active=1).order_by('cat_ru')
    search_data = {
        'news': posts,
        'search_query': search_query,
        'bottom': bottom,
        'sub_cat': sub_cat,
    }

    return render(request, 'main/search_results.html', context=search_data)
