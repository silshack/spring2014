---
author: tlchristian
tite: Thu-Mai's Codingbat.com Exercises Part 2
layout: post
date: 2014-02-14
---

Well, well.  Just when I thought I was getting the hang of this Python thing, Codingbat has begged to differ.  After many (many, many) hours, I finally finished part 2 of the exercises.  

Before I discuss the individual exercises, I must take a moment to discuss the idea of fluency I mentioned in my previous post.  I've decided that writing "pythonic" code requires not only the ability to construct readable code, but also having a clear, well-articulated problem to solve.  As useful the Codingbat exercises were, I have to say that the problems presented were not always clear.  For some exercises, I didn't fully understand the scope of problem until lots of trial and error.  I appreciate even more the need to be able to communicate with programmers your desired outcome; I hereby apologize to programmers everywhere for every single moment I said things like, "Could you please write me a program that makes a vaguely-described thingie do a vaguely described thingie?"  My bad.

Back to the Codingbat Exercises.  Below are the three programs that had me really thinking.

***
***

##Exercises

**1. Logic-2 > make_bricks**
_We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return True if it is possible to make the goal by choosing from the given bricks. **This is a little harder than it looks** and can be done without any loops._  (My emphasis.)

_A little harder than it looks_?  Why?  Oh, I see.  You meant to say, "...Return True if it is possible to make the exact goal by choosing any combination of the given number of bricks.  It's OK if you have bricks remaining.  This is especially hard if I don't provide precise instructions."  After I watched the video, It didn't take me long to come up with this:

```
def make_bricks(small, big, goal):
    need = goal % 5
    if small >= goal or (small >= need and (big * 5) >= (goal - small)):
       return True
    return False
```

***

**2. String-2 > xyz_there**
_Return True if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not._

Like many of the Codingbat part 2 exercises, this required a lot of creativity to come up with a solution that works.  At first I thought that I would be using indices to identify locations of "." when it precedes "xyz".  But then I figured an easier approach would be to just remove any occurrences of ".xyz" before executing the boolean.  Score.

```
def xyz_there(str):
   if ".xyz" not in str:
      if "xyz" in str:
          return True
   if ".xyz" in str:
      str = str.replace(".xyz", "abcd")
      if "xyz" in str:
          return True
   return False
```

***

**3. String-2 > count_code**
_Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count._

When I looked at my Codingbat.com Done page, this was the problem that I spent most of my time by far.  I think I got really hung up on keeping the indices within range.  There was no reason for this, but after working on the same problem for hours, I got tunnel vision.  I would have save a lot of time had I stepped away from ~~all electronics~~ the problem and returned after some rest.  This is what I came up with.

```
def count_code(str):
    if "co" not in str or "e" not in str:
        return 0
    count_co = 0
    for char in range(len(str) - 3):
        if (str[char:char + 2] == "co" and (str[char + 3] == "e")):
            count_co = count_co + 1
    return count_co
```

***
***

##Codingbat.com Screenshots

