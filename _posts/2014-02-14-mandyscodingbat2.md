---
layout: post
author: agooch
title: Mandy's Coding Bat Adventure Round 2
---

#Three Exercises#

This adventure in Coding Bat was a little bit longer and harder than the previous one. I've selected three exercises that I feel were challenging, but also rewarding after completion.

##Strings - cat_dog##

*Return True if the string "cat" and "dog" appear the same number of times in the given string.*

Code:

```

def cat_dog(str):
  if str.count("dog") == str.count("cat"):
    return True
  else:
    return False

```

This is where I was able to use the str.count method to find the results for this question. I found this method [here](http://docs.python.org/3/library/stdtypes.html?highlight=str.count#str.count). It is pretty simple to use and just clicked for me after my first attempt. I was pretty proud that I was able to figure out how to implement this method and answer this question so quickly. 

##Lists - big_diff##

*Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in min(v1, v2) and max(v1, v2) functions return the smaller or larger of two values.*

```

def big_diff(nums):
  min_val = min(nums)
  max_val = max(nums)
  for i in nums:
    new_val = max_val - min_val
  return new_val

```

This problem also used a new function: the min() and max(). I guess I really enjoy learning new shortcuts, as I call them, to answer questions quickly. I got the right answer after one try and was so excited. It definitely helped to boost my confidence while answering the rest of this sections questions, which had some difficult questions in it. 

##Logic - lucky_sum##

*Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.*

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

Lucky Sum...this one took me a second to read and understand. Then it sort of clicked and I started from the left of the function's a and moved to the right. It helped me to sort of visualize the movements in my head, if that makes any sense. But essentially if a was 13 anything to the right would be 0, if b was 13 then you would only return a and if c was 13 then you would only return a+b. If none of this was true, you'd return the sum of all three. 

I will say that I did not have an easy time with ranges in these exercises and I feel like I need some more practice with them. Overall, I was able to get a bunch of these on my own, but the rest of them required looking for help via StackOverflow and talking things out with my co-worker, Sophia. I'm definitely still not 100% okay with strings, either, but I think I am getting a little bit better each time through. 

#Coding Bat Screenshots#

![Strings 2](http://i.imgur.com/6cvDRub.png)

![Warmup 2](http://i.imgur.com/eVkUaQk.png)

![Lists 2](http://i.imgur.com/gg94SVd.png)

![Logic 2](http://i.imgur.com/g1aroMU.png)
