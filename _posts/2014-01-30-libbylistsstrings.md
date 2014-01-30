---
layout: post
author: libbby
title: Lists and Strings exercises
---

#Strings

###6
Write a function that reverses its string argument.


``` 
from test import testEqual

def reverse(input):
    # reverse string by slicing, counting DOWN 1 at a time
    # nifty technique from Stack Overflow discussion
    # http://stackoverflow.com/questions/931092/reverse-a-string-in-python
    revString = input[::-1]
    return revString

text = raw_input("Type the string you would like to reverse.")

print("Here is your string, in reverse: " + reverse(text))

print("Tests:")
testEqual(reverse("happy"), "yppah")
testEqual(reverse("Python"), "nohtyP")
testEqual(reverse(""),"")
```

Output:

```
Here is your string, in reverse: nohtyP
Tests:
Pass
Pass
Pass
```

###7
Write a function that mirrors its argument.


```
from test import testEqual

def mirror(input):
    # index splicing from problem 6
    return input + input[::-1]
text = raw_input("Type the string you would like to reverse.")

print("Here is your string, with its mirror: " + mirror(text))

print("Tests:")
testEqual(mirror('good'),'gooddoog')
testEqual(mirror('Python'),'PythonnohtyP')
testEqual(mirror(''), '')
testEqual(mirror('a'),'aa')
```

Output:

```
Here is your string, with its mirror: PythonnohtyP
Tests:
Pass
Pass
Pass
Pass
```

###11
Write a function that removes the first occurrence of a string from another string.

```
from test import testEqual

def remove(substr,theStr):
    index = theStr.find(substr)
    if index < 0: # substr doesn't exist in theStr
        return theStr
    return_str = theStr[:index] + theStr[index+len(substr):]
    return return_str

b_str = raw_input("What is the string you wish to remove from?")
a_str = raw_input("What would you like to remove from that?")
print(remove(a_str, b_str))

testEqual(remove('egg', 'bicycle'), 'bicycle')
testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
```

Output:

```
bana
Pass
Pass
Pass
Pass
```

###12
Write a function that removes all occurrences of a string from another string.


```
from test import testEqual

def remove_all(substr, the_str):
    new_string = the_str.replace(substr, "")
    return new_string

b_str = raw_input("What string would you like to remove from?")
a_str = raw_input("What would you like to remove from that string?")
print(remove_all(a_str, b_str))

testEqual(remove_all('an', 'banana'), 'ba')
testEqual(remove_all('cyc', 'bicycle'), 'bile')
testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
testEqual(remove_all('eggs', 'bicycle'), 'bicycle')
```

Output:

```
ba
Pass
Pass
Pass
Pass
```

#Lists

###7
Write a function to count how many odd numbers are in a list.

```
from test import testEqual

def count_odd(list):
    # counting variable
    odd_count = 0
    
    for number in list:
        # determine if number is odd
        if number % 2 == 1:
            odd_count += 1
    return odd_count

testEqual(count_odd([5, 1, 8]), 2)
testEqual(count_odd([5, 1, 3]), 3)
testEqual(count_odd([0, 8]), 0)
```


###8
Sum up all the even numbers in a list.

```
```


###9
Sum up all the negative numbers in a list.


```
test_list = [-6, 5, 4, 0 , -3]

def sum_all_negs(lst):
    neg_sum = 0
    for e in lst:
        if e < 0:
            neg_sum = e + neg_sum
    return neg_sum

print(sum_all_negs(test_list))
```


###14
Write a function replace(s, old, new) that replaces all occurences of old with new in a string s:


```
from test import testEqual

def replace(s, old, new):
    return new.join(s.split(old))

print(replace('I love spam!', 'o', 'a'))

testEqual(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')

s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
testEqual(replace(s, 'om', 'am'),
       'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')

testEqual(replace(s, 'o', 'a'),
       'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')
```

