---
author: elliott
layout: post
title: Python Basics
categories: exercise
published: false
---

## First things First: Updating your repo in Github

In the new [how tos]({{ site.baseurl }}/how-tos.html }}) section on Updating your Repo using Github.com you'll find instructions for updating your code with recent changes (including your classmates' posts and the how tos themselves).  When you're done you should have:

* A Github issue in the Silshack repo saying something like "Your name has updated his/her repo" with a link to the closed pull request in *your* repo.


## Python: Backing up and Learning some Vocab

In class we'll do these together:


* A program that will compute the area of a rectangle. Prompt the user to enter the width and height of the rectangle. Print a nice message with the answer.

This is relatively straightforward: taking user input, doing a caluclation, and printing the result.  We'll elaborate a little bit on it together.

* It is possible to name the days 0 thru 6 where day 0 is Sunday and day 6 is Saturday. If you go on a wonderful holiday leaving on day number 3 (a Wednesday) and you return home after 10 nights, your program should return 6 (Saturday). Write a general version of the program which asks for the starting day number, and the length of your stay, and it will tell you the number of day of the week you will return on.

Let's start with a simpler case: Just naming the correct return day if we assume that every trip starts on Sunday.  So our program would take 0 and return 0, Take 1 and return 1 (Monday), take 7 and return 0 (Sunday), take 8 and return 1 (Monday), and so on.  Now we can just find some mathematical expression that has these properties, figure out how to deal with starting on a day other than 0 (Sunday) and we're done.

Stating the expected behvior of a a program before you start is a very useful technique, as is breaking it into smaller problems.


## What to turn in

The above we'll do in class for practice.  They're preparation for completing the problems below on your own.  You may be able to get them done in class but turn them in whenever you're able.

Here are the components of what you'll turn in:

* Take the sentence: All work and no play makes Jack a dull boy. Store each word in a separate variable, then print out the sentence on one line using print.
* A program that will compute MPG for a car. Prompt the user to enter the number of miles driven and the number of gallons used. Print a nice message with the answer.  For stye points, cue the message printed off of how efficient (or not) the car is.
* A program that will convert a user-input number of degrees celsius to degrees fahrenheit.
* A program that will convert a user-input number of degrees degrees fahrenheit to degrees celsius.
* A program that will convert degrees or celsius as above, depending on the users' choice.
* A pull request to our class blog with the code above and sample output from your programs.

