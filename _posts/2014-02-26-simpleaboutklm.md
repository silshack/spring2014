---
layout: post
author: katielmeyer
title: Simple blog About page
date: 2014-02-26
---


I've added an About page with a link in the left sidebar: http://silshack-katielmeyer.herokuapp.com/about

That just required creating a new decorator pointing to /about & a new about() function in simple.py:

```

@app.route("/about")
def about():
    """ About page """
    return render_template("about.html", 
                           now=datetime.datetime.now(),
                           is_admin=is_admin())
                          
```

Then creating a new template called about.html:

```

{{ "{% extends "layout.html"  " }}%}

{{ "{% block title " }}%}<title>{{ "{{config.BLOG_TITLE " }}}}</title>{{ "{% endblock " }}%}

{{ "{% block content " }}%}
<h2>About me</h2>
<p>Reprehenderit yr wayfarers bicycle rights sunt, leggings asymmetrical Truffaut et bespoke do. 
  Disrupt Austin wolf put a bird on it deserunt salvia. Keytar selvage direct trade semiotics gastropub, 
  bespoke Shoreditch forage synth. Chillwave do biodiesel gentrify eiusmod, YOLO typewriter Pitchfork. 
  Et quinoa Schlitz, adipisicing enim single-origin coffee hoodie next level iPhone. +1 kale chips 
  gastropub farm-to-table 90s, drinking vinegar deserunt pickled readymade banh mi mlkshk vero. 
  Bespoke semiotics consequat Helvetica asymmetrical bicycle rights.</p>
<p>PBR you probably havent heard of them vero cornhole selvage XOXO. Organic swag esse tattooed officia. 
  Stumptown qui aliqua, put a bird on it incididunt McSweeney chillwave nisi nihil pour-over trust fund fixie. 
  Cliche Thundercats authentic keytar chambray kale chips. Hoodie XOXO incididunt. 
  Gentrify flexitarian pop-up, banjo Blue Bottle dreamcatcher sapiente Pinterest typewriter retro. 
  McSweeney Helvetica tousled, bicycle rights commodo gastropub umami hella locavore VHS.</p>
{{ "{% endblock " }}%}

```

And finally, adding a link to the page in the left sidebar in layout.html:

```

<ul>
   <li><p><a href="about">About me</a></p></li>
   
```
