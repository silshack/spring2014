---
layout: post
author: 
  - zbay 
  - allen
title: Zach and Allen's March Madness post
date: 2014-03-19
---

We misinterpreted the instructions and originally operated off of one branch entitled "ZachAllen". Zach wrote the fields for Mercer, Allen wrote the 
fields for Dayton, and we pushed from our local branches to the master. Then we pulled from the master and filled in the info 
(wins, appearances, and coach).

[Here's the link for Mercer...](https://github.com/silshack/NCAA/pull/27)
[...and the one for Dayton.](https://github.com/silshack/NCAA/pull/28)

We had to start over with the two separate branches to comply with the assignment, Mercer and Dayton. The complexity of trying to undo what we had 
done caused some problems, including merge conflicts that had to be resolved in Nitrous.There was some nonsensical code added to the Dayton file when 
it was committed. Deleting it somehow fixed the merge conflict.

We will chalk our difficulties up to an inadequate grasp on the branching paradigm. Using a single branch for our edits seemed like a reasonable 
idea at first. It is just now setting in, at least for Zach, that branching  must be done liberally and branches updated only from the master branch.