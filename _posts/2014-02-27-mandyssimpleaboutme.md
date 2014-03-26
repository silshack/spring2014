---
layout: post
author: agooch
title: Mandy's Simple About Me Page
---

#About Me

This is the code I added to the simple.py file:

```

@app.route("/about")
def view_about():
    return render_template("about.html", now=datetime.datetime.now(), preview=False)

```

This is the code I added to the layout.html page:

```

<li><p><a href="{{ url_for('view_about') }}">About</a></h1>

```

This is the code I added to a new about.html page that I created: (I used the same exact code from the 404.html page)

```

	<h1>About</h1>
	<p>This is my About Me page. I am a second year MLS student at UNC.</p>
	<p><a href="{{ url_for('index') }}">Return to the index</a></p>

```

#My Experience:

When we started this assignment in class, I was working with Thu-Mai and Sophia to determine the steps necessary to make the About Me page appear on our Simple Blog. First we created branches to work out of in order to test our codes. Then, we determined that we would need to create a new page (about.html), then link to that page in the side bar (from the layout.html page), and then we would need the Simple.py to recognize this new page as a separate page and not a post. 

In order to do this, I copied the 404.html code and placed it in the new about.html page. I tweaked the code and text to reflect that it was now an About Me page. I then went through the layout.html page and looked for the sidebar links. I added the link code to this section of the layout.html code. 

I then created a code in simple.py that reflected the @app.route code for the 404 page. I changed a few things to make it reflect the about.html page. After using git add ., I then ran the preview and found that the link appeared, but would not go to the About.html page. This was due to me using the wrong function name in the url_for(_) code. In order to make the link work, I had to use the view_about function name that I created in the @app.route code on the simple.py file. 

After tweaking this bit of code, I ran another preview and everything worked out appropriately. I took this new code and used it in the main simplehack branch, ran a preview, and then pushed it through to the heroku master. 

Here is the final page: http://silshack-agooch.herokuapp.com/about

This was a good learning experience for tweaking an app in the backend and playing in the branches before committing your changes to the master. I am quite pleased that I was able to work out how to play with functions in an already existing app in order to get it to do what I wanted. Definitely a successful learning experience!
