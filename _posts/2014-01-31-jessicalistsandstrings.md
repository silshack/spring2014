---
layout: post
author: jskaa
title: Jessica's Lists and Strings Exercises
---

#Strings

###6. Reverse a String Argument

We went over this question in class. I also looked up extended slicing, and found that by omitting a beginning and end in the ```[begin:end:step]``` , by omitting a beginning and end while specifying a step of -1, it will reverse the string. 

My code was:

```
def reverse(astring):
    bstring = astring[::-1]
    return bstring

print reverse("Pretzel")
print reverse("Fonzy")
print reverse("Mike")
```

The output was:

```
lezterP
yznoF
ekiM
```

###7. Mirror an Argument

This was the exact same as the last question, but wanted us to concatenate the reverse onto the end of the original string. Doing so was incredibly easy, as it just needed me to make a small tweak by adding the reversed string onto the end of the original.

My code was:

```
def reverse(astring):
    bstring = astring[::-1]
    return astring+bstring 

print reverse("Pretzel")
print reverse("Fonzy")
print reverse("Mike")
```

The output was: 

```
PretzellezterP
FonzyyznoF
MikeekiM
```

###11. Remove the First Occurrence of a String from Another String 

This one was a little tricky to figure out, and I took a peek at the provided answer tab to give myself a hint in what direction I should go. I saw immediately that they used slicing and concatenation together, and I went back to my console to work. What I found was that I could use the ```.index()``` method to find the first occurrence of a parameter (substring) within a string. The index was saved as the variable ```index```, and used in slicing to find the letters in the input string up until but not including the index (which is the substring we want to remove!). The next step was to get rid of the full substring. But what if it was more than a single character? This is where the ```len(substring)``` came in, as when added to the index, it would give an index of where the full substring ended. Then, it was a simple matter of using this as the starting point of the slice, and concatenating it onto the end of the previous portion. 

My code was:

```
from test import testEqual

def remove(substring,inputstring):
    #find the index of the substring
    index = inputstring.index(substring)
    #if the substring doesn't exist, return the original input string
    if index < 0: 
        return inputstring
    #return the first part up to the index, and then the end part beginning from the end of the substring
    return inputstring[:index] + inputstring[index+len(substring):]

print remove('on', 'Fonzy') 
print remove('water', 'waterbottle')
testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')
testEqual(remove('egg', 'bicycle'), 'bicycle')
```

The output was: 

```
Fzy
bottle
Pass
Pass
Pass
```

###12. Remove All Occurrences of a String from Another String

At first, i was trying to edit my code from the previous question in order to answer this. However, after looking online, I found a ```.replace()``` method, which seemed MUCH easier to use. Using ```.replace()```, I could just "replace" all of the substring occurrenes with a blank string, essentially 'deleting' them. 

My code was:

```
from test import testEqual

def remove_all(substring,inputstring):
    remove_substring = inputstring.replace(substring, "")
    return remove_substring

print remove_all("app","snappappappi")
print remove_all("foo","snoofoobloofookoofoo")
testEqual(remove_all('an', 'banana'), 'ba')
testEqual(remove_all('cyc', 'bicycle'), 'bile')
testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
testEqual(remove_all('eggs', 'bicycle'), 'bicycle')
```

The output was:

```
sni
snooblookoo
Pass
Pass
Pass
Pass
```

#Lists

###7. Count the Odd

I knew I needed to use the modulo operator in my code. Once I saw down and wrote out the steps for myself, it was fairly simple to fill in the steps with actual code. 

My code was: 

```
def count_odd(list):
    #create a counting variable
    odd_count = 0
    for i in list:
        #check if the number is odd, and count up by one if it is
        if i % 2 ==1:
            odd_count += 1
    return odd_count

print (count_odd([5,8,9,3,1,44,45])) 
print (count_odd([2,4,6,8,10]))
```

The output was:

```
5
0
```

###8. Sum the even

Very similar to the above problem. It made me feel good to be able to quickly do this one. The only thing that changed was adding the number ```i``` itself to the ```even_sum``` counter if it did happen to be odd, rather than adding one like in the previous problem. This is because we are summing the numbers themselves, not just counting them up up one by one.

My code was:

```
def sum_even(list):
    #create a counting variable
    even_sum = 0
    for i in list:
        #check if the number is even
        if i % 2 == 0:
            even_sum += i
    return even_sum

print(sum_even([2,6,4,3,10,9]))
print(sum_even([3,5,22,5,1,78]))
```

The output was:

```
22
100
```

###9. Sum the negative

Once again, very similar to the above two problems. It was simple!

My code was:

```
def sum_negative(list):
    #create a counting variable
    negative_count = 0
    for i in list:
        #check if the number is below 0
        if i < 0:
            negative_count += i
    return negative_count

print(sum_negative([5,-1,-3,4,-8,2,100]))
print(sum_negative([5,2,6,-88,9,100,-39]))
```

The output was:

```
-12
-127
```

###14. A Mix of Lists and Strings 

We were given the hint that ```.split()``` and ```.join()``` would be very important for this. Once I went back and reviewed the reading (as well as sat down with a pen and paper to scribble out some stuff conceptually), it was quite simple! You just take the string ```s``` and use ```.split()``` on it with a delimiter of ```(old)``` in order to split it into a list of elements that do not include the delimiter. Then, you use ```.join()``` with a separator string of ```new``` in order to "glue" the list together using the ```new``` string. 

My code was:

```
def replace(s, old, new):
    #split the string with a delimiter of old
    list = s.split(old)
    #create a new string from the list using a glue of new
    new_string = new.join(list)
    return new_string

A = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'

print replace(A,"om","am")
print replace(A,"o","a")

B = "I love Fonzy! Fonzy is my favorite. Fonzy Fonzy Fonzy Fonzy!"
print replace(B,"zy","s")
print replace(B, "onzy", "loppity")
```


The output was:

```
I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!
I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!
I love Fons! Fons is my favorite. Fons Fons Fons Fons!
I love Floppity! Floppity is my favorite. Floppity Floppity Floppity Floppity!
```


Overall, this assignmnet was incredibly helpful and even fun at times. The strings frustrated me at some points, because I knew what I wanted to do at each step, but it was difficult putting it into actual code. Using pen and paper, as well as talking out loud to myself (a lot) helped incredibly! 
