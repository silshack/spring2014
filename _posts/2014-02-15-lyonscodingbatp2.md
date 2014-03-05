---
layout: post
author: allen
title: Allen Codingbat Exercises Part 2
date: 2014-02-15
---

These Codingbat exercises were a bit more complicated than the last set. But most
of them were still pretty short, even if they took longer to figure out. Here's 
the screenshots

## Warmups 2

![Warmup Checklist](http://i.imgur.com/rE4d9cN.png)

I completed the Warmups.

##Strings 2

![Warmup Checklist](http://i.imgur.com/r3mcHCz.png)

I completed the Strings

##Lists 2

![Warmup Checklist](http://i.imgur.com/F57XrrU.png)

I completed the Lists

##Logic 2

![Warmup Checklist](http://i.imgur.com/n5JI1qx.png)

I completed the Logic!

And here are 3 exercises I thought were interesting and/or challenging and/or
the first three exercises because I was lazy and didn't want to look around for
the ones that were actually difficult or interesting.

##string_splosion

*
Given a non-empty string like "Code" return a string like "CCoCodCode".*

I just like the word stringsplosion.

{% include python %}

def string_splosion(str):
  result = ""
  for i in range(len(str)+1):
    result = result + str[:i]
  return result
  
print string_splosion('Code')
print string_splosion('abc')
print string_splosion('ab')

{% include endpython %}

##array123

*Given an array of ints, return True if .. 1, 2, 3, .. appears in the array somewhere. *

I like this problem because it shows how important it is to test for every possible
case that might be entered. In this problem I was able to get a checkmark and 
complete the problem by doing this:

```
def array123(nums):
  if 1 in nums and 2 in nums and 3 in nums:
     return True
  return False
```

However this ignores a really obvious case which is if the numbers 1, 2, and 3
are all in the array but not in the order 1, 2, 3. Weirdly, codingbat did not test
for that case and so I was able to complete the problem using code that doesn't work
for all cases.

Here's the actual solution:


```
def array123(nums):
  for i in range(len(nums)-2):
    if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
      return True
  return False
```

Output:

```
array123([1, 1, 2, 3, 1]) → True
array123([1, 1, 2, 4, 1]) → False
array123([1, 1, 2, 1, 2, 3]) → True
```

##string_match

*Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.*

This one tripped me up for a bit because the problem forgot to mention that one
string could be longer than the other one. So I was getting a lot of index out of 
range results. After figuring that out, the problem was a fairly simple for loop
with a boolean expression to check the substrings.

```
def string_match(a, b):
  count = 0
  shorter = min(len(a), len(b))
  for i in range(shorter-1):
    if a[i] == b[i] and a[i+1] == b[i+1]:
       count += 1
  return count
```

Output:

```
string_match('xxcaazz', 'xxbaaz') → 3
string_match('abc', 'abc') → 2
string_match('abc', 'axc') → 0
```

That's my stuff! 
