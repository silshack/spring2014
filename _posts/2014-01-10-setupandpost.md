---
layout: post
author: elliott
date: 2014-01-10 11:59pm
categories: exercise
title: Setup & First Post
---

## {{ page.tile }}

### Get set up on Google Plus
Our google communtiy is where we'll share private, timely information together.

### Get set up on Github
Sign up for a free Github Account.

### Fill out [this form]({{site.baseurl}}/announcement/2014/01/07/welcome.html)
So I can add you to the blog as an editor.

## Posting to Github

This exercise will have you doing the following:

* Open your first issues
* Modify the class blog with your info
* Write an initial blog post
* Close your first issues

Note: As we’ll learn, git is an open source command line version control system. Github.com is the fastest growing git repository on the internet. This distinction isn’t always immediately apparent.

### Issues

* Go to the [project homepage](https://github.com/silshack/spring2014).  Click the Issues tab on the right.
* Open an issue "[Your name] not included in config.yml"
* Open an issue "[Your name] needs a first post"

### Jekyll Orientation

Jekyll is a program that reads templates and generates a website.  It might seem complicated at first but you'll get the hang of it quickly.  Here are the basic pieces:

* `_config.yml`: Where sitewide variables live
* `_posts/`: Where posts live
* `_layouts/`: HTML for Jekyll to instert our content into
* `*.markdown`: Pages for the site

You can read more here: [http://jekyllrb.com/docs/home/](http://jekyllrb.com/docs/home/)

### Adding your Bio & Info to the site:

* Fork the repo
* Change your details in `_config.yml`
* Describe your changes with a commit message 
* Open a Pull Request from your new branch to the silshack master.
* Pair up, review the code, and tag me (@eah13) in a comment that it looks good.  I'll merge it in (eventually you'll be doing this yourselves)

### Writing an initial blog post
* Fork the repo
* Make the file `_posts/YYYY-MM-DD-title.md`
* add a YAML header (with your `_config` name as `author`)
* Write a post, using some features of Github Flavored Markdown
* Describe your changes in one or more commits
* Open a pull request from your new branch to the silshack gh-pages branch
* Pair up, review the code, and tag me in a comment when it's ready to go.


When you're done you should have:

* A post that displays correctly at http://[yourname].github.io/spring2014/
* Two issues opened by you at [https://github.com/silshack/spring2014/issues](https://github.com/silshack/spring2014/issues)
* An open pull request by you at [https://github.com/silshack/spring2014/pulls](https://github.com/silshack/spring2014/pulls)

If you need help, use your resources!  Google, our community, and your classmates are all available, as am I.
