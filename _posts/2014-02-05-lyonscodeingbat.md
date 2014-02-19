---
layout: post
author: allen
title: Allen Codingbat Exercises
date: 2014-02-05
---

These Codingbat exercises were super simple and really straight forwards and were 
good practice and probably good for retaining of what we've learned so far

## Warmups

![Warmup Checklist](https://i.imgur.com/I7JnOHj.png)

I completed the Warmups.

##Strings

![Warmup Checklist](https://i.imgur.com/0vBJkzQ.png)

I completed the Strings

##Lists

![Warmup Checklist](https://i.imgur.com/y9Tr0VG.png)

I completed the Lists

##Logic

![Warmup Checklist](https://i.imgur.com/ao9qgll.png)

I completed the Logic!

It was hard oming up with three exercises that were interesting. Weirdly enough
the warmup problems were more difficult than any of the other sections. Which made
them more interesting to me.The warmup questions dealing with strings were little more difficult for me. So I 
preferred them. 

##front3

*Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.*

I like this problem because of just how deceptively simple it is. The entire problem can
be summed up in a single line of code.

{% include python %}

def front3(str):
    return str[:3]*3

print front3("kitten")

{% include endpython %}

##missing_char

*Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..len(str)-1 inclusive).*

We did a similar problem for the interactive textbook. In this case you are just 
removing a letter. I like these problems, because the easiest way to do it is to 
think of it as printing the string without the letter you want, rather than 
thinking of it as "removing" the letter.

```
def missing_char(str, n):
  front = str[:n]   
  back = str[n+1:] 
  return front + back
```

Output:

```
missing_char('kitten', 1) → 'ktten'
missing_char('kitten', 0) → 'itten'
missing_char('kitten', 4) → 'kittn'
```
##not_string 

*Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.*

This question is similar to the previous ones. In this case you are looking at a
string to see if it starts with "not" if it doesn't you simply add "not" to the 
start of the string. It was also deceptively simple.

```
def not_string(str):
  if str[:3] == "not":
    return str
  return "not " + str
```

Output:

```
not_string('candy') → 'not candy'
not_string('x') → 'not x'
not_string('not bad') → 'not bad'
```

That's my stuff!
