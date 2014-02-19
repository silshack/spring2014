---
layout: post
author: sunhwap
title: string&list excercise
date: 2014-01-30
---

## String #6

```
def reverse(astring):
    # your code here
    bstring=""
    for  i in range(len(astring)-1,-1,-1):
        bstring=bstring+astring[i]
    return bstring
print(reverse("Python"))
print(reverse("Elliot"))
print(reverse("World"))

```
##Output #6

```
nohtyP
toillE
dlrow

```
## Srting #7

```
def mirror(mystr):
    # your code here
    yourstr=""
    for i in range(len(mystr)-1,-1,-1):
        yourstr=yourstr+mystr[i]
    return mystr+yourstr

testEqual(mirror('good'),'gooddoog')
testEqual(mirror('Python'),'PythonnohtyP')
testEqual(mirror(''), '')
testEqual(mirror('a'),'aa')

```
## Output #7

```
Pass
Pass
Pass
Pass

```
## String #11

```
from test import testEqual

def remove(substr,theStr):
    # your code here
    index=theStr.find(substr,0,-1)
    if index < 0:
        return theStr #when the substring fails to be found
    newstr=theStr[:index]+theStr[index +len(substr):]
    return newstr
testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle')

```
##Output #11

```
Pass
Pass
Pass
Pass

```
## String #12

```
from test import testEqual

def remove_all(substr,theStr):
    # your code here
    newstr=theStr.replace(substr,"")
    return newstr
testEqual(remove_all('an', 'banana'), 'ba')
testEqual(remove_all('cyc', 'bicycle'), 'bile')
testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
testEqual(remove_all('eggs', 'bicycle'), 'bicycle')

```

##Output #12

```
Pass
Pass
Pass
Pass

```
## List #7

```
def odd_count(list):
    number=0
	for number in list:
	    if number % 2==1:
	    return number
print(odd_count([2,3,5]))
print(odd_count([7,4,8]))
print(odd_count([6,9,11]))

```
##output

```
2
1
2

```
## List #8

```
def sum_enumber(list):
    even_number=0 #counting variable
    for number in list:
        if number % 2==0:
            even_number +=number
    return even_number
print(sum_enumber([2, 3, 4, 5,10]))
print(sum_enumber([6,8,9,11,12,13]))
print(sum_enumber([23,24,26]))  

```
## Output #8

```
16
26
50

```
## List #9

```
def sum_number(list):
    neg_number=0 #counting variable
    for number in list:
        if number <0:
            neg_number +=number
    return neg_number
print(sum_number([-2, 3, -4, -5,10]))
print(sum_number([6,-8,9,-11,12,-13]))
print(sum_number([23,-24,-26]))   

```
##Output #9

```
-11
-32
-50

```
## List #14

```
s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'

def replace(s,old, new):
    words=s.split(old)
    new_s=new.join(words)
    return new_s
print replace (s, "om", "am")
print replace (s, 'o', 'a')

```
    
##Output #14

```
I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!
I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!

```







