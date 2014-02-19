---
layout: post
author: slaffer
title: Sophia's CodingBat Marathon Part 1
---

##Three Interesting/Frustrating Exercises

**1. String: extra_end**

*Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.*

Previously I had been struggling with wrapping my head around strings and how you use the slice operator and len function. During these string exercises I started to really understand how you move around to certain characters and that was an exciting aha moment. Below is a string exercise that only took me a couple minutes to figure out, which was highly satisfying. 

```
def extra_end(str):
  new_string = (str[len(str)-2] + str[len(str)-1])*3
  return new_string
```

**2. Logic: date_fashion**

*You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).*

Starting out this exercise I began building if statements for each iteration of possible outcomes without success. I then went back and spent some more time reading the question. Mandy also helped me to understand that really you only needed two statements since if you or your date is a "2" then the answer is a "no" and by defining this statement first then the next elif statement takes care of all the possible "yes" situations. I also found it helpful on this exercise to define my variables to keep everything straight in my mind. 

```
def date_fashion(you, date):
  yes = 2
  no = 0
  maybe = 1
  if you <=2 or date <=2:
     return no
  elif you >= 8 or date >= 8:
     return yes
  else:
     return maybe
```

**3. Logic: alarm_clock**

*Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".*

This exercise took me by far the longest and I probably should have taken Elliot's advice and walked away from it for a little while. I kept getting one incorrect test for (6, False) and didn't understand what was wrong. I finaly realized I had the following mistake:```elif vacation == True and day == 0 or day == 6:```. I thought this meant if you are on vacation and it is either Sunday or Saturday return "off." However, Python was seeing ```or day == 6``` as a standalone statement so anytime it saw ```day == 6``` it returned "off." Once I changed it to ```elif vacation == True and (day == 0 or day == 6):``` it worked. This showed me how careful you need to be about and/or statements and order of operations.

```
def alarm_clock(day, vacation):
  if day > 0 and day < 6 and vacation == True:
    return "10:00"
  elif vacation == True and (day == 0 or day == 6):
    return "off"
  elif vacation == False and day > 0 and day < 6:
    return "7:00"
  else:
    return "10:00"
```


##Screenshots of Checkmarks

![warmup](http://i.imgur.com/F4xFByW.png)

![strings](http://i.imgur.com/YS9OCXI.png)

![lists](http://i.imgur.com/UvDIhi5.png)

![logic](http://i.imgur.com/YN6ZIeZ.png)

