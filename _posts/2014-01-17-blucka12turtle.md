---
layout: post
author: blucka12
title: Oak's Turtle Post
---
## Oak's Turtle Post
```
import turtle
wn = turtle.Screen()             
wn.bgcolor("white")

bob = turtle.Turtle()           
bob.color("LightYellow")
bob.pensize(6)
for i in range(8):
    bob.forward(20)          
    bob.left(45)


bill = turtle.Turtle()
bill.color("Tomato")
bill.pensize(6)
bill.forward(150) 
for i in range(4):
    bill.right(20)
    bill.forward(10)
bill.forward(150)

hanz = turtle.Turtle()
hanz.color("black")
hanz.pensize (6)
for i in range(12):
    hanz.forward(35)
    hanz.left(30)

herb = turtle.Turtle()
herb.color("tomato")
herb.pensize(6)
herb.right(180)
herb.forward(150) 
for i in range(4):
    herb.left(20)
    herb.forward(10)
herb.forward(150)

stew = turtle.Turtle()
stew.shape("Turtle")
stew.color("green")
stew.stamp

wn.exitonclick()
```
<a href="http://imgur.com/Um6Mc3T"><img src="http://i.imgur.com/Um6Mc3T.png" title="Hosted by imgur.com" /></a>
