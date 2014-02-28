---
layout: post
author: chunxi
title: Chunxi's Simplehack 2
date: 2014-02-27
---

Post by Chunxi Zhang

I have added an about page on my simple blog at the link: http://silshack-lanblue.herokuapp.com/about
You can find the about button at the left side of the page.
At the very begining, I feel it is very hard to do that. There are so many fiels under the simplehack. And I did not where
to begin with. It took me some time to figure out what I cound deal with it. Then after I set all things down, I found out
my index.xml was mistakenly deleted. So I reset it and have to do it again. Except this mistake, everything works well.

The first thing I did is create a new template called "about". I copied the code from 404.html. Because what I expect is
very simple. Just a title and some words.

{% raw %}
```
{% extends "layout.html" %}

{% block title %}<title>{{ config.BLOG_TITLE }}</title>{% endblock %}

{% block content %}
	<h1>About Me</h1>
	<p>Chunxi Zhang is a first year IS student. She comes from China.</p>
	<p><a href="{{ url_for('index') }}">Return to the index</a></p>
{% endblock %}
```

The second thing I did is create a new function in simple.py

```
@app.route("/about")
def about():
    return render_template('about.html', now=datetime.datetime.now())
```

Then, it is about layout.html. I need to add a button at the left side of the page. I think the about page should not 
need the permission of admin. And it also do not need ask the user for username. So it is fairly simple, just one word.

```
<li><p><a href="{{ url_for('about') }}">About</a></p></li>
```