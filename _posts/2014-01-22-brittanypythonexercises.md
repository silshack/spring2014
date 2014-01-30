---
layout: post
author: brittany
title: Brittany's Python Exercises
---

#First Exercise

I used the str.split() function to split the sentence into its component tokens. I wasn't sure how to create new variables for storing each word, so I just did some for-loops in order to print each word and concatenate the string back together.

```
#printing sentence
sentence = "All work and no play makes Jack a dull boy"
words = sentence.split() #split sentence into tokens and stores in array
for word in words:
    print word           #prints each word in the sentence on a separate line
new_sentence = ""
for word in words:
    new_sentence = new_sentence + " " + word  #strings together each word in the array, with spaces in between
print new_sentence.strip()    #strip whitespaces from beginning and end of string before printing
```

###Output

```
All
work
and
no
play
makes
Jack
a
dull
boy
All work and no play makes Jack a dull boy
```

#Second Exercise

MPG would be calculated by dividing the miles driven by gallons of gas used. I created variables to represent both of these components, which would store user input. I used an if-else statement to determine whether the calculated MPG was efficient or inefficient. I stored the values as float values in order to prevent unneccessary rounding.

```
#Calculating MPG
miles_driven = float(input("Enter the number of miles driven"))
gallons_used = float(input("Enter the number of gallons of gas used"))
mpg = miles_driven / gallons_used
#based efficiency on levels stated in article below
#http://www.nytimes.com/2012/08/29/business/energy-environment/obama-unveils-tighter-fuel-efficiency-standards.html?_r=0
if mpg >= 29:  #checks to see if mpg is >= a good fuel efficiency value
    print "Your MPG is %s. Your car has a high fuel efficiency." %mpg
else:
    print "Your MPG is %s. Your car has a low fuel efficiency." %mpg
```

###Output
I entered inputs of miles_driven = 1050 and gallons_used = 35

```
Your MPG is 30.0. Your car has a high fuel efficiency.
```


#Third Exercise

Again, I stored the values as floats because I noticed the calculations were incorrect when I just used int

```
#Converting Celcius to Fahrenheit
celcius_temp = float(input("Enter a temperature in degrees celcius"))
fahrenheit_temp = ((celcius_temp*1.8) + 32) #formula found here:  http://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm
print "The temperature you entered is equivalent to", fahrenheit_temp, "degrees Fahrenheit"
```

###Output
I entered input of celcius_temp = 40

```
The temperature you entered is equivalent to 104.0 degrees Fahrenheit
```

#Fourth Exercise

This exercise only required minor modifications to exercise three in order to solve the opposite problem (F to C).

```
#Converting Fahrenheit to Celcius
fahrenheit_temp = float(input("Enter a temperature in degrees fahrenheit"))
celcius_temp = (fahrenheit_temp - 32) / 1.8
print "The temperature you entered is equivalent to", celcius_temp, "degrees Celcius"
```

###Output
I entered input of fahrenheit_temp = 101

```
The temperature you entered is equivalent to 38.3333333333 degrees Celcius
```


#Fifth Exercise

I knew I'd need an if-elif-else statement, but I couldn't figure out how to handle a case where user input is incorrect (i.e. user enters a value other than 0 or 1). I thought I could include 'return' or some other call within that last statement in order to exit the if-elif-else and go back to the beginning, but that didn't work. Looking at [this link](http://stackoverflow.com/questions/10614673/python-return-to-the-start-of-a-function-if-an-invalid-input-is-made) I thought maybe I should put the code in a function; this would seem to enable me to call the function within the last else statement and start the process over in cases of invalid input. I was able to reuse the code from the third and fourth exercises within the if-elif statements.

```
#Temperature conversion following user input
def convert_temp():
    conversion_type = int(input("Enter 0 if you would like to convert from Fahrenheit to Celcius; Enter 1 if you would like to convert from Celcius to Fahrenheit"))
    if conversion_type == 0: #user wants to convert F to C
        fahrenheit_temp = float(input("Enter a temperature in degrees fahrenheit"))
        celcius_temp = (fahrenheit_temp - 32) / 1.8
        print "The temperature you entered is equivalent to", celcius_temp, "degrees Celcius"
    elif conversion_type == 1: #user wants to convert C to F
        celcius_temp = float(input("Enter a temperature in degrees celcius"))
        fahrenheit_temp = ((celcius_temp*1.8) + 32)
        print "The temperature you entered is equivalent to", fahrenheit_temp, "degrees Fahrenheit"
    else:
        print "Your input is invalid" #in case of incorrect input
        return convert_temp() #starts process over, allowing user to re-enter correct input
    
convert_temp()
```

###Output
I entered input of conversion_type = 0 and fahrenheit_temp = 45

```
The temperature you entered is equivalent to 7.22222222222 degrees Celcius
```

I entered input of conversion_type = 1 and celcius_temp = 10

```
The temperature you entered is equivalent to 50.0 degrees Fahrenheit
```

I entered input of conversion_type = 2, then I'm prompted for more input
(ultimately enter in input of 0 and fahrenheit_temp = 67)

```
Your input is invalid
The temperature you entered is equivalent to 19.4444444444 degrees Celcius
```
