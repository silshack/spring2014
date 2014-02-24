---
layout: post
author: jskaa
title: Jessica's Coding Bat Post Part II 
---

#Firstly, Those Glorious Screenshots 

###Warmup II

![Warmup II Screenshot](http://puu.sh/6YW9l.png "Warmup II")

###String II

![String II Screenshot](http://puu.sh/6YWcE.png "String II")

###List II

![List II Screenshot](http://puu.sh/6YWeA.png "List II")

###Logic II

![Logic II Screenshot](http://puu.sh/6YWbr.png "Logic II")


#The Interesting Bits

###Logic II: make_chocolate

I don't know why I struggled with this one, when it was so similar to the previous make_bricks problem in the same set.
I think it was mostly just getting tripped up with the information given to me and my new variable which I had defined. I spent
over 10 minutes changing pieces of the code and getting a bunch of reds, but after breaking out the pencil and paper,
it was smooth sailing. It really helps to write out the math sometimes, even if it is very simple!

My solution ended up being:

```
def make_chocolate(small, big, goal):
  max_big = goal / 5
  
  if big>=max_big:
    if small >= (goal-(max_big*5)):
      return goal-(max_big*5)
    else:
      return -1 
  elif big<max_big:
    if small>=goal-(big*5):
      return goal-(big*5)
    else:
      return -1
```

There is probably a way of writing this which is much shorter and more efficient, but this way makes all the 
calculations very clear, which is quite nice for a beginner like me.

###List II: sum67

This one gave me the most trouble, but at least I learned something cool in the process! For the previous sum13 problem, 
I came up with what may be a sort of patchwork answer by finding all items where were 13 in the array, and setting those, 
as well as the next immediate item in the array equal to 0, then summing up the array of integers. However, I couldn't 
do that for this one, because obviously I don't know how many numbers to get rid of. I first tried slicing, but it got 
pretty messy and I scratched that. So, what to do? Well, I went and bothered a programmer friend of mine for some hints.
He gave me a bit of a hint to create a boolean variable which would either sum or not sum the item at that index based 
upon it being True or False. Eureka! (or not so much a sudden 'Eureka' as a mistake-filled 10 minutes of trying to think
through what in the world I was doing. It's much easier when things are verbose! 

My end code was:

```
def sum67(nums):
  skipping = False
  sum = 0
  for i in range(len(nums)):
     if nums[i] == 6 and not skipping:
       skipping = True
       
     elif nums[i] == 7 and skipping:
       skipping = False
       
     elif not skipping:
       sum += nums[i]
  return sum 
```

Once again, there might be a more succinct way of writing it, but this is nice and easy for anyone to glance at and 
understand. 

###String II: end_other

Good thing we had that hint! Before clicking on the hint, I was preparing to figure out a way to go through each few 
items and then compare the strings. I'm not even sure how I was planning on doing that! Luckily Python has several 
very nice methods which are there to make our lives easier. Just a nice little example of how knowing what tools you 
have available can make things much easier!

My code was:

```
def end_other(a, b):
  a_lower = a.lower()
  b_lower = b.lower()
  return a_lower.endswith(b_lower) or b_lower.endswith(a_lower)
```

Nice and simple! 


