---
layout: post
author: slaffer
title: Sophia's Python Basics
---

##Jack is a Dull Boy Program

```
a = "All"
b = "work"
c = "and"
d = "no"
e = "play"
f = "makes"
g = "Jack"
h = "a"
i = "dull"
j = "boy"

print(a, b, c, d, e, f, g, h, i, j)
```

Output: All work and no play makes Jack a dull boy

##Computing MPGs Program

```
miles_driven = int(raw_input("How many miles have you driven"))
gallons_used = int(raw_input("How many gallons of gas did you use"))

mpg = miles_driven / gallons_used

print ("Your mpg is:" , mpg)

if int(mpg) < 32: print("You are not helping the environment, your car is inefficient.")
if int(mpg) >= 32: print("Your vehicle is efficient, way to go!")
```
Input: 320 miles driven, 10 gallons of gas

Output: Your mpg is: 32
        Your vehicle is efficient, way to go!

##Convert Celsius to Farenheit Program

```
celsius = int(raw_input("What celsius temperature would you like to convert to farenheit?"))

fahrenheit = celsius * (9/5) + 32

print ("The temperature in farenheit is:" , fahrenheit)
```

Input: 0
Output: The temperature in farenheit is: 32

##Convert Farenheit to Celsius Program

```
fahrenheit = int(raw_input("What fahrenheit temperature would you like to convert to celsius?"))

celsius = (fahrenheit - 32) * (5/9)

print ("The temperature in celsius is:" , celsius)
```

Input: 32
Output: The temperature in celsius is: 0

##User's Choice Celsius or Farenheit Conversion

```
conversion_choice = (raw_input("What would you like to convert to: celsius or farenheit?"))

if conversion_choice == "farenheit":
    fahrenheit = int(raw_input("What fahrenheit temperature would you like to convert to celsius?"))
    celsius = (fahrenheit - 32) * (5/9)
    print ("The temperature in celsius is:" , celsius)

if conversion_choice == "celsius":
       celsius = int(raw_input("What celsius temperature would you like to convert to farenheit?"))
       fahrenheit = celsius * (9/5) + 32
       print ("The temperature in farenheit is:" , fahrenheit)
```

Input: celsius, 45
Output: The temperature in farenheit is: 113
