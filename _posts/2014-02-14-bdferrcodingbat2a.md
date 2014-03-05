---
layout: post
author: bdferr
title: CodingBat 2
---

I realize I posted these in my first CodingBat post already, but here they are again.

![Warmup-2 image](http://i.imgur.com/G9jiOfB.png)

![Logic-2 image](http://i.imgur.com/fxqcvPP.png)

![String-2 image](http://i.imgur.com/p5Dhx4y.png)

In the List-2 section, I could not quite finish the sum67 problem, so after quite a bit of time working on it,
I am leaving it for now. As you can see, I did get it to partially work, and I did get the other problems
in that section done.

![List-2 image](http://i.imgur.com/PyRVMk5.png)

![Sum67 image](http://i.imgur.com/2KLaTod.png)

The sum67 problem was particularly maddening, of course. The goal was to remove every item 
in a string from a 6 to the next 7, and sum the results (the sum was easy enough). 
I had two different versions of it, each of which passed 8 tests but failed the rest. 
Both produce lists of the index positions of the 6s and 7s, and use them for iterative string concatenation. 
My latest efforts to improve either of them resulted in either no change or error messages. 
I actually ended up with more than two versions.
I suspect there is something fundamental which I am missing here.

My first version manages to identify the 6s and 7s, but does not seem to recognize
the space between them; i.e. in a list like [6, 7, 8, 6, 7] it would return zero, where it should
return 8. It also does not recognize when the 7s are superfluous, i.e. in [9,6,7,7] it would give me
9 rather than 16. It looks like this:

```
def sum67(nums):
  seven_found = False
  n = 0
  start_slices = []
  end_slices = []
  b = 0
  six_count = nums.count(6)
  seven_count = nums.count(7)
  if nums == []:
    return 0
  elif 6 not in nums and 7 not in nums:
    return nums
  else:
    while six_count > 0 or seven_count > 0:
      if nums[n] == 6:
        start_slices += str(n)
        n += 1
        six_count -= 1
      elif nums[n] == 7:
        end_slices += str(n)
        n += 1
        seven_count -= 1
      else:
        n+=1
  for a in start_slices:
    for b in end_slices:
        nums = nums[:int(a)] + nums[int(b)+1:]
        start_slices = start_slices[:int(a)] + start_slices[int(b)+1:]
        end_slices = end_slices[:int(b)] + end_slices[int(b)+1:]
  return sum(nums)
```

I made a second version in response to these problems, but it does not entirely solve them.
The details might be too complicated to fully explain in this post. Basically, though,
I want to (and apparently don't) have a function which can run two simultaneous for loops on two separate lists.
For example, if I have a list called lista [a, b, c, d] and a list called listb [w, x, y, z], I want my code 
to generate the slices [a:w], [b:x], [c:y], and [d:z]. I know the slicing is a separate function,
but I need to be able to conection a with w, then b with x, and so on.
Nesting one for loop inside another is what I attempted in my first version, but it does not 
seem to quite do the same thing. Instead I believe it generates [a:w], [a:x], [a:y], 
a:z], and then [b:w], [b:x], and so on. This explains why what is removed includes what I did not
want to remove, when it is between two strings which I actually did want to remove. 
I ultimately attempted several approximations but still can't seem to quite get this double loop function. 
Here is one unsuccessful attempt. This version can’t seem to deal with multiple 6s and 7s, 
not even recognizing anything beyond the first pair:

```
def sum67(nums):
  n = 0
  b = 0
  start_slices = []
  end_slices = []
  six_count = nums.count(6)
  seven_count = nums.count(7)
  if nums == []:
    return 0
  elif 6 not in nums and 7 not in nums:
    return nums
  else:
    while six_count > 0 or seven_count > 0:
      if nums[n] == 6:
        start_slices += str(n)
        n += 1
        six_count -= 1
      elif nums[n] == 7:
        end_slices += str(n)
        n += 1
        seven_count -= 1
      else:
        n+=1
  for a in start_slices:
    if end_slices[0] < a: # in other words if there is a 7 located before a 6
      end_slices = end_slices[1:] # remove it from the list of 7 positions,
      # and don't do anything with it.
    else:
      nums = nums[:int(a)] + nums[int(end_slices[0])+1:]
      if len(start_slices) > 1:
       start_slices = start_slices[1:]
      else:
        start_slices = []
      if len(end_slices) > 1:
        end_slices = end_slices[1:]
      else: start_slices = []
  return sum(nums)
```


This problem showed me that there are things I do not understand in programming,
even while I seem to understand all the relevant elements for that problem.

I am sure everyone else will be saying the same thing,
but I honestly do agree with the founder of CodingBat that the MakeBricks problem
is particularly interesting. I initially attempted it using loops,
and got errors attempting a nested for loop. More importantly, though,
I noticed I was advised to do it without any iteration at all, which I found baffling.

I restrained myself from watching the full video explaining it, and simply proceeded
based on the hint that I should use the modulus operator. After numerous attempts,
I realized that simply applying the modulus to the number 5 was not always appropriate.
If the goal divided by 5 was larger than the number of large bricks available, the result
would be misleading; if the number of small bricks was sufficient to cover the remainder,
it would give the false impression that the goal could be met. I found the use of the modulus
to completely replace iteration very interesting. My code looked like this:

```
def make_bricks(small, big, goal):
  if small >= goal:
    return True
  elif big * 5 + small < goal:
    return False
  elif big != 0 and goal % (big * 5) <= small:
    return True
  elif big * 5 > goal and (goal % 5 == 0 or goal % 5 <= small):
    return True
  else:
    return False
```


I also enjoyed a similar problem, in which there was a goal number of kilos
of chocolate. One problem was that the instructions were not exactly clear, though. The line
"Return the number of small bars to use, assuming we always use big bars before small bars"
was particularly misleading. What they actually wanted, based on the test results,
was not that the big bars should all be used before beginning with the small bars,
and one test result showed that what they wanted was even farther removed than that:
“make_chocolate(4, 1, 4)” expects an answer of 4, when this clearly requires using no big bars at all. Possibly they forgot to say that big bars can be omitted when the goal is less than 5.
Regardless, I was able to solve this with similar curious applications of the modulus operator
to what I did in the Make Bricks problem. This was my code:


```
def make_chocolate(small, big, goal):
  if goal < 5 and small >= goal:
    return small
  elif goal < 5 and small < goal:
    return -1
  elif small + big * 5 < goal:
    return -1
  elif goal % (big * 5) <= small:
    bars = goal - (big * 5)
    return bars
  else:
    bars = goal % 5
    if small >= bars:
      return bars
    else:
      return -1
```
