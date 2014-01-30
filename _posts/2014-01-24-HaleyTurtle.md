---
layout: post
author: haley
title: Haley's Turtle Design
---

I'd have to say this experience was quite different from the Python Basics. I got the chance to create a very tasty picture with a TON of lines of code rather than concise little programs with lots of functions. I am absolutely positive that there are better ways to have written this program, but I was having so much fun and it was working, so I just stuck with it. Reminds me of some choice Jonathan Coulton lyrics:

*Rob say Code Monkey very diligent/ But his output stink/ His code not "functional" or "elegant"/ What do Code Monkey think?*

In this case, my code is functional, but a far cry from elegant. Still, this was a really fun way to learn about Python.

![Turtle Image](http://i.imgur.com/uhRniWr.png)

```
import turtle
window = turtle.Screen()

#set background color
window.bgcolor("white")

#create main turtle
glados = turtle.Turtle()
glados.color("black")
glados.speed(10)
glados.pensize(8)
glados.hideturtle()

glados.penup()
glados.goto(-140,40)
glados.pendown()

#draw first line
glados.goto(140, 100)

#draw second line
glados.goto(-60, -15)

#top curve
glados.goto(-65, -17)
glados.goto(-70, -19)
glados.goto(-75, -19)
glados.goto(-80, -19)
glados.goto(-90, -20)
glados.goto(-100, -18)
glados.goto(-105, -15)
glados.goto(-110, -13)
glados.goto(-115, -8)
glados.goto(-120, -5)
glados.goto(-125, 0)
glados.goto(-127, 10)
glados.goto(-130, 15)
glados.goto(-133, 25)
glados.goto(-134, 30)
glados.goto(-133, 40)

#draw left straight line
glados.penup()
glados.goto(-140, 40)
glados.pendown()
glados.goto(-140, -140)

#bottom curve
glados.goto(-140, -142)
glados.goto(-135, -148)
glados.goto(-130, -150)
glados.goto(-125, -152)
glados.goto(-120, -155)
glados.goto(-115, -158)
glados.goto(-110, -158)
glados.goto(-105, -159)
glados.goto(-100, -160)
glados.goto(-90, -162)
glados.goto(-80, -163)
glados.goto(-70, -162)
glados.goto(-60, -162)

#draw straight bottom line
glados.goto(146, -24)

#draw first delicious chocolate layer
coco1 = turtle.Turtle()
coco1.color("black")
coco1.speed(10)
coco1.pensize(20)
coco1.hideturtle()

coco1.penup()
coco1.goto(-58, -45)
coco1.pendown()
coco1.goto(140, 75)
coco1.goto(141, 60)
coco1.goto(-60, -60)
coco1.goto(-58, -45)

#draw middle delicious raspberry layer
raspberry = turtle.Turtle()
raspberry.color("black")
raspberry.speed(10)
raspberry.pensize(20)
raspberry.hideturtle()

raspberry.penup()
raspberry.goto(-58, -92)
raspberry.pendown()
raspberry.goto(141, 30)
raspberry.goto(140, 18)
raspberry.goto(-60, -110)
raspberry.goto(-58, -103)

#draw bottom delicious chocolate layer
coco2 = turtle.Turtle()
coco2.color("black")
coco2.speed(10)
coco2.pensize(20)
coco2.hideturtle()

coco2.penup()
coco2.goto(-58, -140)
coco2.pendown()
coco2.goto(141, -12)
coco2.goto(140, -24)
coco2.goto(-60, -150)
coco2.goto(-58, -140)

#draw cherry
cherry = turtle.Turtle()
cherry.color("black")
cherry.fillcolor("black")

cherry.begin_fill()
cherry.penup()
cherry.backward(70)
cherry.pendown()
cherry.circle(35)
cherry.hideturtle()
cherry.end_fill()

#draw stem
stem = turtle.Turtle()
stem.color("black")
stem.speed(10)
stem.pensize(8)
stem.hideturtle()

stem.penup()
stem.goto(-65, 60)
stem.pendown()
stem.goto(-25, 90)
stem.goto(-55, 110)

print "THE CAKE IS A LIE"

```

