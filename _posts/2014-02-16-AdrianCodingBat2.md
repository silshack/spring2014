---
author: Adrian
title: "Adrian's CodingBat Exercises Part 2"
layout: post
date: 2014-02-16
---

###Screenshots
**Warmup 2**



**List 2**



**String 2**



**Logic 2**



##Exercises

**1. String 2: xyz_there**

**Return True if the given string contains an appearance of "xyz" where the xyz is not directly preceded by a period.**

I think I may have made this exercise way more difficult than it was meant to be, but I got to delve into some recursion. At first I tried a for loop and an if statement, similar to the previous string exercises. I got almost all of the tests to work, except for the case where there were two instances of "xyz" with the second one not preceded by a period. I think I understand the solution I came up with, but I couldn't have figured it out without some extensive Internet research.

**Code**

```
def xyz_there(str):

  if ("xyz" in str):
  
    index=str.index("xyz")
    
    if (index==0):
      return True
    
    if (not str[index-1] == "."):
      return True
    
    return xyz_there(str[index+3:])
    
  return False
```

**2. List 2: sum67**

**Return the sum of numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7.**

I had a hard time with the last three list problems, but I decided to highlight this one because I used a while loop and the delete method for the first time. At once point I was got a "Timed Out" error and I'm not sure why.

**Code**

```
def sum67(nums):
  while (6 in nums)
    i = nums.index(6)
    j = nums.index(7, i, len(nums))
    del nums[i:j+1]
  return sum(nums)
```

**3. **

** **



**Code**
```

```
