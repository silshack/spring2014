---
layout: post
author: allen
date: 2014-01-16 2:15pm
title: Allen's Turtle Exercise
---

##Turtle Spyrograph

Here's my turtle spirograph. I wanted to do a cool spirograph thing so I looked up a simple formula for it and as it turns out I can just 
tell the turtle to follow that formula for x,y position. You can pick the turtle color, the background color, and the pensize. I have the 
two radiis of the circles necessary for making the spirograph set to randomly select so the spirograph is somewhat different everytime you
run it. It doesn't work in the interactive textbook, but it works fine in IDLE and the terminal.

![Turtle Spirograph image](http://farm3.staticflickr.com/2882/11984960404_1608f4d0a2.jpg)

```
import turtle          
window = turtle.Screen() 
background = raw_input('What color should the background be?')
window.bgcolor(background)
speed = 0
turtle_color = raw_input('What color should the turtles?')
alex = turtle.Turtle()
alex.color(turtle_color)
turtle_pensize = int(input("What should the turtles pensize be?"))
alex.pensize(turtle_pensize)
alex.penup()
alex.hideturtle()
import math
from random import randint
r=randint(2.0,10.0)
R=randint(180.0,250.0)
count=0.000
p=randint(50.0,100.0)


alex.speed(0)

while count<(2*math.pi):
    if count>0.001:
        alex.pendown()
    alex.setpos((R-r)*math.cos(count) + p*math.cos((R-r)*count/r),(R-r)*math.sin(count) - p*math.sin((R-r)*count/r))
    count += .001
    
window.exitonclick()
```

Here's where I got the formula for a spirograph: [http://www.mathematische-basteleien.de/spirographs.htm](right here)
