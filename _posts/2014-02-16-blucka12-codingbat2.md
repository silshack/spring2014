---
layout: post
author: blucka12
title: Codingbat Exercise
---

```
def lone_sum(a, b, c):
```
  
  #first sign of green, brought to you by:  
  #  lone_sum = int(a + b + c)
  #  return (a + b + c)
  #then I worked on eliminating the variables that must be excluded, adding the "else" statement at the end:

```
lone_sum = int(a + b + c)
    
    if a == b: 
        return (c)
    if a == c:
        return (b)
    if b == c:
        return (a)
    else:
        return (a + b + c)
```

  #that got me most of the way, with one red box left
        
<a href="http://imgur.com/dmLlyTu"><img src="http://i.imgur.com/dmLlyTu.png?1" title="Hosted by imgur.com" /></a>
        
  #I got an error for (3,3,3) ->0, and had to go back to the beginning and insert:

```        
        lone_sum = int(a + b + c)
    
    if (a == b) and (a == c):
        return 0
    if a == b: 
        return (c)
    if a == c:
        return (b)
    if b == c:
        return (a)
    
    else:
        return (a + b + c)
```

<a href="http://imgur.com/52HOsHi"><img src="http://i.imgur.com/52HOsHi.png" title="Hosted by imgur.com" /></a>
   #Yay
   
Check out the io page here: http://blucka12.github.io/spring2014/
