---
layout: post
author: jacobthill
title: 2014-22-01 Jacob's Python Execises
---

## Jack's a Dull Boy Code

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

## Jack's a Dull Boy Output

```
All work and no play makes Jack a dull boy.
```

## MPG Code

```
miles = int(raw_input("How many miles did you drive?"))

gallons = int(raw_input("How many gallons did you buy?"))


MPG = miles / gallons

print "Your MPG =", MPG

```

## MPG Output

```
Your MPG = 9.34782608696

```

## C to F Code

```
c = raw_input("What is the temp?")
c = int(c)

temp = (1.8 * c) + 32

print "The temperature is:", temp

```

## C to F Output

```
The temperature is 113.0

```

## F to C Code

```
f = raw_input("What is the temp?")
f = int(f)

temp = 0.55555 * (f - 32)

print "The temperature is:" temp

```

## F to C Output

```
The temperature is 16.0

```

## F or C Choice Code

```
choice = raw_input("Would you like to enter a temperature in F or C?")
degree = int(raw_input("What is the temp?"))

Celcius = (1.8 * degree) + 32

Farenheit = 0.55555 * (degree - 32)

if choice == "C":
    print "The temperature is:", Celcius
    
elif choice == "F":
    print "The temperature is:", Farenheit
    
else:
    print "Invalid Entry"
        
```

## F or C Choice Output

```
The temperature is: 31.66635
```
