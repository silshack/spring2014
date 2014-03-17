---
layout: post
author: madeline
title: Madeline's Codingbat Post 2
---

![] http://i.imgur.com/l3sQqbS.png

This is not me at my most brilliant, but I did my best.

## cat_dog 

Return True if the string "cat" and "dog" appear the same number of times in the given string.

I found the answer to this one online. str.count is a built-in function.  The reason there are not more of these is because Python would require almost infinite built-in functions to do the things required of it.

```
def cat_dog(str):
  if str.count("dog") == str.count("cat"):
    return True
  else:
    return False
```

## lone_sum

Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum. 

Since there are only three values in this one, I simply went through each scenario and used if statements for them.

```
def lone_sum(a, b, c):
 if a == b == c:
   return 0
 if a == b:
   return c
 if a == c:
   return b
 if b == c:
   return a
 else:
   return a + b + c
```

## lucky_sum

Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.

Because there were only 3 values, I only had to go through the scenarios to find the sums.  I am sure a loop would have been better.

```
def lone_sum(a, b, c):
 if a == b == c:
   return 0
 if a == b:
   return c
 if a == c:
   return b
 if b == c:
   return a
 else:
   return a + b + c
```
