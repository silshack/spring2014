---
author: elliott
title: Collaborating on Github
layout: post
date: 2014-03-21 11:59pm
categories: exercise
---

# Tournament Exercise
I need four volunteers  

## Person one

* Open Issues for North, South, East, and West brackets.
* Make a milestone: "Everyone has added information for their favorite team"

## Person two

* Clone the repository in Nitrous
* Make a branch called `midwest-south`
* Checkout this branch
* Make Folders called `North` and `South` 
* Fill the folders with one file for each basketball team in those NCAA brackets.  For instance, in the South folder make a file called `01 - University of Florida`
* Add and commit your work **from the North folder only**, describing it
* Add and commit your work **from the South folder only**, describing it
* Push your changes back to the main repository.  (Remember, `git remote -v` tells you what repos `git` knows about)
* Open a well-described Pull Request, tagged with the right Milestone

## Person three

* Do the same as person two except for the East and West brackets

## Person four

* Review and merge these pull requests when they are correct.

# For homework

Pair up.  Each person pick a team (one team per person).  Make a new branch in Nitrous titled your partner's team.  For Your partner's team, add these labels to the file:

* Win-Loss Record:
* Number of Times in the Tournament:
* Coach:

Commit these changes and push them up to your partner's branch.  Your partner should then make a branch with the same name on Nitrous and `git pull origin branchname`.  Have your partner enter the information into the file, open a well-formed pull request, and tag it to the correct milestone.  Merge it when it's correct.  With [emoji](http://www.emoji-cheat-sheet.com/) :) :+1:

Do this once per partner, switching off.


# What to turn in

* One post per pair on our class site, correctly formatted and on its own branch.
* In the post, a link to your merged pull requests on the `NCAA` repo.
* Reflections about working together
* Both of your names correctly displayed as authors:

```
author:
  - elliott
  - gerbal
```

