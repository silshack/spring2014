---
layout: post
author: jskaa
title: Jessica's Basic Python Exercises
---

## All work and no play makes Jack a dull boy.

```
line = "All work and no play makes Jack a dull boy."
a = line.split()

print a
```


## Is your car environmentally friendly?

```
#Get the number of miles driven
miles_driven = int(raw_input("How many miles have you driven?"))

#Get the number of gallons used
gallons_used = int(raw_input("How many gallons have you used?"))

#Calculate the MPG for the car
mpg = miles_driven/gallons_used

if mpg>32:
    print "Your car has a fuel efficiency of", mpg, "MPG. Awesome!"
elif mpg<32:
    print "Your car has a terrible fuel efficiency of", mpg, "MPG. You should eel terrible."

```
