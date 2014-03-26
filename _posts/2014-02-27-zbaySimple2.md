---
layout: post
author: zbay
title: Zach's Second Simple Post - About
date: 2014-02-27
---

I added my About page to my Simple site. [Here's the link](http://silshack-zbay.herokuapp.com/) to my blog.

Here's about.html, where I defined the template used for the page and wrote its content. I deleted the curly brackets out of the code block in this post,
since they gave me liquid tag errors that made it impossible to generate the page. The code is as follows:


```
% extends "layout.html" %
% block title %<title> config.BLOG_TITLE </title>% endblock %
% block content %
	<h1>About Zbay</h1>
	<p>My name is Zachary Williams and I am a sophomore at UNC Chapel Hill. I am double majoring in Information Science and Political Science and could decide to minor in Computer Science. I hail from Burke, Virginia.</p>
	<p><a href="{{ url_for('index') }}">Return home.</a></p>
  % endblock %
```

Aaand here's the function I added to simple.py file to render my new About page.

```
@app.route("/about.html")
def about():
    return render_template("about.html", now=datetime.datetime.now(), is_admin=is_admin(), preview=False)
```

Finally, here's the line I added to layout.html's unnumbered list to add the About tab and hyperlink to the sidebar.

```
  <li><p><a href="http://silshack-zbay.herokuapp.com/about.html">About</a></p></li>
```