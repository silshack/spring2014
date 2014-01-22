---
layout: post
author: libbby
title: Libby's Turtle Exercise
---

Here is my turtle, making a multi-colored snowflake shape:

![Turtle image] (http://farm8.staticflickr.com/7458/11991117556_763167735a_o.png)

Below is the code:

```
import turtle

wn = turtle.Screen()

background_color = raw_input("What color would you like the background to be?") # prompts user for background color
wn.bgcolor(background_color)        # set the window background color

tess = turtle.Turtle()


tess_color1 = raw_input("What color should Tess the turtle be?") # prompts user for 1st turtle color
tess_color2 = raw_input("2nd color?") # prompts user for 2nd turtle color
tess_color3 = raw_input("3rd color?") # prompts user for 3rd turtle color


tess_size = int(raw_input("What size should Tess's pen be?")) # prompts user for pen size
tess.pensize(tess_size)                 # set the width of her pen
tess.shape("arrow") # set tess's shape to an 'arrow'

tess.color(tess_color1)              # make tess 1st desired color
for x in range(6): # 6 iterations of the following:
    tess.forward(50)
    tess.stamp()
    tess.penup() # to avoid leaving a line
    tess.forward(25)
    tess.stamp() # to stamp a shape
    tess.forward(-75)
    tess.pendown() # puts pen back down, for sake of drawing lines
    tess.left(60)

tess.color(tess_color2) # make tess 2nd desired color
tess.left(30)    
for y in range(6):
    tess.forward(100)
    tess.stamp()
    tess.penup()
    tess.forward(25)
    tess.stamp()
    tess.forward(-125)
    tess.pendown()
    tess.left(60)

tess.color(tess_color3) # make tess 3rd desired color
tess.left(15)    
for y in range(12):
    tess.forward(150)
    tess.stamp()
    tess.penup()
    tess.forward(25)
    tess.stamp()
    tess.forward(-175)
    tess.pendown()
    tess.left(30)
    
wn.exitonclick()                # wait for a user click on the canvas

```

This exercise was a fun way to start learning Python. The idea of using code to draw pictures is fascinating, but (yes, there's a 'but') I realized how shaky I am with my geometry skills. I feel like that limits what I could come up with on my own, without modifying existing turtle code out there on the web (which is fun too, but I wanted to see what I could make on my lonesome).
On a brighter note, I'm loving how simple python is (no checking for curly brackets around my loops and semicolons every where -- I'm looking at you, Java!)
