---
layout: post
author: katielmeyer
title: Katie's Turtle Exercise: Fireworks
---

Here's my code.

```
import turtle
window = turtle.Screen()             # Set up the window and its attributes
window.bgcolor("#2E2D4A")            # Make it midnight blue

blueTurtle = turtle.Turtle()           # blue turtle
blueTurtle.color('#A6B2FF')
blueTurtle.pensize(3)

lavenderTurtle = turtle.Turtle()           # lavender turtle
lavenderTurtle.color('#D2B3FF')
lavenderTurtle.pensize(3)
lavenderTurtle.right(9)                    

roseTurtle = turtle.Turtle()           # rose turtle
roseTurtle.color('#FBA6FF')
roseTurtle.pensize(2)
roseTurtle.right(18)

for x in range(10):
    blueTurtle.forward(90)                 # Draw blue
    blueTurtle.penup()
    for i in range(3):
        blueTurtle.forward(20)
        blueTurtle.stamp()
    blueTurtle.forward(-150)
    blueTurtle.right(36)
    blueTurtle.pendown()

for x in range (10):
    roseTurtle.forward(120)                 # Draw rose
    roseTurtle.penup()
    for i in range(5):
        roseTurtle.forward(25)
        roseTurtle.stamp()
    roseTurtle.forward(-245)
    roseTurtle.right(36)
    roseTurtle.pendown()   

for x in range (20):
    lavenderTurtle.forward(80)                 # Draw lavender
    lavenderTurtle.penup()
    for i in range(2):
        lavenderTurtle.forward(30)
        lavenderTurtle.stamp()
    lavenderTurtle.forward(-140)
    lavenderTurtle.right(18)
    lavenderTurtle.pendown() 
    
window.exitonclick()

```

![Turtle image](http://www.katielmeyer.net/inls560/exercise-turtle.PNG)
