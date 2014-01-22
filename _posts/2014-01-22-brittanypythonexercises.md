---
layout: post
author: brittany
title: Brittany's Python Exercises
---

#First Exercise

```
sentence = "All work and no play makes Jack a dull boy"
words = sentence.split()
for word in words:
    print word
new_sentence = ""
for word in words:
    new_sentence = new_sentence + " " + word
print new_sentence.strip()
```

###Output

```
All
work
and
no
play
makes
Jack
a
dull
boy
All work and no play makes Jack a dull boy
```

#Second Exercise

```
miles_driven = float(input("Enter the number of miles driven"))
gallons_used = float(input("Enter the number of gallons of gas used"))
mpg = float(miles_driven / gallons_used)
#based efficiency on levels stated in article below
#http://www.nytimes.com/2012/08/29/business/energy-environment/obama-unveils-tighter-fuel-efficiency-standards.html?_r=0
if mpg >= 29:
    print "Your MPG is %s. Your car has a high fuel efficiency." %mpg
else:
    print "Your MPG is %s. Your car has a low fuel efficiency." %mpg
```

###Output
I entered inputs of miles_driven = 1050 and gallons_used = 35

```
Your MPG is 30.0. Your car has a high fuel efficiency.
```


#Third Exercise

```
celcius_temp = float(input("Enter a temperature in degrees celcius"))
fahrenheit_temp = ((celcius_temp*1.8) + 32)
print "The temperature you entered is equivalent to", fahrenheit_temp, "degrees Fahrenheit"
```

###Output
I entered input of celcius_temp = 40

```
The temperature you entered is equivalent to 104.0 degrees Fahrenheit
```

#Fourth Exercise
```
fahrenheit_temp = float(input("Enter a temperature in degrees fahrenheit"))
celcius_temp = (fahrenheit_temp - 32) / 1.8
print "The temperature you entered is equivalent to", celcius_temp, "degrees Celcius"
```

###Output
I entered input of fahrenheit_temp = 101

```
The temperature you entered is equivalent to 38.3333333333 degrees Celcius
```


#Fifth Exercise

```
def convert_temp():
    conversion_type = int(input("Enter 0 if you would like to convert from Fahrenheit to Celcius; Enter 1 if you would like to convert from Celcius to Fahrenheit"))
    if conversion_type == 0:
        fahrenheit_temp = float(input("Enter a temperature in degrees fahrenheit"))
        celcius_temp = (fahrenheit_temp - 32) / 1.8
        print "The temperature you entered is equivalent to", celcius_temp, "degrees Celcius"
    elif conversion_type == 1:
        celcius_temp = float(input("Enter a temperature in degrees celcius"))
        fahrenheit_temp = ((celcius_temp*1.8) + 32)
        print "The temperature you entered is equivalent to", fahrenheit_temp, "degrees Fahrenheit"
    else:
        print "Your input is invalid"
        return convert_temp()
    
convert_temp()
```

###Output
I entered input of conversion_type = 0 and fahrenheit_temp = 45

```
The temperature you entered is equivalent to 7.22222222222 degrees Celcius
```

I entered input of conversion_type = 1 and celcius_temp = 10

```
The temperature you entered is equivalent to 50.0 degrees Fahrenheit
```

I entered input of conversion_type = 2, then prompts you for more input...

```
Your input is invalid
```
