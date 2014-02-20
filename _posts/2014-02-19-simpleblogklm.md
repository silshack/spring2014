---
layout: post
author: katielmeyer
title: Simple Flask blog
date: 2014-02-19
---

My blog is currently live on heroku: http://silshack-katielmeyer.herokuapp.com/

When I first tried to deploy the blog in class I got an 'application error' when I tried to view the app. After Grant fixed the environment setup script,
I followed the instructions on the smartypant's blog under Trouble, and was annoyed that it didn't same to make any difference: the error was still
there. It's really convenient that Grant handled all the complexity behind the app to make it easier, but the downside of skipping that complexity
is that you can't really debug if you're not learning the process yourself. So I figured since it was only a few short steps anyway, I'd scrap the whole
thing and follow the steps again, assuming it was my error and I'd missed something. It was only after I got the new blog app on heroku that I realized
I'd just forgotten to push the changes from the fixed scripts to heroku...

Anyway, now that it's up there, I really like this app! It's certainly no WordPress, the name 'Simple' is very fitting. But it does
just about everything you'd need a little blog to do. 

One weird thing I noticed: I uploaded a JPG of a piglet through the browser admin interface (because, why not) into my first post. It worked fine.
I pulled the udpates from heroku, then I changed my font in the settings.py config file, and pushed back to heroku. Somehow that broke
the image link. I checked the simplhack uploads folder and saw it wasn't there, so I uploaded it to that directory through nitrous, committed, pushed.
(I've had similar issues at work with version control software, Rational Team Concert, not transferring images). No luck. Here's where a little more
complexity in the admin interface might be useful.

UPDATE: About five minutes after writing that I figured out the filename the blog post was referencing was one it had assigned to the upload image.
When I manually changed it to match the filename of the image that was actually in the uploads directory, it worked fine. So maybe there's still 
a problem with pulling down images from the heroku instance of the app into nitrous, but I guess you can push them into heroku from nitrous.

I played around a bit in the CSS, changing some of the text formatting. I didn't like the red hover text, so I switched it to blue in layout.css.


I also wanted some special formatting on the blog title text, so I added a new class for it on the h1 element in the layout template, and 
got rid of the line break element (<br/>) to bring the tagline up a bit...

```
<header>
       <h1 class="blog-title"><a href="{{ url_for('index') }}">{{ config.BLOG_TITLE }}</a></h1>
 ```
 
 ...Then added styles for it in layout.css.
 
```

h1.blog-title a{
    font-size: 60px;
    font-family: 'Shadows Into Light', serif;
    color: #555;
    border-bottom: none;
    line-height: 55px;
}
h1.blog-title a:hover {
  color:#04E0CA;
}

```

And I wanted a special Google font (Shadows into Light) for that blog title, so I had to tack it into <head> on the layout template.

```

<link href='//fonts.googleapis.com/css?family=Shadows+Into+Light:400,900' rel='stylesheet' type='text/css'>

```

Finally, to play around with the layout I nixed the fixed sidebar (so it'll scroll down with the posts) and increased the sidebar width. Since this app
uses Bootstrap (a 12-column responsive framework, http://getbootstrap.com/) I could do that easily in the layout.html template by just changing
the classes of the div elements for the sidebar and main content.

For the sidebar:

```

 <div class="span4">

```

For the main content:

```

<div class="span8">


```

Since my sidebar isn't fixed anymore, I got rid of the 'hidden phone' columns between the sidebar and main content.
