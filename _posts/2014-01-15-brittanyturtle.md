---
layout: post
author: brittany
title: Brittany's Turtle Exercise
---

```
import turtle
window = turtle.Screen()

#set background color
window.bgcolor("snow")

#create turtle used for borders and initiate initial color/shape/speed
myrtle = turtle.Turtle()
myrtle.color("mediumvioletred")
myrtle.shape("classic")
myrtle.speed(10)

#create turtle used for central design and initiate initial colors/speed
hilda = turtle.Turtle()
center_color = "mediumvioletred"
outer_color = "palevioletred"
hilda.color(outer_color)
hilda.shape("circle")
hilda.speed(10)

#modified code found in trl-24 exercise of HTTLACS textbook
#flower-like design
def create_flower(x_axis, y_axis):
    hilda.penup()
    hilda.color(outer_color)    #makes all "petals" the outer color
    hilda.goto(x_axis, y_axis)  #moves turtle to whatever spot you want flower to begin
    hilda.down()
    for i in range (10):
        hilda.forward(50)
        hilda.stamp()
        hilda.forward(-50)
        hilda.right(36)
    hilda.color(center_color)  #sets the turtle the center color in preparation for stamping  
    hilda.stamp()              #leaves a stamp for the center of the flower

def top_bottom_border(x_axis, y_axis, reps):
    myrtle.up()
    myrtle.goto(x_axis,y_axis)       #moves turtle to each corner
    for i in range(reps):         #prints stamp all the way across top
        myrtle.stamp()
        myrtle.forward(10)

def side_border(x_axis, y_axis, reps):
    myrtle.goto(x_axis,y_axis)
    for i in range(reps):
        #first check to see if i is even, criteria found at link below
        #http://stackoverflow.com/questions/13636640/python-checking-odd-even-numbers-and-changing-outputs-on-number-size
        #allows for every other stamp to be a different color
        if i%2 == 0:
            myrtle.color("mediumvioletred")
            myrtle.stamp()
            myrtle.forward(10)
        else:
            myrtle.color("palevioletred")
            myrtle.stamp()
            myrtle.forward(10)

#create first center flower
for i in range (10):
    hilda.forward(50)
    hilda.stamp()
    hilda.forward(-50)
    hilda.right(36)
hilda.color(center_color)    
hilda.stamp()

#call function create_flower to create remaining 4 flowers
create_flower(-100, 100)
create_flower(100, -100)
create_flower(-100, -100)
create_flower(100, 100)

#call function to create the top and bottom borders
top_bottom_border(-200, 200, 41)
top_bottom_border(-200, -200, 41)
myrtle.right(180)      #turn myrtle right 180 degrees so inner top/bottom borders will form interlocked pattern
myrtle.color("palevioletred")
top_bottom_border(200, 190, 41)
top_bottom_border(200, -190, 41)

#turn myrtle 90 degrees right and begin to create side borders
myrtle.right(90)
side_border(-200, -180, 38)
myrtle.up()
side_border(200, -180, 38)
myrtle.up()
myrtle.left(180)    #turn myrtle 180 degrees left so inner side borders will form interlocked pattern
side_border(-190, 180, 38)
myrtle.up()
side_border(190, 180, 37)

window.exitonclick()
```


![Turtle image](http://www.unc.edu/~bmhayes/inls560/turtleimage.png)

***Reflection***
