---
layout: post
author: madeline13
title: Madeline's Turtle Exercise
---

I wanted to do curved lines, but couldn't make it work.

```
import turtle
wn = turtle.Screen()
wn.bgcolor("darkblue")

alice = turtle.Turtle()
alice.color("lightyellow")

for size in range(5, 60, 2):
    alice.forward(size)
    alice.right(24)
alice.right(60)
alice.forward(80)

joe = turtle.Turtle()
joe.color("orange")
joe.shape("circle")

joe.penup()

for size in range(5, 60, 2):
    joe.forward(size)
    joe.stamp()
    joe.right(24)

wn.exitonclick()
```

![Turtle image] (http://i.imgur.com/BC4KTWp.png)

http://madeline13.github.io/spring2014/2014/01/16/madelineturtle.html

