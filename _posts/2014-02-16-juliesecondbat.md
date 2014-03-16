---
layout: post
author: julie
title: Julie's Second Coding Bat Exercise
---

First, here's my checkmarks:

![Turtle Image](http://i.imgur.com/JuPqneq.png)
![Turtle Image](http://i.imgur.com/Baj9FiR.png)
![Turtle Image](http://i.imgur.com/mQaRugX.png)
![Turtle Image](http://i.imgur.com/QogGbkv.png)

As you can see, I couldn't figure out the sum 67 one. 

The first one I thought was interesting was the string exercise **end_other.** With this exercise and others, it took me a while to realize that I needed to use the string methods, but once I did, everything was a lot easier. I realized that for this one I first had to turn all the strings into all lower case so that it could comepare them.  Here is the code:


```
def end_other(a, b):
  a = a.lower()
  b = b.lower()
  if b.endswith(a) or a.endswith(b):
    return True
  else:
    return False  
```


I also liked the **lucky_sum** one because I thought it was pretty easy and I figured it out right away, although I wonder if there is a shorter way to solve it rather than going through every possibility:


```
def lucky_sum(a, b, c):
  if a == 13:
    return 0
  elif b == 13:
    return a
  elif c == 13:
    return a + b
  else:
    return a + b + c 
```

Finally, I liked the **big_dif** exercise because I was proud of myself for coming up with such a short, easy solution:

```
def big_diff(nums):
  return max(nums) - min(nums) 
```



