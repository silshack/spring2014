---
layout: post
author: blucka12
title: About Me and Heroku...the Saga...
---

So, I've been having fun and am having a number of "Ah-ha" moments with playing around with code. I also jumped onto the soundtrack.io page, which was an adjustment(that included me adding a massive amount of music to a public playlist, and likely getting hated on by other users), but it was quite informative and cool as well to hear from other programmers in that space...I suggest folks hang there from time to time. I've met some nice folks, and I'm gonna check out their repository once I figure out how to get to it...
~~I'm having some issues yet getting the heroku site to show the massive changes I'm working on, but I think I'll have it sorted soon!~~ So, I ultimately want to have [my simple blog page](http://silshack-antihero.herokuapp.com/) mimic the Coursehack Class site, cause that would at the very least be droll, and then mimic [my own site](http://www.steadyflowblog.com) or at least get started on it for my final project. Ambitious, yes, but pretty much why I wanted to learn all of this, so I'll see it through...

And now, to how I got here: I started off by grabbing the `@app.route("/") def index():` from line 139 of "simple.py", then tooled around with the "404.html" code which read: 

```

{% raw %}{% extends "layout.html" %}
{% block title %}<title>{{ config.BLOG_TITLE }}</title>{% endblock %}

{% block content %}
	<h1>Page Not Found</h1>
	<p>What you were looking for is just not there.</p>
	<p><a href="{{ url_for('index') }}">Return to the index</a></p>
{% endblock %}
```

and the created my own file named "about_us.html" that read: 

```
{% raw %}{% extends "layout.html" %}
{% block title %}<title>{{ config.BLOG_TITLE }}</title>{% endblock %}

{% block content %}
	<h1>About Us</h1>
	<p>Here's where you look to confirm what you already wanted to think.</p>
	<p><a href="{{ url_for('index') }}">Return to the index</a></p>
{% endblock %}
```

then I inserted "/about" into the @approute code, reading: 

{% raw %}
```
@app.route("/about")
def about():
  return render_template('about_us.html', now=datetime.datetime.now(), is_admin=is_admin())
```


In the above code in class, I had the return to be "Hello World", and I just shifted a few things in the "404.html" file to suit my purposes...Yay!


~~Here's my site: http://silshack-antihero.herokuapp.com/~~ #no longer needed, cos I learnt the hyperlinx
~~It will be different soon!~~ #It is now, in the present, different...