---
layout: post
author: chunxi
title: Chunxi's  Basic Python
date: 2014-01-22
---

Post by Chunxi Zhang

## Chunxi's Basic Python


*Text1*
Here is the input.
```
word1 = "All"
word2 = "work"
word3 = "and"
word4 = "no"
word5 = "play"
word6 = "makes"
word7 = "Jack"
word8 = "a"
word9 = "dull"
word10 = "boy."

print(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10)
```
Here is the output.
```
All work and no play makes Jack a dull boy.
```

*Text2*
Here is the input..
```
mile_number = int(raw_input("How many miles you have driven?"))
gallon_number = int(raw_input("How much gallons you have used"))
mgp = mile_number/gallon_number
print "The number of miles driven", mile_number
print "The number of gallons used", gallon_number
print "Your MGP is", mgp
if mgp < 22:
  print ("Your car is not efficient considering the MGP.")
else:
  print ("Your car is efficient.")
```
Here is the output.
```
The number of miles driven 120
The number of gallons used 5
Your MGP is 24.0
Your car is efficient.
```
*Text3*
Here is the input..
```
deg_c = int(input("What is the temperature in Celsius? "))

deg_f = deg_c * (9 / 5) + 32

print (deg_c, " degrees Celsius is", deg_f, " degrees Farenheit.")
```
Here is the output.
```
55  degrees Celsius is 131  degrees Farenheit.
```
*Text4*
Here is the input..
```
deg_f = int(input("What is the temperature in Farenheit? "))

deg_c= (deg_f - 32)/ 1.8

print (deg_f, " degrees Farenheit is", deg_c, " degrees Celsius.")

```
Here is the output.
```
120  degrees Farenheit is 48.888888888888886  degrees Celsius.
```
*Text5*
Here is the input..
```
flag = raw_input('If convert Celsius to Farenheit, please type "c", if convert Farenheit to Celsius, please type "f".')
if flag == "c":
	deg_c = int(input("What is the temperature in Celsius? "))
	deg_f = deg_c * (9 / 5) + 32
	print (deg_c, " degrees Celsius is", deg_f, " degrees Farenheit.")

elif flag == "f":
	deg_f = int(input("What is the temperature in Farenheit? "))
	deg_c= (deg_f - 32)/ 1.8
	print (deg_f, " degrees Farenheit is", deg_c, " degrees Celsius.")

else :
	print "wrong input"

```
Here are the examples.
```
50  degrees Celsius is 122  degrees Farenheit.
```
```
50  degrees Farenheit is 10  degrees Celsius.
```
```















