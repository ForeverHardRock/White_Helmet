import datetime

from django.shortcuts import render, get_object_or_404
from .models import News, Categories
from django.core.paginator import Paginator
from django.db.models import Q
import random

def home(request):
    news_on_block = 3
    pages_of_news = 4
    latest_news = News.objects.filter(active=1).order_by('-post_id')[:news_on_block*pages_of_news]
    latest_news_group = []
    latest_news_groups = []
    for i in range(pages_of_news):
        i = i * news_on_block
        for ii in range(news_on_block):
            latest_news_group.append(latest_news[i+ii])
        latest_news_groups.append(latest_news_group)
        latest_news_group = []

    car_news = News.objects.filter(active=1, car_active=1).order_by('-post_id')
    car_news_list = []
    car_news_list_ad = []
    for i in range(len(car_news)):
        car_news_list_ad.append(car_news[i])
        if (i + 1) % 8 == 0:
            random.shuffle(car_news_list_ad)
            car_news_list.append(car_news_list_ad)
            car_news_list_ad = []
    if car_news_list_ad:
        car_news_list.append(car_news_list_ad)
    car_cat = Categories.objects.filter(active=1, car_active=1).order_by('cat_ru')
    car_cat_lists = []
    for cat in car_cat:
        cat_news_list_1 = News.objects.filter(active=1, category_en=cat.cat_en).order_by('-post_id')[:7]
        cat_news_list_2 = News.objects.filter(active=1, category_en=cat.cat_en).order_by('-post_id')[7:12]
        car_cat_lists.append([cat_news_list_1, cat_news_list_2])
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
        'latest_news_groups': latest_news_groups,
        'car_news_list': car_news_list,
        'car_news': car_news,
        'car_cat': car_cat,
        'car_cat_lists': car_cat_lists,
        'sub_cat': sub_cat,

        # 'cat_news_list': cat_news_list,

        # 'news_by_cat': news_by_cat,

        # 'three_posts': three_posts,

        'bottom': 'relative',
    }

    return render(request, 'main/home.html', context=home_data)


def load_categories(request, button_id):
    sub_pre_news = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[:3]
    return render(request, 'main/sub-preload.html',
                  {'sub_pre_news': sub_pre_news, 'view_category': button_id})

#
# def load_content_1(request, button_id):
#     if button_id == 'last':
#         cat_news_list_1 = News.objects.filter(active=1).order_by('-post_id')[:7]
#         cat_news_list_2 = News.objects.filter(active=1).order_by('-post_id')[7:12]
#     else:
#         cat_news_list_1 = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[:7]
#         cat_news_list_2 = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[7:12]
#     return render(request, 'main/template-cat-news.html',
#                   {'cat_news_list_1': cat_news_list_1, 'cat_news_list_2': cat_news_list_2})
#
#
# def load_content_2(request, button_id):
#     if button_id == 'last':
#         cat_news_list_1 = News.objects.filter(active=1).order_by('-post_id')[12:19]
#         cat_news_list_2 = News.objects.filter(active=1).order_by('-post_id')[19:24]
#     else:
#         cat_news_list_1 = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[12:19]
#         cat_news_list_2 = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[19:24]
#     return render(request, 'main/template-cat-news.html',
#                   {'cat_news_list_1': cat_news_list_1, 'cat_news_list_2': cat_news_list_2})
#
#
# def load_content_3(request, button_id):
#     if button_id == 'last':
#         cat_news_list_1 = News.objects.filter(active=1).order_by('-post_id')[24:31]
#         cat_news_list_2 = News.objects.filter(active=1).order_by('-post_id')[31:36]
#     else:
#         cat_news_list_1 = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[24:31]
#         cat_news_list_2 = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[31:36]
#     return render(request, 'main/template-cat-news.html',
#                   {'cat_news_list_1': cat_news_list_1, 'cat_news_list_2': cat_news_list_2})

