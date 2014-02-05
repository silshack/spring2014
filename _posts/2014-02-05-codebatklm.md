---
layout: post
author: katielmeyer
title: Codebat Exercises
---

## Exercises

### Logic 1: Cigar Party

```
def cigar_party(cigars, is_weekend):
  if is_weekend == True:
    if cigars >= 40:
      return True
    else:
      return False
  else:
    if cigars >= 40 and cigars <= 60:
      return True
    else: 
      return False
```

#### Input/output
![Cigar party](http://imgur.com/1oSkhRV)

### Logic 1: Date fashion

```

def date_fashion(you, date):
  if (you >= 8 or date >= 8) and you >2 and date >2:
    return 2
  elif you <= 2 or date <= 2:
    return 0
  else:
    return 1

```

#### Input/output
![Date](http://imgur.com/XADJAAm)

### Logic 1: Squirrel play

```
def squirrel_play(temp, is_summer):
  if is_summer and temp >= 60 and temp <=100:
    return True
  elif is_summer == False and temp >=60 and temp <=90:
    return True
  else:
    return False

```

#### Input/output
![Play](http://imgur.com/bBfroHu)

## Checkmarks
![Warm up](http://imgur.com/xmRup9C)
![Lists](http://imgur.com/hTMxpf2)
![Strings](http://imgur.com/YPzdE5u)
![Logic](http://imgur.com/Bp6fb8P)