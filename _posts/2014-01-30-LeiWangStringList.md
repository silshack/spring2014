---
layout: post
author: lei
title: Lei Wang's String & List
date: 2014-01-30
---



**String Exercise 6.WWrite a function that reverses its string argument..**

Inputs:

```

from test import testEqual

def reverse(astring):
    bstring = ""
    for i in range(len(astring) -1, -1, -1):  
        bstring = bstring + astring[i]
    return bstring

testEqual(reverse("happy"), "yppah")
testEqual(reverse("Python"), "nohtyP")
testEqual(reverse(""),"")

```

Outputs:

```
Pass
Pass
Pass
```


**String Exercise 7. Write a function that mirrors its argument.**

Inputs:

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

Outputs:

```
Pass
Pass
Pass
Pass
```


**String Exercise 11.Write a function that removes the first occurrence of a string from another string.**

Inputs:

```
from test import testEqual

def remove(substr,theStr):
    # your code here
    index =theStr.find(substr);
    if index==-1:
        return theStr
    if index>=0:
        return theStr[:index] + theStr[index+len(substr):]

testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle')
```

Outputs:

```
Pass
Pass
Pass
Pass
```



**String Exercise 12. Write a function that removes all occurrences of a string from another string.**

Inputs:

```
from test import testEqual

def remove_all(substr,theStr):
    new = theStr.replace(substr, "")
    return new

testEqual(remove_all('an', 'banana'), 'ba')
testEqual(remove_all('cyc', 'bicycle'), 'bile')
testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
```

Outputs:

```
Pass
Pass
Pass
```



**String Exercise 7.Write a function to count how many odd numbers are in a list.**

Inputs:

```

def countOdd(list):
    odd = 0
    for i in list:
        if i % 2 == 1:
            odd = odd + 1
    return odd

print("number of odd numbber in list [1,3,5] is", countOdd([1,3,5]))

```

Outputs:

```
number of odd numbber in list [1,3,5] is 3
```



**String Exercise 8. Sum up all the even numbers in a list.**

Inputs:

```
def sumEven(list):
    sum = 0
    for i in list:
        if i % 2 == 0:
            sum = sum + i
    return sum

print("sum of all the even numbers in list [2,4,5] is", sumEven([2,4,5]))

```

Outputs:

```
sum of all the even numbers in list [2,4,5] is 6
```



**String Exercise 9.Sum up all the negative numbers in a list.**

Inputs:

```

def sumNegative(list):
    sum = 0
    for i in list:
        if i < 0:
            sum = sum + i
    return sum

print("sum of all the negative number in list [-2,-4,5] is", sumNegative([-2,-4,5]))

```

Outputs:

```
sum of all the negative number in list [-2,-4,5] is -6
```



**String Exercise 14.Write a function replace(s, old, new) that replaces all occurences of old with new in a string s:**

Inputs:

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
       'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')
```

Outputs:

```
Pass
Pass
Pass
```