# def load_content(request, button_id):
#     # cat_news_list = []
#     # cat_news_dict = {}
#     cat_news_list_1 = []
#     cat_news_list_2 = []
#     cat_news_list_3 = []
#     if button_id == 'last':
#         cat_news_list_1 = News.objects.filter(active=1).order_by('-post_id')[:12]
#         cat_news_list_2 = News.objects.filter(active=1).order_by('-post_id')[12:24]
#         cat_news_list_3 = News.objects.filter(active=1).order_by('-post_id')[24:36]
#
#         # for i in range(3):
#
#             # queryset = News.objects.filter(active=1).order_by('-post_id')[i *12:(i + 1) * 12]
#             # news_json = serializers.serialize('json', list(queryset))
#             # cat_news_list.append(news_json)
#             # cat_news_dict[f'cat_news_list_{i+1}'] = (News.objects.filter(active=1).order_by('-post_id')[i * 12:(i + 1) * 12])
#
#     else:
#         cat_news_list_1 = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[:12]
#         cat_news_list_2 = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[12:24]
#         cat_news_list_3 = News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[24:36]
#         # for i in range(3):
#             # queryset = News.objects.filter(active=1).order_by('-post_id')[i * 12:(i + 1) * 12]
#             # news_json = serializers.serialize('json', list(queryset))
#             # cat_news_list.append(news_json)
#             # cat_news_dict[f'cat_news_list_{i+1}'] = (News.objects.filter(active=1, category_en=button_id).order_by('-post_id')[i * 12:(i + 1) * 12])
#
#     # context = {'cat_news_list': cat_news_list}
#     # template = get_template('main/template-cat-news.html')
#     # response = HttpResponse(template.render(cat_news_dict))
#     # return response
#     # return render(request, 'main/template-cat-news.html', cat_news_dict)
#
#     # print(type(cat_news_list), type(cat_news_list[0]), type(cat_news_list[0][0]))
#
#     # json.dump(cat_news_list)
#     # return HttpResponse(cat_news_list, content_type='application/json')
#
#     return render(request, 'main/template-cat-news.html', {'cat_news_list_1': cat_news_list_1, 'cat_news_list_2': cat_news_list_2, 'cat_news_list_3': cat_news_list_3,})


def show_category(request, cat_slug: str):
    news_on_block = 3
    pages_of_news = 4
    latest_news = News.objects.filter(active=1).order_by('-post_id')[:news_on_block * pages_of_news]
    latest_news_group = []
    latest_news_groups = []
    for i in range(pages_of_news):
        i = i * news_on_block
        for ii in range(news_on_block):
            latest_news_group.append(latest_news[i + ii])
        latest_news_groups.append(latest_news_group)
        latest_news_group = []

    description = get_object_or_404(Categories, cat_en=cat_slug)
    sub_cat = Categories.objects.filter(active=1, sub_active=1).order_by('cat_ru')
    news_for_column = News.objects.filter(active=1, category=description).order_by('-post_views')[:20]

    result = News.objects.filter(category=description, active=1).order_by('-post_id')
    paginator = Paginator(result, 12)
    page_number = request.GET.get('page')
    news = paginator.get_page(page_number)

    three_posts_list = []
    while len(three_posts_list) < 12:
        one_of_three_cat = random.sample([x.cat_ru for x in Categories.objects.all()], 1)[0]
        try:
            one_post = \
                News.objects.filter(active=1, category=one_of_three_cat, pictures__isnull=False).order_by('-post_id')[
                :1][0]
        except:
            continue
        if one_post in three_posts_list or one_of_three_cat == description or one_post.category == description:
            continue
        else:
            three_posts_list.append(one_post)
    desc_data = {
        'description_category': description,
        'news': news,
        'news_for_column': news_for_column,
        'three_posts_list': three_posts_list,
        'sub_cat': sub_cat,
        'latest_news': latest_news,
        'latest_news_groups': latest_news_groups,
        'bottom': 'relative'
    }
    return render(request, 'main/category.html', context=desc_data)


def show_post(request, post_slug: str, cat_slug: str):
    news_on_block = 3
    pages_of_news = 4
    latest_news = News.objects.filter(active=1).order_by('-post_id')[:news_on_block * pages_of_news]
    latest_news_group = []
    latest_news_groups = []
    for i in range(pages_of_news):
        i = i * news_on_block
        for ii in range(news_on_block):
            latest_news_group.append(latest_news[i + ii])
        latest_news_groups.append(latest_news_group)
        latest_news_group = []

    car_cat = Categories.objects.filter(active=1, car_active=1).order_by('cat_ru')
    post = get_object_or_404(News, url=post_slug)
    if post:
        post.post_views += 1
        post.save()
        description = get_object_or_404(Categories, cat_en=cat_slug)

        latest_news = News.objects.filter(active=1).order_by('-post_id')[:12]
        sub_cat = Categories.objects.filter(active=1, sub_active=1).order_by('cat_ru')

        news_for_column = News.objects.filter(active=1, category=description, post_id__lt=post.post_id).order_by(
            '-post_id')[:20]

        three_posts_list = []
        while len(three_posts_list) < 12:
            one_of_three_cat = random.sample([x.cat_ru for x in Categories.objects.all()], 1)[0]
            try:
                one_post = \
                News.objects.filter(active=1, category=one_of_three_cat, pictures__isnull=False).order_by('-post_id')[
                :1][0]
            except:
                continue
            if one_post in three_posts_list or one_of_three_cat == description or one_post.category == description:
                continue
            else:
                three_posts_list.append(one_post)

        post_data = {
            'post': post,
            'three_posts_list': three_posts_list,
            'sub_cat': sub_cat,
            'latest_news': latest_news,
            'latest_news_groups': latest_news_groups,
            'news_for_column': news_for_column,
            'car_cat': car_cat,
        }
        return render(request, 'main/post.html', context=post_data)


