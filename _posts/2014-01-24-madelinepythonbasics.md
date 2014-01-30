---
layout: post
author: Madeline Coven
title: Madeline's Python Basics
date: 2014-01-24
---

## My Python Basics

I figured, even though we were excused from this one, that I had worked so hard on figuring it out that I'd post it anyway.  It may not be exactly right, but I do it anyway.
```
print str.split("All work and no play makes Jack a dull boy.”) 
```
Here's the output:
```
['All', 'work', 'and', 'no', 'play', 'makes', 'Jack', 'a', 'dull', 'boy.']
```

I figured I would name the variables after the actual variables in the equation for MPG, since that would be easier for humans to read.  You can see I decided on the simple route.
```
miles = int(raw_input("How many miles did you drive?"))
gallons = int(raw_input("How many gallons of gas did you use?"))
mpg = miles/gallons
print(mpg, "is your MPG")
```
Here's the output:
```
5 is your MPG
```

For the Celsius to Fahrenheit, and Fahrenheit to Celsius, I decided to make my programs as short and simple as possible.
```
celsius = int(raw_input(“How many degrees Celsius?”))
fahrenheit = celsius * 1.8 + 32
print fahrenheit
```
Here's the output:
```
104.0
```
```
fahrenheit = int(raw_input("How many degrees Fahrenheit?"))
celsius = (fahrenheit-32)/1.8
print celsius
```
Here's the output:
```
10.0
```
I decided to break this up into two tasks: one was getting the user's input for Fahrenheit or Celsius, and the other was the user's input for the number of degrees.
```
answer = raw_input("Enter 'celsius to fahrenheit' or 'fahrenheit to celsius'.")
#Celsius to Fahrenheit
if answer == "celsius to fahrenheit":
    fahrenheit = int(raw_input("What is the degrees celsius?"))* 1.8 + 32
    print fahrenheit
#Fahrenheit to Celsius
else:
    celsius = int(raw_input(("What is the degrees fahrenheit?")) - 32)/ 1.8
    print celsius
```
Here's the output.
```
104.0
```
https://github.com/madeline13/spring2014/new/gh-pages/_posts
