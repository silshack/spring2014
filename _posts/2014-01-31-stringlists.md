---
layout: post
author: julie
title: Lists and Strings 
---

For the Lists exercises

Exercise 7

```
def count_odd(lst):
    #takes input of list
    # make a counting variable
    odd_count = 0
    #wrap if in a for loop
    for number in lst:
        # Is it odd?
        if number % 2 == 1:
            odd_count += 1
    return odd_count

print(count_odd([5,1,3]))
```

Output
```
3
```


Exercise 8

```
def even_sum(list):
    sum_even = 0
    for number in list:
        if number % 2 == 0:
            sum_even += number
    return sum_even

print(even_sum([2,3,4,5]))

```

Ouput
```
6
```

Exercise 9

```
def neg_sum(list):
    sum_neg = 0
    for number in list:
        if number < 0:
            sum_neg += number
    return sum_neg

print(neg_sum([-3,-5,5,]))
```

Output

```
-8
```

Exercise 14

I couldn't get this one to work, but here is my attempt

```
def old_scen(list):
    scen_old=old
    for str in list:
        if str = 'old'
        replace = 'new'
print('old shoes')
```

For the strings exercises, I had some trouble.

With number 6, I modified the code which was the answer for number 7 and I thought it would work but it doesn't.

```
from test import testEqual

def reverse(astring):
    reversed = ' '
    for char in astring:
        reversed = char
    return reverse

testEqual(reverse("happy"), "yppah")
testEqual(reverse("Python"), "nohtyP")
testEqual(reverse("shoe"),"eohs")
```

The output looks like this

```
Test Failed: expected yppah but got <function reverse>
Test Failed: expected nohtyP but got <function reverse>
Test Failed: expected eohs but got <function reverse>
```

For exercise 7 I was able to get it because they give you the answer
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

The output looks like this
```
Pass
Pass
Pass
Pass
```

11 I could get because they give you the answer. Here is what they got. I don't quite understand it. I think I will have to reread the strings chapter.

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

The output is
```
pass
pass
pass
pass
```

For 12 I tried to modify the answer from 11 but couldn't get it to work. I put in this

```
from test import testEqual

def remove_all(substr,theStr):
    index = theStr.index(substr)
    if index < 0: # substr doesn't exist in theStr
        return theStr
    return_str = theStr[index+len(substr):]
    return return_str

testEqual(remove_all('an', 'banana'), 'ba')
testEqual(remove_all('cyc', 'bicycle'), 'bile')
testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
testEqual(remove_all('eggs', 'bicycle'), 'bicycle')

```

I got this
```

Test Failed: expected ba but got ana
Test Failed: expected bile but got le
Test Failed: expected Mippi but got issippi
```

As you can see I am having a hard time with the strings.

