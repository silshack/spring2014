---
layout: post
author: xuxiang
title: Xuxiang's doing more with simple
---

In this exercise, I created an "About" button on the left side of my blog's homepage. It is not a very simple homework for me.
Expecially it is my first time use the flask blog. 

The first step, I know where to edit my homepage's frame. The "layout.html" file contain all the frame of my homepage. So I decided to edit it first.
I found there is a smilar button: Github on the left side of my homepage, so I kept searching what code implements it. I found it!!
I imitated the code and wrote into the layout.html. it is:

```
   <li><p><a href="{{ url_for('about') }}">About</a></p></li>
```
After I pushed this line into my heroku master, the "About" button showed up!!

The second step, I need to connect it with a about page. But I don't have one! So I need to create a new html file named "about".
I just copied the 404.html code into the new file and edited some new content. my code is :

```


<title>{{ config.BLOG_TITLE }}</title>


	<h1>ABOUT ME</h1>
	<p>I am a first year MSIS student in UNC chapel hill, I enjoy technology. </p>
	<p><a href="{{ url_for('index') }}">Return to the index</a></p>

```
After that, it doesn't work!! I tried to figure out why. Suddenly, I remember I did edit the simply.py file. I think it is why it doesn't work.
So I read the simple.py and found I need to define a new function. I observed the other similar function and wrote my own one:

```
@app.route("/about.html")
def about():
    return render_template('about.html', now=datetime.datetime.now(), is_admin=is_admin())
```
After that, magic happend! it works, life is so good!
