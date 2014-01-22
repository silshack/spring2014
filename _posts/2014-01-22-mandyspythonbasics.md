---
layout: post
author: agooch
title: Mandy's Python Basics Exercises
---

Here are my completed exercises with code. 

**Exercise 1**

```

x = str("All")
y = str("work")
z = str("and")
c = str("no")
v = str("play")
b = str("makes")
n = str("Jack")
m = str("a")
s = str("dull") 
d = str("boy")

print(x, y, z, c, v, b, n, m, s, d)

```

![Output Image One](http://i.imgur.com/GxTENFo.png?1)

**Exercise 2**

```

miles = int(input("How many miles have you driven?"))
gallons = int(input("How many gallons have you used?"))

mpg = miles / gallons

print("Your car gets", mpg, "mpg highway")
if int(mpg) < 32: print("Based on an average of 32mpg being efficient, your car is not as efficient")
if int(mpg) >= 32: print("Based on an average of 32mpg being efficient, your car is efficient")  

```

![Output Image Two](http://i.imgur.com/kKyPovp.png)

**Exercise 3**

```

celsius = int(input("What is the temperature in celsius?"))

fahrenheit = (celsius * (9/5)) + 32

print("The temperature in farenheiht is", int(fahrenheit))

```

![Output Image Three](http://i.imgur.com/YnV6N4V.png)

**Exercise 4**

```

faren = int(input("What is the temperature in fahrenheit?"))

celsius = (faren - 32) * (5/9)

print("The temperature in celsius is", int(celsius))

```

![Output Image Four](http://i.imgur.com/OZhP7uQ.png)

**Exercise 5**

```

temperature = input("What would you like to convert to: celsius or fahrenheit")

if temperature == "celsius":

  fahrenheit = int(input("What is the temperature in fahrenheit?"))

  celsius = (fahrenheit - 32) * (5/9)

  print("The temperature in celsius is", int(celsius))

if temperature == "fahrenheit":
 
  celsius = int(input("What is the temperature in celsius?"))

  fahrenheit = (celsius * (9/5)) + 32

  print("The temperature in farenheiht is", int(fahrenheit))

```

![Output Image Five](http://i.imgur.com/KfTty89.png)
