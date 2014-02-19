---
layout: post
author: laura
title: CodingBat2
date: 2014-02-16
---

Here is the picture
![CodingBat2 Screenshot](http://puu.sh/6Z2b3.png "CodingBat2")

##Interesting 1
###Python > String-2 > end_other 
Question: Given two strings, return True if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: s.lower() returns the lowercase version of a string. 

With all the adding and slicing going on in this series, it was nice to use some simple code.
```
def end_other(a, b):
  a = a.lower()
  b = b.lower()
  return (b.endswith(a) or a.endswith(b))
```

##Interesting 2
###Python > List-2 > big_diff 
Question: Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in min(v1, v2) and max(v1, v2) functions return the smaller or larger of two values. 

Again, simplicity rules.
```
def big_diff(nums):
  return max(nums) - min(nums)
```

##Interesting 3
###Python > List-2 > count_evens 
Question: Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1. 

This helped me understand getting to even and odd elements in a string
```
def count_evens(nums):
  count = 0
  for element in nums:
    if element % 2 == 0:
      count += 1
  return count
  ```
