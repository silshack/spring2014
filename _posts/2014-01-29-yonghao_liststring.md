---
layout: post
author: yonghao
title: yonghao's list and string exercise
---

## String EX 6

inputs:

```

from test import testEqual

def reverse(astring):
    reverse_string = ""
    for i in astring:
     reverse_string = i + reverse_string
    return reverse_string
    
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

def mirror(mystr):
    # your code here
    reverse_string = ""
    for i in mystr:
     reverse_string = i + reverse_string
    return mystr+reverse_string
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
    new_string = theStr.replace(substr, "")
    return new_string
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
def count_odd(xls):
    count=0
    for i in xls:
        if i % 2 ==1:
            count+=1
    return count

print "number of odd of 1,2,3,4,5: " , count_odd([1,2,3,4,5])


```

outputs:

```
number of odd of 1,2,3,4,5:  3

```

## list EX 8

inputs

```
def sum_even(xlist):
    sum=0
    for i in xlist:
        if i%2==0:
            sum+=i
    return sum
test_list = [1,2,3,4,5]
print "the sum of even number in [1,2,3,4,5] is ", sum_even(test_list)

```

outputs:

```
the sum of even number in [1,2,3,4,5] is  6

```
## list EX 9 

inputs:

```
def sum_negative(xlist):
    sum=0
    for i in xlist:
        if i<0:
            sum+=i
    return sum


test_list = [1,2,3,-4,-5]
print "the sum of negative number in [1,2,3,-4,-5] is ", sum_negative(test_list)

```

outputs:

```
the sum of negative number in [1,2,3,-4,-5] is  -9

```

## list EX 14 version 1 useing string method

inputs:

```
from test import testEqual
def replace(s, old, new):
    return s.replace(old,new)
    
testEqual(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')

s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
testEqual(replace(s, 'om', 'am'),
       'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')

testEqual(replace(s, 'o', 'a'),
       'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')

test_s =raw_input("please input the string")
test_old=raw_input("please input the pattern you want to replace")
test_new=raw_input("please input the new pattern")
result = replace(test_s, test_old, test_new)
print "the new result after replace is: ", result

```

outputs: 

```
Pass
Pass
Pass
the new result after replace is:  aaadefg

```

## list EX 14 version 2 using list method

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
test_s =raw_input("please input the string")
test_old=raw_input("please input the pattern you want to replace")
test_new=raw_input("please input the new pattern")
result = replace(test_s, test_old, test_new)
print "the new result after replace is: ", result

```

outputs:

```
Pass
Pass
Pass
the new result after replace is:  aaadefg

```
