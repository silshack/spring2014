---
author: brittany
title: Brittany's Codingbat Exercises - Level 1
layout: post
---

##Screenshots

###Warmup-1

![Warmup-1](http://www.unc.edu/~bmhayes/inls560/warmup.png)


###Lists-1

![Lists-1](http://www.unc.edu/~bmhayes/inls560/lists.png)


###Strings-1

![Strings-1](http://www.unc.edu/~bmhayes/inls560/strings.png)


###Logic-1

![Logic-1](http://www.unc.edu/~bmhayes/inls560/logic.png)


##Three Interesting/Challenging Exercises

###Warmup-1: front_back(str)
I tend to overcomplicate things when I code, which was certainly the case here. However, this exercise remains baffling for me because, while my initial code doesn't run the way I expect it to on codingbat, it does seem to run in the console on the class website. I still can't figure out wherein lies the problem -- whether it's my code or the way codingbat interprets it...

{% include python %} 

def front_back(str):
    chars = list(str)
    index = 0
    temp_string = ''
    if len(str) <= 1:
        return str
    else:
        while index < len(str):
            if (index > 0) and (index < len(str)-1):
                temp_string = temp_string + chars[index]
                #print temp_string
                index = index + 1
                #print index
            else:
                index = index + 1
                #print index
        final_string = chars[len(str)-1]+temp_string+chars[0]
        return final_string

print front_back("code")
print front_back("a")
print front_back("ab")
print front_back("abc")
print front_back("")
print front_back("Chocolate")
print front_back("aavJ")
print front_back("hello")

{% include endpython %}

When this didn't work, I decided to just move on; however, I noticed that the next question (front3()) was very similar--and I approached it similarly, which, again, didn't work on codingbat. This time I decided to just go ahead and look at that sample solution for inspiration, which made me realize how unneccessarily hard I was making the problem. It could still be more succinct, but below is the final function I wrote for front_back(str):

```
def front_back(str):
    if len(str)-1 == 0:
        return str
    else:
        first_char = str[0:1]
        last_char = str[len(str)-1:len(str)]
        new_string = last_char + str[1:len(str)-1] + first_char
        return new_string
```

###String-1: make_out_word(out, word)

I found this problem a bit challenging. I tried to write it so that the function could be as general as possible. I decided to create an array containing all the out argument characters, then loop through them. When I got to the halfway point, I added the word argument to that string (as well as appending the next out array character); after this, the loop would continue until all out array characters had been used. When I first ran it, I noticed that the final character was getting left off (so, it would print <<hi> instead of <<hi>>). I realized this was because at the midpoint, I initially wasn't adding that 3rd character in the array along with the word argument. After fixing this, it ran as expected. Using the console on the class site was useful in testing this (as well as all of the other exercises I struggled with) because it was easier for me to run the code and add additional print statements to see what it was actually doing in order to figure out where my logic was failing.

```
def make_out_word(out, word):
    chars = list(out)
    index = 0
    new_word = ''
    for char in chars:
        if index < (len(out)/2):
            new_word = new_word + chars[index]
            index = index + 1
        elif index == (len(out)/2):
            new_word = new_word + word + chars[index]
            index = index + 1
        elif index > (len(out)/2):
            new_word = new_word + chars[index]
            index = index + 1
        else:
            index = index + 1
    return new_word
```

###Logic-1: date_fashion(you, date)
This was a quick and easy exercise, but my first time running it resulted in some unexpected error instances. My first version is as follows:

```
def date_fashion(you, date):
    if you >= 8 or date >= 8:
        return 2
    elif you <= 2 or date <= 2:
        return 0
    else:
        return 1          
```

I realized that by first checking to see if either party was an 8 or above, this created inaccurate results when that condition was satisfied, but the other person was 2 or lower. Since either party being a 2 or lower automatically meant no table, that condition needed to be evaluated first. When I switched the order of those statements, the code ran as expected:

```
def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    else:
        return 1          
```





