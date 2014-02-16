---
layout: post
author: slaffer
title: Sophia's CodingBat Marathon Part 2
---

##Three Exercises

**1. String: end_other**

*Given two strings, return True if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: s.lower() returns the lowercase version of a string.*

Many of these exercises were challenging for me. I liked this exercise because the hint provided by codingbat was very useful and I was able to come up with the solution in a relatively short time, which was a pleasant change from some of the other exercises (see below). 

```
def end_other(a, b):
  lower_a = a.lower()
  lower_b = b.lower()
  if lower_a.endswith(b.lower()):
     return True
  elif lower_b.endswith(a.lower()):
     return True
  else:
     return False
```

**2. Lists: sum13**

*Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.*

This is an exercise that I thought I understood the concept but could not figure out the answer. I used my resources and found someone on stackoverflow who also had problems with this exercise, which can be found [here] (http://stackoverflow.com/questions/11059910/skipping-elements-in-a-list-python). Seeing the correct code supplied by a user helped me to better understand the problem. Although it wasn't as satisfying as figuring out the answer myself, walking through this code was a good learning experience.  

```
def sum13(nums):
  sum = 0
  skip = False
  for i in nums:
     if i == 13:
        skip = True
        continue
     if skip:
         skip = False
         continue
     sum += i
  return sum
```

**3. Logic: make_chocolate**

*We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.*

A couple of the logic exercises also stumped me and I used this [blog](http://gregorulm.com/coding-bat-python-logic-2/) to help me work through the answers. After trying exercises for awhile and being stuck it was really a big help. On the making chocolate exercise I had not made the connection to add a variable ```maxBig``` that could be used to determine if there was enough big bars to meet the goal. After figuring this logical step out, I was able to modify my code in a way that made sense to me and solved the problem. 

```
def make_chocolate(small, big, goal):
  maxBig = goal/5
  
  if small + big*5 < goal or small < goal%5:
     return -1
  elif big >= maxBig:    
     return goal - maxBig*5
  elif big <= maxBig:
     return goal - big*5
```

##Screenshots of Checkmarks

![warmup2](http://i.imgur.com/yk6FTzi.png)
![strings2](http://i.imgur.com/sCZGonm.png)
![lists2](http://i.imgur.com/x561iyJ.png)
![logic2](http://i.imgur.com/Sc05cJa.png)
