---
layout: post
author: chunxi
title: Chunxi's CodingBat2
date: 2014-02-14
---

Post by Chunxi Zhang

## Chunxi's CodingBat2

**Choose three exercise.**


**1.String2-xyz_there**


 This question did take me some time. I thought several different ways to express my idea. But I do not know a method which can
 Then I change my thoughts. It could be 2 circumstances. If the 'xyz' is str[0:3], no matter where the '.' is, it will return
 True. And if there are '.xyz', it will return false. I can use != to except the '.'.
 
 
 ```
 def xyz_there(str):
  for i in range(len(str)):
    if str[i] != '.' and str[i+1:i+4] == 'xyz':
      return True
  if str[0:3] == 'xyz':
    return True
  return False
 ```
 
**2.Logic2-make_bricks**
 
 
 I am impressed with this question is because it took me some time to understand the request. After watching the vedio to understand
what brick means, I begin to code. The code isself is not hard. But it is problematic to know what exactly I want. 
 
  ```
 def make_bricks(small, big, goal):
  if goal % 5 >= 0 and goal % 5 - small <= 0 and small + 5*big >= goal:
   return True
  else:
   return False
  ```
   
  
**3.Logic2-long_sum**
 
 This question is strightforward. But I spent more time on debugging. The original code of mine is
 
 ```
def lone_sum(a, b, c):
  
  if a == b:
   return c
  if a == c:
   return b
  if b == c:
   return a
  if a == b == c:
    return 0
    
  else:
   return a+b+c
 
 ```

However, it cannot pass the test. At first, I did not what is wrong. Then I read the test carefully and I found out all the problem
happened when a=b=c. So I noticed that the problem is about the order. a = b= c should be ordered first.
 
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
   return a+b+c
 
 ```
 
 **Pictures**
 
 **warmup2**
 
 ![Image](http://farm3.staticflickr.com/2825/12522673384_ba1eac389f_m.jpg)
 
 **string2**
 
 ![Image](http://farm6.staticflickr.com/5516/12522685604_d424de12a5_m.jpg)
 
 **list2**
 
 ![Image](http://farm8.staticflickr.com/7348/12522205865_50f00c22f2_m.jpg)
 
 **logic2**
 
 ![Image](http://farm4.staticflickr.com/3789/12522217755_815f9b86cc_m.jpg)
 
 
  
  
  
