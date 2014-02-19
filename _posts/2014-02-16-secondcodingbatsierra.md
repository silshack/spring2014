---
layout: post
author: srmoore5
title: Coding Bat 2
date: 2014-02-16
---


Screenshot

![codingbat2](http://farm3.staticflickr.com/2812/12575600995_61167fc5a3.jpg)


3 Interesting Exercises

Logic 2 lucky_sum
- simple, logical and fun


```

def lucky_sum(a, b, c):
 if a == 13:
   return 0
 elif b == 13:
   return a
 elif c == 13:
   return a + b
 else:
   return a + b + c
   
```

String 2 count_hi
I forgot how to do this one for a moment.

```
def count_hi(str):
 a = str.split('hi')
 return len(a) - 1

```

Warmup 2 array123


```
def array123(nums):
    # Note: iterate with length-2, so can use i+1 and i+2 in the loop
  for i in range(len(nums)-2):
    if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
      return True
  return False
  
  ```

