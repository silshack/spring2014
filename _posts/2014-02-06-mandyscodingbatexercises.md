---
layout: post
author: agooch
title: Mandy's Coding Bat Adventure
---

##My Three Exercises

I am slowly building more confidence with lists and strings and I really found these exercises to be helpful. I guess you could say I had quite a few 'aha' moments. 

Python List-1 : Common_end

The problem: *Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.* 

I took this problem statement by statement to put together the code below. Everything worked out, but I did mess up during my first attempt by putting the wrong number in a[:1]. I re-read the problem and realized my error. This problem was great practice in slowing down and debugging for typos/syntax, etc. 

```

def common_end(a, b):
  if len(a) and len(b) >= 1 and a[:1] == b[:1] or a[-1:] == b[-1:]:
    return True
  else:
    return False

```

Python Logic-1: date_fashion

The problem: *You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).*

I really had to re-read this question a few times and pull out the variables in order to determine what I was trying to say in my if else statements. I am definitely more confident with boolean, so I was able to dive into this problem. It was a great learning experience and came in handy with later problems.

```

def date_fashion(you, date):
  if you <= 2 or date <= 2:
    result = 0
    return result 
  elif you >= 8 or date >= 8:
    result = 2
    return result
 
  else:
    result = 1
    return result
    
```

Python Logic-1: near_ten

The problem: *Given a non-negative number "num", return True if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.*

I was so excited when I finally got to this last problem. I started piecing it together after reading and then re-reading through the word problem. I then started tesing each if statement as I added it. I got a majority of the tests correct, but was missing two. So, I went back and re-read the statement and had another 'aha' moment. I needed to also include an elif statement that would account for remainders within 2 of a multiple of ten, but these remainders would be at the opposite end of the range. So, I added an elif statement with a range between 8 and 10. It was a pretty exciting 'aha' moment.

```

def near_ten(num):

  if num % 10 <= abs(2):
    return True
  elif num % 10 >= abs(8) and num % 10 <= abs(10):
    return True
  else: 
    return False
    
```

Overall, I found these exercises to be useful if only for the repetition, which helped me to build my vocabulary and understanding of Python. Some of these problems definitely took much longer than others and it does help to step back and take a break. I also find that it helps me to read the problem out loud and to write down the main requirements of each problem. I'm definitely feeling more confident in my Python abilities now. 

##Screenshots

Warm Up 1

![warm up image](http://i.imgur.com/JZkkU7x.jpg)

Logic 1

![logic image](http://i.imgur.com/9x6BbkK.jpg)

Lists 1

![lists image](http://i.imgur.com/koIc3zB.jpg)

Strings 1

![strings image](http://i.imgur.com/XcLJlHP.jpg)

