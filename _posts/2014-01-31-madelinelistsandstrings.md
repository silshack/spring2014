---
layout: post
author: madeline
title: Lists and Strings
---

## Lists and Strings

I found how code is cultural: strings operate left to right, not right to left as in some cultures.

6) For this, I simply searched for “reverse strings in Python, and I got the basic answer.  The next task was to integrate that answer into the code, which I did by making 's' equal ‘astring’.

```
from test import testEqual

def reverse(astring):
    s = astring
    s = s[::-1]
    return s
   
astring = testEqual(reverse("happy"), "yppah")
astring = testEqual(reverse("Python"), "nohtyP")
astring = testEqual(reverse("hello"),"olleh”) 
```

Output:

```
Pass
Pass
Pass
```

7) This one had me looking at the reading before, and I came up with ‘ ‘ to reverse the string.  I also found by looking at the answer that return was the function I wanted to have the strings pass the test.  This is probably because return allows storage in a computer for the function to then pass to the next lines of code.  Then, I had to figure out how to mirror a string with a capitalization, but could not.  My mistake was to not break up the code into two tasks: reversing, and mirroring, the strings.

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
testEqual(mirror(''),'')
testEqual(mirror('a'),'aa’)
```

Output:

```
Pass
Pass
Pass
Pass
```

11) After looking at many different potential ways of doing this, most of which required two arguments where I only needed one, I decided to look at the answer.  I found that after defining the function, one must use the index operator.  I guess I’m not very good at this.

```
from test import testEqual

def remove(substr,theStr):
    index = theStr.index(substr)
    if index < 0: 
        return theStr
    return_str = theStr[:index] + theStr[index+len(substr):]
    return return_str

testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle’)
```

Output:

```
Pass
Pass
Pass
```

12) After looking up ways to remove all instances of a substring, I came upon the Python Cookbook.  It gave the following answer to my problem:

```
fruit = "banana"
vehicle = "bicycle"
state = "Mississippi"

fruit.replace('an', '')
vehicle.replace('cyc', '')
state.replace('iss', '') 
```

However, it won’t run.  I want to see what I’m doing wrong.

7) After dividing the task into sub-tasks, I noticed that one should make a new list out of odd numbers, then print the length of that list.  To do so, I had to use the modulo operator, 

```
first = [2, 3, 6, 7]

newlist = []
for n in first:
    if n%1 == 0:
        newlist.append(n)
    print len(new list)
```

Output:

```
1
2
3
4
```

```
import random

def countOdd(lst):
    odd = 0
    for e in lst:
        if not e % 2 == 0:
            odd = odd + 1
    return odd

# make a random list to test the function
lst = []
for i in range(100):
    lst.append(random.randint(0, 1000))

print(countOdd(lst))  
```

Output:

```
43
```

8) 
```
first = [4,2,8,6,5]

def countEven(first):
    even = 0
    for n in first:
        if n % 2 == 0:
print len 
```
