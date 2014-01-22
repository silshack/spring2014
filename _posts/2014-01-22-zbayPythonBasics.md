---
layout: post
author: zbay
title: Zach's Python Basics Exercise
date: 2014-01-22
---

Alrighty. Here's my code for Exercise 1. It's probably more complicated than it needs to be, but it is easily modifiable for different sentences. I used an array for the words, and then processed them to add spaces at the end, except for the final word which gets a period.

```swag = ["All", "work", "and", "no", "play", "makes", "Jack", "a", "dull", "boy"]
string = ""
for w in swag:
    string += w
    if(swag.index(w) != len(swag) - 1):
         string += " "
    else:
        string += "."   
print string```

Exercise 2 was a cinch. Just calculaing miles per gallon.
```miles = int(raw_input("How many miles did you drive?"))
gallons = int(raw_input("How many gallons of gas did you use?"))
mpg = miles / gallons
print "You drove", miles, "miles and burned", gallons, "gallons of gasoline. Your MPG was", mpg, "."```

Exercise 3: converting Celsius to Fahrenheit.
```    celsius = float(raw_input("Convert how many degrees Celsius to Fahrenheit?"))
    fahrenheit = float((celsius*1.8) + 32.0)
    print "You entered", celsius, "degrees Celsius, which converts to ", fahrenheit, "degrees Fahrenheit."```
    
Exercise 4: converting Fahrenheit to Celsius.
'''    fahrenheit = float(raw_input("Convert this many degrees Fahrenheit to Celsius!"))
    celsius = float((fahrenheit - 32.0) * 5.0 / 9.0)
    print "You entered", fahrenheit, "degrees Fahrenheit, which converts to ", celsius, "degrees Celsius."```
    
Exercise 5 accepts "C" or "F", regardless of case, and then converts the number you input to Celsius or Fahrenheit respectively. 
```tempScale = str(raw_input("Type 'C' to convert to Celsius, 'F' to convert to Fahrenheit."))
if tempScale == 'C' or tempScale == 'c':
    fahrenheit = float(raw_input("Convert this many degrees Fahrenheit to Celsius!"))
    celsius = float((fahrenheit - 32.0) * 5.0 / 9.0)
    print "You entered", fahrenheit, "degrees Fahrenheit, which converts to ", celsius, "degrees Celsius."
elif tempScale == 'F' or tempScale == 'f':
    celsius = float(raw_input("Convert how many degrees Celsius to Fahrenheit?"))
    fahrenheit = float((celsius*1.8) + 32.0)
    print "You entered", celsius, "degrees Celsius, which converts to ", fahrenheit, "degrees Fahrenheit."
else:
    print "You didn't follow instructions. Run the program and try again!"```


