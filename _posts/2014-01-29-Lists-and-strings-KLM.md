---
Layout: post
Author: katielmeyer
Date: Class Exercise - Lists & Strings
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
                aString = aString.strip(bString) #remove first occurrence
                return aString
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


***


## Lists exercises

### #7
<strong>Directions:</strong> Write a function to count how many odd numbers are in a list.

### #8
<strong>Directions:</strong> Sum up all the even numbers in a list.

### #9
<strong>Directions:</strong> Sum up all the negative numbers in a list.

### #14
<strong>Directions:</strong> Write a function replace(s, old, new) that replaces all occurences of old with new in a string s:
Hint: use the split and join methods.

```
test(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')

s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
test(replace(s, 'om', 'am'),
       'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')

test(replace(s, 'o', 'a'),
       'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')
```


