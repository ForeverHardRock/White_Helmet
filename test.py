import sqlite3
import re
from transliterate import translit
import random

# con = sqlite3.connect('wp_posts.sqlite3')
# cur = con.cursor()
#
# cur.execute("SELECT * FROM news;")
# a = cur.fetchall()
# s4 = 0
#
# for post in a:
#     bb = []
#     s4 += 1
#     link1 = str(post[1])
#     try:
#         link1 = translit(link1, reversed=True)
#     except:
#         pass
#     link1 = re.sub(r"[^a-zA-Z ]", "", link1).split(' ')
#     link = []
#     for word in link1:
#         if word == '':
#             continue
#         else:
#             link.append(word)
#     link = '-'.join(link)
#     cur.execute("SELECT url FROM news;")
#     b = cur.fetchall()
#     for i in range(len(b)):
#         bb.append(b[i][0])
#
#     while link in bb:
#         link = link+str(random.randint(0, 9))
#     cur.execute("UPDATE news SET url ='{}' WHERE post_id = '{}'".format(link, s4))
#     con.commit()
# cur.close()
# con.close()


con = sqlite3.connect('wp_posts.sqlite3')
cur = con.cursor()

cur.execute("SELECT category FROM news;")
a = cur.fetchall()
cur.execute("SELECT cat_ru, cat_en FROM categories;")
b = cur.fetchall()
c = {}
for catt in b:
    c[f'{catt[0]}'] = catt[1]


keys = list(c.keys())

for i in keys:
    cat = i
    cat_en = c[cat]
    print(cat_en, cat)
    cur.execute("UPDATE news SET category_en = '{}' WHERE category = '{}';".format(cat_en, cat))
    con.commit()
cur.close()
con.close()
