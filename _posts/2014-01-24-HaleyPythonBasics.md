---
layout: post
author: haley
title: Haley's Python Basics Assignment
---

Here are the 5 programs I wrote for this exercise:

## 1. Homage to The Shining:

Version 1:

```
sentence = "All work and no play makes Jack a dull boy"
a = sentence.split(" ")    #makes a list of all the words in the string
print a    #prints the comma separated list
    
```

Version 2:

```
sentence = "All work and no play makes Jack a dull boy"
a,b,c,d,e,f,g,h,i,j = sentence.split(" ")    #splits the sentence into 10 different variables, allowing the user to     manipulate which ones get printed and in what order
print a,b,c,d,e,f,g,h,i,j    #prints each variable value individually

```

Version 2 where only a new words get printed:

```
sentence = "All work and no play makes Jack a dull boy"
a,b,c,d,e,f,g,h,i,j = sentence.split(" ")
print b,c,d,f,g,i

```

## 2. Gas on a Student Budget:

```
miles_driven = int(raw_input("How many miles were driven during the trip?"))
gallons_used = int(raw_input("How many gallons were used during the trip?"))    
mpg = miles_driven / gallons_used    #calculates the miles per gallon by dividing the integer values
print "Your car gets", mpg , "miles to the gallon."

if mpg > 35:
    print ("That's very fuel efficient! Go you and stuff.")
if mpg < 35:
    print ("That isn't very fuel efficient. Planet killer!")    #if statements evaluate the mpg integer and output text

```


## 3. From Canada Degrees to 'Merica Degrees:

```
degrees_c = int(raw_input("Temperature in Celsius:"))
degrees_f = (degrees_c * 9) / 5 + 32
print "Temperature in Fahrenheit:", degrees_f

```


## 4. And back again:

```
degrees_f = int(raw_input("Temperature in Fahrenheit:"))
degrees_c = (degrees_f - 32) * 5 / 9
print "Temperature in Celsius:", degrees_c

```


## 5. Temperature Conversions - Choose Your Own Adventure!

```
temperature = float(raw_input("What is the temperature?"))    #numbers input are converted to decimals
scale = str(raw_input("Is that temperature in Celsius (C) or Fahrenheit (F)?"))

if scale.lower() in ['celsius', 'c']:   #the function reduces a C or Celsius string to lower case
    degrees_f = round(((temperature * 9) / 5 + 32), 2)    #performs the conversion and rounds to the tenths place
    print temperature, "degrees Celsius is equal to", degrees_f, "degrees Fahrenheit." 

if scale.lower() in ['fahrenheit', 'f']:
    degrees_c = round(((temperature - 32) * 5 / 9), 2) 
    print temperature, "degrees Fahrenheit is equal to", degrees_c, "degrees Celsius."

```

These little programs taught me to use a couple of common functions, but also to think critically about where lines need to go.
In Program 5, I had originally placed the "degrees_c" and "degrees_f" above the IF statements. Naturally, the program wouldn't run.
So, I messed around with the order, looking at a couple of examples of other code on teh interwebs, until it worked! That was a great feeling to see it do exactly what I wanted it to do.

Here's the link to my personal page where this post shows up: http://gefionne.github.io/spring2014/
