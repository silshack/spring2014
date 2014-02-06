---
layout: post
author: slaffer
title: Sophia's CodingBat Marathon
---

##Three Interesting/Frustrating Exercises

**String: Extra_end**

*Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.*

Previously I had been struggling with wrapping my head around strings and how you manipulate the index position. During 
these string exercises I started to really understand how you move around to certain characters and that was an exciting ah 
moment. Below is on string exercise that only took me a minute to figure out which was a highly satisfying moment. 

```
def extra_end(str):
  new_string = (str[len(str)-2] + str[len(str)-1])*3
  return new_string
```
