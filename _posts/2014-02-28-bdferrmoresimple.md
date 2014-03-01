---
layout : post
author: bdferr
title : More Simple Work
---

First, I opened up 404.html, in the templates directory. I had been advised that I could copy the code from here to a new file, which I named about.html, in the same directory. The code for this file was adapted from the 500.html file, referring to the error 500 message, and looks like the following. Every { sign is followed by a percent sign, and every } is preceded by one, but I had to remove those to avoid getting build error messages.

```
{ extends "layout.html" }

{ block title }<title>{{ config.BLOG_TITLE }}</title>{ endblock }

{ block content }
	<h1>About</h1>
<p>I am interested in passing this class. I also enjoy writing about drug policy <a href="//http://ssdp.org/news/blog/">here</a> 
and <a href="http://the-libertarian.co.uk/">here</a>. My other interests include languages and food.</p>
	<p><a href="{{ url_for('index') }}">Return to the index</a></p>
{ endblock }
```

I also attempted to edit simple.py, adding an app.route as follows, which I later found was flawed:

```
@app.route(about)
def about():
  return render_template('about.html', now=datetime.datetime.now(), is_admin=is_admin()), about
```

I got this code by simply copying and pasting the code starting with @app.errorhandler(500), and attempting to adapt this to about.html by changing the references to error 500 to instead refer to “about” and “about.html.” I remember being told something along these lines in class. I did not realize my mistake until consulting the wizard Grant in his lair, which I will describe in more detail later.

I went to layout.html in /simplehack/templates and added a list item in a section of code which appeared to be the list of links which show up on the left side of the screen in the blog. I copied and pasted the code from another item in the same list, but adapted this one to display the text “About” and link to whatever the URL for the “about” page happened to be. Apparently I did not even need to specify a URL; the following code ultimately worked:

```
<li><p><a href="{{ url_for('about') }}">About</a></p></li>
```

During class, I had attempted to preview my changes and gotten a confusing error message. I later noticed that I was missing a quotation mark in my list item, so I corrected this and then used “git add .” and “git commit”. This also removed a large number of alarming red underlines in the code which followed this.

I attempted to preview my changes in the usual way at http://name-of-my-box-74526.use1.nitrousbox.com:4000/spring2014/, but got the following error message: “We couldn't find a server running on this port – are you sure there is a server running?
Make sure to bind your server to host 0.0.0.0 (instead of localhost/127.0.0.1). Please refer to this support article for more details.”

I clicked on the link provided, and it seemed to say that I should do the following: “When running a simple development server with Django, we recommend: python manage.py runserver 0.0.0.0:3000”.

I was unsure about this as I knew I had managed to get this type of thing to work previously without this type of command. I next cast “Summon Grant” using my Gmail spellbook. Grant reminded me that I needed a server to be running before a preview could work properly. He also summoned me to an audience at the Hall of Knowledge.

Arriving at the Hall of Knowledge, I found the elvish wizard Grant assisting his puzzled giant friend, Oak, with this human technology. I asked many questions and found that I had already understood all of the basic concepts, but had simply done small details wrong. For example, in simple.py in the /simplehack folder, I now have the following code, but at first did not realize that a slash was necessary before the first “about:”

```
@app.route("/about")
def about():
  return render_template('about.html', now=datetime.datetime.now(), is_admin=is_admin())
```

This gave me a helpful error message which indicated that this “about” was a reference to a url, and for this reason needed a preceding slash. As noted above, I had developed this code by copying and pasting from the reference to error 500 in simple.py which begins with @app.errorhandler(500). Noticing that this did not have quotation marks around its parameter, I did not realize initially that these were necessary for the “about.”

Similarly, I had at first used this:

```
<li><p><a href="{{ url for('about') }}">About</a></p></li>
```

rather than this:

```
<li><p><a href="{{ url_for('about') }}">About</a></p></li>
```

This gave me an error message, something along the lines of “expected URL but got ‘for.’” Grant was able to explain my error based on this message. 

Throughout this process, I checked my work with both the preview function and, after casting “git push heroku master,” viewing the Simple blog on Heroku.

Finally, I found that my color scheme was foolhardy. Initially, I could find only one reference to color other than the background color, but I was directed by Grant to the “inspect source” command, which allowed me to reveal the secrets of the blog, namely the relevant lines of code, in connection with any particular area of text. I was also directed to a helpful website here which allowed me to find the color codes to insert. I simply changed the color codes in layout.css so that the text would consistently be black, specifically color #222, unless the mouse was hovering over a link, in which case it would be #00009, otherwise known as dark blue.

I spent some time attempting to figure out how to set layout.css so that the same hover effect would apply to the links on the sidebar menu and any other link on the page, i.e. so that the white underlines would become gray. My initial efforts somehow ended up causing every link on hover to show an extra underline, in blue rather than white, between the older underline and the text. I also tried to copy the “div class” indicators in layout.html from around the sidebar menu to around the “powered by...” note beneath it. This made that particular text slightly larger and changed the alignment but otherwise did not help, so ultimately I undid it.

Around this time I summoned Grant again, who confirmed that it was indeed layout.css that I should be working on.

Next, back in layout.css, I managed to get a larger blue underline which covered the white one, but I still could not get a gray underline. Finally, after much trial and error and yet again consulting grant, I realized that what I wanted was called a border-bottom, similar to the white border-bottoms which already existed under every link. An underline, on the other hand, seemed to be an aspect of the text which would inevitably take its color from what the text had been assigned, i.e., in this case, blue.

So, finally, I managed to remove the underline and add a border-bottom with the proper color (#444) to the hover properties of all links by adding code under a:hover. I found that I needed to add the property “solid” to make it show up. Great success! The final code (or is it markup?) affecting all the links looked like this: 

```
a:hover {
    color: #000099;
    border-bottom: solid #444;
    text-decoration: none;
}
```
