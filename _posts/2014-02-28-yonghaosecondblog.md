---
layout : post
author : yonghao
title : yonghao's second blog
---

I add an "about page" and "fun" page which contain a good flash game.

The code in simply.py:

```
@app.route('/about')
def about():
  return render_template('about.html',
                         now=datetime.datetime.now())
@app.route('/ninjafrog')
@requires_authentication
def ninjafrog():
  return render_template('ninjafrog.html',
                         now=datetime.datetime.now())

```

The first function is "about page", the second function is the "fun" page, and I added a code before the function:

```
@requires_authentication
```
Then users must loggin to visit the page.

The code of "about page:"

```
    <h2>About</h2>
	  <p>Hi! I am Yonghao. I am a first year MSIS student. This is my first blog. Have Fun!</p>

```

ninjafrog page is similar, it is a html page with

```
 block content 
 endblock 
 
```

Then I change the layout.html:

```
 <strong><nav>
				      <ul class="menu">
					          <li><a href="{{ url_for('index') }}">Home</a></li>
						      <li><a href="{{ url_for('about') }}">About</a></li>
                 <li><a href="{{ url_for('ninjafrog') }}">fun</a></li>
				      </ul>
 </nav></strong>
 
```

To make it looks better, I add a command in layout.css:

```
.menu {
	  float: right;
    color:black;
      margin-top: 8px;
      }
		 
     .menu li {
      display: inline;
      color:black
      }
		    
     .menu li + li {
      margin-left: 35px;
      }
			   
      .menu li a {
      color:black
      text-decoration: none;
      }

```

This is my blog: it looks cool, I like it!： http://silshack-yonghaoy.herokuapp.com