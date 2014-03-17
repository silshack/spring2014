---
layout: post
author: libbby
title: Libby's Pipes 'n Filters
---
# Process

For this exercise, I created new files (eg salmon.txt and animals.txt) within my pipes directory. I got my hands dirty and played around in the command line, using a lot of "man uniq," "man cut" and "man sort."
For Exercise #4, in particular, I tried to work it out logically in my head first, and then test to see if I had 'gotten' the logic (I did, hurray!)
I found this helpful, because it allowed me to understand the commands both theoretically and practically (why they work vs how to make them work)
___
# Exercises

**1.)** Using `sort -n` tells the computer to treat the list in question as numeric values, rather than strings. For example, "19" comes before "2" when we look at these values as strings ("1", the first character of "19" comes before "2", even if "2" is the single digit... it is effectively a string "20"). 
By using `-n`, 19 comes *after* 2 because it is numerically of greater value.


**2.)** The difference here is that in `wc -l < mydata.dat`, `mydata.dat` becomes the *standard input* for the command `wc -l`. `wc -l` reads the file from its standard input. If we just write `wc -l mydata.dat`, we have given `wc -l` a *command line parameter*.


**3.)** It is faster, when working with large data sets, to only compare line by line. You can remove all duplicates by sorting first, then using the `uniq` command. eg `sort salmon.txt | uniq`


**4.)** `cat animals.txt` passes the list of dates and animals

`head -5` takes the first 5, ("2012-11-05, deer" thru "2012-11-06,deer")

`tail -3` takes the last three of those 5 ("2012-11-05,raccoon" thru "2012-11-06,deer")

`sort -r` returns those 3 in reverse order ("2012-11-06,rabbit" "2012-11-06,deer" "2012-11-05,raccoon") 

`> final.txt` stores that list in a text file called final.txt.


**5.)** The desired result (all animals printed, no duplicates) may be obtained by `cut -d, -f 2 animals.txt | sort | uniq` 
(See question 3, above)

