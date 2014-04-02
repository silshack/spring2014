---
layout: post
author: jacobthill
title: Codingbat Exercises 2
---

### Warmup-2 
![](http://oi61.tinypic.com/20ictwg.jpg)

### Strings-2 
![](http://oi59.tinypic.com/vou6wj.jpg)

### Logic-2 
![](http://oi57.tinypic.com/29vdsnl.jpg)

### Lists-2 
![](http://oi62.tinypic.com/2wc1amd.jpg) 

The problems I found most interested were string bits in Warmup 2…. String bits was interesting because I could not 
figure it out. I had to look at the answer to see how it was done. But, after looking I learned how to use a for loop 
with a string index. I’m not sure, but I feel like this could be useful to me at some point. Logic 2 make bricks was 
another favorite. It took me almost an hour to solve, but it was a very interesting problem. I could also see the 
usefulness if you were writing code for a manufacturing company and wanted to see if you had enough materials on hand 
to fulfill incoming orders. I also really liked Logic 2 make chocolate. It was similar to make_bricks but because I 
had practice already, I was able to solve this problem much quicker. 

### String_bits
```
def string_bits(str):
    result = ""
    for i in range(len(str)):
        if i % 2 == 0:
            result = result + str[i]
    return result
```

### Make_bricks
```
def make_bricks(small, big, goal):
    bigger = big * 5
    if goal > bigger + small:
        return False
    elif goal <= bigger:
        bigger = goal // 5
        if (bigger * 5) + small >= goal:
            return True
        else:
            return False
    elif goal == bigger + small:
        return True
    elif bigger + small > goal:
        return True
```

### Make_chocholate 
```
def make_chocolate(small, big, goal):
    big = big * 5
    if big + small >= goal:
        if big > goal:
            if small >= goal - (goal - (goal % 5)): 
                return goal - (goal - (goal % 5)) 
            else:
                return -1
        else:
            return goal - big
    else:
        return -1
```
