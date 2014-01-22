---
layout: post
author: srmoore5
title: "Sierra's Python Exercises"
---

Take the sentence: All work and no play makes Jack a dull boy. 
Store each word in a separate variable, then print out the sentence on one line using print:

```
a = "All"
b = "work"
c = "and"
d = "no"
e = "play"
f = "makes"
g = "Jack"
h = "a"
i = "very"
j = "dull"
k = "boy."

print a, b, c, d, e, f, g, h, i, j, k
```
Below is a program that will compute mpg for a car:
```

# Get the number of mpg for a car
miles_driven = int(raw_input ("How many miles have been driven?"))

gallons_used = int(raw_input ("How many gallons have been used?"))

mpg= (miles_driven % gallons_used)

print "The mpg of your car is:", mpg

```
Here is a program that will convert a user-input number of degrees celsius to degrees farenheit:
```
# Convert celsius to farenheit
celcius_temp=int(raw_input("What is the celsious temperature?"))

farenheit_temp=int(celcius_temp * 5/9 + 32)

print "The temperature in farenheight is:", farenheit_temp, "F"
```
Here is a program that will convert a user-input number of degrees degrees fahrenheit to degrees celsius:
```
# Convert farenheit to celcius
farenheit_temp = int(raw_input("What is the farenheit temperature?"))

celsius_temp = int((farenheit_temp -32) * 5/9)

print "The temperature in celsius is:", celsius_temp, "C"
```

Here is a program that will convert degrees or celsius as above, depending on the users' choice:
```

convert_temp = int(raw_input(" Give a temperature input?"))
    
# Convert to farenheit or celcius
inputed_temp = raw_input("Do you want to convert to farenheit or celcius?")
if (inputed_temp) == "farenheit":
    celsius_temp = int(convert_temp-32) * 5/9
    print "The temperature conversion is:", celsius_temp, "C"
if (inputed_temp)== "celsius":
    farenheit_temp = int(convert_temp * 5/9 + 32)
    print "The temperature conversion is", farenheit_temp, "F"
```








