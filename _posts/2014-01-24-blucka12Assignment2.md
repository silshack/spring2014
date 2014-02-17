---
layout: post
author: blucka12
title: Oak's Second Assignment
---

## Assignment 2

#1 

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

Output:

```
All work and no play makes Jack a dull boy
```

#2

```
miles = int(raw_input("How many miles did you drive?"))
gallons = int(raw_input("How many gallons did it take to fill your tank?"))

mpg = miles/gallons

print mpg
```

Output:

```
17
```

#3

```
Celcius = int(raw_input("Enter a temperature in Celcius: "))

Fahrenheit = Celcius * 9 / 5 + 32

print "Temperature:", Celcius, "Celcius = ", Fahrenheit, " F"
```

Output:

```
Temperature: 35 Celcius =  95  F
```

#4 

```
Fahrenheit = int(raw_input("Enter a temperature in Fahrenheit: "))

Celsius = (Fahrenheit - 32) * 5 / 9

print "Temperature:", Fahrenheit, "Fahrenheit = ", Celsius, " C"
```

Output:

```
Temperature: 89 Fahrenheit =  31  C
```

#5

```
question = raw_input("Do You Use Celcius (0), or Fahrenheit (1) ?")

if question == "0":
    Celcius = int(raw_input("Enter a temperature in Celcius: "))

    Fahrenheit = Celcius * 9 / 5 + 32

    print "Temperature:", Celcius, "Celcius = ", Fahrenheit, " F"

if question == "1":
    Fahrenheit = int(raw_input("Enter a temperature in Fahrenheit: "))

    Celsius = (Fahrenheit - 32) * 5 / 9

    print "Temperature:", Fahrenheit, "Fahrenheit = ", Celsius, " C"
```

Output:

```
Temperature: 89 Fahrenheit =  31  C
```
