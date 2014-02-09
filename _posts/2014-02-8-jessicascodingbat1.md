---
layout: post
author: jskaa
title: Jessica's Coding Bat Post 
---

#First Things First

I'll get the screenshots out of the way first!

###Warmup I

![Warmup I Screenshot](http://puu.sh/6OQxg.png "Warmup I")

###String I

![String I Screenshot](http://puu.sh/6OQz7.png "String I")

###List I

![List I Screenshot](http://puu.sh/6OQBd.png "List I")

###Logic I

![Logic I Screenshot](http://puu.sh/6OQCU.png "Logic I")


#What I found Interesting

###Logic I: near_ten

This was the very last problem of the whole assignment, and it definitely stood out to me. I was able to write the python code that partially answered the assignment by using the following:

```
def near_ten(num):
  return (num%10<=2)
```

While this bit of code worked for numbers which were 2 or less OVER a multiple of 10, it did NOT work those that were two or less UNDER a multiple of 10 (i.e., it returned True for a number such as 42, but returned False for a number such as 39, which should still have returned True.) 
So, what to do about this? I pulled out a piece of paper and wrote a sequence of numbers, then came up with different rules I could write and tested them out to see if they worked logically. At first I thought I would need to use the ```abs()``` method, or several different modulus functions. However, I finally realized a much simpler way to do things- A simple ```or``` statement which would keep the same basic form, but merely shift the given number itself. My end code looked like:

```
def near_ten(num):
  return ((num%10<=2)) or ((num+2)%10<=2)
```

Woohoo!

###Logic I: caught_speeding

I enjoyed this one mostly because I thought it was amusing, plus I had to figure out a way for the code to check for several paramters on two different variables. While it would have been just as correct to write out a set of rules for ```is_birthday == True``` and for ```is_birthday == False```, I wanted to think of a way which was shorter and more concise. In the end, I realized I could define another variable which would be 0 when it was ```is_birthday == False```, and would be 5 when ```is_birthday == True``` so that I could just add it on to one set of rules and another bit of logic would determine whether the variable should be 0 or 5. My code ended up being:


```
def caught_speeding(speed, is_birthday):
  excuse = 0
  if is_birthday:
    excuse = 5
  if speed<=60+excuse:
        return 0
  elif (speed>=61+excuse) and (speed<=80+excuse):
        return 1
  else:
        return 2
```

Don't speed, even if it is your birthday!

###Logic I: cigar_party

Truthfully, I just enjoyed this one because the thought of squirrels smoking cigars at a party was so silly it made me laugh. Writing the python for it was pretty simple, as it only required a simple if/else statement (There is very likely a more concise way, but I'm not sure). 

My code was:

```
def cigar_party(cigars, is_weekend):
    if is_weekend:
        return cigars>=40
    else:
        return (cigars>=40) and (cigars<=60) 
```

Tadah!
Anyways, I kept thinking of this:

![Classy Squirrel](http://i.imgur.com/JdrPBrY.png "Dat Class")




