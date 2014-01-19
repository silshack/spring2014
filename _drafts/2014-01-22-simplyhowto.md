---
author: grant
layout: post
title: Getting Started with Simple
published: false
---


Hi Guys! Today we're going to make a blog on Heroku.

[TOC]

## Simple in Nitrous.io  

First thing, go the [Nitrous.io](https://www.nitrous.io/join/R2AIjhSAO64) and log in using Github. 

Now got to **Boxes** and [create a box](https://www.nitrous.io/app#/intro/create). The type doesn't really matter, but Django is probably best for us right now.

Don't worry, you don't need to pay for more N2O, the free 155 is more than enough to do everything we need to do for our class. 

Now your box is running you can click on it and click **Terminal**.  

Now you should be looking at a black screen with a cursor on it. something like this:  
![terminal](http://i.imgur.com/nKH2jtN.png)  

In front of you is a full-fledge linux/unix terminal with all the power therein. This is where we will be spending the rest of the semester.

Now we are going to load and run a simple python-based blogging application. So simple in fact, it's named [Simple](https://github.com/orf/simple). 

First, in Nitrous, go to **Boxes**, select your box and click **Reveal Public Key**. This lets us access a secure encryption key we will find useful later. You should also click **Add to GitHub** which will share that key with GitHub and make things just a little bit easier.

Now to getting the blog up and running. In the Nitrous terminal (or the Nitrous IDE console):

```bash
$ mkdir silshack #make a new directory  
$ cd silshack #move into the silshack directory
$ git clone https://github.com/sils/simple.git #get the simple blog
$ cd simple  
$ pip install --user -r requirements.txt #install all of our required libraries, this will produce errors, don’t worry.
$ python create_config.py --fresh #configure your blog  
$ python simple.py
```  

Now go to **Preview** and **Port 4000**. Pretty cool, eh? 

## Simple on Heroku  

Nitrous is very useful for development and testing, but because we are on a free account, your box will shutdown after about 6 hours of inactivity. So we can't use it to host things we want other people to see.

To host our site so other can see it we are going to use [Heroku](http://heroku.com), a really cool Platform as a Service that lets us test and host all kinds of web apps for free. 

Go to [Heroku](https://id.heroku.com/signup/www-header) and [sign up for an account](https://id.heroku.com/signup/www-header). Confirm your account and sign in.

A free account is more than good enough for our purposes.

Create a new app  

![heroku new app](http://i.imgur.com/IU9gEFV.png)

Name it something you can remember, preferably **SILSHACK-_GITHUBNAME_**

Back in Nitrous.io, in your _simple/_ directory do the following  
Don't copy and paste, because it will want responses for some of these.

```bash  
$ heroku login
$ heroku keys:add
$ git config --global user.email “(your git email)” #use the email you use on github
$ git config --global user.name “(your git username)” #use the name you use on github
$ git commit -am "Updated config" #We are saving the changes you made to the config earlier
$ git remote add heroku git@heroku.com:(appname).git
$ git push heroku master
```

Now go to _http://appname.herokuapp.com_ and see your working blog in action.

## What's Next?

Now, it's up to you. Go look at _simple.py_. That is the entire application running your blog. Break it, experiment with it, do something completely different.

Simple is built with [Flask](http://flask.pocoo.org/) A really cool and really simple Python Web Framework. 

For your assignment, make a short blog post on Github linking to your herokuapp. Try to change Simple.py in an interesting way. You can edit the css or javascript too.

Be bold. Flask is really powerful. You can do some really cool things with it.

# Your assignment
A post, on Github, with a pull request into [silshack/spring2014](https://github.com/silshack/spring2014) with the following:  

1. A link to your Heroku app running Simple  

2. A brief description of the process of getting your instance of Simple onto Heroku  

3. Something cool you did to Simple, the relevant source code and a description. The cooler the better.  
