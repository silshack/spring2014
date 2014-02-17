---
layout: post
author: katielmeyer
title: Codebat Exercises 2
---

## Exercises

![Checkmarks](http://i.imgur.com/Mig7uR0.png)

### Logic 2: Make bricks

This one was tricky! At first I thought 'oh that's easy, you just multiply the big bricks by five, 
add that to your number of small bricks, and see if that's greater than or equal to your goal'. Then I was
really confused about why I was getting a few of them wrong. I didn't realize until I read the 'Intro to 
MakeBricks' that we were supposed to get EXACTLY the goal number.

It took me a while to figure out how to do it without loops. There must be a smarter way to do this, but I
found myself having to think through each scenario.

```
def make_bricks(small, big, goal):
  #can we make goal with all small or any combination of small?
  if (small >= goal):
    return True
  #can we make goal with all big?
  elif (big*5) == goal:
    return True
  #can we make goal with all small + all big?
  elif small+(big*5) == goal:
    return True
  #are total big > goal?
  elif (big*5)>goal:
    #is goal divisible by 5?
    if goal%5 == 0:
      return True
    #can we make up the remainder with small?
    elif small >= goal%5:
      return True
    else:
      return False
  #is the total length of big less than goal?
  elif (big*5) < goal:
    #can small make up the remaining inches?
    if small >= (goal - big*5):
      return True
    else:
      return False
  else:
    return False
```

### Logic 2: Close far

This one gave me trouble because I kept getting one or two test cases coming back red and couldn't trace out why.
It drives me nuts that codingbat won't let you print to debug! One thing I started doing to get around that, 
especially on these boolean problems, is pick one red test case, and start flipping booleans in my code till
I figure out which if statement isn't doing what I meant to do. For example if a test case is getting
False when it should get True, I'll go through the return statements one by one and flip the booleans until
I get that one test case into the green. Then I know that's the conditional statement I need to fix.

```
def close_far(a, b, c):
  if (abs(a-b) <= 1 and abs(a-c) <= 1) or (abs(a-b) >1 and abs(a-c) >1):
    return False
  elif abs(a-b) <= 1:
    if (abs(c-a) >= 2) and (abs(c-b) >=2):
      return True
    else:
      return False
  elif abs(a-c) <= 1:
    if (abs(b-a) >= 2) and (abs(b-c) >=2):
      return True
    else:
      return False
  else:
    return False

```

### Logic 2: No teen sum

This one was kind of challenging just because of the way the instructions were written, I had to read
them twice before I understand what they were asking.

```
def no_teen_sum(a, b, c):
  sum = 0
  #for each number, run fix_teen and add to sum
  for number in (a, b, c):
    sum += fix_teen(number)
  return sum
  
def fix_teen(n):
  #if it's a teen...
  if n >= 13 and n <= 19:
    #but not a special teen...
    if n == 15 or n == 16:
      return n
    #don't add it to the sum
    else:
      return 0
  #otherwise, just return the parameter unchanged
  else:
    return n
```

