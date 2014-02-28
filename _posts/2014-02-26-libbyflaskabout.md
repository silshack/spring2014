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

(I have removed the about template code because of error in Nitrous. Will place back in later.)

This took a while, but everything looks to be working now. 
I feel like I know just enough about Nitrous to be dangerous, but not enough about "real-world" Python programs.
Being let loose on the code without instruction was probably helpful in the end, but it was definitely nerve-wracking!