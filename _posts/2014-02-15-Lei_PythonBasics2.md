---
layout: post
author: lei
title: Lei Wang's CodingBat Exercise2
date: 2014-02-15
---

# The Exercises

**1. The first one I found hard was the Logic-2 exercise called make_bricks. In some cases, it needs to use lots of little bricks instead of a big brick. Finally, I found it can be simply coded as following.**

```
def make_bricks(small, big, goal):
 goal = goal - 5*min(big,goal/5)
 return goal-small <= 0
```

**2. The second one I liked is the Logic-2 exercise called lone_sum. At first, I thought I should list all situation it might happen as following.**

```
def lone_sum(a, b, c):
 if a == b == c:
   return 0
 elif a == b:
   return c
 elif a == c:
   return b
 elif b == c:
   return a
 else:
   return a + b + c
```


**However, we can use 'not in' which make the script much more brief and neat.** 


```
def lone_sum(a, b, c):
  sum = 0
  if a not in [b,c]:
    sum += a 
  if b not in [a,c]:
    sum += b 
  if c not in [a,b]:
    sum += c 
  return sum

```

**3. I found the most hardest is list-2 exercise called sum67. A lot of cases should be taken into consideration. At first, I came up with a script as following.**

```
def sum67(nums):
  for i in nums:
    if 6 in nums:
      six = nums.index(6)
      seven = nums.index(7)
      for i in range(six,seven+1):
        nums.pop(six)
  return sum(nums)
```

**However, it cannot pass if the first 7 comes before the first 6. Then, after several tries, I got the following solution which works fine!!**


```
def sum67(nums):
  sum = 0
  flag = True
  for i in nums: 
    if i == 6:
      flag = False
      continue
    if i == 7 and not flag:
      flag = True
      continue
    if flag:  
      sum += i        
  return sum
```

# The Screenshots
Here are my screenshots:
![Warmup-1 screenshot] (http://www.unc.edu/~leiw/images/python/warmup2.jpg)
![Lists-1 screenshot] (http://www.unc.edu/~leiw/images/python/list2.jpg)
![Logic-1 screenshot] (http://www.unc.edu/~leiw/images/python/logic2.jpg)
![Strings-1 screenshot] (http://www.unc.edu/~leiw/images/python/string2.jpg)
