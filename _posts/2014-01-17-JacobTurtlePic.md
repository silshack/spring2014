--- 
layout: post 
author: jacobthill
title: Jacob's Turtle Exercise 
---

```

import turtle
wn = turtle.Screen()

wn.bgcolor("lightblue")

sun = turtle.Turtle()
sun.pensize(5)
sun.color("orange")
sun.hideturtle()

grass = turtle.Turtle()
grass.pensize(1)
grass.color("green")
grass.shape()
grass.speed(10)

ray = turtle.Turtle()
ray.pensize(4)
ray.color("yellow")
ray.hideturtle()
ray.speed(10)

ground = turtle.Turtle()
ground.pensize(4)
ground.color("brown")
ground.shape()
ground.speed(10)

leaf = turtle.Turtle()
leaf.pensize(5)
leaf.color("green")
leaf.speed(10)

trunk = turtle.Turtle()
trunk.pensize(3)
trunk.color("brown")
trunk.speed(10)


sun.up()
sun.goto(115, 135)
sun.down()
sun.speed(10)

trunk.up()
trunk.goto(-185, -40)
trunk.down()
trunk.begin_fill()
trunk.right(91)
trunk.goto(-186, -251)
trunk.left(91)
trunk.forward(25)
trunk.left(91)
trunk.goto(-167, -40)
trunk.end_fill()

ground.up()	
ground.goto(400, -251)
ground.down()
ground.begin_fill()
ground.forward(-1000)
ground.right(90)
ground.forward(40)
ground.left(90)
ground.forward(1900)
ground.left(90)
ground.forward(40)
ground.end_fill()

for i in range(8):	
	ray.up()
	ray.goto(110, 195)
	ray.down()
	ray.forward(130)
	ray.stamp()
	ray.left(360/8)
	
ray.right(22.5)
	
for i in range(8):
	ray.up()
	ray.goto(110, 195)
	ray.down()
	ray.forward(90)
	ray.stamp()
	ray.left(360/8)
	
sun.begin_fill()

sun.circle(60)
	
sun.end_fill()

ray.up()
ray.goto(110, 175)
ray.down()
ray.pensize(5)

grass.up()
grass.goto(300, -250)
grass.down()

for i in range(35):
	grass.left(75)
	grass.forward(22)
	grass.forward(-22)
	grass.left(15)
	grass.forward(21)
	grass.forward(-21)
	grass.left(15)
	grass.forward(23)
	grass.forward(-23)
	grass.left(75)
	grass.up()
	grass.forward(20)
	grass.down()
	grass.right(180)




leaf.up()
leaf.goto(-200, -100)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-215, -85)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()
	
leaf.up()
leaf.goto(-235, -70)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-215, -55)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-200, -40)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-185, -55)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-165, -40)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-185, -55)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-200, -25)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-215, -40)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-160, -85)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()

leaf.up()
leaf.goto(-145, -35)
leaf.down()
leaf.begin_fill()
leaf.circle(30)
leaf.end_fill()


wn.exitonclick()

```

![Turtle Image](https://scontent-a.xx.fbcdn.net/hphotos-prn1/1527102_10152175220460610_1747892270_n.jpg)
