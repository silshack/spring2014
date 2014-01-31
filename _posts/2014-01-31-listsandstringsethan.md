---
layout: post 
author: ethan
title: Ethan's Lists and Strings
date: 2014-01-31
---

Okay, well I'm done. Here are all of my posts. 

#Strings

##Number 6

**Code**

```
def reverse(astring):
    bstring = ""
    for i in xrange(len(astring) -1, -1, -1):
        bstring = bstring + astring[i]
    return bstring

print(reverse('Ethan'))
print(reverse('Kavanaugh'))
print(reverse('blue'))
```

**Output**

```
nahtE
hguanavaK
eulb
```

##Number 7 

**Code**

```
def switch(words):
    reversed = ""
    for char in words:
        reversed = char + reversed
    return reversed 

def mirror(words):
    return words + switch(words)
    

print(mirror('blue'))
print(mirror('Ethan'))
print(mirror('Kavanaugh'))
print(mirror('awesome'))
```

**Output**

```
blueeulb
EthannahtE
KavanaughhguanavaK
awesomeemosewa
```

##Number 11

**Code**

```
def remove(sub_string,the_string):
    index = the_string.index(sub_string)
    if index < 0: #if sub string isn't in the string it won't run
        return the_string
    #this creates a variable, return string, and then sees if the substring is in 
    #the original string. it'll either pass or fail. 
    return_string = the_string[:index] + the_string[index+len(sub_string):]
    return return_string

print(remove('an', 'banana'))
print(remove('cyc', 'bicycle'))
print(remove('iss', 'Mississippi'))
print(remove('him', 'him I like him'))
```

**Output**

```
bana
bile
Missippi
 I like him
```

##Number 12

**Code**

```
def remove_all(substr,thestr):
    if thestr > 0: #needs to be there...
        thestr = thestr.replace(substr, "")#replaces the substring in the string with nothing
    return thestr

print(remove_all('me', 'same thing'))
print(remove_all('thin', 'my thin chips'))
print(remove_all('kill', 'kill bugs'))
print(remove_all('egg', 'egg salad'))
```

**Output**

```
sa thing
my  chips
 bugs
 salad
```

#Lists

##Number 7 

**Code**

```
def count_odd(list):
    #need a counting variable for odd
    odd_count = 0
    
    for number in list:
        #figure out if something is odd 
        if number % 2 == 1:
            odd_count += 1
            
    return odd_count

print(count_odd([5,1,3,2,4,6,13,24]))
print(count_odd([5,4,3]))
print(count_odd([29,40,14]))
```

**Output**

```
4
2
1
```

##Number 8

**Code**

```
def add_evens(list):
    #variable for even sum
    even_sum = 0
    for number in list:
        if number % 2 == 0:
            even_sum = even_sum + number
            
    return even_sum

print(add_evens([5,1,3,2,4,6,13,24]))
print(add_evens([5,4,3]))
print(add_evens([29,40,14]))
```

**Output**

```
36
4
54
```

##Number 9

**Code**

```
def sumnegative (list):
    #need a sum variable 
    sum_neg = 0
    
    for number in list:
        #is it negative? 
        if number < 0: 
            sum_neg = sum_neg + number 
    return sum_neg 

print 'the sum of the negative numbers is: ',  sumnegative([-1,-2,-4,5,6,-2])
print 'the sum of the negative numbers is: ',  sumnegative([2,3,4,-7,-23])
```

**Output**

```
the sum of the negative numbers is:  -9
the sum of the negative numbers is:  -30
```

##Number 14

**Code**

```
def replace(original, old, new):
    original = original.replace(old, new)#replaces the old with the new 
    return original

original = 'Mississippi'
print(replace('Mississippi', 'i', 'I'))
original = 'I love spom! Spom is my favorite food. Spom, spom, spom, yum!'
print(replace(original, 'om', 'am'))
original = 'I love spom! Spom is my favorite food. Spom, spom, spom, yum!'
print(replace(original, 'o', 'a'))
original = 'I am a big fan of chicken. Chicken is a good food.'
print(replace(original, 'oo', 'lo'))
original = 'Ethan Kavanaugh'
print(replace(original, 'a', 'A'))
```

**Output**

```
MIssIssIppI
I love spam! Spam is my favorite food. Spam, spam, spam, yum!
I lave spam! Spam is my favarite faad. Spam, spam, spam, yum!
I am a big fan of chicken. Chicken is a glod flod.
EthAn KAvAnAugh
```

##Comments 

Okay, so I had a little bit of trouble on all of them. The few that we did in class was super helpful. I'm glad we did them. But what really gave me trouble was the finding and deleting certain things from a string. It took me a while to figure that out. Once I figured out how to do that, the ball really started to roll. 

Okay, well that's it! 
babykav out. 
