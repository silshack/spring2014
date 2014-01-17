---

layout: post
author: sunhwap
title: sunhwa's turtle codes
date: 2014-01-16

---

```
import turtle
Wn=turtle.Screen()
Wn.bgcolor("lightgreen")
Jose=turtle.Turtle()
jane=turtle.Turtle()
jim=turtle.Turtle()
Jose.shape("turtle")
Jose.color("blue")
jane.shape("dot")
jane.color("orange")
jim.shape("dot")
jim.color("red")
Jose.penup()
jane.pendown()
jim.pendown()
for size in range(12):
    Jose.forward(100)
    Jose.stamp()
    Jose.forward(-100)
    Jose.right(30)
for size in range(12):
    jane.forward(85)
    jane.stamp()
    jane.forward(-85)
    jane.right(30) 
for size in range(12):
    jim.forward(120)
    jim.stamp()
    jim.forward(-120)
    jim.right(30)
Wn.exitonclick()
http://www.unc.edu/~sunhwa/560/turtle.png

```
