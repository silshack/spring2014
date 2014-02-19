---
layout: post
author: katielmeyer
title: Codingbat Exercises
---

## Exercises

### Logic 1: Cigar Party

```
def cigar_party(cigars, is_weekend):
  if is_weekend == True:
    if cigars >= 40: #Unlimited cigars on the weekend!
      return True
    else:
      return False
  else:
    if cigars >= 40 and cigars <= 60: #Take it easy, it's a school night
      return True
    else: 
      return False
```

#### Input/output
![Cigar party] (http://i.imgur.com/1oSkhRV.png)

### Logic 1: Date fashion

```

def date_fashion(you, date):
  if (you >= 8 or date >= 8) and you >2 and date >2: #At least one of you is stylish!
    return 2
  elif you <= 2 or date <= 2: #Your date let you down...
    return 0
  else:
    return 1

```

#### Input/output
![Date] (http://i.imgur.com/XADJAAm.png)

### Logic 1: Squirrel play

```
def squirrel_play(temp, is_summer):
  if is_summer and temp >= 60 and temp <=100: #Squirrels can withstand higher temps in summer?
    return True
  elif is_summer == False and temp >=60 and temp <=90:
    return True
  else:
    return False

```

#### Input/output
![Play] (http://i.imgur.com/bBfroHu.png)

## Checkmarks
![Warm up] (http://i.imgur.com/xmRup9C.png)
![Lists] (http://i.imgur.com/hTMxpf2.png)
![Strings] (http://i.imgur.com/YPzdE5u.png)
![Logic] (http://i.imgur.com/Bp6fb8P.png)
