---
layout: post
author: julie
title: Making an About Page
---

I made an "About Me" page on my Simple blog. Here's the code I added to simple.py:

```

@app.route("/about")
def about():
  return render_template("about.html", now=datetime.datetime.now())
  
```

Also, I added this to the layout.html to add a link in the sidebar to the about page:


li p a href="http://julieapp.herokuapp.com/about" About /a /p /li

PS. I took out the < > around the tags so it wouldn't show up as HTML.

 
I also made some changes to the about.html page but I can't put them here because when I tried they broke jekyll! But, basically, I copied the markup from the 404 page and modified it a little bit. 


I actually figured out the changes to simple.py pretty quickly. I went to the study group at Caribou on Thursday, and that was extremely helpful, especially when it came to getting started with the assignment. It seemed very initimidating at first - that we had to made an entirely new page. But we all looked through the simple.py file and talked about what we remembered from class and eventually realized that we just had to tell it to render the about.html page. 
First, I noticed that the other pages, like the admin page, all had the code to render the page, and then pointed to an html page. So I made a new html page called about.html and told it to render that page. At first I just used html, and not the layout stuff that is in the other pages. When I did that, the About page showed up, but it didn't look like the rest of the site. Then I copied those other instructions from the 404 page. But when I did that, I got an error telling me that "now" was not defined. At first I didn't know what that meant, but then I looked through simple py and noticed that some of them had these instructions that said "now=datetime", etc. So then I copied those and it worked! 

Here is the link to my about page: http://julieapp.herokuapp.com/about
