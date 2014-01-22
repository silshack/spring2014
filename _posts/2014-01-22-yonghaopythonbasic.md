---
layout: post
author: yonghao
title: yonghao's Python Basic Exercise
---

## EX1: Take the sentence

```
sentence = "All work and no play makes Jack a dull boy"
split_sentence = sentence.split()
i=0
while split_sentence[i]!=0:
  print split_sentence[i],
  i=i+1
  
```

Outputs

```

All work and no play makes Jack a dull boy

```

## EX2: Calculate the MPG of a car

```
# Get the number of miles
miles = float(raw_input("Please input the mils driven"))

# Get the number of gallons
gas = float(raw_input("Please input the  number of gallons used "))

# Calculate the MPG
mpg = miles/gas

# Print the MPG
print "the car runs ",miles,"miles and use ",gas,"gallon gas"
print "the MPG of the car is", mpg

# printed off of how efficient (or not) the car is.

if mpg > 30:
 print "It's wonderful car!!!"

if mpg<=30 and mpg>=20:
 print "the car is fine"
if mpg < 20:
 print "You need to change a new car"
  
```

Outputs

```

the car runs  40.0 miles and use  2.0 gallon gas
the MPG of the car is 20.0
the car is fine

```

## EX3: convert celsius to degrees fahrenheit.

```
# Get the number of celsius
celsius = float(raw_input("Please input the celsius degree"))

# convert celsius to fahrenheit
fahrenheit = 32.0+ celsius*1.8

# Print the degree
print "the celsius is ",celsius
print "the fahrenheit is ",fahrenheit

# printed off of how efficient (or not) the day is.

if fahrenheit > 80:
  print "It's a hot day!"

if fahrenheit<=80 and fahrenheit>=50:
  print "It's a great day!"
if fahrenheit < 50:
  print "It's cold!"
  
```

Outputs

```

the celsius is  -2.0
the fahrenheit is  28.4
It's cold!

```

## EX4: Convert fahrenheit to celsius 

```
# Get the number of fahrenheit
fahrenheit = float(raw_input("Please input the fahrenheit degree"))

# convert fahrenheit to celsius 
celsius = (fahrenheit-32.0)*5/9

# Print the degree
print "the fahrenheit is ",fahrenheit
print "the celsius is ",celsius

# printed off of how efficient (or not) the day is.

if celsius > 30:
  print "It's a hot day!"

if celsius<=30 and celsius>=5:
  print "It's a great day!"
if celsius < 5:
  print "It's cold!"
  
```

## EX5: convert any type

```

# Get the type of degree
degree_type = int(raw_input("Which kind of degree do you want to input?"))
print "1 is celsius, 2 is fahrenheit"

# Get the degree
degree1 = float(raw_input("Please input the degree of", degree_type))

# convert and printthe degree
if degree_type ==1:
 degree2 = 32.0+ degree1*1.8
 print "the fahrenheit is ",degree2
 print "the celsius is ",degree1
 
if degree_type == 2:
 degree2 = (degree1-32.0)*5/9
 print "the fahrenheit is ",degree1
 print "the celsius is ",degree2

  
```

Outputs

```

1 is celsius, 2 is fahrenheit
the fahrenheit is  104.0
the celsius is  40.0

```

