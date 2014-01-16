---
layout: post
author: yonghao
title: yonghao's Turtle Exercise
---

If I surround something with backticks it's rendered in 'code'

Here are my awesome reflections, links, frustrations, and dreams.

```
import turtle
wn = turtle.Screen()
# I've added code that asks for a bg color
background_color = raw_input("What color should the background be?")
wn.bgcolor(background_color)        # set the window background color
tess = turtle.Turtle()
# I've added code that asks for tess color
tess_color = raw_input("What color should the tess be?")
tess.color(tess_color)              # set tess's color
# I've added code that asks for tess pen size
tess_size = int(raw_input("What size of tess's pen should be?"))
tess.pensize(tess_size)                 # set the width of her pen
tess.speed('0')
for i in range(90):
    for j in range(2):
        for k in range(90):
            tess.forward(100*0.0174)
            tess.right(1)
        tess.right(90)
    tess.right(4)

wn.exitonclick()                # wait for a user click on the canvas

```

![Turtle image](http://farm6.staticflickr.com/5505/11974925354_dff3297ca1_b.jpg)
