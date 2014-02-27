---
layout: post
author: laura
title: Laura made the About Page
date: 2014-02-27
---

## Making the About Page

To make the About Page, first I made the function:

```
@app.route('/about')
def.about():
	return render_template("about.html", now=datetime.datetime.now())

```

Second, I made the page itself by right-clicking on the templates and creating a new file called "about.html".

Third, I copied the contents of the "404.html" and pasted it all in the new "about.html". I then modified the contents and added in some html tags.

```
<!DOCTYPE html>
<html lang="en">
    <head>
{% extends "layout.html" %}
{% block title %}<title>{{ config.BLOG_TITLE }}</title>{% endblock %}
  </head>
{% block content %}
	<h1>About Me</h1>
	<p>Hello,...</p>
	<p><a href="{{ url_for('index') }}">Return to the homepage</a></p>
{% endblock %}
</html>	

```

Fourth, I added a link into "layout.html":

```
<li><p><a href="{{ url_for('about') }}">About Me</a></p></li>

```


Here is the link to my page:
http://silshack-githublasher09.herokuapp.com/about