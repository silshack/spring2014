---
layout: post
title: Julie's Python Post
author: julie
date: 2014-01-24
---

Here's what I came up with:

```

x = "All work and no play makes Jack a dull boy"
x.split(' ', 1)
print x

```
Output:

```
All work and no play makes Jack a dull boy
```

Miles to gallons:

```

print("This program calculates mpg.")

miles = input("How many miles did you drive?")
miles = int(miles)
 
gallons = input("How many gallons did you use?")
gallons = int(gallons)
 
mpg = miles / gallons
print ("Miles per gallon:",mpg)

```
Output:

```
This program calculates mpg.
Miles per gallon: 8.33333334
```

Fahrenheit to Celsius:

```
F = input('Enter temperature in Fahrenheit')
F = int(F)
C = ((5.0/9.0)*(F - 32))
print 'Temperature in degrees Celsius is ', C

```
Output:
```
Temperature in degrees Celsius is  10.0
```

Celsius to Fahrenheit:
```

C = int(C)
F = ((9.0/5.0)*(C + 32))
print 'Temperature in degrees Fahrenheit is ', F
```

Output
```
Temperature in degrees Farenheit is 40.0
```

Convert depending on Input:
```
x = (raw_input("Do you want to convert fahrenheit or celsius?"))
if x == "fahrenheit":
	y = (raw_input("what is the fahrenheit temperature?"))
	f = (int(y) - 32)*5.0 / 9
	print f

if x == "celsius":
	n = (raw_input("what is the celsius temperature?"))
	z = (int(n) *9) / 5 + 32
	print z
```

Output:
```
86.0
```

