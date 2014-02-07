---
layout: post
author: bdferr
title: strings_and_lists
---

I am including a few exercises I did in the strings chapter beyond the ones we were required to do,
although not the optional ones you mentioned (I did not start early enough and now I am almost out of time).
To begin with, here is #2:

{% include python id='1' %}

prefixes = "JKLMNOPQ"
suffixa = "ack"
suffixb = "uack"
for p in prefixes:
    if p != "O" and p != "Q":
        print(p + suffixa)
    else:
        print(p + suffixb)

{% include endpython id='1' %}
Here is its output:

{% include python id='K' %}

Jack
Kack
Lack
Mack
Nack
Ouack
Pack
Quack

{% include endpython id='K' %}

And here is #3:

{% include python id='A' %}

alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
# This is not actually my favorite paragraph of text; 
# I don't think there is such a thing.
best_text = '''Indeed, that was an apt and true reply which was given to Alexander the Great by a pirate who had been seized. For when that king had asked the man what he meant by keeping hostile possession of the sea, he answered with bold pride, What you mean by seizing the whole earth; but because I do it with a petty ship, I am called a robber, while you who does it with a great fleet are styled emperor.'''
number_of_letters = 0
number_of_es = 0

for ch in best_text:
    if ch in alphabet and ch == "e":
        number_of_letters += 1
        number_of_es += 1
    elif ch in alphabet and ch == "E":
        number_of_letters += 1
        number_of_es += 1
    elif ch in alphabet:
        number_of_letters += 1
  
print("Your text contains", number_of_letters, "alphabetic characters, of which", number_of_es, "are the letter E.")

{% include endpython id='A' %}

Here is the output from #3:

{% include python id='S' %}

Your text contains 243 alphabetic characters, of which 109 (44.8%) are 'e'.

{% include endpython id='S' %}

6. 

{% include python id='D' %}

from test import testEqual

def reverse(astring):
    new_string = ""
    ix = len(astring) - 1
    for ch in astring:
        new_string += astring[ix] 
        ix -= 1
    return new_string
testEqual(reverse("A winar is me"), "em si raniw A")
print(reverse("Son I am able she said / though you scare me watch said I / beloved I said watch me scare you though / said she able am I son"))
# I have figured out how to reverse by word, inspired by the They Might Be Giants song I Palindrome, from which the following lines imitate a palindrome except that they are reversible by word, rather than by letter: "Son I am able she said / though you scare me watch said I / beloved I said watch me scare you though / said she able am I son"

def reverse_by_word(old_string):

    new_string = ""
    split_string = old_string.split()
    for word in split_string:
        new_string = word + " " + new_string
    return new_string
print(reverse_by_word("Son I am able she said / though you scare me watch said I / beloved I said watch me scare you though / said she able am I son"))

{% include endpython id='D' %}

7.
Am I allowed to copy the code which was already in the textbook as the answer to this problem? 
It was surprisingly concise and I don't see how I could improve upon it, except to try different words
with the "testEqual" function. All the tests yielded "Pass". 

{% include python id='F' %}

from test import testEqual

def reverse(words):
    reversed = ''
    for char in words:
        reversed = char + reversed
    return reversed

def mirror(words):
    return words + reverse(words)

testEqual(mirror('mirror'),'mirrorrorrim')
testEqual(mirror('onthewall'),'onthewallllawehtno')

{% include endpython id='F' %}`

11. 
This next one is again the code from the text, which finally explained to me
how to do this type of thing after a long period of confusion. 
All the tests yielded "Pass", of course.

{% include python id='G' %}

from test import testEqual

def remove(substr, theStr):
    index = theStr.index(substr)
    if index < 0:
        return theStr
    return_str = theStr[:index] + theStr[index+len(substr):]
    return return_str

testEqual(remove('an', 'banana'),'bana')
testEqual(remove('cyc', 'bicycle'), 'bile')
testEqual(remove('iss', 'Mississippi'), 'Missippi')

{% include endpython id='G' %}

12. 
Here is exercise #12 for the strings chapter; it does not quite get unlimited instances
of a substring out of a string, but I did figure out how to take two instances out,
which was something, at least.

{% include python id='R' %}

def remove(substr, theStr):
    indexa = theStr.index(substr)
    indexb = theStr.rfind(substr)
    print(indexa)
    print(indexb)
    if indexa == indexb:
        return_str = theStr[:indexa] + theStr[indexa+len(substr):]
    else:
        return_str = theStr[:indexa] + theStr[indexa+len(substr):indexb] + theStr[indexb+len(substr):]
    return return_str

print(remove('an', 'banana'))
print(remove('cyc', 'bicycle'))
print(remove('I', 'I palindrome I'))

{% include endpython id='R' %}
The output was "ba", "bile", and " palindrome" (I had not worked out anything to remove spaces).

Here are the exercises from the lists chapter:


7. 
Here is the code provided by the text, slightly modified:

{% include python id='T' %}

def countOdd(lst):
    odd_nums = 0
    for e in lst:
        if not e % 2 == 0:
            odd_nums = odd_nums + 1
    return odd_nums

print(countOdd([1,3,5,6,7]))

{% include endpython id='T' %}

The output is of course 4.

Here is #8:

{% include python id='Y' %}

def sum_even(numlist):
    even_sum = 0
    for n in numlist:
        if n % 2 == 0:
            even_sum += n
    return even_sum
print sum_even([5,3,5,6,8,2])

{% include endpython id='Y' %}
The output is 16.

Here is #9:

{% include python id='U' %}

def sum_neg(thelist):
    neg_sum = 0
    for number in thelist:
        if number < 0:
            neg_sum += number
    return neg_sum
print(sum_neg([0, -3, 4, -12, 5]))

{% include endpython id='U' %}

The output from #9 was -15.

14:
I don't see what this has to do with the split and join methods,
although if I were to try to replace occurences of a particular word
rather than a character, I would use the "split" function.
It would be easier, though, to make it replace particular strings
rather than words.
In this version I am making it replace particular characters, which was
also exercise #8 in the strings chapter.

{% include python id='I' %}

def replace(s, old, new):
    clever_string = ""
    for char in s:
        if char == old:
            clever_string += new
        else:
            clever_string += char
    return clever_string
s = "I am a spaghetti noodle."
print(s)
s = replace(s, "o", "a")
print(s)
s = replace(s, "e", "a")
print(s)
s = replace(s, "i", "a")
print(s)
s = replace(s, "I", "A")
print(s)

{% include endpython id='I' %}

The output is like so:

{% include python id='O' %}

I am a spaghetti noodle.
I am a spaghetti naadle.
I am a spaghatti naadla.
I am a spaghatta naadla.
A am a spaghatta naadla.

{% include endpython id='O' %}

Here I am attempting to replace strings, but right now it does not allow more than 
two instances of the substring. It also does not use "split" or "join;"
my experiments were those have not been successful so far.
I am running out of time though, so here is what I have now. 


{% include python id='P' %}

def replace(s, old, new):

    indexa = s.index(old)
    indexb = s.rfind(old)
    print(indexa)
    print(indexb)
    if indexa == indexb:
        return_str = s[:indexa] + new + s[indexa+len(new):]
    else:
        return_str = s[:indexa] + new + s[indexa+len(new):indexb] + new + s[indexb+len(new):]
    return return_str
    print return_str
print(replace("pineapple", "pine", "PINE"))
print(replace("pine-pine-apple", "pine", "PINE"))

{% include endpython id='P' %}

The output is like so: 

{% include python id='4' %}

0
0
PINEapple
0
5
PINE-PINE-apple

{% include endpython id='4' %}