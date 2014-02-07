---
layout : post
author : bdferr
title : First CodingBat Post by Bdferr
---

Here are the screenshots of my successes on CodingBat. I realize I was only required to do the sections 
with "1" in their names, but I figured since I had time, I might as well do as much as I could.

![Warmup-1 image] (http://i.imgur.com/rljboyc.png)

![List-1 image] (http://i.imgur.com/zajSo89.png)

![Logic-1 image](http://i.imgur.com/WDzcLZZ.png)

![String-1 image](http://i.imgur.com/uPflEuI.png)

![Warmup-2 image](http://i.imgur.com/G9jiOfB.png)

![Logic-2 image](http://i.imgur.com/fxqcvPP.png)

![String-2 image](http://i.imgur.com/p5Dhx4y.png)

In the List-2 section, I could not quite finish the sum67 problem, so after quite a bit of time working on it,
I am leaving it for now. As you can see, I did get it to partially work, and I did get the other problems
in that section done.

![List-2 image] (http://i.imgur.com/PyRVMk5.png)

![Sum67 image] (http://i.imgur.com/2KLaTod.png)

The sum67 problem was particularly maddening, of course. The goal was to remove every item 
in a string from a 6 to the next 7, and sum the results (the sum was easy enough). 
I had two different versions of it, each of which passed 8 tests but failed the rest. 
Both produce lists of the index positions of the 6s and 7s, and use them for iterative string concatenation. 
My latest efforts to improve either of them resulted in either no change or error messages. 
I suspect there is something fundamental which I am missing here.

My first version manages to identify the 6s and 7s, but does not seem to recognize
the space between them; i.e. in a list like [6, 7, 8, 6, 7] it would return zero, where it should
return 8. It also does not recognize when the 7s are superfluous, i.e. in [9,6,7,7] it would give me
9 rather than 16.

I made a second version in response to these problems, but it does not entirely solve them.
The details might be too complicated to fully explain in this post. Basically, though,
I want to (and apparently don't) have a function which can run two simultaneous for loops on two separate lists.
For example, if I have a list called lista [a, b, c, d] and a list called listb [w, x, y, z], I want my code 
to generate the slices [a:w], [b:x], [c:y], and [d:z]. I know the slicing is a separate function,
but I need to be able to conection a with w, then b with x, and so on.
Nesting one for loop inside another is what I attempted in my first version, but it does not 
seem to quite do the same thing. Instead I believe it generates [a:w], [a:x], [a:y], 
a:z], and then [b:w], [b:x], and so on. This explains why what is removed includes what I did not
want to remove, when it is between two strings which I actually did want to remove. 
I attempted several approximations but still can't seem to quite get this double loop function.

This problem showed me that there are things I do not understand in programming,
even while I seem to understand all the relevant elements for that problem.

I am sure everyone else will be saying the same thing,
but I honestly do agree with the founder of CodingBat that the MakeBricks problem
is particularly interesting. I initially attempted it using loops,
and got errors attempting a nested for loop. More importantly, though,
I noticed I was advised to do it without any iteration at all, which I found baffling.

I restrained myself from watching the full video explaining it, and simply proceeded
based on the hint that I should use the modulus operator. After numerous attempts,
I realized that simply applying the modulus to the number 5 was not always appropriate.
If the goal divided by 5 was larger than the number of large bricks available, the result
would be misleading; if the number of small bricks was sufficient to cover the remainder,
it would give the false impression that the goal could be met. I found the use of the modulus
to completely replace iteration very interesting.

I also enjoyed a similar problem, in which there was a goal number of kilos
of chocolate. One problem was that the instructions were not exactly clear, though. The line
"Return the number of small bars to use, assuming we always use big bars before small bars"
was particularly misleading. What they actually wanted, based on the test results,
was not that the big bars should all be used before beginning with the small bars,
and one test result showed that what they wanted was even farther removed than that:
“make_chocolate(4, 1, 4)” expects an answer of 4, when this clearly requires using no big bars at all.
Possibly they forgot to say that big bars can be omitted when the goal is less than 5.
Regardless, I was able to solve this with similar curious applications of the modulus operator
to what I did in the Make Bricks problem.
