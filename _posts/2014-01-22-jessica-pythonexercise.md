---
layout: post
author: jskaa
title: Jessica's Basic Python Exercises
---

## All work and no play makes Jack a dull boy.

I originally went through and assigned each word to a different variable by myself (e.g. a="All", b="work", etc),
but then someone mentioned the split function in class. I then googled around, and found the ```.split()``` function,
which could automatically split up a sentence into different variables. 


This was my code:
```
line = "All work and no play makes Jack a dull boy."
a = line.split()

print a
```

This was the output:
```
['All', 'work', 'and', 'no', 'play', 'makes', 'Jack', 'a', 'dull', 'boy.']
```



## Is your car environmentally friendly?

This exercise was pretty fun, as it was simple and allowed me to practice a logical statement (yay! I need the practice). 
I set it so that if python calculated a mpg of 32 or better, a positive message would show, whereas if the mpg was lower than 32, a slightly condescending one would pop up. 

```
#Get the number of miles driven
miles_driven = int(raw_input("How many miles have you driven?"))

#Get the number of gallons used
gallons_used = int(raw_input("How many gallons have you used?"))

#Calculate the MPG for the car
mpg = miles_driven/gallons_used

if mpg>=32:
    print "Your car has a fuel efficiency of", mpg, "MPG. Awesome!"
elif mpg<32:
    print "Your car has a terrible fuel efficiency of", mpg, "MPG. You should feel bad."
```

If the mpg was 32 or better, the output would be:
```
Your car has a fuel efficiency of 48 MPG. Awesome!
```

If the mpg was worse than 32, the output would be:
```
Your car has a terrible fuel efficiency of 20 MPG. You should feel bad.
```


## Finding Fahrenheit

```
#Get temperature in celsius
temp_c = int(raw_input("What is the temperature in celsius?"))

#Convert to fahrenheit
temp_f = (temp_c*(9/5.0))+32

#print message
print "The temperature in fahrenheit is", temp_f
```

## Finding Celsius

```

```
