---
author: jskaa
layout: post
title: Jessica's Attempt at Doing More
date: 2014-02-28
---

My Simple page can be viewed [here](http://silshack-jskaa.herokuapp.com/"Jessica's Simple Page")

I had a bit of trouble with this exercise first, as I was unfamiliar with a lot of the syntax that was being used in
both the templates as well as simple.py. I could tell what bits and pieces of the code did, but some of the language
was unfamiliar, so I didn't know what function it had and if it was necessary or situational. I actually did the exact
same thing Oak did, where I wasn't very sure of what I was doing, so I made small little changes where I could check 
and see if the code I wrote did what I expected it to do. 

The first thing I did was create a branch to work on so I could scratch it all if I broke something important. I then created
an about button. I didn't need it to actually lead me anywhere yet, but I just needed something which would work as a link to 
the about page at some point in the future. I did this by going into layout.html and finding the section which created 
the navigation bar on the side. Good thing I can still use HTML! I added in a new list item in order to act as the about 
button, and while I did not know where the anchor should lead to,I followed the form of the other list items such as the
ones for Twitter, Github, etc. I didnt know what language it was in, but hey, if you don't know how, imitate 
(Thank you Grant, for the go-ahead). 

```
<li><p><a href=" {{ url_for('about') }}">About</a></p></li>
```

With that, I could preview my blog and see an about button. When I clicked on it, it led me nowhere though. Not surprising,
as I knew that the ```about``` path didn't exist anywhere yet. On to the next bit!

Well I still needed an about page, right? This part was much easier, as I just copied the syntax of the 404 page, changing
the parts that I needed to. Once again, I am not familiar with the language, but I sort of knew what it was doing. My code for my about.html page was taken directly from the 404 page, with just the text changed to show that it was an 
about page.

With my about page created and a link in existence, I just needed to somehow connect the two. This is where all the 
not-so-subtle pointing at simple.py came into play. 
I saw that in simple.py, there were several ```@app.route("####")``` items which corresponded to various other pages, 
such as 404, 500, and post ids. Once again, if you don't know how, imitate! I took the basic format of one of the simpler
pages, and changed it to something along the lines of

```
@app.route("/about")
def about():
  return AHHHHHHHH
```

So when I went back into preview mode and clicked on my about link, a basic whie page popped up with the text AHHHHHHHH
in the upper corner. Cool! This was where I needed to specify exaclty what the route ```/about``` should lead to.
Keeping in mind the name I had used in the first step of this exercise, my code ended up being

```
@app.route("/about")
def about():
  return render_template('about.html', now=datetime.datetime.now(), is_admin=is_admin())
```

Now when I went to preview my blog, the about button linked me to my basic about.html page.

Isn't it nice when things work out?

