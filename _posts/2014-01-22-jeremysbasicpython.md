---
layout: post
author: jtbeeker
title: jeremy's Basic Python exercise
---

## EX1 : 



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
word10 = "boy"

print word1, word2, word3, word4, word5, word6, word7, word8, word9, word10


```

outputs

```

All work and no play makes Jack a dull boy

```

## EX2 : 

```
miles= int(raw_input("How many did you drive?"))
gallons= int(raw_input("how many gallons used?"))
mpg = miles/gallons

print "miles driven", miles
print "gallons used", gallons

print"The mpg of your car is", mpg

if mpg<=30:
    print "your car is not very efficent"
if mpg>30:
    print "your car is very efficent"


```

outputs

```

miles driven 200
gallons used 4
The mpg of your car is 50
your car is very efficent

```

## EX3 : 

```

celsius = float(raw_input("What is the temperture outside?"))
fahrenheit = celsius*1.8+32
print "The result of  converting a degrees celsius to degrees fahrenheit",fahrenheit


```

outputs

```

The result of  converting a degrees celsius to degrees fahrenheit 50.0

```

## EX4 : 

```

f= float(raw_input ("What is the temperture outside"))
c= (f-32)/1.8 

print "The result of  converting a degrees fahrenheit to degrees celsius" ,c

if f>=80:
    print "It is very hot outside"
    
if f<=32:
    print "It is very cold outside"
if f<80 and f>32:
    print "It is a great day outside!"



```

outputs

```

The result of  converting a degrees fahrenheit to degrees celsius 21.1111111111
It is a great day outside!

```

## EX5 : 

```

degree_type = raw_input("what type you will input? C or F")
number1 = float(raw_input("input the temperature outside"))
if degree_type == 'C'or degree_type =='c':
    number2 = 32+number1*1.8
    print "the temperature outside is ", number2
    

if degree_type == 'F' or degree_type =='f':
    number2 = (number1-32)/1.8
    print "the temperature outside is ", number2


```

outputs

```

the temperature outside is  0.0

```

