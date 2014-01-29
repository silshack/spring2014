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

```

from test import testEqual

def reverse(phrase):
    reversed = ''
    for char in phrase:
        reversed = char + reversed
    return reversed

def mirror(phrase):
    return phrase + reverse(phrase)

testEqual(mirror('GoodMorning'),'GoodMorninggninroMdooG')
testEqual(mirror('GoodNight'),'GoodNightthgiNdooG')

print mirror("Good Night")

```

My Output:

```

Pass
Pass
Good NightthgiN dooG

```

**Strings Exercise 11**

My code:

**Strings Exercise 12**

My code:

**Lists Exercise 7**

My code:

```

def count_odd(list):
    #make a counting variable
    odd_count = 0    
    
    for number in list:
    
        #is it odd?
        if number % 2 == 1:
            odd_count += 1 
    
    return odd_count

print (count_odd([5, 1, 3]))
print (count_odd([5, 1, 2, 4, 5, 6, 9]))

```

My output:

```

3
4

```

**Lists Exercise 8**

My code:

**Lists Exercise 9**

My code:

**Lists Exercise 14**


