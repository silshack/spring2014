--- 
layout: post
author: slaffer
title: Sophia's Simple About Page
---

This exercise was not nearly as frustrating as the last one because I now feel I have a better grasp using Nitrious
and a better understanding how the Heroku app and Flask blog is working. During class, I understood prior to Elliott giving us hints 
what files needed to be changed to make the About page, which was a good feeling. My only major issues surrounded getting
the syntax right for the function in ```simple.py``` and  a couple extra lines of code that I didn't need in ```layout.html``` but after a little help from Mandy and Thu-Mai, I got it working. Hooray!


##Code added to simplehack to make About page##

Added function to ```simple.py```:

```
@app.route("/about")
def view_about():
    return render_template("about.html", now=datetime.datetime.now(), is_admin=is_admin(), preview=False)
```

Changed the 404 page, renamed as ```about.html``` page, and added About content:

```
	<h1>About</h1>
	<p>This is some stuff about me. I am from Fayetteville Ar, got a BA in History and Classical Studies from University of Arkansas. I am currently a third year dual-degree graduate student pursuing a MSIS and MPA. I also love sci-fi movies!</p>
	<p><a href="{{ url_for('index') }}">Return to the index</a></p>

```

Added a link to the ```layout.html``` page:

```
<li><p><a href="{{ url_for('view_about') }}">About</a></h1>
```

Here is a link to my page: http://silshack-slaffer.herokuapp.com/about 


