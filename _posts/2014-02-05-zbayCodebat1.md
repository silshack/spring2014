---
layout: post
author: zbay
title: Zach's Codebat 1 Exercises
date: 2014-02-05
---

Finished the first bat of Codebat problems. [Here are my screenshots as proof.](http://imgur.com/a/3vNEv#0) Note that they are in ALBUM form on imgur.


It was smooth sailing for the most part. Here are a few that made me think for a minute.

Number 1: Logic-1 > alarm_clock. The goal is to determine what time to set an alarm clock for based on the day of the week and whether or not the user is on vacation.
The conditions for 10:00 wakeup time are somewhat complex; it either needs to be a normal weekend or a vacation weekday. It took a little bit of trial and error to get all the greens.

```
  def alarm_clock(day, vacation):
    if(day != 0 and day != 6 and not vacation):
     return "7:00"
  if((day == 0 or day == 6) and not vacation) or (day != 0 and day !=6 and vacation):
     return "10:00"
  return "off"
```
  
Number 2. Logic-1 > caught_speeding. I had some absurdly complicated if statements until I realized that since 'is_birthday' gives you 5 mph leniency in all circumstances, that I could just subtract 5 from 'speed' and base all of my tests on 'speed'. That way, none of my returning statements needed to test is_birthday.

```
  def caught_speeding(speed, is_birthday):
  if is_birthday:
     speed -=5
  if speed <= 60:
     return 0
  if speed >= 81:
     return 2
  if speed > 60:
     return 1
```
     
Number 3. Logic-1 > near_ten. My first test failed because I only checked whether num % 10 was less than or equal to 2. I quickly realized that greater than or equal to 8 was also valid for being within 2.

```

  def near_ten(num):
  x = num % 10
  if x <= 2 or x >= 8:
     return True
  return False
```

These were fun. Looking forward to the more challenging ones next week.
