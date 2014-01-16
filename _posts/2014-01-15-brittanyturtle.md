---
layout: post
author: brittany
title: Brittany's Turtle Exercise
---

For my Turtle program, I did a flower-like design with a border around it. Code and image below:

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

## Reflection
This was a fun exercise! I didn’t really have an inspiration for my image at the outset, but I wanted to try my hand at moving things around on the canvas, as well as using functions. I started out by creating the top and bottom borders. This gave me a chance to test out the goto() function. Trying to figure out what coordinates to use was tricky, but I just tested out lots of combinations until the turtle was stamping in the area I wanted it to. I also had a bit of trouble figuring out how to reverse the pattern; however, again, by testing out different combinations of right/left, degree values, and coordinate values. Even when I didn’t completely understand how the different elements of the canvas were laid out, by simply trying out various combinations I was able to get something I was satisfied with without too much difficulty.

The center design was modified from one of the exercises given in the interactive textbook; I just changed the colors and pen shape, and kept the pen down as it cycled through the for-loop. Not too complicated, but I did find it easier to pick good coordinates when I got to this point (perhaps in part due to the practice from working with the borders).

I started out by writing out chunks of the program just line by line, such as below (in creating a border):

```
...
myrtle.up()
myrtle.goto(-200,190)
#myrtle.stamp()
#myrtle.forward(10)
#myrtle.stamp()
#myrtle.forward(10)
#myrtle.stamp()
#myrtle.forward(10)
#myrtle.stamp()
#myrtle.forward(10)
#myrtle.stamp()
...

```

I knew that for-loops would offer a much better approach, but I found this helpful just as I was getting oriented with the different functions in the turtle library and how my ideas would actually be rendered on the canvas. Converting it to a for-loop was really easy; however, it still resulted in a lot of code. I decided to try my hand at writing some functions since a lot of the code was really repetitive. It seemed to work pretty well I think. I wasn’t sure where exactly to begin and end the function routines in some cases. For instance, with the first center shape, I wrote out a bit of the function directly in the code, then called the function for the next four instances since I didn’t want to use certain lines of the function for that first instance. In later cases (with the border functions), I found myself including some directional calls (like right(), up(), etc) in the code itself rather than including them as part of the function since they varied depending on which border I was working with. Ultimately, my code ran and rendered the same when I refactored as it did when I wrote out all the for-loops, so I was satisfied!

I also just wanted to try out some if-else statements and variable assignments in a couple of cases, which I found useful for the program. In the if-statement, I used a bit of logic I found on [this site](http://stackoverflow.com/questions/13636640/python-checking-odd-even-numbers-and-changing-outputs-on-number-size).
