---
layout: post
author: brittany
title: Brittany's List and String Python Exercises
---

#Strings
###Exercise 6

```
def reverse(initial_string):
    reversed_string = ""
    for character in initial_string:
        reversed_string = character + reversed_string
    return reversed_string

print reverse("blue")
print reverse("Carolina")
```

```
#OUTPUT

eulb
aniloraC

```

###Exercise 7

```
def mirror(initial_string):
    reversed_string = ""
    for character in initial_string:
        reversed_string = character + reversed_string
    return initial_string + reversed_string

print mirror("blue")
print mirror("Carolina")
```

```
#OUTPUT

blueeulb
CarolinaaniloraC

```

###Exercise 11

```
def remove(substr,initial_string):
    beg_index = initial_string.find(substr)
    end_index = initial_string.find(substr)+len(substr)
    index = 0
    new_string = ""
    if beg_index == -1:
        return initial_string
    else:
        while index < len(initial_string):
            if index < beg_index:
                new_string = new_string + initial_string[index] 
                index = index + 1
            elif index >= end_index:
                new_string = new_string + initial_string[index]
                index = index + 1
            else:
                index = index + 1  
    return new_string

print remove("llo", "hello hello hello!")
print remove("le", "purple people eater")
print remove("he", "hello")
```

```
#OUTPUT

he hello hello!
purp people eater
llo
```

###Exercise 12
I didn't expect this one to be particularly difficult after completing the previous exercise. However, I had one little error that caused me a lot of problems. In the last if statement in the function, I failed to *return* the function (instead, I just wrote remove_all(substr, new_string)), which caused the function to continually return 'None' any time a substring was repeated more than once. I thought maybe my indentation was off, but after a bit of googling (and an hour or so of fruitless manipulation!), I realized this error!

```
def remove_all(substr,initial_string): 
    beg_index = initial_string.find(substr)
    end_index = initial_string.find(substr)+len(substr)
    index = 0
    new_string = ""
    if beg_index == -1:
        return initial_string
    else:
        while index < len(initial_string):
            if index < beg_index:
                new_string = new_string + initial_string[index] 
                index = index + 1
            elif index >= end_index:
                new_string = new_string + initial_string[index]
                index = index + 1
            else:
                index = index + 1
        if new_string.find(substr) == -1:
            return new_string
        else:        
            return remove_all(substr, new_string)

print remove_all("llo", "hello, hello, hello!")
print remove_all("le", "purple people eater")
```

```
#OUTPUT

he, he, he!
purp peop eater
```


#Lists

###Exercise 7

```
def count_odds(list):
    count = 0
    for num in list:
        if num%2 != 0:
            count = count + 1
        else:
            count = count
    return count

print count_odds([1,2,3,4,5,6,7,8,9])
print count_odds([2,4,6,8])
```

```
#Output

5
0
```

###Exercise 8

```
def sum_evens(list):
    sum = 0
    for num in list:
        if num%2 == 0:
            sum = sum + num
        else:
            sum = sum
    return sum                  
            
print sum_evens([2,4,6])
print sum_evens([1,3,5])
print sum_evens([1,3,5,6,2])
```

```
#OUTPUT
12
0
8
```


###Exercise 9

```
def sum_negatives(list):
    sum = 0
    for num in list:
        if num < 0:
            sum = sum + num
        else:
            sum = sum
    return sum

print sum_negatives([0,1,2,3,4,5,6,7])
print sum_negatives([0,1,2,3,4,5,6,7,-64])
print sum_negatives([0,-1,-2,-3,1,2,3])
```

```
#OUTPUT

0
-64
-6
```

###Exercise 14

```
def replace(s, old, new):
    words = s.split(old)
    new_sentence = new.join(words)
    return new_sentence

s = "Mississippi"
print replace(s, 'i', 'I')
s = "I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!"
print replace(s, 'om', 'am')
s = "I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!"
print replace(s, 'o', 'a')
```

```
#OUTPUT

MIssIssIppI
I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!
I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!
```


