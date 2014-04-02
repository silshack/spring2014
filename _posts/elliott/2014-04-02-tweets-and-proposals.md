---
layout: post
author: elliott
title: "Tweets from last class and proposals"
---

## Tweets

Nice work on this!  I'm [working on the tweethack repo as a project](https://github.com/silshack/tweethack).  Time for a demo.

## Merge Conflicts

1. Make a repo in a new foler

```
mkdir conflicts
cd conflicts
git init
```

2. Make and checkout a new branch

```
git branch new
git checkout new
```

3. Edit a file & commit the change

```
nano file.txt
# Edit the file (add your name perhaps) then press Ctrl-X and y to save
git add .
git commit -m "Made a change"
```

4. Checkout original branch

```
git checkout master
```

5. Edit and commit change to file.


```
nano file.txt
# Edit the file (add a **different** name) then press Ctrl-X and y to save
git add .
git commit -m "Made a second change"
```

6. Try to Merge them

```
git merge new    # this means merge in the `new` branch
```

7. Resolve conflicts

Basically, just make the file the way it should be, remove the `<<<<<<<<<<<<<<<`, `===============`, and `>>>>>>>>>>>>>>>>>>>>>>` lines and you should be good to go!

8. Commit & push resolution

```
git add .
git commit -m "Fixed conflict"
```

## Branching

Always branch from the main branch!  (`gh-pages` for our site; `master` for most repos)

## Proposals

The proposal assignment is up, Due Sunday.  We'll spend the balance of time in class workshopping a group's project and then working on the assignment.