---
layout: post 
author: ethan
title: Ethan's turtle 
date: 2014-01-10
---

I made fireworks...I guess. It's somewhat simple compared to others. The colors are changable. I'm just patriotic and whatnot, so I went with red, white, and blue. 

```
import turtle
steve = turtle.Turtle()
wn = turtle.Screen()
#background color
background = raw_input("What color should the background be?")
wn.bgcolor(background)
#line 1 color
lineone = raw_input("What color do you want line 1 to be?")
#line 2 color
linetwo = raw_input("What Color do you want line 2 to be?")
#we want steve to be fast 
steve.speed("fastest")
#draws steve 
for i in range (36):
    if i%2==0:
        steve.color(lineone)
    else:
        steve.color(linetwo)
    for j in range (10):
        steve.forward(50)
        steve.right(36)
    steve.right(10)
steve.up()
wn.exitonclick()
```

![Imgur](http://i.imgur.com/2xCjWWl.png?1)

So, yeah, here it is. 

babykav out. 
