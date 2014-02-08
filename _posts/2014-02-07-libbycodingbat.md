---
title: Libby's Coding Bat exercises
author: libbby
layout: post
---

# The Exercises
The Logic 1 section gave me the most difficulty by far - lots of rearranging code and talking to myself (hellooooo, pseudo-code!)

### 1. Logic-1: date_fashion
The first one to give me a headache was the *date_fashion* exercise:
_You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe)._
I reasoned through this as follows: 
The most important thing in determining if you get the table or not is whether you or your partner look terrible (if either one is a 2.) If even one of you pops a 2, your chances of getting the table are nada, so this is the main if/else construction. If both of you are more stylish than a 2, there are two outcomes remaining: definitely getting the table, and maybe getting the table. You will get the table if one of you ranks as an 8 or more, so that is the nested if statement here, with the else being maybe you will get the table. My code is here:

```
def date_fashion(you, date):
  if(you > 2 and date > 2):
    if (you >= 8 or date>=8):
      return 2
    else:
      return 1
  else:
      return 0
```

### 2. Logic-1: caught_speeding
The problem *caught_speeding*, I was able to clear my green boxes pretty quickly - first try, if I remember correctly -  although I have so many lines of code, who knows if this was the most efficient way to do things. I look forward to seeing if anyone else posted their code to this one!
_You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases._

```
def caught_speeding(speed, is_birthday):
  if(is_birthday):
    if(speed <= 85):
      if(speed<= 65):
        return 0
      elif(speed>=66):
        return 1
    else:
      return 2
  else:    
    if(speed <= 80):
      if(speed<= 60):
        return 0
      elif(speed>=61):
        return 1
    else:
      return 2
```

### 3. Logic-1: alarm_clock
Finally, I felt pretty satisfied with the ease with which I answered *alarm_clock*.
I used an if/elif/else construction with an if/else nested into the if statement at the beginning. Besides an initial typo on the "7:00" string, everything came out fine. I'm definitely getting more comfortable with Python and programming in general, I think!
_Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off"._

```
def alarm_clock(day, vacation):
  if(not vacation):
    if(day != 0 and day != 6):
      return "7:00"
    else:
      return "10:00"
  elif(day != 0 and day != 6):
    return "10:00"
  else:
    return "off"
```

# The Screenshots
Here are my screenshots:
![Warmup-1 screenshot] (http://www.unc.edu/~meliving/inls560/warmup_screen.png)
![Lists-1 screenshot] (http://www.unc.edu/~meliving/inls560/list_screen.png)
![Logic-1 screenshot] (http://www.unc.edu/~meliving/inls560/logic_screen.png)
![Strings-1 screenshot] (http://www.unc.edu/~meliving/inls560/string_screen.png)
