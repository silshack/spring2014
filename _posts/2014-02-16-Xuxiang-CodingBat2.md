---
layout: post
author: xuxiang
title: Xuxiang's Codingbat2 Exercise
---

# Warmup 2:

![Warmup2 image](http://i.imgur.com/BNQbg24.jpg)

# List 2:

![List2 image](http://i.imgur.com/Z1luOMj.jpg)

# String 2:

![String2 image](http://i.imgur.com/ePdsRUm.jpg)

# Logic 2:

![Logic2 image](http://i.imgur.com/KVtxAdj.jpg)


**The Three exercises intereted me most:**

# List-2 > sum13:

Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count. It took me much time to find out the keyword "continue"

My code is this:

```
def sum13(nums):
  count = 0
  while count < len(nums):
        if nums[count] == 13:
            del nums[count:count+2]
            continue
            
        count +=1

  return sum(nums)
```

I initialized a integer: "count" which used for counting which number eqauls 13 and I used the keyword: "continue" which can delete all the 13 and the number after 13. To find the "continue" it took me much time.



# List-2 > sum67:



Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers. 

I write code like this:

```
def sum67(nums):
   dontadd = 0
   sum = 0
   
   for i in range(0,len(nums)):
      if dontadd == 0:
         if nums[i] ==6:
            dontadd =1
         else:
            sum += nums[i]
      else:
         if nums[i] == 7:
           dontadd = 0
   return sum
```

This problem took me much time. At first I don't know how to get rid of all the integer between 6 and 7. Finally, I found a way. I setted uo a "dontadd" to indicate which number should be got rid from the list. 


# Logic-2 > make_bricks:



We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return True if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. 

My code is this:

```
def make_bricks(small, big, goal):

   if goal > 5*big +small:
      return False
   if goal%5 > small:
      return False
   else:
      return True
```

This code looks very easy, but actually it is not. I need to figure out in what situation the small brick and big brick can consist into the goal. At last I concluded two posible situations which like the code showed.
