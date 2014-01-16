---
layout: post
author: slaffer
title: Sophia's Turtle Exercise
---

Here is my True Blood inspired vampire named Bill. I started out playing with making overlapping circles, which now make up Bill's "nose." I then wanted to experiment with moving the turtle to another part of the screen without leaving a trace and make circles in the corners of the page and then decided to attempt make a happy vampire. I found information on slowing down the turtle for drawing the nose [here](http://docs.python.org/2/library/turtle.html?highlight=speed#turtle.speed). I also wanted to hide my turtles after completing the drawing and made use of a fellow classmate (Mandy) who had already discovered the code to hide a turtle. 

```
import turtle
wn = turtle.Screen()
wn.bgcolor("MistyRose")
jamal = turtle.Turtle()
tina = turtle.Turtle()
bill = turtle.Turtle()
jason = turtle.Turtle()
sookie = turtle.Turtle()
eric = turtle.Turtle()
arlene = turtle.Turtle()
lafayette = turtle.Turtle()
jamal.pensize(5)
jamal.color("purple")
jamal.shape("turtle")
jamal.speed(10)

#draws the vampire's eyes
tina.color("White")
tina.penup()
tina.left(90)
tina.forward(160)
tina.left(90)
tina.forward(140)
tina.pendown()
tina.forward(10)
tina.fillcolor("White")
tina.begin_fill()
tina.circle(30)
tina.end_fill()
tina.hideturtle()

bill.color("White")
bill.penup()
bill.left(90)
bill.forward(110)
bill.right(90)
bill.forward(140)
bill.pendown()
bill.forward(10)
bill.fillcolor("White")
bill.begin_fill()
bill.circle(30)
bill.end_fill()
bill.hideturtle()

sookie.color("Black")
sookie.penup()
sookie.left(90)
sookie.forward(140)
sookie.left(90)
sookie.forward(140)
sookie.pendown()
sookie.forward(10)
sookie.fillcolor("Black")
sookie.begin_fill()
sookie.circle(15)
sookie.end_fill()
sookie.hideturtle()

jason.color("Black")
jason.penup()
jason.left(90)
jason.forward(120)
jason.right(90)
jason.forward(140)
jason.pendown()
jason.forward(10)
jason.fillcolor("Black")
jason.begin_fill()
jason.circle(15)
jason.end_fill()
jason.hideturtle()

eric.color("Red")
eric.pensize(8)
eric.penup()
eric.right(90)
eric.forward(130)
eric.right(90)
eric.forward(110)
eric.left(135)
eric.pendown()

# draws the vampire's smile
for t in range(47):
    eric.forward(5)
    eric.left(2)
    eric.hideturtle()

#draws the vampire's nose
for j in range(6):
    jamal.left(60)    
    jamal.circle(60)
    jamal.hideturtle()
    
#draws the vampire's fangs
arlene.color("Red")
arlene.fillcolor("Red")
arlene.pensize(8)
arlene.penup()
arlene.right(90)
arlene.forward(130)
arlene.right(90)
arlene.forward(110)
arlene.left(50)
arlene.pendown()
arlene.begin_fill()
arlene.forward(45)
arlene.left(135)
arlene.forward(57)
arlene.end_fill()
arlene.hideturtle()

lafayette.color("Red")
lafayette.fillcolor("Red")
lafayette.pensize(8)
lafayette.penup()
lafayette.right(90)
lafayette.forward(130)
lafayette.left(90)
lafayette.forward(100)
lafayette.right(50)
lafayette.pendown()
lafayette.begin_fill()
lafayette.forward(45)
lafayette.right(135)
lafayette.forward(62)
lafayette.end_fill()
lafayette.hideturtle()

wn.exitonclick()
```

![Turtle image](http://i.imgur.com/fcJ6Pwj.png)
