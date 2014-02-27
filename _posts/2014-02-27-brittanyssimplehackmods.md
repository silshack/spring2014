---
author: brittany
title: Brittany's Simplehack Modifications
layout: post
---

My new pages on the Heroku blog can be found at the following links:

+ About me: http://silshack-britth.herokuapp.com/about.html

+ Page requiring authorization: http://silshack-britth.herokuapp.com/secret.html

[Both can also be accessed from the home page (or any other page) on the sidebar: http://silshack-britth.herokuapp.com]

The code I added to make this possible was as follows:

##About Me

+ Adding new function to simple.py 

After our discussion in class, I looked over the other functions already in simple.py that were used to create the pages. I found the error pages to be especially useful, and I just copied one of those functions and modified it to reflect the path needed for the about page, also taking out the unnecessary information in the return statement. I also added the route decorator that I saw on other functions.

```
    @app.route("/about.html")
    def about():
        return render_template('about.html', now=datetime.datetime.now())
```

+ Creating new html template, about.html

Again, looking at the error pages provided a simple template to use in order to create the about page. I created the new about.html template, copying the code from the 404 page and modifying it to reflect the purpose of the about page. I also added the code for the "Back to Blog" button as found on the blog posts, copying this code from the view.html template.

```
    { % extends "layout.html" % }
    
    { % block title % }<title> { { config.BLOG_TITLE } } </title> { % endblock % }

    { % block content % }
	    <h1>About me</h1>
	    <p>This is the about me page! I'm Brittany.</p>
      <br/>
            <a class="btn btn-inverse" href=" { { url_for('index', page=pid) } } ">Back to Blog</a>
      <br/>
    { % endblock % }
```

+ Adding sidebar link in layout.html

I saw that the sidebar links were coded into the layout.html page, so I just added a new unordered list item for the about me page. Since it didn't involve pulling any information from the settings code, I didn't include any if-statement preceeding the list item as was the case for the other sidebar links.

```
    <li><p><a href="about.html">About Me</a></p></li>
```

*Screenshot of about.html*
![About.html page](http://unc.edu/~bmhayes/inls560/herokuabout.png)


##Page requiring authorization

I followed the same steps to create my page requiring authorization, with a few changes. When I added the new function in simple.py, I included @requires_authorization before the function definition. I followed the example of other pages that required authorization (for instance, new_post and edit), looking at their functions and seeing that they all began with this decorator.

```
    @app.route("/secret.html")
    @requires_authentication
    def secret():
        return render_template("secret.html", now=datetime.datetime.now())
```

Creating the template was the same as with the about.html page, as was adding the sidebar link.

*Page template:*

```
    { % extends "layout.html" % }

    { % block title % }<title> { { config.BLOG_TITLE } } </title> { % endblock % }

    { % block content % }
	    <h1>Secret Page!</h1>
	    <p>If you see this, you must have logged in! Congrats!</p>
      <br/>
            <a class="btn btn-inverse" href=" { { url_for('index', page=pid) } } ">Back to Blog</a>
      <br/>
    { % endblock % }
```

*Sidebar link:*

```
    <li><p><a href="secret.html">(Not so) Secret page!</a></p></li>
```

*Screenshot of secret.html*
![Secret.html page](http://unc.edu/~bmhayes/inls560/herokusecret.png)
