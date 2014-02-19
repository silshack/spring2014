---
layout: post
author: blucka12
title: Codingbat Exercise Was Helpful!
---

Until this point, I was struggling to understand how I needed to talk to python, but I think that I'm starting to get the hang of it.

## 1

I liked the "make_abba" exercise in "Strings" because it showed me that some of these solutions can be simple and it didn't take me terribly long to get how to solve it.

```
def make_abba(a, b):
  
    return a + b + b + a
```

## 2

The next one I particularly liked was the "make_tags" exercise in "Strings", because it gave me a glimpse of how python can interact with HTML.

```
def make_tags(tag, word):
  
    return "<"+tag+">" + word + "</"+tag+">"
```

## 3

The one that I found to be the hardest was "alarm_clock" in the "Logic" section. It had a lot of variables that tripped me out at first, but breaking down the logical arguments one by one really walked it through. I still think problems like this one will be a challenge for me.

```
def alarm_clock(day, vacation):
  
    if vacation and (day == 0 or day == 6):
        return "off"
    elif vacation:
        return "10:00"
        
    elif  day >= 1 and day <= 5:
        return "7:00"
    else:
        return "10:00"
```


