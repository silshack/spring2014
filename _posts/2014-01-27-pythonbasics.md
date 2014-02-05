---
layout: post
author: srmoore5
title: "Sierra's Python Basics"
---

Here are Sierra's python exercises.

<b>(1) This is a program for taking the sentence "All work and no play makes Jack a dull boy" and storing each word in a separate variable, then printing out the sentence on one line using print.:</b>

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
Here is a sample input displaying a very wise adage:
![Jack](http://farm8.staticflickr.com/7333/12091866115_848778dd3f_b.jpg)

<b>(2) Below is a program that will compute mpg for a car(useful!):</b>
```

# Get the number of mpg for a car
miles_driven = int(raw_input ("How many miles have been driven?"))

gallons_used = int(raw_input ("How many gallons have been used?"))

mpg= (miles_driven % gallons_used)

print "The mpg of your car is:", mpg

```
Here is a sample input from the mpg program:
![mpg](http://farm4.staticflickr.com/3759/12091836965_34487c3aa0_b.jpg)

<b>(3) This a program that will convert a user-input number of degrees celsius to degrees farenheit(amazing!):</b>
```
# Convert celsius to farenheit
celsius_temp=int(raw_input("What is the celsious temperature?"))

farenheit_temp=int(celsius_temp * 5/9 + 32)

print "The temperature in farenheit is:", farenheit_temp, "F"
```
Here is a sample input from the farenheit program:
![to_far](http://farm8.staticflickr.com/7352/12093160286_0e9961f13f_b.jpg)

<b>(4) Here is a program that will convert a user-input number of degrees degrees farenheit to degrees celsius(stupendous):</b>
```
# Convert farenheit to celsius
farenheit_temp = int(raw_input("What is the farenheit temperature?"))

celsius_temp = int((farenheit_temp -32) * 5/9)

print "The temperature in celsius is:", celsius_temp, "C"
```
Here is a sample input from the celsius program:
![to_cel](http://farm8.staticflickr.com/7449/12092567446_c5998ab5d0_b.jpg)

<b>(5) Here is a program that will convert degrees or celsius as above, depending on the users' choice(astonishing!):</b>

```

convert_temp = int(raw_input(" Give a temperature input?"))
    
# Convert to farenheit or celsius
inputed_temp = raw_input("Do you want to convert to farenheit or celsius?")
if (inputed_temp) == "farenheit":
    celsius_temp = int(convert_temp-32) * 5/9
    print "The temperature conversion is:", celsius_temp, "C"
if (inputed_temp)== "celsius":
    farenheit_temp = int(convert_temp * 5/9 + 32)
    print "The temperature conversion is", farenheit_temp, "F"
```
Here is a sample input from the temperature conversion program:
![conversion](http://farm4.staticflickr.com/3691/12092855384_8238f55272.jpg)


![the_bitter_end](http://farm1.staticflickr.com/168/371341803_3249a38ca4_z.jpg)
