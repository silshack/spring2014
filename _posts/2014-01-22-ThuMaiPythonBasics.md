---
layout: post
author: tlchristian
date: 2014-01-22
title: Thu-Mai's Basic Python Exercise
---

I found this assignment to be useful not only because it offered practice in writing mathematical operations and if-else statements, but also because it helped me get used to writing in Python syntax.  Whenever I ran into issues, I found that the problem was most often found in my syntax. I hope that as my coding skills progress throughout the semester, I'll have fewer of these basic errors and/or be able to more quickly identify such problems in my code.

## Jack is a Dull Boy

**Code:**

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
j = "boy."

print(a,b,c,d,e,f,g,h,i,j)

```

**Output:**

```
All work and no play makes Jack a dull boy.

```

***

## MPG Efficiency

**Code:**

```
# get number of miles and gallons of gas
miles = int(raw_input("Enter the number of miles driven:"))
gas = int(raw_input("Enter the number of gallons of gas used:"))

# calculate MPG
mpg = (miles)//(gas)

# print MPG based on use input
print("Number of miles:",miles)
print("Number of gallons of gas:",gas)
print("MPG:",(mpg))

# evalute vehicle efficiency based on 30 mpg = efficient
if int(mpg) >= 30:
    print("Your vehicle is efficient.")
else:
    print("Your vehicle is not efficient.")
```

**Output:**
(miles = 80, gas = 3)

```
Number of miles: 80
Number of gallons of gas: 3
MPG: 26
Your vehicle is not efficient.
```

***

## Celsius-to-Fahrenheit Conversion

**Code:**

```
# get degrees celsius
celsius = int(raw_input("Enter degrees celsius:"))
 
# calculate fahrenheit
fahrenheit = int(celsius) * (9 / 5) + 32

# print result
print(celsius,"degrees celsius is equal to",fahrenheit,"degrees fahrenheit")
```

**Output:** 
(celsius = 56)

```
56 degrees celsius is equal to 132.8 degrees fahrenheit
```

***

## Fahrenheit-to-Celsius Conversion

**Code:**

```
# get degrees fahrenheit
fahrenheit = raw_input("Enter degrees fahrenheit:")

# calculate celsius
celsius = (int(fahrenheit) - 32) * (5 / 9)

# print result
print(fahrenheit,"degrees fahrenheit is equal to",celsius,"degrees celsius")
```

**Output:**
(fahrenheit = 101)

```
101 degrees fahrenheit is equal to 38.333333333333336 degrees celsius
```

***

## Temperature Conversion: User's Choice

**Code:**

```
# get temperature selection
select_temp = raw_input("Select celsius or fahrenheit:")

# for celsius selection
if select_temp == "celsius":
    celsius = raw_input("Enter degrees celsius:")
    fahrenheit = int(celsius) * (9 / 5) + 32
    print(celsius,"degrees celsius is equal to",fahrenheit,"degrees fahrenheit")

# for fahrenheit selection
if select_temp == "fahrenheit":   
    fahrenheit = raw_input("Enter degrees fahrenheit:")
    celsius = (int(fahrenheit) - 32) * (5 / 9)
    print(fahrenheit,"degrees fahrenheit is equal to",celsius,"degrees celsius")

```

**Output:**
(select_temp = celsius, celsius = 30)

```
30 degrees celsius is equal to 86 degrees fahrenheit
```
