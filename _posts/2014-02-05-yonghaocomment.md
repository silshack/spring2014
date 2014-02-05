---
layout: post
author: yonghao
title: yonghao's comments about interesting exercise
---

**Warmup1--front_back**

The program should return a new string where the first and last chars have been exchanged.
At first, I write code like this:

```
str_1=str[1:len(str)-1]
return str[len(str)-1] + str_1+ str[0]

```
But an error came out which says "array out of index". Then I try to figure why it is out of index. 
Finally, I found I fotgot the situation in which the length of string is less than 2, then str[1:len(str)-1] will return an error
So I change my code like this:

```
if len(str)<=1:
  return str
 str_1=str[1:len(str)-1]
 return str[len(str)-1] + str_1+ str[0]
 
```

It works!! Yeaaaaah!



**Warmup 1 pos_neg*

Just a simple idea: I use multiply to judge if a and b are negative. Since if a*b<0, then one is negative and one is not.

My code is here:

```
def pos_neg(a, b, negative):
  mul=a*b
  if negative==False and mul<0:
    return True
  elif mul>0 and a<0 and negative:
    return True
  return False
  

```


**Logic1--caught_speeding**

It's a simple exercise but I have an idea to make the if condition easier! My code is here:

```
def caught_speeding(speed, is_birthday):
  if is_birthday:
   plus_speed=5
  else:
   plus_speed=0
  if speed<=60+plus_speed:
   return 0
  elif speed<=80+plus_speed:
   return 1
  else:
   return 2

```

I added a "plus_speed" which equals either 0 or 5. Then when I judge the range of speed, I just need the sum of plus_speed and max_speed(60 or 80)
It's a simple idea but I feel it saves me some time.



**Logic1--near_ten**

My code is here:

```
def near_ten(num):
  if num%10<=2 or 10-num%10<=2:
   return True
  return False

```

At first I forgot the situation 10-num%10<=2, then the program will return false even it's 19,or 58.
