---
title: Libby's Coding Bat exercises, Part Deux
author: libbby
layout: post
---

# The Exercises
Some of these were real doozies. I would have been entirely lost on some, were it not for the long winded people on stackoverflow who like to correct each other & provide detailed explanations.

### 1. String-2: double_char
This was one of the easier ones for me - I got all green on the first go. If only the logic problems went so painlessly...

_Given a string, return a string where for every char in the original, there are two chars._

```
def double_char(str):
  result = ''
  for letter in str:
    result = result + letter*2
  return result

```

### 2. Logic-2: make_bricks
Oh dear oh dear oh dear. This problem.
For something that is 6 lines of code, it was incredibly hard to work out.
The first thing we need to do, is determine if there actually enough bricks total to meet the goal, whether or not they are the right sizes. If not, it's an automatic False.
If there are enough, we need to then determine what the remainder is when you divide the goal by 5. If there are enough small bricks to cover the remainder, it's True.
Otherwise, False.

_We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return True if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops._

```
def make_bricks(small, big, goal):
  if goal > small + big*5:
    return False
  elif (goal%5 <= small):
    return True
  else: return False
```

### 3. Logic-2: no_teen_sum
This one took a little while, because for some reason I was getting hung up on what now looks like a really simple conditional. Just goes to show that taking a break can be VERY helpful when coding.

_Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "def fix_teen(n):"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main no_teen_sum()._

```
def fix_teen(n):
    if(n>12 and n < 20):
      if(n != 15 and n != 16):
        n = 0
    return n
def no_teen_sum(a, b, c):   
  return (fix_teen(a) + fix_teen(b) + fix_teen(c))
```

# The Screenshots
Here are my screenshots:
![Warmup-2 screenshot] (http://i972.photobucket.com/albums/ae206/fluffbrain/INLS560/screen_warmup2.png)
![Lists-2 screenshot] (http://i972.photobucket.com/albums/ae206/fluffbrain/INLS560/screen_list2.png)
![Logic-2 screenshot] (http://i972.photobucket.com/albums/ae206/fluffbrain/INLS560/screen_logic2.png)
![Strings-2 screenshot] (http://i972.photobucket.com/albums/ae206/fluffbrain/INLS560/screen_string2.png)
