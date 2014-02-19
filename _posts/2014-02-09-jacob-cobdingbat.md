---
layout: post
author: jacobthill
title: Coding Bat Exercises 1
---


There weren't any specific exercises that I really liked above the others. I enjoyed all of them, but 
I liked the Strings and Logic sections most. I think the Lists section was the hardest for me 
and also the most useful. I was clear that I needed to review this material more than some of the other
material we've covered. 



# Codingbat Screenshots

### Warmup-1
![](http://oi62.tinypic.com/6gej4i.jpg)

### Strings-1
![](http://oi57.tinypic.com/r76vj7.jpg)

### Logic-1
![](http://oi58.tinypic.com/ea0aw8.jpg)

### Lists-1
![](http://oi58.tinypic.com/2468enr.jpg)

# Code Examples

### Logic-1 Near Ten
```
def near_ten(num):
    if num >= 0:
        if (num % 10) <= 2 or (num % 10) >= 8:
            return True
        else:
            return False
    else:
        return False
```

### Logic-1 Caught Speeding
```
def caught_speeding(speed, is_birthday):
    lucky = speed + 5
    if is_birthday == True:
        if speed < 66:
            return 0
        elif lucky >= 65 and speed <= 86:
            return 1
        else:
            return 2
    else:
        if speed < 61:
            return 0
        elif speed >= 60 and speed <= 80:
            return 1
        else:
            return 2
```

### Lists-1 Sum 2
```
def sum2(nums):
    if len(nums) > 1:
        return nums[0] + nums[1]
    elif len(nums) == 1:
        return nums[0]
    else:
        return 0
```

