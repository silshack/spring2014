---
layout : post
author : bdferr
title : First CodingBat Post by Bdferr
---

Here are the screenshots of my successes on CodingBat. I realize I was only required to do the sections 
with "1" in their names, but I figured since I had time, I might as well do as much as I could.

![Warmup-1 image](http://i.imgur.com/rljboyc.png)

![List-1 image](http://i.imgur.com/zajSo89.png)

![Logic-1 image](http://i.imgur.com/WDzcLZZ.png)

![String-1 image](http://i.imgur.com/uPflEuI.png)

![Warmup-2 image](http://i.imgur.com/G9jiOfB.png)

![Logic-2 image](http://i.imgur.com/fxqcvPP.png)

![String-2 image](http://i.imgur.com/p5Dhx4y.png)

In the List-2 section, I could not quite finish the sum67 problem, so after quite a bit of time working on it,
I am leaving it for now. As you can see, I did get it to partially work, and I did get the other problems
in that section done.

![List-2 image](http://i.imgur.com/PyRVMk5.png)

![Sum67 image](http://i.imgur.com/2KLaTod.png)

The near_ten problem was one that I did not get entirely right on the first try.  Unfortunately “if num % 10 <= 2: return true” can only identify a distance of 2 or less from 10 in one direction. This is because 12 % 10 is 2 but 18 % 10 is 8; the modulus function can only identify the difference between the dividend and a smaller number, not (at least not directly) between the dividend and next largest multiple of the divisor. For my code I added “elif num % 10 == 9 or num % 10 == 8: return True”, which works in this case because the tests applied by CodingBat will only use integers. If floats were involved, I would have written “elif num % 10 >= 8: return True”, which in fact would work for the current situation just as well. My current code looks like this, then:

```
def near_ten(num):
  if num < 0:
    return "Error!"
  elif num % 10 <= 2:
    return True
  elif num % 10 == 9 or num % 10 == 8:
    return True
  else:
    return False
```

If I were to expand this function so that the numbers 10 and 2 could be replaced by any number the user chose, the code would look like this:

```

def near_num(dividend, divisor, distance):
  if num < 0:
    return “Error!”
  elif dividend % divisor <= distance:
    return True
  elif dividend % divisor >= (divisor - distance):
    return True
  else:
    return False

```

The "caught_speeding" problem was interesting to me because I found that I could specify two sets of conditions (in this case based on whether it is allegedly the user’s birthday) using a simple variable which would be added whether or not “is_birthday” was true. If “is_birthday” is not true, the variable is simply zero. I had not thought of this before this problem as an alternative to a more complex set of “and” and “not” operators. 

```

def caught_speeding(speed, is_birthday):
 if is_birthday:
   bonus = 5
 else:
   bonus = 0
 if speed <= (60 + bonus):
   ticket = 0
 elif speed >= (61 + bonus) and speed <= (80 + bonus):
   ticket = 1
 elif speed >= (81 + bonus):
   ticket = 2
 else:
   return "Error!"
 return ticket

```

Considering what I just wrote about the "caught_speeding" problem, I realize I could have done the "squirrel_play" problem along similar lines. What I actually did was this:

```

def squirrel_play(temp, is_summer):
  if is_summer:
    if temp >= 60 and temp <= 100:
      return True
    else:
      return False
  elif temp >= 60 and temp <= 90:
    return True
  else:
    return False

```

If, instead, I wanted to make a variable out of whether it was summer, I could have done this:

```

def squirrel_play(temp, is_summer):
  if is_summer:
    extramax_temp = 10
  else:
    extramax_temp = 0
  if temp >= 60 and temp <= 90 + extramax_temp:
    return True
  else:
    return False

```

