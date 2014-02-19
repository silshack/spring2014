---
layout: post
author: yonghao
title: yonghao's Second Codingbat's Practice
---

# Screenshot:

**Warmup 2:**

![Warmup2 image](http://farm8.staticflickr.com/7434/12529756494_b08e97ea26_o.png)

**String 2:**

![String2 image](http://farm4.staticflickr.com/3744/12529756534_d129b99e22_o.png)

**List 2:**

![List2 image](http://farm4.staticflickr.com/3832/12529404723_27a6c49f18_o.png)

**Logic 2:**

![Logic2 image](http://farm4.staticflickr.com/3745/12529756604_dcca04846f_o.png)

# Comments:



**List 2, sum67**

I tried several ways and finally make it work.

At first, I write another def called delete 67, it looks like this:

```
def delete67:
 pos6=-1
 pos7=-1
 for i in range(len(nums)-1):
  if nums[i]==6:
   pos6=i
   break
 for j in range(pos6,len(nums)-1):
  if nums[j]==7 and j>pos6:
   pos7=j
   break
 del nums[pos6:pos7+1]
```
Then I try to call the function in main function, it works for all the test, but failed in "other test".
I dont know what is "other test" and can't solve it, so I change another way.

My code:

```
def sum67(nums):
  for i in range(0, len(nums)):
    if nums[i] == 6:
      nums[i] = 0
      for j in range(i+1, len(nums)):
        if nums[j] == 7:
          nums[j]=0
          i = j + 1
          break
        else:
          nums[j]=0
  return sum(nums)
  
```

The code works. Can anyone help me to find the error in former function?

**List2 centered_average:**

My thought: Travel all the elements in list, and each time call min and max method. every time compare the current element with the current min/max number.
And get the new min/max number. After we travel the whole array, we can get the min and max number in the array. And when can use the sum of all the numbers in list minus min and max number.

My code:

```
def centered_average(nums):
 min_1=nums[0]
 max_1=nums[0]
 result=0
 for i in nums:
  min_1=min(i,min_1)
  max_1=max(i,max_1)
 for i in nums:
  result+=i
 return (result-min_1-max_1)/(len(nums)-2)
 
```

**Logic 2: Make_Bricks**

It's a little hard. I try different ways to solve it, and finally, I got idea from the help video and use mod to solve it.
Fitstly, I tried to use a loop to solve it, my code like that:

```
for i in range(big):
 if 5*i<goal and goal-5*i<small:
  return True

```

It should work, but the system continue to return an error: "Time out". I don't know why it wont work. So I changed my mind and use a mod.

My code:
```
def make_bricks(small, big, goal):
 return goal%5 - small <= 0 and small + 5*big >= goal
    
```
It has two steps to judge.
Firstly: judge weather bricks are enough:

```
small+5*big>=goal
```

Secondly: Judge weather small bricks is enough.

```
goal%5 - small <= 0
```

Then the problem is solved. It's a gret idea to use mod, and I think mod will help me in the future!


**Logic 2: make_chocolate**

The problem is similar to make_bricks and I use a similar method to solve it.
