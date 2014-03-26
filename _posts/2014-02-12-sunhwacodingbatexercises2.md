---
layout: post
author: sunhwap
title: the seond codingbat exercises
date: 2014-02-12
---

## Screenshot-warm-up 2



![warmup picture]( http://www.unc.edu/~sunhwa/560/warmup-2.PNG)


## Screenshot-string 2



![string picture]( http://www.unc.edu/~sunhwa/560/string2.PNG)



## Screenshot-list 2



![list picture]( http://www.unc.edu/~sunhwa/560/list-2.PNG)



## Screenshot-logic 2



![logic picture]( http://www.unc.edu/~sunhwa/560/logic2.PNG)



## 1st exercise that I liked-

 The first one that I liked is warmup exercise called string_match because even though
 my for-loop was almost right syntax wise, I could not initially thnk of the important fact that 
 the upper bound of the range for for loop has to do with length of the smaller string.  So this 
 was a new learning experience.
 
 ```
def string_match(a, b):
  length_min = min(len(a), len(b))
   
  count = 0 
  for i in range(length_min-1):
    if a[i:i+2] == b[i:i+2]:
      count=count+ 1
  return count
```
## 2nd one

The second one that I liked is the string exercise called count_code because it took a while
for me to realize that I made a mistake in putting the upper limit as i+1 rather than i+2 
for "co".  So this problem helped me to be very careful about the upper limit of string index.

```
def count_code(str):
 
  count=0
  for i in range(len(str)-3):
     if str[i:i+2]=="co" and str[i+3]=='e':
       count=count+1
  
  return count
```

## third one

The third one that I liked is called make_chocolate because it took a while for me to get it
right because I made a mistake in the nested if of the else statement, and an indentation 
error for the last return.  Overall, the second codingbat exercises took longer than the 
first ones becasue most of them were harder.
 
```
def make_chocolate(small, big, goal):
   bigHigh=goal/5
   if  big>= bigHigh:
     if small>=(goal-bigHigh*5):
        return goal-bigHigh*5
   else:
     if small >= (goal-big*5):
        return goal - big*5
      
   return -1
```


