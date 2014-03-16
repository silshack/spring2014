---
layout: post
author: yonghao
title: yonghao's flask blog
date: 2014-02-22
---

## yonghao's blog

This is my first flask blog! http://silshack-yonghaoy.herokuapp.com/

I think it's a good blog. I did a lot job on it.
Firstly: I change the background image. It's a UNC blue picture, Go heels!
In the layout.html, I add a command like this:

```
body {
  background-image:url(http://farm3.staticflickr.com/2830/12690166743_3a49d173fd_o.png);
}

```

Secondly: I add two more pages and a navigation to my blog. One is about, one is Fun. It took me some time, I need 
to learn flask online.

I change the layout.html:

```
 <strong><nav>
				      <ul class="menu">
					          <li><a href="{{ url_for('index') }}">Home</a></li>
						      <li><a href="{{ url_for('about') }}">About</a></li>
                 <li><a href="{{ url_for('ninjafrog') }}">fun</a></li>
				      </ul>
				</nav></strong>

```

If u have css and html background, its easy to understand. ANd then I change the layout.css to make it looks better.

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

Thirdly: in the fun navigation, I upload a very good flash game, its cool, enjoy it!

http://silshack-yonghaoy.herokuapp.com/ninjafrog

I download the game from http://www.flashgames247.com/pages/freegames.html

The most important part: after we upload the html page, we should change something in simple.py file, and add some functions:

```
@app.route('/about')
def about():
  return render_template('about.html',
                         now=datetime.datetime.now())
@app.route('/ninjafrog')
def ninjafrog():
  return render_template('ninjafrog.html',
                         now=datetime.datetime.now())

```

Then! after push it in Nitro.io, it works!!!

And I make a post "Did duke win?" who knows the answer??
