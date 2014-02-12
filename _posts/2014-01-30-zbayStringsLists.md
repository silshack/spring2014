---
layout: post
author: zbay
title: Zach's Strings and Lists Exercises
date: 2014-01-30
---

Here are my exercises from the String and List chapters. I will probably do the L-System problems for practice later but here's the required stuff.

**Strings**

Exercise 6:
Demonstrated this in class. Went backwards through a for loop to make a reverse copy of a string.

    from test import testEqual

    def reverse(astring):
        bstring = ""
        for i in xrange((len(astring) - 1), -1, -1):
            bstring = bstring + astring[i]
        return bstring
    
    testEqual(reverse("happy"), "yppah")
    testEqual(reverse("Python"), "nohtyP")
    testEqual(reverse(""),"")

Output--

    Pass
    Pass
    Pass

Exercise 7:
Used my reverse() method from exercise 6 as part of mirror()'s concatenation.

    from test import testEqual

    def reverse(astring):
        bstring = ""
        for i in xrange((len(astring) - 1), -1, -1):
            bstring = bstring + astring[i]
        return bstring

    def mirror(mystr):
        return mystr + reverse(mystr)

    testEqual(mirror('good'),'gooddoog')
    testEqual(mirror('Python'),'PythonnohtyP')
    testEqual(mirror(''), '')
    testEqual(mirror('a'),'aa')

Output--

    Pass
    Pass
    Pass
    Pass

Exercise 11:
Return the original string if it does not contain the substring. Otherwise, slice up the string so it loses the substring.

    from test import testEqual

        def remove(substr,theStr):
            i = theStr.index(substr)
            if i < 0:
                return theStr
            newStr = theStr[:i] + theStr[i+len(substr):]
            return newStr

    testEqual(remove('an', 'banana'),'bana')
    testEqual(remove('cyc', 'bicycle'), 'bile')
    testEqual(remove('iss', 'Mississippi'), 'Missippi')
    testEqual(remove('egg', 'bicycle'), 'bicycle')

Output--

    Pass
    Pass
    Pass
    Pass

Exercise 12:
Made a list of string segments, with the delimiter substring removed, and rejoined them.

    from test import testEqual

    def remove_all(substr, theStr):
        temp = theStr.split(substr)
        newStr = "".join(temp)
        return newStr

    testEqual(remove_all('an', 'banana'), 'ba')
    testEqual(remove_all('cyc', 'bicycle'), 'bile')
    testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
    testEqual(remove_all('eggs', 'bicycle'), 'bicycle')

Output--

    Pass
    Pass
    Pass
    Pass



**Lists**

Exercise 7:
Simple enough. Just used modulus division to identify odd numbers, and thus count them.

    def count_odd(numbers):
        odd_count = 0
        for number in numbers:
            if number % 2 == 1:
                odd_count += 1
        return odd_count

    lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    lst1 = [2, 4, 6, 8, 11]

    print(count_odd(lst))

Output--

    5
    1

Exercise 8:
Much like exercise 7, I used modulus to identify even numbers and add them to a running sum.

    def sum_even(numbers):
        even_sum = 0;
        for number in numbers:
            if number % 2 == 0:
                even_sum += number
        return even_sum
            
    lst = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    lst1 = [4, 6, 15, 16, 23, 42]

    print(sum_even(lst))
    print(sum_even(lst1))

Output--

    30
    68

Exercise 9:
Much like exercise 8, I summed some numbers that met a criteria (being negative).

    def sum_negative(numbers):
        negative_sum = 0;
        for number in numbers:
            if number < 0:
                negative_sum += number
        return negative_sum
            
    lst = [-1, 6, -7, -21, 4]
    lst1 = [4, 6, 7, 3, 2, 3]

    print(sum_negative(lst))
    print(sum_negative(lst1))

Output--

    -29
    0


Exercise 14:
Take string s, make a list and remove delimiter old, rejoin it replacing it with new. Check it out, I just basically programmed Control+F.

    from test import testEqual

    def replace(s, old, new):
        list = s.split(old) 
        replaced = new.join(list)
        return replaced
    
    testEqual(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')

    s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
    testEqual(replace(s, 'om', 'am'),
        'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')

    testEqual(replace(s, 'o', 'a'),
        'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')
       
Output--

    Pass
    Pass
    Pass

