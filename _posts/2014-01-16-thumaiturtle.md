---
layout: post
author: tlchristian
date: 2014-01-16
title: "Thu-Mai's Turtle Exercise"
---

**Does Turtle Love You or Love You Not?**

For this Turtle Exercise, I ~~decided to make~~ ended up making an interactive love prediction flower. I wanted to play with user inputs, polygons, colors, and a little bit of cute. As I kept playing with the flower graphic, I decided to add some if-else code and write text in the window. This is what makes up the "prediction" part.

When you run the code, you will be asked to enter in a number of flower petals. The turtle will draw a flower with that number of randomly colored petals. Based on the number of petals selected, the turtle will tell you whether he loves you or loves you not.\*

**The code:**

```
import turtle
import random # random library includes random number generator method
wn = turtle.Screen()
wn.bgcolor("lightblue")

ben = turtle.Turtle()

ben.hideturtle() # make turtle invisible
ben.setpos(0,-190) # starting coordinates for turtle

# makes stem and leaves
ben.pensize(4)
ben.color("#006600")
ben.fillcolor("#006600")
ben.begin_fill()
ben.left(90)
ben.forward(50)
ben.circle(10,180) # semicircle leaf
ben.left(90)
ben.forward(20)
ben.left(90)
ben.forward(70)
ben.circle(-10,-180) # semicircle leaf
ben.right(90)
ben.forward(20)
ben.right(90)
ben.forward(150)
ben.end_fill()

# prompts user for number of flower petals
squarenum = raw_input("Enter number of flower petals:")

# makes evenly spaced, randomly colored square petals
for i in range(int(squarenum)):
    # assigns random color (r,g,b) to each petal
    ben.color(random.randint(0,255),random.randint(0,255),random.randint(0,255))
    ben.begin_fill()
    for i in range(4):
        ben.forward(80)
        ben.left(90)
    ben.end_fill()     
    ben.left(360/(int(squarenum)))

# makes center of flower
ben.color("#006600")
ben.shape("circle")
ben.stamp()

# loves or loves not - odd number of petals "loves"; even number of petals "loves not"
ben.setpos(20,-190) # moves turtle to desired text location
if int(squarenum)%2 == 0: # checks for division by 2 remainder; if 0, then even number of petals
    ben.write("Loves me not.")
else:
    ben.write("Loves me!")
    
wn.exitonclick()
```

**The Results:**

![Turtle image](https://lh3.googleusercontent.com/-fzw_THPQR0A/UtgKc1L425I/AAAAAAAAA6A/x7n0gwMTpUc/w414-h416-no/tlchristian_turtleflower2.png)

![Turtle image](https://lh5.googleusercontent.com/-uHDSeiaLKps/UtgKcItCRJI/AAAAAAAAA58/0e1lfinD_dw/w418-h415-no/tlchristian_turtleflower1.png)


\* *Of course, as with real flowers, only an odd number of petals will result in turtle love.*

