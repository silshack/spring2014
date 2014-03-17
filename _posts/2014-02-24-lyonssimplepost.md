---
layout: post
author: allen
title: Allen Simple Blog
date: 2014-02-24
---

##Allen's Simple Blog

Here's my Simple blog post: [http://lions-blog.herokuapp.com/first-post](http://lions-blog.herokuapp.com/first-post)


It was messing up for a while. But after I started over a couple times, and then started
over from scratch by deleting my nitrous.io box and making a new one, linking it with the class site again, and then
linking it with my heroku app. Then everything worked. So that was a pain but otherwise it was all smooth sailing. I
watched the demo, embedded a google maps frame in my post and changed the background in the ```layout.css``` file. The background
is an image that I uploaded and placed in the ```image``` folder. I'll probably change the font later and I had to change
the font color so that you could actually read all the text. Otherwise it would just be borderline invisibile on the 
background. I also edited the background so that the image is always the size of the browser window and doesn't scroll
with the page. The css looks like this:

```
body {
    color: #fff
    background: url(images/red_back.jpg) no-repeat center center fixed;
    background-color: #000000;
    -webkit-background-size: cover;
  	-moz-background-size: cover;
  	-o-background-size: cover;
  	background-size: cover;
}
```

And then the ```background-color: #000000``` is there so that if the image fails to laod the background will just be 
black.

So that's that. Hope you like it.
