---
layout: post
author: lei
title: Lei Wang's CodingBat Exercise
date: 2014-02-09
---

# The Exercises

** 1. The first one I liked is the Warm up exercise called front3. I found it can be simply coded as following. Even if the string is less than 3, the function also runs as normal. If using other programming languages, it might show error.  **

```
def front3(str):
  return str[:3]*3
```

** 2. The second one I liked is the list exercise called has23. By this exercise, I found python is an excellent programming language again! In other languages, it might be complicatedly coded as fowolling. **

```
def has23(nums):
  if nums[0]==2 or nums[1]==2 or nums[0]==3 or nums[1]==3:
    return True
  return False
```
** However, in Python, we can use 'in' which make the script much more brief and neat.** 
```
def has23(nums):
 if 2 in nums or 3 in nums:
   return True
 return False

```

**3. The third on I liked is the logic exercise called caught_speeding. By this exercise, I found that sometimes we can think out of the box so that ideas from different aspects can help a lot to find the optimum solution. **

```
def caught_speeding(speed, is_birthday):
  if is_birthday:
    if speed <= 65:
      return 0
    if 65 < speed <= 85:
      return 1
    return 2 
  else:
    if speed <= 60:
      return 0
    if 60 < speed <= 80:
      return 1
    return 2
```
**However, the following method is a lot more convenient and neater.**

```
def caught_speeding(speed, is_birthday):
  if is_birthday:
    speed -= 5   
  if speed <= 60:
      return 0
  if 60 < speed <= 80:
    return 1
  return 2
```

# The Screenshots
Here are my screenshots:
![Warmup-1 screenshot] (http://www.unc.edu/~leiw/images/python/warmup1.jpg)
![Lists-1 screenshot] (http://www.unc.edu/~leiw/images/python/list1.jpg)
![Logic-1 screenshot] (http://www.unc.edu/~leiw/images/python/logic1.jpg)
![Strings-1 screenshot] (http://www.unc.edu/~leiw/images/python/string1.jpg)
