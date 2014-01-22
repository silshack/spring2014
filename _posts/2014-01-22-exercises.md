---
layout: post
author: katielmeyer
title: Katie's Basic Python Exercises
---

## String parsing program

### Code

```

sentence = "All work and no play makes Jack a dull boy"
words = sentence.split(" ")
print words
sentence = ""

for word in words:
    sentence = sentence + word + ' '

print sentence

```

### Sample output
![String output](http://i.imgur.com/3RMuvzQ.png)


## MPG program

### Code

```

miles = int(raw_input('How many miles did you drive?'))
gallons = int(raw_input('How many gallons did your car need to go %d miles?' %miles))
mpg = miles / gallons

print 'Your MPG is', mpg, 'miles per gallon.'
if mpg >= 20:
    print 'Good for you!'
if mpg < 20:
    print 'You might want to look into getting a hybrid...'
    
```

### Sample output
![MPG output](http://i.imgur.com/sWSvufX.png)


## Fahrenheit program

### Code

```
celsius = int(raw_input("What's the temperature in Celsius?"))
fahrenheit = (celsius * 9/5) + 32

print "That's", fahrenheit, "degrees Fahrenheit!"
```

### Sample output
![Fahrenheit output](http://i.imgur.com/1KXNxME.png)


## Celsius program

### Code

```

fahrenheit = int(raw_input("What's the temperature in Fahrenheit?"))
celsius = (fahrenheit - 32) * 5/9

print "That's", celsius, "degrees in Celsius!"

```

### Sample output
![Celsius output](http://i.imgur.com/kil2tO0.png)

## Fahrenheit or Celsius program

### Code

```

choice = raw_input("Do you want to convert from Celsius or Fahrenheit?")
if choice == 'Celsius':
    celsius = int(raw_input("What's the temperature in Celsius?"))
    fahrenheit = (celsius * 9/5) + 32
    print "That's", fahrenheit, "degrees Fahrenheit!"
elif choice == 'Fahrenheit':
    fahrenheit = int(raw_input("What's the temperature in Fahrenheit?"))
    celsius = (fahrenheit - 32) * 5/9
    print "That's", celsius, "degrees in Celsius!"
else:
    choice = raw_input("You have to pick Celsius or Fahrenheit!")

```

###Sample output
![Celsius or Fahrenheit output](http://i.imgur.com/bY9p0sE.png)
