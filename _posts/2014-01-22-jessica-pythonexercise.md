---
layout: post
author: jskaa
title: Jessica's Basic Python Exercises
---

## All work and no play makes Jack a dull boy.

I originally went through and assigned each word to a different variable by myself (e.g. a="All", b="work", etc),
but then someone mentioned the split function in class. I then googled around, and found the ```.split()``` function,
which could automatically split up a sentence into different variables. 


This was my code:

```
line = "All work and no play makes Jack a dull boy."
a = line.split()

print a
```

This was the output:

```
['All', 'work', 'and', 'no', 'play', 'makes', 'Jack', 'a', 'dull', 'boy.']
```


## Is your car environmentally friendly?

This exercise was pretty fun, as it was simple and allowed me to practice a logical statement (yay! I need the practice). 
I set it so that if python calculated a mpg of 32 or better, a positive message would show, whereas if the mpg was lower than 32, a slightly condescending one would pop up. 


```
#Get the number of miles driven
miles_driven = int(raw_input("How many miles have you driven?"))

#Get the number of gallons used
gallons_used = int(raw_input("How many gallons have you used?"))

#Calculate the MPG for the car
mpg = miles_driven/gallons_used

if mpg>=32:
    print "Your car has a fuel efficiency of", mpg, "MPG. Awesome!"
elif mpg<32:
    print "Your car has a terrible fuel efficiency of", mpg, "MPG. You should feel bad."
```

If the mpg was 32 or better, the output would be:

```
Your car has a fuel efficiency of 48 MPG. Awesome!
```

If the mpg was worse than 32, the output would be:

```
Your car has a terrible fuel efficiency of 20 MPG. You should feel bad.
```


## Finding Fahrenheit

I had a bit of trouble at first, as my code originally was ```temp_f = (temp_c*(9/5))+32)```. This returned values that were off by a few, because of the way python handles numbers. I needed to allow for decimals in my answer, which is why a decimal need to be included in my function. I changed the ```temp_f = (temp_c*(9/5))+32)``` to ```temp_f = (temp_c*(1.8))+32)```, althought I could have just as easily changed it to ```temp_f = (temp_c*(9.0/5.0))+32)```
My code was:

```
#Get temperature in celsius
temp_c = int(raw_input("What is the temperature in celsius?"))

#Convert to fahrenheit
temp_f = (temp_c*(1.8))+32

#print message
print "Temperature:", temp_c, "C = ", temp_f, "F"
```

The output for this is: 

```
Temperature: 28 C =  82.4  F
```


## Finding Celsius

This was easy, as it was essentially the previous exercise, just tweaked a little bit. 

My code was: 

```
#Get degrees in fahrenheit
temp_f = int(raw_input("What is the temperature in fahrenheit?"))

#Convert to degrees celsius

temp_c = (temp_f-32)*(5.0/9.0)

#Print answer
print "Temperature:", temp_f, "F = ", temp_c, "C"
```

The output was:

```
Temperature: 90 F =  32.2222222222 C
```


## Choosing your own conversion

Writing this code was pretty easy too, and I got to have some fun with it! All I did was combine my previous two exercise codes together, as well as add in a few lines allowing for the user to choose which formula should be run. I looked around online trying to see if there was some way of creating clickable buttons for the user to choose between Fahrenheit and Celsius. However, I couldn't find anything that I could understand, and I just went with having the user type in F or C to indicate what they wanted to convert to. After that, I had a little fun adding in if/elif statements which would return a short little message based upon whether it was cold or hot (set accordingly to how I usually dress for the weather!) 

My code was:

```
#Ask user what they would like to convert input to
convert_to = raw_input("Do you want to convert to Fahrenheit (F), or Celsius (C)?")

#If the user chooses fahrenheit F
if convert_to == "F":
    #Get temperature in celsius
    temp_c = int(raw_input("What is the temperature in celsius?"))

    #Convert to fahrenheit
    temp_f = (temp_c*(1.8))+32

    #print message
    if temp_f>=60:
        print "Temperature:", temp_c, "C = ", temp_f, "F. Nice weather!"
    elif temp_f<60:
        print "Temperature:", temp_c, "C = ", temp_f, "F. Grab a jacket!"
    
    

#if the user chooses Celsius C    
elif convert_to == "C":
    #Get temperature in fahrenheit
    temp_f = int(raw_input("What is the temperature in fahrenheit?"))

    #Convert to celsius
    temp_c = (temp_f-32)*(5.0/9.0)

    #Print message
    if temp_c>=16:
        print "Temperature:", temp_f, "F = ", temp_c, "C. Nice weather!"
    elif temp_c<16:
        print "Temperature:", temp_f, "F = ", temp_c, "C. Grab a jacket!"
```

The output for when the converted temperature is below 60 F is:

```
Temperature: 12 C =  53.6 F. Grab a jacket!
```

The output for when the converted temperature is above 16 C is:

```
Temperature: 79 F =  26.1111111111 C. Nice weather!
```



