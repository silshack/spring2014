---
layout: post
author: katielmeyer
title: Lists and strings
---

## Strings exercises

### #6
<strong>Directions:</strong> Write a function that reverses its string argument.

```
def reverseString(astring):
    if len(astring) > 0:
        newstring = '' #make a new string
        i = 0			#create an iterative counter variable 
        while i < len(astring): #while counter is less than string length, keep going
            x = len(astring) -  i - 1; #create reverse index variable 
            newstring = newstring + astring[x] #add character at opposite index to newstring
            i += 1 #increase iterative counter variable
        return newstring
    else:
        return "That's an empty string"
    
userString = raw_input('Gimme a string, any string.') #ask for string
print reverseString(userString) #give reverse of string
```

#### Sample input:

```
Yellow
```

#### Sample output:

```
welloY
```

### #7
<strong>Directions:</strong> Write a function that mirrors its argument.

```
def mirrorString(astring):
    if len(astring) > 0:
        newstring = '' #make a new string
        i = 0			#create an iterative counter variable 
        while i < len(astring): #while counter is less than string length, keep going
            x = len(astring) -  i - 1; #create reverse index variable 
            newstring = newstring + astring[x] #add character at opposite index to newstring
            i += 1 #increase iterative counter variable
        newstring = astring + ' | ' + newstring  #juxtapose old and new strings
        return newstring
    else:
        return "That's an empty string"
    
userString = raw_input('Gimme a string, any string.') #ask for string
print mirrorString(userString) #give mirror of string

```

#### Sample input
Hannah

#### Sample output

```
Hannah | hannaH
```


### #11
<strong>Directions:</strong> Write a function that removes the first occurrence of a string from another string.

```
def removeString(aString, bString):
        if len(aString) > 0 and len(bString) > 0: #prevent empty strings
            if bString in aString: # look for b in a
                index = aString.index(bString)
                return_str = aString[:index] + aString[index+len(bString):]
                return return_str
            else:
                return "%s isn't in %s" %(bString, aString)
        else:
            return "Your strings can't be empty" #prevent empty strings
        
aString = raw_input('Gimme a string, any string.').lower() #ask for strings
bString = raw_input('Gimmie a string inside %s .' %aString).lower() #get rid of case
print removeString(aString, bString) #give modified string
```

#### Sample input
YeLLoW
yell

#### Sample output

```
ow
```

### #12
<strong>Directions:</strong> Write a function that removes all occurrences of a string from another string.
While I was working on this one I ended up causing several infinite loops... I had to shut down Chrome to get it to stop. Grant suggested creating a Python file in my Nitrous.IO IDE, where I could terminate a program from within the console (CTRL + C).

```
def removeString(aString, bString):
        if len(aString) > 0 and len(bString) > 0: #prevent empty strings
            if bString in aString: # look for b in a
                containsString = True # create a boolean variable to check string
                while containsString:
                    index = aString.index(bString) # get index of bString in aString
                    aString = aString[:index] + aString[index+len(bString):] # set aString as aString - bString
                    if bString not in aString:
                    	return aString
                    	break
                return aString
            else:
                return "%s isn't in %s" %(bString, aString)
        else:
            return "Your strings can't be empty" #prevent empty strings
        
aString = raw_input('Gimme a string, any string.').lower() #ask for strings
bString = raw_input('Gimme a string inside %s .' %aString).lower() #get rid of case
print removeString(aString, bString) #give modified string
```

#### Sample input
Tarheels cheerfully breed eerie eels
ee

#### Sample output
tarhls chrfully brd rie ls



## Lists exercises

### #7
<strong>Directions:</strong> Write a function to count how many odd numbers are in a list.

```
def countOdd(list):
    i = 0
    for number in list:
        if number % 2 == 1:
            i += 1
    return i
    
list = [3, 4, 6, 8, 9, 11]
print countOdd(list)

```

#### Sample output

```
3
```

### #8
<strong>Directions:</strong> Sum up all the even numbers in a list.

```
def sumEven(list):
    i = 0
    sum = 0
    for number in list:
        if number % 2 == 0:
            sum += number
            i += 1
    return sum
list = [2, 4, 5, 6, 7]
print sumEven(list)
```

#### Sample output

```
12
```

### #9
<strong>Directions:</strong> Sum up all the negative numbers in a list.

```
def sumNeg(list):
    i = 0
    sum = 0
    for number in list:
        if number < 0:
            sum += number
            i += 1
    return sum
list = [2, -4, 5, -6, 7, -14]
print sumNeg(list)
```

#### Sample output

```
24
```

### #14
<strong>Directions:</strong> Write a function replace(s, old, new) that replaces all occurences of old with new in a string s:
Hint: use the split and join methods.

```
def replaceChar(astring, old, new):
  if len(astring) > 0 or len(old) > 0 or len(new) > 0:
    if old in astring:
        astring = astring.split(old)
        astring = new.join(astring)
        return astring
    else: 
      return "%s isn't in %s" % (old, astring)
  else:
    return "Your strings can't be empty"


print replaceChar('Mississippi', 'i', 'I')

s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
print replaceChar(s, 'om', 'am')
print replaceChar(s, 'o', 'a')
```

#### Sample output

```
MIssIssIppI                                                                                                                                                                                       
I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!                                                                                                                                   
I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!    
```
