---
layout: post
author: sunhwap
title: program excercise
date: 2014-01-24
---

##First program codes

```
s='All work but no play makes Jack a dull boy'
word = s.split(' ')
print ' '.join(word)

```

##Output

```
All work and no play makes jack a dull boy
```

##Second program codes

```
number_miles = float(raw_input ("enter the number of miles"))
number_gallons =float (raw_input ("enter the number of gallons"))
MPG =( number_miles / number_gallons)
print 'The number of miles per gallon of your car is',MPG,'.' 

```

##Output

```

The number of miles per gallon of your car is 9.75 .

```

##Third program codes

```

celcius = float(raw_input ("Enter the number of degrees in celcius."))
farenheit = (celcius  * 9)/5 + 32 
print 'The number of degrees that you entered in farenheit is',farenheit,'.'

```

## Output

```

The number of degrees that you entered in farenheit is 98.6 .


```

##Forth program codes

```
farenheit = float(raw_input ("enter the number of degrees?"))
celcius = (farenheit - 32 )* 5/9
print 'The number of degrees that you entered in farenheit  is', celcius,'.' 

```

##Output

```
The number of degrees that you entered in farenheit  is 37.0 .

```

##Fifth program codes

```
user_input= float(raw_input ("enter 0 if you want farenheit and enter 1 if you want celcius)"))

if user_input == 0:
    farenheit = float(raw_input("enter degrees in farenheit."))
    celcius = (farenheit - 32 )* 5/9
      
    print 'The temperature that you entered is',celcius,'in celcius.'
else: 
    celcius = float (raw_input ("enter degrees in celcius."))
    farenheit = (celcius  * 9)/5 + 32 
    print 'The temperature that you entered is',farenheit,'in farenheit.'

```

##Output-When the user enter 1 for celcius

```

The temperature that you entered is 37.0 in celcius.

```

## Output-When the user enter 0 for farenheit 

```

The temperature that you entered is 98.6 in farenheit.

```

##Sixth program codes

```
number_miles = float(raw_input ("enter the number of miles?"))
number_gallons =float (raw_input ("enter the number of gallons?"))
MPG =( number_miles / number_gallons)
print 'The number of miles per gallon of your car is',MPG,'.'
if MPG >= 29:
    print 'Your car has a high fuel efficiency.'
else:
    print 'Your car has a low fuel efficiency.'
```

##Output

```
The number of miles per gallon of your car is 6.80555555556 .
Your car has a low fuel efficiency.
```










