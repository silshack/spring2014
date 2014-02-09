---
layout: post
author: xuxiang
title: Xuxiang's Codingbat Assignment
---

# Warmup 1:

![Warmup1 image](http://d.pcs.baidu.com/thumbnail/6410edd99595825a7a640dfac272d315?fid=2483271595-250528-989488506&time=1391970826&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-TUkUqB%2F8kGEbBGYbBj%2F7fg24OeI%3D&expires=8h&prisign=amMwnVibYf88f2TB/V4FApSN5rJwOqzRd3VKNKTQ53AEKBJxWcpoyj96l6p65hrwJTMtBHDFE4x/3SKcGzuw+x45oLOM2ebDsA7W9Ml4qnqaYWCq8K+F5O1gdG4LbnHYZLVyjRdWc8JmqtS48Dv5FzdHwRkSHRECB2ssYMa+ekB232pW9BdEEXBtrRUCrJk2HOV0gRi4YiYYab4Xizk2FGVgLvnOyyG5/l2QzsJAmL4=&r=998799403&size=c10000_u10000&quality=100)

# List 1:

![List1 image](http://d.pcs.baidu.com/thumbnail/515f77d49da7552381594c9119c86eed?fid=2483271595-250528-2302936610&time=1391970826&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ti%2BeOAPMafkbrSFxRy%2FlN5Flmno%3D&expires=8h&prisign=amMwnVibYf88f2TB/V4FApSN5rJwOqzRd3VKNKTQ53AEKBJxWcpoyj96l6p65hrwJTMtBHDFE4x/3SKcGzuw+x45oLOM2ebDsA7W9Ml4qnqaYWCq8K+F5O1gdG4LbnHYZLVyjRdWc8JmqtS48Dv5FzdHwRkSHRECB2ssYMa+ekB232pW9BdEEXBtrRUCrJk2HOV0gRi4YiYYab4Xizk2FGVgLvnOyyG5/l2QzsJAmL4=&r=386041745&size=c10000_u10000&quality=100)

# String 1:

![String1 image](http://d.pcs.baidu.com/thumbnail/e5fbd71118b99e98e29cebbe516d8062?fid=2483271595-250528-1514299726&time=1391970826&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Qpjwld8%2BTTq%2F4q7Q752SWYmC%2BaI%3D&expires=8h&prisign=amMwnVibYf88f2TB/V4FApSN5rJwOqzRd3VKNKTQ53AEKBJxWcpoyj96l6p65hrwJTMtBHDFE4x/3SKcGzuw+x45oLOM2ebDsA7W9Ml4qnqaYWCq8K+F5O1gdG4LbnHYZLVyjRdWc8JmqtS48Dv5FzdHwRkSHRECB2ssYMa+ekB232pW9BdEEXBtrRUCrJk2HOV0gRi4YiYYab4Xizk2FGVgLvnOyyG5/l2QzsJAmL4=&r=312522231&size=c10000_u10000&quality=100)

# Logic 1:

![Logic1 image](http://d.pcs.baidu.com/thumbnail/2090750c55f924424b7cc01b62c1e90b?fid=2483271595-250528-405795160&time=1391970826&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-EdHGQbJMrOmpzNmiChtq4VFzIbQ%3D&expires=8h&prisign=amMwnVibYf88f2TB/V4FApSN5rJwOqzRd3VKNKTQ53AEKBJxWcpoyj96l6p65hrwJTMtBHDFE4x/3SKcGzuw+x45oLOM2ebDsA7W9Ml4qnqaYWCq8K+F5O1gdG4LbnHYZLVyjRdWc8JmqtS48Dv5FzdHwRkSHRECB2ssYMa+ekB232pW9BdEEXBtrRUCrJk2HOV0gRi4YiYYab4Xizk2FGVgLvnOyyG5/l2QzsJAmL4=&r=501870892&size=c10000_u10000&quality=100)


**The Three exercises intereted me most:**

# List-1 > sum2:


Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0. 

My code is this:

```
def sum2(nums):
  sums = sum(nums[:2])
  return sums
```

it seems very simply and seems only one main line code can solve this problem. But actually it used two Python Build-in function: one is: sum. another is : slice. this two function helped me a lot and got rid of many verbose code. I like it!


# List-1 > make_ends:


Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more. 

I write code like this:

```
def make_ends(nums):
  return nums[:1] + nums[-1:]
```

This is a good example which can demonstrate how power the Slice function is. The negative sign in Slice means trace this string or array backward. so the '[-1:]' means it returns me the last digit. it is very interesting!


# Warmup-1 > near_hundred:



Given an int n, return True if it is within 10 of 100 or 200. Note: abs(num) computes the absolute value of a number. 

My code is this:

```
def near_hundred(n):
   return abs(n - 100) <= 10 or abs(n - 200) <= 10
```

Very simple? right? HAHA. But the simpler the code seems, the more powerful the function is. I learned a very useful function here: abs. It can return the absolute value of a number, so we don't need to use the if statement to judge which number is bigger. I like the feeling of learnning new things!

