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

```

from test import testEqual

def remove(substr,theStr):
    index = theStr.find(substr, 0, -1)
    if index < 0: # substr doesn't exist in theStr
        return theStr
    return_str = theStr[:index] + theStr[index+len(substr):]
    return return_str

testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle')

print(remove('an', 'banana'))

```

My output:

```

Pass
Pass
Pass
Pass
bana

```

**Strings Exercise 12**

My code:

```

from test import testEqual

def remove_all(substr,theStr):
    remove_str = theStr.replace(substr, "")
    return remove_str

testEqual(remove_all('an', 'banana'), 'ba')
testEqual(remove_all('cyc', 'bicycle'), 'bile')
testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
testEqual(remove_all('eggs', 'bicycle'), 'bicycle')

print(remove_all('an', 'banana'))

```

My output:

```

Pass
Pass
Pass
Pass
ba

```

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

```

def sum_numbers(list):
    #make a counting variable
    even_count = 0    
    
    for number in list:
    
        #is it even?
        if number % 2 == 0:
            even_count += number 
    
    return even_count

print(sum_numbers([2, 3 ,5, 10]))

```

My output:

```

12

```

**Lists Exercise 9**

My code:

```

def sum_negnumbers(list):
    #make a counting variable
    negative = 0    
    
    for number in list:
    
        #is it negative?
        if number < 0:
            negative += number
    
    return negative

print(sum_negnumbers([-1, -3, 2, 3 ,5, 10]))

```

My output:

```

-4

```

**Lists Exercise 14**

My code:

```

s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'

def replace(s, old, new):
    sminusold = s.split(old)
    glue = new
    snew = glue.join(sminusold)
    return(snew)

print replace(s, 'om', 'am')
print replace(s, 'o', 'a')

```

My output:

```

I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!
I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!

```
