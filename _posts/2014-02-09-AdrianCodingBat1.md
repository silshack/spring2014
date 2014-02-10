---
author: Adrian
title: "Adrian's CodingBat Exercises Part 1"
layout: post
date: 2014-02-09
---
##Screenshots
**Warmup 1**
![warmup1](http://i.imgur.com/v0raUP8.png)
**List 1**
![list1](http://i.imgur.com/b6uyT3t.png)
**String 1**
![string1](http://i.imgur.com/WWyYtw9.png)
**Logic 1**
![logic1](http://i.imgur.com/aSWCeZp.png)
---
---
##Exercises
**1. String 1: extra_end**

**Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.** 

I had the same problem with several of the string exercises, where I incorrectly guessed the numbers that I needed to use in the index operator to grab certain parts of a string. For this one, I started with str[-2:-1] but it only retrieved the second-to-last letter.  

**Code**

```
def extra_end(str):
  newstr = str[-2:]*3
  return newstr
```

**2. List 1: rotate_left3**

**Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.**

At first glance, I didn't think this exercise would give me any trouble, but I could not figure it out on my own! So after some Googling, I found out about the pop method which removes and returns an arbitrary element from a set. After some 
trial-and-error I combined the append and pop methods to rotate the list.

**Code**

```
def rotate_left3(nums):
   nums.append(nums.pop(0))
   return nums
```

**3. Warmup 1: post_neg**

**Given 2 int values, return True if one is negative and one is positive. Except if the parameter "negative" is True, then return True only if both are negative.**

I learned a lot from this one about how to condense my code. You can see my code first followed by CodingBat's solution, which is a lot more "Pythonic" and showed me that you don't have to explicitly return True or False.

**Code*

```
def pos_neg(a, b, negative):
  if negative and (b < 0 and a < 0):
    return True
  if negative and a > 0 and b < 0:
    return False
  if not negative and a < 0 and b > 0 or a > 0 and b < 0:
    return True
  else:
    return False
```

**CodingBat's Solution**

```
def pos_neg(a, b, negative):  
  if negative:    
    return (a < 0 and b < 0)  
  else: 
    return ((a < 0 and b > 0) or (a > 0 and b < 0))
```
