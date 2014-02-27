---
author: tlchristian
title: Thu-Mai's Simple Blog Mod
layout: post
date: 2014-02-27
---

This week was quite an adventure in code deciphering.  It was very helpful to walk through the `simple.py` file to understand how everything works together to render the website.  Even more helpful was using branches to experiment with hacks.  This is good for me since I like to break stuff.

To add an About page to my Simple blog, I made modifications to `simple.py` and `layout.html`, and created an `about.html` template.  Borrowing from other lines of code and doing a bit of trial-and-error, the About page finally worked!  When it came to pushing up these changes to heroku master, I ran into some problems.  Apparently, I somehow generated several database URIs, which wasn't good and caused some conflicts.  After I determined which of the several databases was the active one, I deleted the others.  Finally, the pull worked and so did the push.  Mission accomplished!

![Simple About Page](https://lh4.googleusercontent.com/-XWJl-_MOwzs/Uw-IOPGEEOI/AAAAAAAABB4/lO9esRc8VU4/w912-h429-no/Simple_about.png)


Here are the hacks that made it all happen:

**simple.py**

Added an `@app.route` for the About page, which includes authentication requirement.

```
@app.route("/about")
@requires_authentication
def view_about():
      return render_template("about.html", now=datetime.datetime.now(), is_admin=is_admin(), preview=False)		
```


**layout.html**

Added html code for an About menu link.

```
 <li><p><a href="{{ url_for('view_about') }}">About</a></p></li>
```


**about.html**

Created a new template for the About page.

```
{ % extends "layout.html" % }

{ % block title % }<title>{{ config.BLOG_TITLE }}</title>{ % endblock % }

{ % block content % }
	<h1>About</h1>
	<p>Eventually, I will tell you all about this blog.</p>
  <br/>
  <a class="btn btn-inverse" href="{{ url_for('index', page=pid) }}">Back to Blog</a>
  <br/>
{ % endblock % }
```
 
 
***