---
layout: post
author: agooch
title: Mandy's Turtle Exercise
---

This is my turtle code. His name is Bob. He is your furry friend. You can personalize Bob by entering in the background color, 
Bob's color, Bob's outline color, the size of Bob's outline, and the color of Bob's eyes. 

I started playing with this code earlier in the day. I mainly wanted to figure out how to make smoother curves use for loops. 

It took a bit of time to figure out the angles, etc. 

I also decided to add a sun, because I found some lovely code from [here]({{site.url}}http://silshack.github.io/fall2013/post/2013/09/09/Sophie.html) and [here]({{site.url}}http://silshack.github.io/fall2013/gmclendon/2013/09/09/grants-turtle.html). These codes helped to clean up my image a bit.

Overall, I enjoyed the exercise. It was challenging and helped me to better understand what I was doing and how to manipulate the code.

```
import turtle
wn = turtle.Screen()

#set background color
background_color = raw_input("What color should the background be?")
wn.bgcolor(background_color)

#create sun here
sun = turtle.Turtle()
sun.color("yellow")
sun.fillcolor("yellow")

sun.begin_fill()
sun.penup()
sun.backward(20)
sun.left(90)
sun.forward(125)
sun.pendown()
sun.circle(50)
sun.hideturtle()
sun.end_fill()

bob = turtle.Turtle()

#user questions about bob here
bob_color = raw_input("What color should Bob be?")
bob.fillcolor(bob_color)

bob_pencolor = raw_input("What color should Bob's outline be?")
bob.pencolor(bob_pencolor)

bob_size = raw_input("What size line should Bob be drawn with?")
bob.pensize(int(bob_size))

mary_eyes = raw_input("What color are Bob's eyes?")

#start building bob here
bob.begin_fill()
bob.forward(30)
bob.left(60)
bob.forward(20)
bob.right(140)
bob.forward(20)

for x in range(6):
  bob.left(5)
  bob.forward(10)
    
bob.left(120)
bob.forward(30)

for y in range(5):
  bob.right(5)
  bob.forward(10)
    
for z in range(40):
  bob.right(5)
  bob.forward(1)
    
for v in range(3):
  bob.right(-2)
  bob.forward(10)

for b in range(6):
  bob.right(-13)
  bob.forward(7)

for n in range(6):
    bob.right(10)
    bob.forward(10)

bob.right(48)    
bob.forward(80)  
bob.right(30)

for g in range(4):
  bob.left(-20)
  bob.forward(20)
    
bob.forward(5)

for x in range(5):
  bob.left(5)
  bob.forward(10)

bob.forward(2)
bob.left(-140)
bob.forward(24)
bob.left(40)

bob.end_fill()
bob.hideturtle()

#start eye code here
bob_eye = turtle.Turtle()
bob_eye.shape("circle")
bob_eye.pencolor("white")
bob_eye.fillcolor(mary_eyes)
bob_eye.penup()
bob_eye.right(90)
bob_eye.forward(20)
bob_eye.stamp()
bob_eye.left(90)
bob_eye.forward(30)
bob_eye.stamp()

wn.exitonclick()

```

![Turtle image](https://drive.google.com/file/d/0By1Nvdrj1FrZMV9YdHl5Qm1WbWc/edit?usp=sharing)
