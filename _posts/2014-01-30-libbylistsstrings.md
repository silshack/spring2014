---
layout: post
author: libbby
title: Lists and Strings exercises
---

Note: Everytime I edit this page to insert multiple console windows, they look terrible and the code within them repeats itself several times.
I have proceeded to simply post my code and corresponding outputs in the backtick boxes.

#Strings

###6.) Write a function that reverses its string argument.

I found this super simple technique at http://stackoverflow.com/questions/931092/reverse-a-string-in-python

```
from test import testEqual

def reverse(input):
    # reverse string by slicing, counting DOWN 1 at a time
    # nifty technique from Stack Overflow discussion
    # http://stackoverflow.com/questions/931092/reverse-a-string-in-python
    rev_string = input[::-1]
    return rev_string

# user input for visible example
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

###7.) Write a function that mirrors its argument.

This bit of code builds off of the index splicing from #6.

```
from test import testEqual

def mirror(input):
    # index splicing from problem 6
    return input + input[::-1]

# user input for visible example
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

###11.) Write a function that removes the first occurrence of a string from another string.

I changed line 4 from the textbook's "answer" from containing a .index() method to a .find() to avoid the error their solution leads to when testing.

```
from test import testEqual

def remove(substr,the_str):
    # find method returns index of first occurance
    index = the_str.find(substr)
    if index < 0: # substr doesn't exist in the_str
        return the_str
    # return_str variable made by index splicing of the_str around removed substr
    return_str = the_str[:index] + the_str[index+len(substr):]
    return return_str

# get user input for example
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

###12.) Write a function that removes all occurrences of a string from another string.

```
from test import testEqual

def remove_all(substr, the_str):
    # replace method essentially removes variable substr
    new_string = the_str.replace(substr, "")
    return new_string

# get user input for example
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

###7.) Write a function to count how many odd numbers are in a list.

Did this one as a class on Wednesday

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

Output:

```
Pass
Pass
Pass
```

###8.) Sum up all the even numbers in a list.

```
from test import testEqual

def sum_all_evens(lst):
    # begin the sum as zero
    even_sum = 0
    for e in lst:
        # if e is an even integer
        if e % 2 == 0:
            # update the sum as each even is encountered
            even_sum = even_sum + e
         
    return even_sum

# provides a visible example
test_list = [6, 5, 4, 0 , -3]
print(sum_all_evens(test_list))

testEqual(sum_all_evens([4, -2, 3]), 2)
testEqual(sum_all_evens([4, 2, 3]), 6)
```

Output:

```
10
Pass
Pass
```

###9.) Sum up all the negative numbers in a list.


```
from test import testEqual

def sum_all_negs(lst):
    neg_sum = 0
    # go through list one at a time
    for e in lst:
        # if e is negative
        if e < 0:
            # update negative sum
            neg_sum = e + neg_sum
    return neg_sum

# visible test case
test_list = [-6, 5, 4, 0 , -3]
print(sum_all_negs(test_list))

testEqual(sum_all_negs([0, -3, 4, 5]), -3)
testEqual(sum_all_negs([-2, -4, 0, -1]), -7)
```

Output:

```
-9
Pass
Pass

```

###14.) Write a function replace(s, old, new) that replaces all occurences of old with new in a string s:

This one required me to do some careful reading of the text, and repeatedly moving around bits of the code. I originally had 4 or 5 lines of code in my function, but was able to reduce to one.

```
from test import testEqual

def replace(s, old, new):
    # split string into list by the occurance of "old"
    # use "new" to rejoin the split string/list
    return new.join(s.split(old))

print(replace('Mississippi', 'i', 'I'))

testEqual(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')

s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
testEqual(replace(s, 'om', 'am'),
       'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')

testEqual(replace(s, 'o', 'a'),
       'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')
```

Output:

```
MIssIssIppI
Pass
Pass
Pass
```
