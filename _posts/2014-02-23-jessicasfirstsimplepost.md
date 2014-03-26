---
layout: post
author: jskaa
title: Jessica's First Heroku Blog Post
date: 2014-02-23
---

Link to [my first heroku blog post](http://silshack-jskaa.herokuapp.com/ "Jessica's Heroku Blog")

I ran into some difficulties getting my blog set up through nitrous at first (as I think everyone did).  Whenever I tried
to go to my blog, I would get an error message. The fix that was posted later helped smooth out the process though, 
and I somehow managed to get my blog up and running. It was then that I ran into a problem- I couldn't log into my account 
to make a post! When I added /admin to my blog URL and tried logging in, I kept getting an error, even though I had left
my username and password as the default Admin and Password. Being more than slightly stubborn, rather than deleting 
everything and starting from scratch, I went back into nitrous to dig around and see what I did have access to. 

I found an interesting little ```is_admin()``` function in the simple.py file and realized that this was what verified 
who could log in as an administrator to the blog. Cool! I commented it out, and voila, instant access to my blog! Too bad
that also meant my blog was completely unprotected. I went ahead and made my first blog post though while I was already in
there. Safety could wait! Below was what I commented out in order to break in. 

```
def is_admin():
    auth = request.authorization
#    if not auth or not (auth.username == app.config["ADMIN_USERNAME"]
#                       and check_password_hash(app.config["ADMIN_PASSWORD"], auth.password)):
#        return False
    return True
```


Only after I created my first post did I then go back into simple.py to try and make it a little safer. I wanted to see
if I could just somehow manually reset my password, but I ran into some trouble here. The issue was that whatever the 
password was, it was stored as a hashed output in settings.py which was of no use at all to me. So I decided to 
do the only thing I knew (or hoped) would work, and change the function which was checking my authorization. Below is 
what I changed in simple.py to add in a bit of protection for my blog, but still let me log in. (The password I set is
censored, of course!)

```
def is_admin():
    auth = request.authorization
#    if not auth or not (auth.username == app.config["ADMIN_USERNAME"]
#                       and check_password_hash(app.config["ADMIN_PASSWORD"], auth.password)):
#        return False
    if not auth or not (auth.username == "jskaa" and auth.password == "*************"):
        return False
    return True
```

Good to know I can kind of apply the python I've learned so far! 

I also made some stylistic changes within the css file, as I was not sure what else I should change!


