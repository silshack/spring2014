---
layout: post
author: elliott
title: Sixth class notes
published: true
---

# Class Canceled
We'll have to make up the below next week :/

## Announcements

* Project scoping
* Screenshot showing your username, please!
* Meetups: credit for 2 for longer events.  *Programming* meetups.  vs. more general technology workshops.
* Segue: Reagan Moore peer observation

## Exercise: Nitrous pull & push

As we did last time, we're going to `cd` into our class blog's directory and make a **commit**.


* In the console:
  * Type `pwd` to **p**rint **w**orking **d**irectory (aka see where you are).  Should be `/home/action`
  * Type `cd spring2014` to **c**hange **d**irectories into the project
  * Type `gem install github-pages` to install the tools that Github uses to make our github.io pages (Most notably, Jekyll)
  * Type `jekyll serve --watch` to start up jekyll and tell it to watch what you do.  Note the `--watch` has two hyphens.
  * From the Preview menu, select 4000.  This new page/tab will 404.  That's ok.
  * Add `/spring2014` onto the end of the URL (mine is http://trinket-68987.use1.nitrousbox.com:4000/spring2014/).  You should see a copy of our class site!

* Create or slightly modify the post titled "Nitrous test post"
* Click the + icon in the console to open a new window.
* Make sure you've [set up git]({{ site.baseurl }}/how-to/2014/02/01/git-howto.html}}).  The email **must** match waht you've used for Github for your work to show up properly.
* In the console, 
    * type `git status` to see what's going on.
    * type `git add .`.  Note the period.
    * type `git status` to see what's going on.
    * type `git commit -m "Commit message"`, replacing 'Commit message' with a real description of your changes.
    


## Pulling in the changes from the Class Blog

First of all let's avoid [vi](http://en.wikipedia.org/wiki/Vi) hell:

```
git config --global core.editor nano
```

This sets [nano](http://www.nano-editor.org/) as our default editor for git stuff.

To get the commits that your classmates have made to the class blog, we need to `git pull` the silshack repo.  Git will then thread those changes together with ours.

```
# Add the silshack repository as a 'remote' called "upstream".
# "Upstream" is the conventional name for the shared repo in a project.
git remote add upstream https://github.com/silshack/spring2014.git

# Confirm that you have two remotes, each with a fetch and push URL:
git remote -v
# Should output two origin lines and two upstream lines
```

Now we've told Git how to find our central repo, so we can pull in the commits we don't have.  Git stores commits as little nuggets of changes, so we can add everyone else's work without overwriting ours.

```
# Pull commands have this form:
# git pull <remote name> <branch name>
# in this case we want to do:
git pull upstream gh-pages

# you should see a bunch of commits.  
# It may also pop up Nano with a pre-populated Commit message. Ctrl-x to close and save.
```

When you pull in these changes, your jekyll console should rebuild the site.  You'll see something like this:

```
Regenerating: 21 files at 2014-02-12 10:01:28 ...done.
```

Make sure to wait for the `...done.` and then go to your Preview URL.  As a reminder, this is accessed from the Preview menu.

## Pushing changes

Type

```
git status
```

If it doesn't tell you your working branch is clean, go above and add and commit your changes.

You're now ready to push these commits to Github!  You can do so with:

```
git push origin gh-pages
```
From there, open a pull request just like you would normally, from your repo into silshack!
