---
layout: post
author: srmoore5
title: Sierra's String and List Exercises
date: 2014-01-31
---

Here are the string and list exercises.

**Strings**


6 Write a function that reverses its string argument.

```
from test import testEqual
def reverse(astring):
    # your code here
    bstring= ""
    for i in xrange(len(astring) -1, -1, -1):
        bstring = bstring + astring[i]
    return bstring

testEqual(reverse("kittens"), "snettik")
testEqual(reverse("Lilly"), "ylliL")
testEqual(reverse(""),"")
```

result:
```
Pass
Pass
Pass
```

7 Write a function that mirrors its argument.

```
from test import testEqual

def reverse(mystr):
    reversed = ''
    for char in mystr:
        reversed = char + reversed
    return reversed

def mirror(mystr):
    return mystr + reverse(mystr)

testEqual(mirror('lamps'),'lampsspmal')
testEqual(mirror('Python'),'CandyydnaCP)
testEqual(mirror(''), '')
testEqual(mirror('a'),'aa')

```
result:
```
Pass
Pass
Pass
Pass
```

11 Write a function that removes the first occurrence of a string from another string.

```
from test import testEqual

def remove(substr,theStr):
    index = theStr.index(substr)
    if index < 0: # substr doesn't exist in theStr
        return theStr
    return_str = theStr[:index] + theStr[index+len(substr):]
    return return_str

testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle')
```
result:
```
Pass
Pass
Pass
Pass
```
12 Write a function that removes all occurrences of a string from another string.

```
from test import testEqual

def remove(substr,theStr):
    # your code here
    index = theStr.find(substr)
    if index < 0:
        return theStr
    return theStr[:index] + theStr[index + len(substr):]

testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle')

```
result:
```
Pass
Pass
Pass
Pass
```

**Lists**


7 Write a function to count how many odd numbers are in a list

```
def odd_count(lemo):
    number = 0
    for o in lemo:
        if o%4 ==4:
            number +=1
    return number
print ( "odd # in (0,8,5,10,2)'s number is :", odd_count([0,8,5,10,2]))

```
result:
```
("odd # in (0,8,5,10,2)'s number is :", 0)
```
8 Sum up all of the even numbers in a list

```
def even_sum(list):
    sum = 0
    for i in list:
        if i%2 == 0:
            sum += i
    return sum

print ("even sum in 8 1 7 5 8:", even_sum([8,1,7,5,8]))

```
result:
```
('even sum in 8 1 7 5 8:', 16)
```



9 Sum up all of the negative numbers in a list:

```

def negative_sum(list):
    sum = 0
    for i in list:
        if i < 0:
            sum += i
    return sum

print ("negative sum in -10 -7 3 23 60:", negative_sum([-10,-7,3,23,60]))

```
result:
```
('negative sum in -10 -7 3 23 60:', -17)
```



14 Write a function replace(s, old, new) that replaces all occurences of old with newin a string s:

```
from test import testEqual
def replace(s, old, new):
    wds = s.split(old)
    glue = new
    new = glue.join(wds)
    return new

testEqual(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')

s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
testEqual(replace(s, 'om', 'am'),
       'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')

testEqual(replace(s, 'o', 'a'),

       'I love spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')
       
```
result:

```

Pass
Pass
Pass
       
```
