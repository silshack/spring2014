---
layout: post
author: sunhwa
title: sunhwa's turtle codes
date: 2014-01-15
---

```

import turtle

wn = turtle.Screen()
background_color=raw_input("what color should the background be?")
pen_color=raw_input("what color should tess be?")
pen_size=int(raw_input("what size should tess's pen be?"))
wn.bgcolor(background_color)        # set the window background color

tess = turtle.Turtle()
tess.color(pen_color)              # make tess blue
tess.pensize(pen_size)                 # set the width of her pen

tess.forward(50)
tess.left(120)
tess.forward(50)

wn.exitonclick()                # wait for a user click on the canvas

```
