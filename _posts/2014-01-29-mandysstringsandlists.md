---
layout: post
author: agooch
title: Mandy's Strings and Lists Exercises
---

For these exercises, I reviewed the functions and arguments from the two chapters; however, there were still a few gaps in my knowledge. 

There was a lot of digging around in various Google search results to find some examples to use to answer these questions. I will honestly say that I did not grasp strings as quickly as lists, but I'm learning. 

**Strings Exercise 6**

My code:

```

from test import testEqual

def reverse(x):
    #my code listed here
    phrase = ""
    for i in xrange(len(x) - 1, -1, -1):
            phrase = phrase + x[i]
    return phrase 

testEqual(reverse("Good Morning"), "gninroM dooG")
testEqual(reverse("Good Night"), "thgiN dooG")
testEqual(reverse(""), "")

print(reverse("Good Morning"))

```

My output:

```

Pass
Pass
Pass
gninroM dooG

```

**Strings Exercise 7**

My code:

