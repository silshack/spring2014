---
layout: post
author: julie
title: Julie's Heroku Post
---

First, here is the link to my heroku page with my post: http://julieapp.herokuapp.com

Setting up simple was pretty difficult. The biggest problem was that I accidentally entered the wrong name of my app when I was setting it up. My app was originally named silshack-juliees39. And then for some reason I entered julieapp while I was setting it up. Then I couldn't figure out how to get it to undo, so I decided to just make a new app in heroku called julieapp. It seemed easier. And it worked! Other than that, it wasn't too bad, actually. 

Then I attemped to do "something cool" to Heroku. I looked through the simple.py folder to see if there was something I could tweak. Most of it seemed like it might really mess up the app if I changed it, but then I noticed one part, which the developer had labeled as the "wraper" for the authentication. THat seemed like something I could change, so I tried to change the message it gave you when you entered the wrong password, from "Could not authenticate you" to "YOU SHALL NOT PASS." So, the way it's supposed to work is that when you go to julieapp.herokuapp.com/admin, a password box pops up, and then if you hit cancel, it takes you to the page that says "Could not authenticae you." That was how it worked before I started tweaking it. Now, when you go to julieapp.herokuapp.com/admin, it immediately takes you to a page that says "YOU SHALL NOT PASS." So it half works! I'm not sure what happened. When I was first trying to change it, none of the changes were appearing on the heroku page, and I was getting frusterated, and I may have deleted something important. I thought I copied everything I originally changed. After I changed it to say "You shall not pass," and saw that it immediately took you to that page, I tried pasting in everything that I had cut out. When I pushed that, I got an application error. So then I cut that out again, and reverted back to the version that just gives you the page that says "You Shall Not Pass." That seems better than the blog not working at all.  I think on class on Wednesday I'll try to compare my version of simple.py to someone else's and see if I can see what's missing from mine.

Anyway, if you go to http://julieapp.herokuapp.com/admin, you can see the results for yourself.

Also, as I mentioned above, I had some trouble getting my changes to appear on the Heroku app, after I made them in Nitrous. At first I thought I just had to save the changes, and they would appear. Wrong! So then I realized I had to commit them. Then I tried that, and it didn't work. Then Elliot told me I had to push the changes to Heroku, and when I did that, the changes appeared.

I also tried to make changes to the layout of the admin page, but now since I can't get to the admin page, I can't see if they worked! Luckily, I wrote my blog post before I made the other changes. Hopefully I can fix in on Wednesday. I wanted to make it so that only people with the correct password could "pass," but now no one can! 

Oh, also, here is what the code looks like: 

```
def requires_authentication(func):
    """ function decorator for handling authentication """
    @wraps(func)
    def _auth_decorator(*args, **kwargs):
        """ does the wrapping """
        if not is_admin():
            return Response("YOU SHALL NOT PASS")
        return func(*args, **kwargs)

    return _auth_decorator
```

Also here is all I think I cut out:

```

401, 
                            {"WWW-Authenticate": 'Basic realm="Login Required"'}

```

When I added that back in, under the return Response, I got an application error. 
