---
layout: post
author: allen
title: Allen Lists and Strings
date: 2014-01-30
---

These were all exercises from the texbook, so for each problem, I copied
and pasted the text of the question from the virtual textbook. 

## Strings

**Problem 6**

*Write a function that reverses its string argument.*

This was made really REALLY easy by the use of extended slicing in Python. 
You just type a string and then follow it with a bracket containing three numbers 
(ex. string[abn]). Python reads this as **slice from a to b with steps n**. In this 
case n is -1 which makes the slice start at the end of the string and work its way
backwards.

{% include python %}

def reverse(astring):
    backwards = astring[::-1]
    return backwards

    
print(reverse("happy"))
print(reverse("Python"))
print(reverse(".,."))

{% include endpython %}

**Problem 7**

*Write a function that mirrors its argument.*

This problem was an extension of problem 6 and it actually would have taken more 
lines of code to use the problem 6 reverse fuction as part of the mirror method. 
So i just wrote a very similar fuction except I had it return the original string
with the reverse string attached rather than just the reverse string.


```

def mirror(mystr):
    reverse = mystr[::-1]
    return mystr+reverse

print(mirror('good'))
print(mirror('Python'))
print(mirror('.,.'))
print(mirror('a'))

```

*Output*
```
gooddoog
PythonnohtyP
.,..,.
aa
```

**Probelm 11**

*Write a function that removes the first occurrence of a string from another string.*

This one was a little tricky. The find method really helped, and once the substring
was found it was just a matter of removing it. The program doesn't really remove
the substring, it actually makes a new string that is the original string printed
to the location of where the substring starts, and the original string printed from
where the substring ended to the end of the string.

```

def remove(substr,theStr):
    location = theStr.find(substr)
    if location < 0:
        return theStr
    finalStr = theStr[:location] + theStr[location+len(substr):]
    return finalStr


print(remove('an', 'banana'))
print(remove('cyc', 'bicycle'))
print(remove('iss', 'Mississippi'))
print(remove('egg', 'bicycle'))


```

*Output*
```
bana
bile
Missippi
bicycle
```

**Problem 12**

*Write a function that removes all occurrences of a string from another string.*

After problem 11 this one was fairly easy. I just use the fuction from problem 11
and have it run on a loop until it returns the same thing it did last time. Then I
know it's removed the substring as much as it can and it will stop.

```

def remove(substr,theStr):
    location = theStr.find(substr)
    if location < 0:
        return theStr
    finalStr = theStr[:location] + theStr[location+len(substr):]
    return finalStr

def remove_all(substr,theStr):
    a = theStr
    while a:
        if remove(substr,a) == a:
            return remove(substr,a)
        else:
            a = remove(substr,a)

print(remove_all('an', 'banana'))
print(remove_all('cyc', 'bicycle'))
print(remove_all('iss', 'Mississippi'))
print(remove_all('egg', 'bicycle'))

```

*Output*
```
ba
bile
Mippi
bicycle
```

## Lists

**Problem 7, 8, and 9**

The book used randomly generated lists to test this problem. To save time I just 
defined all three functions and had them run on the same randomly generated list.

*Write a function to count how many odd numbers are in a list.*

For this I just took each number, determined if it was divisible by two using the 
remainder symbol, and if it wasn't I added one to the count of odds. Easy peasy.

*Sum up all the even numbers in a list.*

Similar to problem 8. if the number is divisible by two I added it to a sum of
even numbers. I originally had this as a seperate function but then realized I
could just have it as an else statement in the count odd function and that the
function could then do double duty. So that the sum and the count could be used
later by some other fuction I had them returned as a tuple and then printed one
at a time when the function was called.

*Sum up all the negative numbers in a list.*

This was similar to my original sum even function, but instead of checking if the
number was divisible by 2, it checked to see if the number was less than 0. If it 
was then the function added it to the sum of negatives.

```

import random


num_list=[]
for i in range(1000):
    num_list.append(random.randint(-1000, 1000))
    
def count_odd_sum_even(num_list):
    count = 0
    sum = 0
    for number in num_list:
        if number%2 != 0:
            count += 1
        else:
            sum = sum+number
    return (count, sum)

def sumNegative(num_list):
    count=0
    for number in num_list:
        if number < 0:
            count = count + number
    return count
print(count_odd_sum_even(num_list)[0])
print(count_odd_sum_even(num_list)[1])
print(sumNegative(num_list))

```

*Output*
(Although it's random each time)

```
489
7116
-241912
```

**Problem 14**

*Write a function replace(s, old, new) that replaces all occurences of old with new in a string s*

At first I thought I could use my remove function from the earlier string problem,
but then I realized that it was just way easier to us splits and joins to do this
problem. Which it was. It was super duper simple. It splits at every *old* indicator
and then joins it with a *new*. So simple. 

```

def replace(thStr,old,new):
    strList=[]
    strList = thStr.split(old)
    newStr=new.join(strList)
    return(newStr)

print(replace('Mississippi', 'i', 'I'))

s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
print(replace(s, 'om', 'am'))

print(replace(s, 'o', 'a'))

```

*Output*
```
MIssIssIppI
I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!
I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!
```


That's my stuff!
