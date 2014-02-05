---
layout: post
author: chunxi
title: Chunxi's String&List
date: 2014-01-30
---

Post by Chunxi Zhang

## Chunxi's String&List

*Write a function that reverses its string argument.*

 
```
from test import testEqual

def reverse(astring):
 return astring[::-1]

testEqual(reverse("happy"), "yppah")
testEqual(reverse("Python"), "nohtyP")
testEqual(reverse(""),"")
```

another input

```
from test import testEqual

def reverse(astring):
    # your code here
    a = list(astring)
    a.reverse()
    reversed = ''.join(a)
    return reversed

testEqual(reverse("happy"), "yppah")
testEqual(reverse("Python"), "nohtyP")
testEqual(reverse(""),"")
```
same output

```
Pass
Pass
Pass
```

*Write a function that mirrors its argument.*

```
from test import testEqual

def reverse(mystr):
    reversed = ''
    for char in mystr:
        reversed = char + reversed
    return reversed

def mirror(mystr):
    return mystr + reverse(mystr)

testEqual(mirror('good'),'gooddoog')
testEqual(mirror('Python'),'PythonnohtyP')
testEqual(mirror(''), '')
testEqual(mirror('a'),'aa')
```
output

```
Pass
Pass
Pass
Pass
```

*Write a function that removes the first occurrence of a string from another string.*

```
from test import testEqual

def remove(substr,theStr):
    index = theStr.index(substr)
    if index < 0：
        return theStr
    if index >= 0:
        return the Str[:index]+theStr[index+len(substr):]

testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle')

```
Output

```
Pass
Pass
Pass
Pass
```

*Write a function that removes all occurrences of a string from another string.*

```
from test import testEqual

def remove_all(substr,theStr):
    new_string = theStr.replace(substr, "")
    return new_string

testEqual(remove_all('an', 'banana'), 'ba')
testEqual(remove_all('cyc', 'bicycle'), 'bile')
testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
testEqual(remove_all('eggs', 'bicycle'), 'bicycle')
```
Output

```
Pass
Pass
Pass
Pass
```

*Write a function to count how many odd numbers are in a list.*


```
import random

def countOdd(lst):
    odd = 0
    for e in lst:
        if not e % 2 == 0:
            odd = odd + 1
    return odd

test = []
for i in range(611):
    test.append(random.randint(0, 1000))

print(countOdd(test))
```
output

```
332
```

*Sum up all the even numbers in a list.*

```
import random

def sumEven(lst):
    sum = 0
    for e in lst:
        if e % 2 == 0:
            sum = sum + e
    return sum

lst = []
for i in range(100):
    lst.append(random.randrange(0, 100))

print(sumEven(lst))

```

output

```
2396
```
*Sum up all the negative numbers in a list.*

```
import random

def sumNegative(lst):
    sum = 0
    for e in lst:
        if e < 0:
            sum = sum + e
    return sum

lst = []
for i in range(100):
    lst.append(random.randrange(-1000, 1000))

print(sumNegative(lst))

```
output

```

-23563

```
*Write a function replace(s, old, new) that replaces all occurences of old with new in a string s:*

```
from test import testEqual
def replace(s, old, new):
    lst = s.split(old) 
    return new.join(lst)

testEqual(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')

s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
testEqual(replace(s, 'om', 'am'),
       'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')

testEqual(replace(s, 'o', 'a'),
       'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!') 
```
output

```
Pass
Pass
Pass
```


