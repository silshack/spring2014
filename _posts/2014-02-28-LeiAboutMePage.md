---
layout: post
author: lei
title: Lei's About Me Page in SimpleHack
date: 2014-02-28
---

I have added an about page on my simple blog at the link: http://silshack-leiw414.herokuapp.com/about
I think the Simple looks like a MVC design pattern. The simply.py is the controller, the templates folder likes the "View" folder. I do not know where is the Model folder. I am not sure if I am right?
Firstly, I added a link on my index page by changing the layout.html file as following. 

{% raw %}
```
 <li><p><a href="{{ url_for('about') }}">About</a></p></li>
```

Then, I created a 
```
{% extends "layout.html" %}

{% block title %}<title>{{ config.BLOG_TITLE }}</title>{% endblock %}

{% block content %}
	<h1>About Me</h1>
	<p>I am a second year MSIS student</p>
	<p><a href="{{ url_for('index') }}">Return to the index</a></p>
{% endblock %}

```

At last, I added a new route to my "about me" page in simple.py.

```
@app.route("/about")
def about():
    return render_template("about.html", now=datetime.datetime.now())
```

