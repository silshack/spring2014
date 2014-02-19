---
layout: post
author: Adrian
title: Adrian's Strings and Lists Exercises
---
#Strings
###6. Write a function that reverses its string argument.
```
def reverse(astring):
     bstring = astring[None:None:-1]
     return bstring

print reverse("Adrian")
print reverse("silshack")
```
####Output
```
nairdA
kcahslis
```
###7. Write a function that mirrors its argument.
```
def mirror(mystr):
    newstr = mystr[:len(mystr)][::-1]
    return mystr+newstr

print mirror("Adrian")
print mirror("Ogletree")
```
####Output
```
AdriannairdA
OgletreeeertelgO
```
###11. Write a function that removes the first occurrence of a string from another string.
```

```
####Output
```

```
###12. Write a function that removes all occurrences of a string from another string.
```

```
####Output
```

```

#Lists
###7. Write a function to count how many odd numbers are in a list.
```
def count_odd(list):
    #Make a counting variable
    odd_count = 0
    for number in list:
        #Is it odd?
        if number % 2 == 1:
            odd_count += 1
    return odd_count
      
print (count_odd([1, 3, 5, 4]))
```
####Output
```
3
```
###8. Sum up all the even numbers in a list.
```
def sum_even(list):
    sum = 0
    for i in list:
        if i % 2 == 0:
            sum = sum + i
    return sum
      
print (sum_even([2, 8, 7, 1000]))
```
####Output
```
1010
```
###9. Sum up all the negative numbers in a list.
Once I figured out #8, this was pretty simple.
```
def sum_negative(list):
    sum = 0
    for i in list:
        if i < 0:
            sum = sum + i
    return sum

print (sum_negative([-1, 0, 10, -5, -11, 8]))
```
####Output
```
-17
```
###14. Write a function replace(s, old, new) that replaces all occurences of old with new in a string s.
```

```
####Output
```

```
