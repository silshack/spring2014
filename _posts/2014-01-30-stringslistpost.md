---
layout: post
author: slaffer
title: Sophia's Strings and Lists Exercises
---

These exercises confused me when we first started working through them, but going through the string exercise #6 in class helped me to 
further understand how to define and build functions. 


##Strings #6: Reverse Function
```
def reverse(astring):
    bstring = ""
    for i in xrange(len(astring) -1, -1, -1):
        bstring = bstring + astring[i]
    return bstring

testEqual(reverse("happy"), "yppah")
testEqual(reverse("Python"), "nohtyP")
testEqual(reverse(""), "")
```

**Output:**
```
yppah
Pass
Pass
Pass
```

##Strings #7: Mirror Function

```
from test import testEqual

def reverse(astring):
    bstring = ""
    for i in xrange(len(astring) -1, -1, -1):
        bstring = bstring + astring[i]
    return bstring

def mirror(astring):
    return astring + reverse(astring)

astring = "happy"
print mirror(astring)

testEqual(mirror('good'),'gooddoog')
testEqual(mirror('Python'),'PythonnohtyP')
testEqual(mirror(''), '')
testEqual(mirror('a'),'aa')
```

**Output**
```
happyyppah
Pass
Pass
Pass
Pass
```

##Strings #11: Remove First Occurence of Substring

```
from test import testEqual

def remove(substr,theStr):
    #locate the substring
    find_substr = theStr.find(substr)
    if find_substr < 0: # returns original string if substring doesn't exist
        return theStr
    #builds new string without substring
    remove_substr = theStr[:find_substr] + theStr[find_substr + len(substr):]
    return remove_substr

print(remove('pp', 'happy'))

testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle')
```

**Output**
```
hay
Pass
Pass
Pass
Pass
```

##String #12: Remove All Occurrences of Substring

```
from test import testEqual

def remove_all(substr,theStr):
    remove_substr = theStr.replace(substr, "")
    return remove_substr

print(remove_all("iss", "Mississippi"))

testEqual(remove_all('an', 'banana'), 'ba')
testEqual(remove_all('cyc', 'bicycle'), 'bile')
testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
testEqual(remove_all('eggs', 'bicycle'), 'bicycle')
```

**Output**
```
Mippi
Pass
Pass
Pass
Pass
```

##List #7: Count Odd Numbers

```
def count_odd(list):
    #make a counting variable
    odd_count = 0
    
    for number in list:
        # is it odd
        if number % 2 == 1:
            odd_count += 1
            
    return odd_count
        
print(count_odd([5,1,2,3]))
print(count_odd([0,2,6]))
```

**Output**
```
3
0
```

##List #8: Sum Even Numbers

```
def sum_numbers(list):
    even_count = 0
    for number in list:
        #is it even
        if number % 2 == 0:
            even_count += number    #add up even numbers
            
    return even_count

print(sum_numbers([2,2,2,4,9]))
```

**Output**
```
10
```



