---
author: tlchristian
title: "Thu-Mai's Codingbat.com Exercises Part 1"
layout: post
date: 2014-02-06
---

This week's exercises may have felt a bit like Python coding grunt-work, but I found that as I went through more and more of the exercises, I began to get into the rhythm of the coding.  Not only was I making fewer syntax errors, but also thinking through the code and constructing the code got easier.  It was helpful comparing my versions of the code to the Codingbat.com versions.  It allowed be to see (more elegant) alternatives.  I like that about programming.

This had me considering whether efficiency or description reigns in computer programming.  I tend towards the former; however, when thinking through the debugging process, I can see how more verbose code can be helpful...but messy.  *The Hitchhiker's Guide To Python: Code Style* says that **readability** is of upmost importance. Therin lies the balance I am trying to achieve.

So for me, this week has been a lot about fluency--gaining fluency in writing code that works, and writing code that makes sense to the not-so-fluent like me.

---
---

##Exercises

**Logic-1 > near_ten**
*Given a non-negative number "num", return True if num is within 2 of a multiple of 10.*

I wouldn't call myself a math genius, but I definitely know that I am not inept, either.  So, I'm not sure why this problem gave me pause.  I knew I would be working with the handy modulus operator, but clearing my head to figure out the *if num is within 2 of a multiple of 10* part was a bit tricky.  After doing some elementary school division on paper, the answer finally came to me.  Duh.

**Code:**

```
def near_ten(num):
    remainder = num % 10
    if remainder <= 2 or remainder >= 8:
       return True
    else:
       return False
```

---

**List-1 > max_end**
*Given an array of its length 3, figure out which is larger between the first and last elements in the array, and set all the other elements to be that value. Return the changed array.*

What gives?  All I know is that the *How to Think Like A Computer Scientist* chapter on Lists taught me that I should be able to create a new list that concatenates elements of two different lists by doing this: `newlist = list_a + list_b`.  When I tried that stunt for this exercise, my newlist contained a *sum* rather than a concatenation of list elements.  Rude. I ended up surrendering and used the code below.

**Code:**

```
def max_end3(nums):
    if nums[0] > nums[-1]:
       return [nums[0], nums[0], nums[0]]
    else:
       return [nums[-1], nums[-1], nums[-1]]
```

---

**String-1 > first_half**
*Given a string of even length, return the first half.  So the string "WooHoo" yields "Woo".*

This was just one of the problems for which a hunch actually worked.  I love it when that happens. I hope this means that my brain and Python are beginning to jive.

**Code:**

```
def first_half(str):
    half  = len(str) / 2
    new = str[:half]
    return new
```

---
---

## Codingbat.com Screenshots

![warmup-1](https://lh6.googleusercontent.com/-oZtHAYp95dI/UvOVkvIXqqI/AAAAAAAAA8g/uGKJlMkiB2w/w810-h236-no/Warmup-1.png)

![string-1](https://lh6.googleusercontent.com/-oRi88f9_dkE/UvOVmTqWWmI/AAAAAAAAA84/P8sAZA_Vx5o/w810-h256-no/String-1.png)

![list-1](https://lh4.googleusercontent.com/-j4XOSBH3j10/UvOVlHcpbHI/AAAAAAAAA8s/8ujhk0p96ok/w810-h238-no/List-1.png)

![logic-1](https://lh4.googleusercontent.com/-7sE4sAb_Qj0/UvOVl1RxKaI/AAAAAAAAA8w/-S_RBG30gu0/w812-h215-no/Logic-1.png)
