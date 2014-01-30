---
layout: post
author: jtbeeker
title: jeremy's first turtle (ever) exercise
date: 2014-01-22
---

```
import turtle

wn = turtle.Screen()
background_color = raw_input ("what color do you want the background to be?")
wn.bgcolor(background_color)

t = turtle.Turtle()
t_color = raw_input ("what color do you want the pen to be?")
t.color(t_color)
for i in range(20):
    t.forward(i * 10)
    t.right(144)
    
    t.left(20)
    
    t.circle(35)
    t.speed(0)
    
```

This is the first turtle i have ever done..bare with me

![Turtle image](http://farm8.staticflickr.com/7335/12092416086_8d030591b0_o.png)
