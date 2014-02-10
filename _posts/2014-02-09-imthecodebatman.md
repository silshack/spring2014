---
layout: post 
author: ethan
title: I'm the CodeBat
date: 2014-02-09
---

Alrighty, so here is the dealio. I have finished all of the Codebat exercises. It took me a while. Here are the three I have chosen. 

##Logic-1 near_ten

This one gave me a little trouble. I couldn't really figure out how to get the right functions to produce the outcome that I wanted. After playing around with it for a while, I figured it out. Here is my code. I think it works. ggggggggggggg

```
def near_ten(num):
   return (num % 10 == 0 or num % 10 == 1 or num % 10 == 2 or abs(10 - num %  10) == 2 or abs(10 - num % 10) == 1 or abs (10 - num % 10) == 0)
```

##String-1 left2

I decided to do this one becasue I am pretty sure I did it a completely different way than what they wanted me to, yet it still worked fine.

```
def left2(str):
   front = str[:2]
   end = str[2:]
   final = end + front
   return final
```

##Warmup-1 front_back

I decided to use this one becasue I had a little trouble with the finding the middle part. 

```
def front_back(str):
   if len(str) <= 1:
      return str
   middle = str[1:len(str)-1]
   return str[len(str)-1] + middle + str[0]
```

#Pictures

here are the screenshots of the completed exercises. 

![Imgur](http://i.imgur.com/tsKMc0q)
![Imgur](http://i.imgur.com/kv2J8k2)
![Imgur](http://i.imgur.com/34RlZmC)
![Imgur](http://i.imgur.com/imiaUdT)

##Reflection

I didn't think it was bad. It just took some time. All the coding was short. 

So, yeah, here it is. 

babykav out. 
