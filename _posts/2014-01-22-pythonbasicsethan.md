---
layout: post 
author: ethan
title: My Name Is Ethan and I like Turtles 
date: 2014-01-17
---

Okay, well I'm done. Here are all of my posts. 

##first one 

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

print a, b, c, d, e, f, g, h, i, j
```

this is the output 

```
All work and no play makes Jack a dull boy
```

##second one 

```
miles = int(raw_input("how many miles have you driven?"))
gallons = int(raw_input("how many gallons have you used?"))
mpg = miles / gallons
print "Your car averaged ", mpg, " miles per gallon"

if mpg > 29:
	print "Your car get's pretty good mpg"
else:
	print "You need to step up your mpg" 
```

I put in 40 for miles and 2 for gallons 
here is the output 1

```
Your car averaged  20  miles per gallon
You need to step up your mpg
```

I put in 60 for miles and 2 for gallons 
here is output 2

```
Your car averaged  30  miles per gallon
Your car get's pretty good mpg
```

##third one 

degrees C to F

```
dc = int(raw_input("Enter degrees Celcius"))
df = (dc * 1.8) + 32
print "It is ", df, " degrees Fahrenheit."
```

I put in 23. This is the output

```
It is  73.4  degrees Fahrenheit.
```

##fourth one 

degrees F to degrees C

```
df = int(raw_input("Enter degrees Fahrenheit"))
dc = (df - 32) / 1.8
print "It is ", dc, " degrees Celcius."
```

I put in 60. This is the output

```
It is  15.5555555556  degrees Celcius.
```

##fifth one 

degrees F or C conversion 

```
degree = raw_input("If you want Degrees F to C, enter F. If you want Degrees C to F, enter C.")
if degree == "C":
	dc = int(raw_input("Enter degrees Celcius"))
	df = (dc * 1.8) + 32
	print "It is ", df, " degrees Fahrenheit."
else:
	df = int(raw_input("Enter degrees Fahrenheit"))
	dc = (df - 32) / 1.8
	print "It is ", dc, " degrees Celcius."
```

I put in "C" and then 40. This is the output 

```
It is  104.0  degrees Fahrenheit.
```

I put in "F" and then 56. This is the output

```
It is  13.3333333333  degrees Celcius.
```

##reflections 
I didn't really have any trouble with any of them until I got to the last one where the user got to chose. 
I didn't know how to make it to where the user got to chose if they wanted to convert a certain way. Once
I figured out how to make it to where they could then I had to make sure they did the right thing and that
took some trial and error. Other than that, I think it was all okay. 

Okay, well that's it! 
babykav out. 
