---
layout: post
author: lei
title: Lei's About Me Page in SimpleHack
date: 2014-02-28
---

I have added an "about" page on my simple blog at the link: http://silshack-leiw414.herokuapp.com/about
I guess Simple is a MVC design pattern. The simply.py file fuctions as the controller and the templates folder plays the role of "View" folder. There should be a model folder, however I have not figured out where it is loacated.

Firstly, I added a link on my index page by changing the layout.html file as following. 

{% raw %}

```
 <li><p><a href="{{ url_for('about') }}">About Me</a></p></li>
```

Then, I created a about.html page under the templates directory, and then added some content to it.

```
{% extends "layout.html" %}

{% block title %}<title>{{ config.BLOG_TITLE }}</title>{% endblock %}

{% block content %}
	<h1>About Me</h1>
	<p>I am a second year MSIS student</p>
	<p><a href="{{ url_for('index') }}">Return to the index</a></p>
{% endblock %}
```

At last, I added a new Route Decorator to my "about" page in simple.py. The following code tells python to trigger this function when it receives a request for a certain URL(/about). 

```
@app.route("/about")
def about():
    return render_template("about.html", now=datetime.datetime.now())
```

