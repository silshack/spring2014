---
layout: post
author: jtbeeker
title: jeremy's list and string exercise
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

outputs:

```
Pass
Pass
Pass
```

## string EX 7

```

from test import testEqual

def reverse(astring):
    # your code here
    return astring[::-1]

def mirror(mystr):
    # your code here
    return mystr+reverse(mystr)

testEqual(mirror('good'),'gooddoog')
testEqual(mirror('Python'),'PythonnohtyP')
testEqual(mirror(''), '')
testEqual(mirror('a'),'aa')

```

Outputs:

```

Pass
Pass
Pass
Pass

```

## String EX 11

input:

```

from test import testEqual

def remove(substr,theStr):
    # your code here
    index = theStr.find(substr)
    if index <0:
        return theStr
    return theStr[:index] + theStr[index + len(substr):]


testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle')

```

Output:

```

Pass
Pass
Pass
Pass

```

## String EX 12

input:

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

output:

```

Pass
Pass
Pass
Pass

```

## list EX 7

input:

```

def count_odd(list):
    num = 0
    for i in list:
        if i%2 == 1:
            num +=1
    return num
print ("odd in (13 5 3 2 8)'s number is :",count_odd([13,5,3,2,8]))

```

Output:

```

odd in (13 5 3 2 8)'s number is : 3

```

## list EX 8

input:

```

def even_sum(list):
    num = 0
    for i in list:
        if i%2 == 0:
          num += 1
    return num

print("even sum in 2 3 6 9", even_sum([2,3,6,9]))
    
```
output:

```

even sum in 2 3 6 9 2

```

## list ex 9

Input:

```

def negative_sum(list):
    sum = 0
    for i in list:
        if i < 0:
            sum += i
    return sum

print ("negative sum in -3-5-7-9", negative_sum([-3-5-7-9]))

```

output:

```

negative sum in -3-5-7-9 -24

```

## list EX 14

input:

```

from test import testEqual
def replace(s, old, new):
    pre = s.split(old)
    after = new.join(pre)
    return after

testEqual(replace('Mississippi','i', 'I'),'MIssIssIppI')  

```

output:

```

Pass

```



