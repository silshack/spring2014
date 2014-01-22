---
layout: post
author: libbby
title: Libby's 5 Python Basics programs
---

## Program 1
*Take the sentence: All work and no play makes Jack a dull boy. Store each word in a separate variable, then print out the sentence on one line using print.*

**Code:**
```
text = "All work and no play makes Jack a dull boy" # The variable 'text' is our quote
sentence = text.split() 				        # string split method to create list
for x in range(len(sentence)): 				    # len method provides length of list
    print sentence[x],
```
**Output:**
```
All work and no play makes Jack a dull boy
```

## Program 2
*A program that will compute MPG for a car. Prompt the user to enter the number of miles driven and the number of gallons used. Print a nice message with the answer. For stye points, cue the message printed off of how efficient (or not) the car is.*

**Code:**
```
miles = float(raw_input("How many miles did you drive on your last trip?")) 	# stores miles as floating point variable
gallons = float(raw_input("How many gallons of gas did you use?")) 	# stores gallons as floating point variable

mpg = (miles / gallons) 	# calculates MPG

print "Your car delivers", mpg, "miles per gallon of fuel." 	# prints MPG in a sentnce

if (mpg<25):	# sassy messages based on what MPG value is
	print "Ouch!"
if (mpg>25 and mpg<50):
    print "Doing ok!"
if (mpg>50):
    print "Excellent!"
```
**Output:**
```
Your car delivers 15.3846153846 miles per gallon of fuel.
Ouch!
```

## Program 3
*A program that will convert a user-input number of degrees celsius to degrees fahrenheit.*

**Code:**
```
deg_celsius = float(raw_input("How many degrees Celsius is it outside?")) 	# get user to input Celsius temp
deg_fahrenheit = (deg_celsius * 1.8) + 32 	# calculates Fahrenheit temp
print "It is", deg_fahrenheit, "degrees Fahrenheit outside." 	# prints converted temperature
```
**Output:**
```
It is 77.0 degrees Fahrenheit outside.
```

## Program 4
*A program that will convert a user-input number of degrees degrees fahrenheit to degrees celsius.*

**Code:**
```
deg_fahrenheit = float(raw_input("How many degrees Fahrenheit is it outside?"))  # get user to input Fahrenheit temp
deg_celsius = (deg_fahrenheit - 32) / 1.8   # calculates Celsius temp
print "It is", deg_celsius, "degrees Celsius outside."     # prints converted temperature
```
**Output:**
```
It is 30.5555555556 degrees Celsius outside.
```

## Program 5
*A program that will convert degrees or celsius as above, depending on the users' choice.*

**Code:**
```
def C2F (): # function for converting from Celsius to Fahrenheit
	deg_celsius = float(raw_input("How many degrees Celsisus is it outside?")) 	# get user to input Celsius temp
	deg_fahrenheit = (deg_celsius * 1.8) + 32 	# calculates Fahrenheit temp
	print "It is", deg_fahrenheit, "degrees Fahrenheit outside." 	# prints converted temperature

def F2C (): # function for converting from Fahrenheit to Celsius
	deg_fahrenheit = float(raw_input("How many degrees Fahrenheit is it outside?"))  # get user to input Fahrenheit temp
	deg_celsius = (deg_fahrenheit - 32) / 1.8   # calculates Celsius temp
	print "It is", deg_celsius, "degrees Celsius outside."     # prints converted temperature

type_conversion = raw_input("Type C2F to convert from Celsius to Fahrentheit \n Type F2C to convert from Fahrenheit to Celsius") # asks user which conversion they want

while (type_conversion != "C2F" and type_conversion != "F2C"): # displays if user puts in an invalid response
    type_conversion = raw_input("Type C2F to convert from Celsisus to Fahrentheit \n Type F2C to convert from Fahrenheit to Celsius")

if (type_conversion == "C2F"):
	C2F () # run C2F function

if (type_conversion == "F2C"):
    F2C () # run F2C function
```
**Output:**
```
It is 86.0 degrees Fahrenheit outside.
```
