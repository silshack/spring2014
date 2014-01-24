--
layout: post
author: laura
title: Laura’s rectangle exercise
date: 2014-01-22
---

**Exercise Rectangle**

```
base = int(raw_input("what should the base length be?"))
height = int(raw_input ("what should the height be?"))

area = base * height
print "You entered base length of:", base
print "You entered height length of:", height
print "The area of your rectangle is:", area

```

Output: For example I put in 4 and 6
```
You entered base length of: 4
You entered height length of: 6
The area of your rectangle is: 24
```



**Exercise Vacation Days**

```
start_day_number = input("What day (in numbers) will you leave?")
stay_day_number = input("What day (in numbers) will you return?")

start_day_number = int(start_day_number)
stay_day_number = int(stay_day_number)

length_of_day = (start_day_number + stay_day_number) % 7
print length_of_day
```

Output: For example I put 7 and 1
```
1
```

**Exercise String and split()**
Take the sentence: All work and no play makes Jack a dull boy. Store each word in a separate variable, then print out the sentence on one line using print.

```
sentence = "All work and no play makes Jack a dull boy."
a = sentence.split()

print a
```

Output:
```
['all', 'work', 'and', 'no', 'play', 'makes', 'Jack', 'a', 'dull', 'boy.']
```

**Exercise MPG**
Problem: A program that will compute MPG for a car. Prompt the user to enter the number of miles driven and the number of gallons used. Print a nice message with the answer. For stye points, cue the message printed off of how efficient (or not) the car is.

```
#get the number of miles
miles = int(raw_input("How many miles have you driven?"))

#get the number of gallons
gallons = int(raw_input("How many gallons have you used?"))

#the calculation
mpg = miles / gallons


if mpg >= 32:
   print "Your car with an MPG of:", mpg, "is fuel efficient."
elif mpg < 32:
   print "Your car with an MPG of:", mpg, "is not fuel efficient."
```

Output: For example I put 200 and 40
```
Your car with an MPG of: 5.0 is not fuel efficient.
```

**Exercise 6**
Problem: A program that will convert a user-input number of degrees celsius to degrees fahrenheit.

```
#input some degree for celsius
celsius = int(input("Give the Celsius."))

#input the formula for conversion
deg_F = celsius * (9/5) + 32

#print the result
print "The degrees in Fahrenheit is", deg_F
```

Output: for example I put 34
```
The degrees in Fahrenheit is 93.2
```

**Exercise 7**
Problem: A program that will convert a user-input number of degrees degrees fahrenheit to degrees celsius.

```
#input some degree for Fahrenheit
deg_f = int(input("Give the Fahrenheit."))

#input the formula for conversion
deg_C = (deg_f - 32) * 5/9

#print the result
print "The degrees in Fahrenheit is", deg_C
```

Output:For example I put 67
```
The degrees in Fahrenheit is 19.4444444444
```

**Exercise 8**
Problem: A program that will convert degrees or celsius as above, depending on the users' choice.

```
#First offer the choice of conversion
convert = input("Which conversion would you like to do? Fahrenheit (F) or Celsius (C)?")

#If the user chooses fahrenheit F
if convert == "F":
    #Ask for the celsius temp
    temp_c = int(raw_input("What is the temperature in celsius?"))

    #Convert it to fahrenheit
    temp_f = (temp_c*(1.8))+32

    #print conversion
    if temp_f>=60:
        print "Temperature:", temp_c, "C = ", temp_f, "F. Fair weather."
    elif temp_f<60:
        print "Temperature:", temp_c, "C = ", temp_f, "F. Sweater weather."


#if the user chooses Celsius C    
elif convert == "C":
    #Get fahrenheit temp
    temp_f = int(raw_input("What is the temperature in fahrenheit?"))

    #Convert it to celsius
    temp_c = (temp_f-32)*(5/9)

    #Print conversion
    if temp_c>=16:
        print "Temperature:", temp_f, "F = ", temp_c, "C. Fair weather."
    elif temp_c<16:
        print "Temperature:", temp_f, "F = ", temp_c, "C. Sweater weather."

```

Output: for example I put C, and 78
```
Temperature: 78 F =  25.5555555556 C. Fair weather.
```

**Turtle post**

```
import turtle
 wn = turtle.Screen()
wn.bgcolor("lightgreen")
laura = turtle.Turtle()  
laura.shape("turtle")

# the following was inspired by Aesthete on Stack Overflow (http://stackoverflow.com/questions/12453572/how-can-i-fill-these-squares-in-turtle-python)

laura.color("blue")
laura.begin_fill()    # Begin the fill process.
laura.down()          # begins pendown
for i in range(10):   # For each edge of the shape
    laura.forward(40) # Move forward 40 units
    laura.left(40)
laura.up()       # Pen up
laura.end_fill() # End fill.

laura.goto(100, 120)  # begin a turtle in a new location
laura.color("red")    # little change of color
laura.begin_fill() 
laura.down()       
for i in range(3):  
    laura.right(90)
    laura.forward(20) 
laura.up() 
laura.end_fill() 

laura.goto(-50,-100)
laura.color("yellow")
laura.begin_fill() 
laura.down()       
for i in range(3):  
    laura.right(120)
    laura.forward(100) 
laura.up() 
laura.end_fill() 

laura.goto(0,180)      # playing with the border of the screen
laura.color("black")   # takes turtle to top middle of screen
laura.stamp()

laura.goto(0,-180)     # takes turtle to bottom middle of screen   
laura.color("black")
laura.stamp()

laura.goto(180,-180)   # takes turtle to bottom right corner
laura.color("black")
laura.stamp()

laura.goto(180,180)   # takes turtle to top right corner
laura.color("black")
laura.stamp()

laura.goto(-180,180)  # takes turtle to top left corner
laura.color("black")
laura.stamp()

laura.goto(-180,-180) # takes turtle to bottom left corner
laura.color("black")
laura.stamp()

wn.exitonclick()
```
![Turtle image](https://lh3.googleusercontent.com/j4_Kz-w3LJeX-thfGsh1OWj_t43dox70MH75Ks1m3WdHiiZ9bdhkd9AZTxBSHbF6N3-6BHgrf789USivwin6DgJR45TIeOYxZdmALQEHLRHeDylSjh3pMqvuYg)
