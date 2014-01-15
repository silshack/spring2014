---
layout : post
author : bdferr
title : clever turtle picture
---

```
import turtle
wn = turtle.Screen()
billy = turtle.Turtle()
billy.shape("turtle")
billy.color("blue")
wn.bgcolor("green")
billy.up()
billy.speed(10)
# begin star
for n in range(12):
    billy.forward(80)
    billy.down()
    billy.forward(20)
    billy.up()
    billy.forward(30)
    billy.stamp()
    billy.backward(50)
    billy.down()
    for c in ["purple", "red", "orange", "yellow"]:
        billy.color(c)
        billy.backward(20)
    billy.color("blue")
    billy.left(30)
# end star begin web
billy.color("yellow")
billy.forward(20)
billy.left(105)
for o in range(12):
    billy.forward(10)
    billy.left(30)
    
billy.right(105)
billy.color("orange")
billy.forward(20)
billy.left(105)
for p in range (12):
    billy.forward(21)
    billy.left(30)

billy.right(105)
billy.color("red")
billy.forward(20)
billy.left(105)
for q in range(12):
    billy.forward(32)
    billy.left(30)
    
billy.right(105)
billy.color("purple")
billy.forward(20)
billy.left(105)
for q in range(12):
    billy.forward(42)
    billy.left(30)
# single polygon ends web and begins fills
billy.right(105)
billy.color("blue")
billy.begin_fill()
billy.forward(20)
billy.left(105)
for q in range(12):
    billy.forward(52)
    billy.left(30)
billy.end_fill()
billy.right(105)

billy.backward(20)
billy.left(105)
billy.color("purple")
billy.fillcolor("purple")
billy.begin_fill()
for r in range(12):
    billy.forward(42)
    billy.left(30)
billy.end_fill()
billy.right(105)

billy.backward(20)
billy.left(105)
billy.color("red")
billy.fillcolor("red")
billy.begin_fill()
for s in range(12):
    billy.forward(32)
    billy.left(30)
billy.end_fill()
billy.right(105)

billy.backward(20)
billy.left(105)
billy.color("orange")
billy.fillcolor("orange")
billy.begin_fill()
for t in range(12):
    billy.forward(21)
    billy.left(30)
billy.end_fill()
billy.right(105)

billy.backward(20)
billy.left(105)
billy.color("yellow")
billy.fillcolor("yellow")
billy.begin_fill()
for u in range(12):
    billy.forward(10)
    billy.left(30)
billy.end_fill()
billy.right(105)

billy.backward(20)
billy.color("blue")
```
![Turtle image] (http://imgur.com/sRxT6ZA))
