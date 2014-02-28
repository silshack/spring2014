---
title: Libby's About page in Flask
author: libbby
layout: post
---

Here is the link to my heroku index page: http://silshack-libbby.herokuapp.com.
Here is my about.html page on heroku: http://silshack-libbby.herokuapp.com/about.

I added the following code to simple.py:

```
@app.route('/about')
def about():
  return render_template('about.html',
    now=datetime.datetime.now())
```

And created an about.html template with the following:

```
{% extends "layout.html" %}

{% block title %}<title>{{ config.BLOG_TITLE }}</title>{% endblock %}

{% block content %}

	<h1>About</h1>
	<p>This is my shiny about page.</p>
  <p>I am a BSIS student at UNC, with a second major in Geography.</p>

{% endblock %}
```

This took a while, but everything looks to be working now. 
I feel like I know just enough about Nitrous to be dangerous, but not enough about "real-world" Python programs.
Being let loose on the code without instruction was probably helpful in the end, but it was definitely nerve-wracking!
