---

layout: post
author: sunhwap
title: codingbat.com exercise
date: 2014-02-06

---

## Screenshot-warm-up 1



![warmup picture]( http://www.unc.edu/~sunhwa/560/warmup-1.PNG)



## Screenshot-string 1



![string picture]( http://www.unc.edu/~sunhwa/560/string-1.PNG)



## Screenshot-list 1



![list picture]( http://www.unc.edu/~sunhwa/560/list-1.PNG)



## Screenshot-logic 1



![logic picture]( http://www.unc.edu/~sunhwa/560/logic-1.PNG)



## 1st exercise that I liked-


```

 The first one that I liked is string exercise called first_half because I could not do it 
 initially and learned that I put the division sign in the wrong place  and eventually got 
 the correct one: len(str) by 2.  
 
 def first_half(str):
    c=(len(str))/2
    return str[:c]
    
```

## 2nd one

```

The second one that I liked is list exercise called max_end3 because it took longer for me 
to realize that I had to use if-else statement with for-loop.

def max_end3(nums):
  i = nums[0]
  j = nums[2]
  if i>j:
    Large_num = i  
  else:
    Large_num = j
  
  for index in range(len(nums)):
    nums[index] = Large_num
    
  return nums
  
```

## third one

```

The third one that I liked is called max_ends because my nested loops worked perfect in the initial try
while other ones took several tries.

def caught_speeding(speed, is_birthday):
    if is_birthday==True :
        if speed <=65:
           return 0
        elif speed >=66 and speed <=85:
           return 1
        else:
           return 2
    else:
        if speed <=60:
           return 0
        elif speed >=61 and speed <=80:
           return 1
        else:
           return 2
           
```





