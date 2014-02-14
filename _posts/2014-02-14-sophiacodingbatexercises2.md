---
layout: post
author: slaffer
title: Sophia's Sophia's CodingBat Marathon Part 2
---

##Three Exercises

**1. String: end_other**

*Given two strings, return True if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: s.lower() returns the lowercase version of a string.*

Many of these exercises were very challenging for me. I liked this exercise because the hint provided by codingbat was very useful and I was able to come up with the solution in a relatively short time, which was a pleasant change from many of the other exercises (see below). 

```
def end_other(a, b):
  lower_a = a.lower()
  lower_b = b.lower()
  if lower_a.endswith(b.lower()):
     return True
  elif lower_b.endswith(a.lower()):
     return True
  else:
     return False
