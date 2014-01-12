---
author: elliott
layout: post
title: Diving into Python!
categories: exercise
date: 2014-01-17 11:59pm
---

Under construction


## User Input

In the ActiveCode Example 2, there's an example that introduces background colors.  It suggests we extend the program to accept user input.  Let's do that now.

When you're done with this part of the exercise you'll have a program that:

* prompts the user for Tess's color and makes her that color
* prompts the user for a background color and makes it that color
* prompts the user for Tess's pen size and makes her pen that size

To prompt the user for input we'll need Python's `raw_input()` function.  We haven't learned about functions yet, but since we're diving in we're just going to use it and see what happens.

Read up a little on some of the results from a quick Google search:

* Python's [official docs](http://docs.python.org/2/library/functions.html#raw_input) for `raw_input`
* [Stack overflow question](http://stackoverflow.com/questions/5563089/raw-input-function-in-python)

Like much of the documentation we'll find in programming, these imply or depend on a lot of background knowledge you may or may not have.  Push on even if you don't understand and see what happens in the code!  I'll mention a few things that might help.

`raw_input` gets a value, and we have to store it somewhere to use it in our program.  That's why in the example on Stack Overflow there's an assignment of the statement to a variable.  For example, we might store the result like this:

```
tess_color = raw_input("What color should tess be?")
```
