---
layout: post
author: xuxiang
title: Xuxiang's Codingbat Assignment
---

# Warmup 1:

![Warmup1 image](http://i.imgur.com/TtUOvib.jpg)

# List 1:

![List1 image](http://i.imgur.com/YzmEWXL.jpg)

# String 1:

![String1 image](http://i.imgur.com/9KygRmz.jpg)

# Logic 1:

![Logic1 image](http://i.imgur.com/Hmmz3tg.jpg)


**The Three exercises intereted me most:**

# List-1 > sum2:


Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0. 

My code is this:

```
def sum2(nums):
  sums = sum(nums[:2])
  return sums
```

it seems very simply and seems only one main line code can solve this problem. But actually it used two Python Build-in function: one is: sum. another is : slice. this two function helped me a lot and got rid of many verbose code. I like it!


# List-1 > make_ends:


Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more. 

I write code like this:

```
def make_ends(nums):
  return nums[:1] + nums[-1:]
```

This is a good example which can demonstrate how power the Slice function is. The negative sign in Slice means trace this string or array backward. so the '[-1:]' means it returns me the last digit. it is very interesting!


# Warmup-1 > near_hundred:



Given an int n, return True if it is within 10 of 100 or 200. Note: abs(num) computes the absolute value of a number. 

My code is this:

```
def near_hundred(n):
   return abs(n - 100) <= 10 or abs(n - 200) <= 10
```

Very simple? right? HAHA. But the simpler the code seems, the more powerful the function is. I learned a very useful function here: abs. It can return the absolute value of a number, so we don't need to use the if statement to judge which number is bigger. I like the feeling of learnning new things!

