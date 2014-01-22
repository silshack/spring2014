---
layout: post
author: allen
title: Allen's Multiple Exercises
---

### SO MANY THINGS

So there were a lot of parts to this exercise. First the all work no play thing. I just used
a simple .split() method which when used like this as definition for a variable (in this case words)
it automatically creates a list, which is super useful for our purposes.

Then the for loop just prints every word out one by one.
```
sentence=raw_input("Enter a sentence with at least 2 or three words: ")

words = sentence.split()
for word in words:
    print word,
```

![All Work And No Play Output](http://i.imgur.com/arrgTay.png)

Part two was a miles per gallon calculator. MPG is equal to the total miles divided by the gallons used
so my code looks like this

```
miles=float(input("How many miles driven?"))
gallons=float(input("How many gallons used?"))
MPG=miles/gallons
print MPG, "mpg"
if MPG < 34.1:
    print ("Your car does not meet fuel efficiency standards")
```
I also had it print whether the car met efficiency standards or not.

![MPGCalc Output](http://i.imgur.com/mSOfqLo.png)

Part three through five were all temperature conversion calculators. I only made one program to do all 
three since all of them used the same two functions. For the last part of the exercise where it asks the
user to input both the temperature and the unit used, I used the .split() method again to parse th input
and figure out whether it was Celsius or Fahrenheit. It also outputs an error if the user entered the temp
incorrectly.

```
def CtoF(Ctemp):
    Ftemp=((Ctemp*9.0)/5)+32
    print Ftemp, "F"

def FtoC(Ftemp):
    Ctemp=((Ftemp-32)*5.0)/9
    print Ctemp, "C"

Ctemp=float(input("What is the temp in Celsius?"))
CtoF(Ctemp)

print "```"
print "```"

Ftemp=float(input("What is the temp in Farenheit?"))
FtoC(Ftemp)

print "```"
print "```"

tempRaw=raw_input("Enter your temp and specify \
Celsius or Fahrenheit seperated by a space(ex.98.6 F):")
tempInput=tempRaw.split()
if tempInput[1]=="F":
    FtoC(float(tempInput[0]))
    exit
elif tempInput[1]=="C":
    CtoF(float(tempInput[0]))
    exit
else:
    print "Temperature was entered incorrectly"
```
![TempCalc Output](http://i.imgur.com/DHCzfjC.png)
