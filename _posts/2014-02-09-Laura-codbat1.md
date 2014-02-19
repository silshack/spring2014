---
layout: post
author: laura
title: CodeBat1
---

#Screen Shots
![Screenshot](http://i889.photobucket.com/albums/ac92/Lasher09/codBat1_zps7e90ed5d.png "codBat.png")

##Interesting
List-1 > has23
"Given an int array length 2, return True if it contains a 2 or a 3."
Comment: I really liked this one, simple, simple and simple.

```
def has23(nums):
   return 2 in nums or 3 in nums
```

Logic-1 > love6
"When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return True if the party with the given values is successful, or False otherwise."
Comment: I like how we can just keep adding the booleans.

```
def love6(a, b):
  return a == 6 or b == 6 or (a + b) == 6 or abs(a-b) == 6
```

That's it.
