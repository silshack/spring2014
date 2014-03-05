---
layout: post
author: elliott
title: Branching in Git
categories: how-to
---

By now, you have all of the tools you need to create a new branch for each assignment.  From now on, this will is a required element of turning in an exercise: it should be on its own branch.  Since Pull Requests are comparisons between branches, this will let you open up a new pull request even when I get behind in grading.

Start, of course, in Nitrous.  You should be in the `/spring2014` directory.  `cd spring2014` if needed.  You should also be on the gh-pages branch.  Type `git branch` to see what branch you're on and `git checkout gh-pages` if you need to switch. 

### Update your repo

Get the latest code from your repo and the class repo:

```
git pull origin gh-pages      # Get latest from your repo 
git pull upstream gh-pages    # Get the latest from silshack
```

### Make & checkout the branch

Make a branch titled something related to your assignment.  If the assignment is to create an about page, I might call it `about-page`:

```
git branch about-page     # Make a branch called 'about page'
git checkout about-page   # Switch to that branch
```

### Make & commit the changes

Now you're ready to write the post for this assingment.  Whenever you hit a major revision on your post, you know what to do:

```
git status    # Shows you what files have changed.
git add .     # Marks all files to be committed.  You can also pick some
git commit -m "Write your commit message here"
```

### Push to Github

We're now going to push the code and the branch up to Github.

```
git push origin about-page     # Use your actual branch name, not 'about-page`
```

This makes a new branch on Github.com and pushes your commits to it.  If you get errors about not ebing able to push make sure you've run `git pull origin gh-pages` as described above.

### Open the Pull Request

Go to your repo at github.com/<your-username>/spring2014.  In almost all cases, Github will have detected your new branch and offer you the option of opening a pull request right there:

![Imgur](http://i.imgur.com/zG8kzFy.jpg)

If not, no worries.  Just switch to the branch:


And create a pull request like normal using the green button.  You'll want the base of your pull request to be `silshack:gh-pages` and the head to be `your-username:your-branchname`.

### Done!

That's it.  You've made a branch an pull request for an exercise.  Make a new branch and pull request for each exercise.  In the real world, this is exactly how developers segment out distinct features they're working on.


