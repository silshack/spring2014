---
layout: post
author: sunhwap
title: sunhwa's About Me Page on Heroku
date: 2014-02-28
---

I added an About me page to Heroku simple blog at the link: http://silshack-sunhwa.herokuapp.com/about.html
In order to create the new about template, I first copied codes from 404.html and inserted About in the
heading and added one sentence as shown below.

``` 
  % extends "layout.html" %

% block title %<title> config.BLOG_TITLE /title>% endblock %

% block content %
	<h1>About</h1>
	<p>This is the about me page! I am Sunhwa!</p>
	<p><a href=" url_for('index') ">Return to the index</a></p>
% endblock %

```

Then, I copied one of the functions in simple.py and simply modified it to create a new function called 
About_me for the new template to be rendered correctly.

```
@app.route("/about.html")
def about_me():
    return render_template("about.html", now=datetime.datetime.now())
```

Lastly, I added about.html in the layout.html in order for it to be displayed as one of the side bar link.
   
```
    <li><p><a href="about.html">About Me</a></p></li>
                            % if config.GITHUB_USERNAME %
                                <li><p><a href="https://github.com/ config.GITHUB_USERNAME /">Github</a></p></li>

```
