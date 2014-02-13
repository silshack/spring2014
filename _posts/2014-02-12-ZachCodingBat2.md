---
layout: post
author: zbay
title: Zach's Codingbat 2 Exercises
date: 2014-02-12
---

Had a lot of unexpected free time today, seeing that class and the game were cancelled and I didn't feel like leaving my apartment to go anywhere. Finished off not only the Codingbat exercises but also the extra credit, which I'll do in a separate post.
Here's my proof of completion for Codingbat:
![Warmup-2](http://i.imgur.com/LhxWzl7.png)
![String-2](http://i.imgur.com/JtN0Zp3.png)
![List-2](http://i.imgur.com/TuODdsI.png)
![Logic-2](http://i.imgur.com/4giQy26.png)

Here's some code:

List-2 > centered_average

This one was my lengthiest solution, so I figured I’d include it. After using loops with max() and min() to identify the biggest and smallest values in the list, I iterated through and added to the sum all the values that weren’t the max or min. The only tricky part was accommodating duplicates of the outliers. I used a Boolean to make sure that duplicates would be added to the sum.

```
def centered_average(nums):
  big = nums[0]
  small = nums[0]
  bigYet = False
  smallYet = False
  for i in range(1,len(nums)):
     big = max(big, nums[i])
     small = min(small, nums[i])
  if big == small:
    return big
  centeredSum = 0
  for num in nums:
     if (num != big and num != small) or (num == big and bigYet): 
        centeredSum += num
     if (num == small and smallYet):  
        centeredSum += num 
     if num == big and not bigYet:
        bigYet = True
     if num == small and not smallYet:
        smallYet = True
  return centeredSum/(len(nums)-2)
  ```
  
Logic-2 > make_chocolate

This one took some puzzling but I figured out an elegant solution. If you have the right number of big pieces to reach the goal without using small ones, the function will return 0. If you don’t have the right combination of pieces to reach the goal, you return negative 1. Otherwise, you return the number of small pieces to cover the deficit left by the lack of big pieces.

```
def make_chocolate(small, big, goal):
  noSmall = goal / 5
  if big >= noSmall:
    if small >= (goal - noSmall * 5):
      return goal - (noSmall * 5)
  if big < noSmall :
    if small >= (goal - big * 5):
      return goal - big * 5
  return -1
```

Logic-2 > round_sum

It took me a bit to wrap my head around this one for whatever reason. It’s simple, though. If the number rounds up, add 10 and subtract the remainder. If it rounds down, just subtract the remainder.

```
def round_sum(a, b, c):
   return round10(a) + round10(b) + round10(c)

def round10(num):
   if (num % 10) >= 5:
      return num + 10 - (num % 10)
   else:
      return num - (num % 10)
```
  
  
