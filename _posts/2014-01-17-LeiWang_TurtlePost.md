---
layout: post
author: lei
title: Lei Wang's Turtle Exercise
---

by Lei Wang

```
import turtle
wn = turtle.Screen()
background_color = raw_input("What color should the background be?") 	#Ask user background color
wn.bgcolor(background_color)
tess = turtle.Turtle()
tess_color = raw_input("What color should the tess be?")
tess.color(tess_color)			#Ask user background color
tess.shape("arrow")			    # Set turtle shape to shape with given name

tess.down()                     # this is new
for size in range(10,60,1):     # start with size = 5 and grow by 2
    tess.stamp()                # leave an impression on the canvas
    tess.forward(size)          # move tess along
    tess.right(24)              # and turn her
print("What does the picture look like?")
wn.exitonclick()

```

![Turtle image](http://www.unc.edu/~leiw/images/python/turtle.jpg)