def about(request):
    return render(request, 'main/about.html')


def search_results(request, filter_mode: str, filter_time: str):
    search_query = request.GET.get('search')
    search_set = 2
    if search_query:
        time_now = datetime.date.today()
        if filter_mode == "relevance":
            sort = "-post_views"
        else:
            sort = "-post_id"
        if filter_time == "today":
            time_set = time_now - datetime.timedelta(days=1)
            result = News.objects.filter(Q(title__iregex=search_query) | Q(ptext__iregex=search_query),
                                         pubdate__gte=time_set).order_by(sort)
        elif filter_time == "3days":
            time_set = time_now - datetime.timedelta(days=3)
            result = News.objects.filter(Q(title__iregex=search_query) | Q(ptext__iregex=search_query),
                                         pubdate__gte=time_set).order_by(sort)
        elif filter_time == "week":
            time_set = time_now - datetime.timedelta(days=7)
            result = News.objects.filter(Q(title__iregex=search_query) | Q(ptext__iregex=search_query),
                                         pubdate__gte=time_set).order_by(sort)
        else:
            result = News.objects.filter(Q(title__iregex=search_query) | Q(ptext__iregex=search_query)).order_by(sort)

        if len(result) > 0:
            if len(result) == 1:
                search_set = 0
            elif len(result) == 2:
                search_set = 1

            paginator = Paginator(result, 19)
            page_number = request.GET.get('page')
            posts = paginator.get_page(page_number)

        else:
            posts = None
    else:
        posts = None

    sub_cat = Categories.objects.filter(active=1, sub_active=1).order_by('cat_ru')
    news_on_block = 3
    pages_of_news = 4
    latest_news = News.objects.filter(active=1).order_by('-post_id')[:news_on_block * pages_of_news]
    latest_news_group = []
    latest_news_groups = []
    for i in range(pages_of_news):
        i = i * news_on_block
        for ii in range(news_on_block):
            latest_news_group.append(latest_news[i + ii])
        latest_news_groups.append(latest_news_group)
        latest_news_group = []

    # three_posts = []
    # three_posts_list = []
    # while len(three_posts_list) < 3:
    #     one_of_three_cat = random.sample([x.cat_ru for x in Categories.objects.all()], 1)[0]
    #     try:
    #         one_post = \
    #             News.objects.filter(active=1, category=one_of_three_cat, pictures__isnull=False).order_by('-post_id')[
    #             :1][0]
    #     except:
    #         continue
    #     if one_post in three_posts or one_of_three_cat == search_query or one_post.category == search_query:
    #         continue
    #     else:
    #         three_posts.append(one_post)
    #     if len(three_posts) == 4:
    #         three_posts_list.append(three_posts)
    #         three_posts = []

    three_posts_list = []
    while len(three_posts_list) < 12:
        one_of_three_cat = random.sample([x.cat_ru for x in Categories.objects.all()], 1)[0]
        try:
            one_post = \
                News.objects.filter(active=1, category=one_of_three_cat, pictures__isnull=False).order_by('-post_id')[
                :1][0]
        except:
            continue
        if one_post in three_posts_list or one_of_three_cat == search_query or one_post.category == search_query:
            continue
        else:
            three_posts_list.append(one_post)
    search_data = {
        'news': posts,
        'search_query': search_query,
        'sub_cat': sub_cat,
        'three_posts_list': three_posts_list,
        'latest_news': latest_news,
        'latest_news_groups': latest_news_groups,
        'filter_mode': filter_mode,
        'filter_time': filter_time,
        'search_set': search_set,
    }

    return render(request, 'main/search_results.html', context=search_data)
