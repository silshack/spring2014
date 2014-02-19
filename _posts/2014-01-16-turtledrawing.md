---
layout: post
author: laura
title: Laura’s Turtle Exercise: a silly drawing
---

```
import turtle
 wn = turtle.Screen()
wn.bgcolor("lightgreen")
laura = turtle.Turtle()  
laura.shape("turtle")

# the following was inspired by Aesthete on Stack Overflow (http://stackoverflow.com/questions/12453572/how-can-i-fill-these-squares-in-turtle-python)

laura.color("blue")
laura.begin_fill()    # Begin the fill process.
laura.down()          # begins pendown
for i in range(10):   # For each edge of the shape
    laura.forward(40) # Move forward 40 units
    laura.left(40)
laura.up()       # Pen up
laura.end_fill() # End fill.

laura.goto(100, 120)  # begin a turtle in a new location
laura.color("red")    # little change of color
laura.begin_fill() 
laura.down()       
for i in range(3):  
    laura.right(90)
    laura.forward(20) 
laura.up() 
laura.end_fill() 

laura.goto(-50,-100)
laura.color("yellow")
laura.begin_fill() 
laura.down()       
for i in range(3):  
    laura.right(120)
    laura.forward(100) 
laura.up() 
laura.end_fill() 

laura.goto(0,180)      # playing with the border of the screen
laura.color("black")   # takes turtle to top middle of screen
laura.stamp()

laura.goto(0,-180)     # takes turtle to bottom middle of screen   
laura.color("black")
laura.stamp()

laura.goto(180,-180)   # takes turtle to bottom right corner
laura.color("black")
laura.stamp()

laura.goto(180,180)   # takes turtle to top right corner
laura.color("black")
laura.stamp()

laura.goto(-180,180)  # takes turtle to top left corner
laura.color("black")
laura.stamp()

laura.goto(-180,-180) # takes turtle to bottom left corner
laura.color("black")
laura.stamp()

wn.exitonclick()

```

![Turtle image](https://lh3.googleusercontent.com/Oiayts6yiOWq80c9oqljerLq85a9mcAfF2VgrXAmLcKCDss66SAvxtV3pMs5dfKLYMXQGtJlNVY)
