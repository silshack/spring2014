---
layout: post
author: jskaa
title: Jessica's Turtle Exercise
---

### A colorful sundial

For my turtle exercise, I made use of 3 separate turtles as well as the random generator for colors. Each time the code is run,
the colors all change randomly. 

I originally wanted to create something which looked like a windmill, but settled on more of a pinwheel design instead. 
To add some design, I added in a sort of spiky looking design in the bacground, as well as a colorful spiral.

The overall effect is quite colorful! 

**My turtle exercise code:**

```
import turtle
import random

wn=turtle.Screen()
wn.bgcolor("#FFF5EE")

fonsica = turtle.Turtle()
fonsica.hideturtle()
fonsica.shape("classic")
for size in range(0,90,1):     
    fonsica.color((random.randrange(256),random.randrange(256),random.randrange(256)))         
    fonsica.forward(size)          
    fonsica.right(22)              
    fonsica.speed(0)


skaa=turtle.Turtle()
skaa.shape("classic")
skaa.color(random.randrange(256),random.randrange(256),random.randrange(256))
for i in range(180):
    skaa.left(2)
    skaa.down()
    skaa.forward(160)
    skaa.stamp()
    skaa.up()
    skaa.forward(-160)
    skaa.speed(0)
    

fonzy=turtle.Turtle()
fonzy.hideturtle()
for i in range(20):
    fonzy.color(random.randrange(256),random.randrange(256),random.randrange(256))
    fonzy.begin_fill()
    for i in range(2):
        fonzy.forward(80)
        fonzy.left(30)
        fonzy.forward(80)
        fonzy.left(150)
    fonzy.end_fill()
    fonzy.left(360/20)
    fonzy.speed(0)


wn.exitonclick()

```

![Turtle image](http://puu.sh/6oq8q.png)
    
