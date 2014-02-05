---
author: grant
layout: post
title: Getting Started with Nitrous.io and Jekyll
categories: how-to
pulished: true
---



## Getting started with Nitrous 

First thing, go the [Nitrous.io](https://www.nitrous.io/join/R2AIjhSAO64) and log in using Github. 

Now got to **Boxes** and [create a box](https://www.nitrous.io/app#/intro/create). The type doesn't really matter, but Django is  best for us right now.

Don't worry, you don't need to pay for more N2O, the free 155 is more than enough to do everything we need to do for our class. 

Now your box is running you can click on it and click **IDE**.  

Now you should be looking at a black screen with several different sub-windows in it. 

In front of you is a full-fledge linux/unix terminal with all the power therein. This is where we will be spending the rest of the semester.

## Getting the Blog Going

Now we need to set up git so we can talk to Github

### Don't type the `$` symbol. That just means we're typing it into the Linux Terminal

If you haven't done this already, do the following:

```bash  
$ git config --global user.email "your@email.com"
$ git config --global user.name "Your Name"
$ git config --global core.editor nano
$ git config --global color.ui true
```

Now we can get our fork of the SilsHack Site:

```bash  
$ git clone https://github.com/[githubusername]/spring2014.git 
```  

If we want to render it though, we need to install Jekyll

```bash  
$ gem install github-pages
```

And wait for it to finish.

Now if you Change Directory (cd) to the spring 2014 directory we can test to see that the site works properly

```bash
$ cd spring2014
$ jekyll serve
```

Now, go to **Preview** -> **Port 4000** and add **/spring2014/** to the end of the URL.

## Pushing changes back up

Now, suppose you've made some changes to the site and want to push them up to your github repo so you can open a pull request to get it into the Class Site

We need to check and see what's up in our local git repository, and what files we need to add by running

```
$ git status
```

Next, we need to make a commit. Do the following in the spring2014 directory



```bash
$ git add _posts/date-newpost.md #This makes sure Git knows the post exists
$ git commit -m "A Commit Message, be descriptive"
$ git push origin gh-pages
```

And now, if you check your **Github** and you should see the changes you made.
