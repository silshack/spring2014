---
layout: post
author: xuxiang
title: Xuxiang's Python Basic Exercise
date: 2014-01-22
---

## out the sentence 

The code is:

```
char1 = "All"
char2 = "work"
char3 = "and"
char4 = "no"
char4 = "play"
char5 = "makes"
char6 = "jack"
char7 = "a"
char8 = "dull"
char9 = "boy"

print char1,char2,char3,char4,char5,char6,char7,char8,char9
```
The output is:

```
All work and play makes jack a dull boy
```
## compute MPG for a car

The code for computing MPG for a car is:

```
mile_num = int(raw_input("Please input the number of miles you drove:"))
gas_num = int(raw_input("Please input the number of gallons of gas you used:"))
print "Your car's MPG is:",mile_num/gas_num
```

I input 15 and 5, the output is:

```
Your car's MPG is: 3
```

## convert a degrees celsius to degrees fahrenheit

The code for converting a degrees celsius to degrees fahrenheit is:

```
c = int(raw_input("Please input the degrees celsius:"))
f = 9*c/5+32
print "The result of  converting a degrees celsius to degrees fahrenheit",f
```

I input 35 and the output is :

```
The result of  converting a degrees celsius to degrees fahrenheit 95
```

## convert a  degrees fahrenheit to degrees celsius

The code for converting a degrees fahrenheit to degrees celsius is:

```
f = int(raw_input("Please input the degrees fahrenheit:"))
c = (f - 32) * 5/9
print "The result of  converting a degrees fahrenheit to degrees celsius:",c
```

I input 95 and the output is:

```
The result of  converting a degrees fahrenheit to degrees celsius: 35
```

## convert fahrenheit or celsius as above, depending on the users' choice.

The coude for converting fahrenheit or celsius as above, depending on the users' choice is:

```
choice = raw_input("If you want to transfer degrees fahrenheit to degrees celsius, please typy: fc;If you want to transfer degrees celsius to degrees fahrenheit, please typy: cf")
if choice == "fc":
    f = int(raw_input("Please input the degrees fahrenheit:"))
    c = (f - 32) * 5/9
    print "The result of  converting a degrees fahrenheit to degrees celsius:",c
if choice == "cf":
    c = int(raw_input("Please input the degrees celsius:"))
    f = 9*c/5+32
    print "The result of  converting a degrees celsius to degrees fahrenheit:",f
```

There are two situation:
If I input: fc and 95, the output is:

```
The result of  converting a degrees fahrenheit to degrees celsius: 35
```

If I input: cf and 35, the output is:

```
The result of  converting a degrees celsius to degrees fahrenheit: 95
```
```
