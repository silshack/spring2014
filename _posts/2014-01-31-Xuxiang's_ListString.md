---
layout: post
author: xuxiang
title: Xuxiang's list and string exercise
---

## String EX 6

inputs:

```

from test import testEqual

def reverse(astring):
    # your code here
    return astring[::-1]

testEqual(reverse("happy"), "yppah")
testEqual(reverse("Python"), "nohtyP")
testEqual(reverse(""),"")

```

outputs

```
Pass
Pass
Pass

```

## String EX 7

```

from test import testEqual

def reverse(astring):
    # your code here
    return astring[::-1]

def mirror(mystr):
    # your code here
    return mystr + reverse(mystr)

testEqual(mirror('good'),'gooddoog')
testEqual(mirror('Python'),'PythonnohtyP')
testEqual(mirror(''), '')
testEqual(mirror('a'),'aa')

```

outputs:

```
Pass
Pass
Pass
Pass

```
## String EX 11:

inputs:

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

outputs:

```
Pass
Pass
Pass
Pass

```

## String EX 12

inputs:

```

from test import testEqual

def remove_all(substr,theStr):
    # your code here
    return theStr.replace(substr,"")
    

testEqual(remove_all('an', 'banana'), 'ba')
testEqual(remove_all('cyc', 'bicycle'), 'bile')
testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
testEqual(remove_all('eggs', 'bicycle'), 'bicycle')

```

outputs:

```
Pass
Pass
Pass
Pass

```
## list EX 7

inputs:

```
def count_odd(list):
    num = 0
    for i in list:
        if i%2 == 1:
            num +=1
    return num
        
print ("odd in (1 3 5 7 8)'s number is :", count_odd([1,3,5,7,8]))



```

outputs:

```
odd in (1 3 5 7 8)'s number is : 4

```

## list EX 8

inputs

```
def even_sum(list):
    sum = 0
    for i in list:
        if i%2 == 0:
            sum += i
    return sum

print ("even sum in 2 3 5 7 8:", even_sum([2,3,5,7,8]))

```

outputs:

```
even sum in 2 3 5 7 8: 10
```
## list EX 9 

inputs:

```
def negative_sum(list):
    sum = 0
    for i in list:
        if i < 0:
            sum += i
    return sum

print ("negative sum in -2 -3 5 7 8:", negative_sum([-2,-3,5,7,8]))



```

outputs:

```
negative sum in -2 -3 5 7 8: -5

```

## list EX 14 



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

outputs:

```
Pass
Pass
Pass


```
