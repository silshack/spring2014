---
layout: post 
author: ethan
title: Ethan's Python Basic Exercise
date: 2014-01-22
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

here is the output 1

```
Your car averaged  20  miles per gallon
You need to step up your mpg
```

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

output

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

output

```
It is  14.4444444444  degrees Celcius.
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

output 

```
It is  104.0  degrees Fahrenheit.
```


Okay, well that's it! 
babykav out. 
