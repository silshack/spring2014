---
layout: post
author: lei
title: Lei Wang's Python Basics
date: 2014-01-24
---

by Lei Wang

*1.Take the sentence: All work and no play makes Jack a dull boy. Store each word in a separate variable, then print out the sentence on one line using print.*

Code:

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

print word1, word2, word3, word4, word5, word6, word7, word8, word9, word10

```

Output:

```
All work and no play makes Jack a dull boy.

```

*2.A program that will compute MPG for a car. Prompt the user to enter the number of miles driven and the number of gallons used. Print a nice message with the answer. For stye points, cue the message printed off of how efficient (or not) the car is.*

Code:

```
mile = int(raw_input("Please enter the number of miles driven?"))
gallon = int(raw_input("Please enter the number of gallons used?"))

mpg = mile / gallon

print "You entered miles: ", mile
print "You entered gallons: ", gallon
print "The mpg: ", mpg
if mpg > 25:
	print "Congratuation, you got a efficient car!"
else:
	print "Your car is not a efficient car!"
	

```

Output:

```
You entered miles:  150
You entered gallons:  5
The mpg:  30.0
Congratuation, you got a efficient car!

```


*3. A program that will convert a user-input number of degrees celsius to degrees fahrenheit.*

Code:

```
deg_c = int(input("What is the temperature in Celsius? "))

# formula to convert C to F is: (degrees Celcius) times (9/5) plus (32)
deg_f = deg_c * (9 / 5) + 32

print (deg_c, "degrees Celsius is", deg_f, "degrees Farenheit.")

```

Output:

```
15 degrees Celsius is 59 degrees Farenheit.

```

*4.A program that will convert a user-input number of degrees degrees fahrenheit to degrees celsius.*

Code:

```
deg_f = int(input("What is the temperature in Farenheit? "))

deg_c= (deg_f - 32)/ 1.8

print (deg_f, "degrees Farenheit is", deg_c, "degrees Celsius.")

```

Output:

```
59 degrees Farenheit is 15 degrees Celsius.

```

*5.A program that will convert degrees or celsius as above, depending on the users' choice.*

Code:

```
flag = raw_input('If convert C to F, please enter "y", if convert F to C, please enter"n".')
if flag == "y":
	deg_c = int(input("What is the temperature in Celsius? "))

# formula to convert C to F is: (degrees Celcius) times (9/5) plus (32)
	deg_f = deg_c * (9 / 5) + 32

	print deg_c, "degrees Celsius is", deg_f, "degrees Farenheit."
elif flag == "n":
	deg_f = int(input("What is the temperature in Farenheit? "))

	deg_c= (deg_f - 32)/ 1.8

	print deg_f, "degrees Farenheit is", deg_c, "degrees Celsius."
else :
	print "Wrong Input"
```

Output:

If you enter y and the temperature in Celsius:

```
15 degrees Celsius is 59 degrees Farenheit.

```

If you enter y and the temperature in Farenheit:

```
59 degrees Farenheit is 15 degrees Celsius.

```

If you enter other characters:

```
Wrong Input

```
