---
layout: post
author: tlchristian
title: Thu-Mai's Basic Python Exercise
---

## Jack is a Dull Boy

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

## MPG Efficiency
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

## Celsius-to-Fahrenheit Conversion
```
# get degrees celsius
celsius = int(raw_input("Enter degrees celsius:"))
 
# calculate fahrenheit
fahrenheit = int(celsius) * (9 / 5) + 32

# print result
print(celsius,"degrees celsius is equal to",fahrenheit,"degrees fahrenheit")
```

## Fahrenheit-to-Celsius Conversion
```
# get degrees fahrenheit
fahrenheit = raw_input("Enter degrees fahrenheit:")

# calculate celsius
celsius = (int(fahrenheit) - 32) * (5 / 9)

# print result
print(fahrenheit,"degrees fahrenheit is equal to",celsius,"degrees celsius")
```

## Temperature Conversion: User's Choice
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
