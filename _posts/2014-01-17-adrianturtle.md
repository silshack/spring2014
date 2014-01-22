---
layout: post
author: Adrian
title: Adrian's Turtle Exercise
---

The 
first time I drew the rainbow, it took up about 80 lines, so I used a function and for loop to condense the code. I also 
set the turtle to go at "ludicrous" speed which is a predefined constant in the turtle library. I spent a long time trying 
to figure out the geometry involved, and used a lot of guess and check.

![Turtle image](https://f.cloud.github.com/assets/6354212/1945696/8a7bdb70-7fd5-11e3-8487-5a24965210ed.png)

```
import turtle

wn = turtle.Screen()

# set the window background color
wn.bgcolor("skyblue")   

kevin = turtle.Turtle()             
kevin.shape("turtle")
kevin.speed('ludicrous')

def drawRainbow(kevin, radius, width):
    kevin.penup()
    colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "skyblue"]
    kevin.right(-90)
    
    for i in range(len(colors)):
        kevin.color(colors[i])
        pos_1 = radius - (i/7) * width
        # 7 is the length of the list of colors - 1
        kevin.goto(pos_1, -50)
        kevin.pendown()
        kevin.begin_fill()
        kevin.circle(pos_1, 180)
        kevin.end_fill()
        kevin.penup()
        kevin.right(180)
        
drawRainbow(kevin, 200, 150)
kevin.goto(0, -50)

wn.exitonclick()                
```


