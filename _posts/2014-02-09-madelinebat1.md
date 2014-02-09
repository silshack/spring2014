---
layout: post
author: madeline
title: My First Codingbat Exercise
---
## Screenshots
![](http://i.imgur.com/eyrrucP.png)

! {http://i.imgur.com/lWiA2Uu.png}

! {http://i.imgur.com/pLqlWjx.png}

! {http://i.imgur.com/g6xLxUp.png}

## Code I Found Interesting

Given an int n, return True if it is within 10 of 100 or 200. Note: abs(num) computes the absolute value of a number.

```
def near_hundred(n):
# If abs within 10 of 100
  if abs(n) >= 90 and abs(n) <= 100:
    return True
  if abs(n) >= 100 and abs(n) <= 110:
    return True
# If abs within 10 of 200
  if abs(n) >= 190 and abs(n) <= 200:
    return True
  if abs(n) >= 200 and abs(n) <= 210:
    return True
  else:
    return False
```

This was the most interesting warm-up exercise for me.  I divide this problem into several tasks.  The first is to divide within 10 of 100 and within 10 of 200.  Within the two categories, we then have to use the abs() operator to control where the numbers fall on each continuum.  Each is an if statement because the problem is about the possibility of each thing occurring and what the program should do when it does.

You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

```
def caught_speeding(speed, is_birthday):
# if 60 or less
  if speed <= 60:
    return 0
# if is_birthday == True and speed 61-65
  if is_birthday == True and speed >= 61 and speed <= 65:
    return 0
# if between 61 and 80 inclusive or over 80
  if speed >= 61 and speed <= 80:
    return 1
  if is_birthday == True and speed > 85:
    return 2
  if is_birthday == True and speed > 80 and speed <= 85:
    return 1
  if is_birthday == False and speed > 80:
    return 2
  else:
    return 1
```

This was another interesting one, this time in the Logic category.  In this problem, I had to not only figure out what cases there could be, but also which cases took precedence over the others.  The 60 or less case took precedence because it would return 0 in all cases.  Then, is_birthday being true had to take precedence because it affects all cases of speeding, except for going over 85.  For 81-85, because of the wording of the problem, there had to be an extra condition made.

Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

```
def alarm_clock(day, vacation):
# if vacation and weekend
  if vacation == True and day == 0:
    return "off"
  if vacation == True and day == 6:
    return "off"
# if weekday
  if not vacation and day >= 1 and day <= 5:
    return "7:00"
# if weekend
  if not vacation and day == 0 or day == 6:
    return "10:00"
# if vacation and weekday
  if vacation == True and day >= 1 and day <= 5:
    return "10:00"
```

This particular logic exercise frustrated me at first because, again, certain things had to take precedence over other things.  I divided the tasks as in the comments above, and made each an if statement in order to cover all the possible conditions.  "Off" had to take precedence for reasons I do not honestly know.
