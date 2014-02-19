---
layout: post
author: Adrian
title: Adrian's Python Basics
---
##Jack Program
```
var_1 = "All"
var_2 = "work"
var_3 = "and"
var_4 = "no"
var_5 = "play"
var_6 = "makes"
var_7 = "Jack"
var_8 = "a"
var_9 = "dull"
var_10 = "boy."
print var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9, var_10
```
Output:
```
All work and no play makes Jack a dull boy.
```
##MPG Program
```
miles = float(raw_input("How many miles have you driven?"))
gallons = float(raw_input("How many gallons have you used?"))
mpg = miles / gallons
print "Your MPG is:", mpg

if mpg > 25:
     print "Your car is very efficient."
else:
     print "Your car is not very efficient."

```
If the user enters 25, the program will still say that the car is not very efficient, so I could have another if statement for mpgs between 20 and 25.
Output for miles = 20 and gallons = 10:
```
Your MPG is: 2
Your car is not very efficient.
```
##Celsius to Fahrenheit Program
```
celsius = float(raw_input("What is the temperature in Celsius?"))
fahrenheit = float((celsius * 1.8) + 32)
print "It is:", fahrenheit, "degrees Fahrenheit."
```
Output for celsius = 0:
```
It is: 32 degrees Fahrenheit.
```
##Fahrenheit to Celsius Program
```
fahrenheit = float(raw_input("What is the temperature in Fahrenheit?"))
celsius = float((fahrenheit - 32)/1.8)
print "It is:", celsius, "degrees Celsius."
```
Output for fahrenheit = 32:
```
It is: 0 degrees Celsius.
```
##User's Choice: Fahrenheit or Celsius Program
```
scale = str(raw_input("Would you like to convert into Fahrenheit or Celsius?"))

if scale == "Celsius":
    fahrenheit = float(raw_input("What is the temperature in Fahrenheit?"))
    celsius = float((fahrenheit - 32)/1.8)
    print "It is:", celsius, "degrees Celsius."

elif scale == "Fahrenheit":   
    celsius = float(raw_input("What is the temperature in Celsius?"))
    fahrenheit = float((celsius * 1.8) + 32)
    print "It is:", fahrenheit, "degrees Fahrenheit."
```
Output for fahrenheit = 28:
``
It is: -2.22222 degrees Celsius.
```
