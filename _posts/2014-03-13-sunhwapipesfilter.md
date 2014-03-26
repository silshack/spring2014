---
layout: post
author: sunhwap
title: pipes and filter
date: 2014-03-13
---

## Pipes and filter exercises

1.  The plain sort just considers the text as a string of characters rather than a single numerical element whereas 
    sort -n arranges the given list of numbers numerically in the ascending order of the numerical value of each number.
2.  wc -l < mydata.dat:  this command reads from a file, mydata.dat instead of from standard input and shows the number 
    of lines int he file whereas wc -1 mydata.dat shows the number of lines in the file, mydata.dat.  One thing that I 
    noticed between these two commands is that the one with the '<' does not list the filename in the output, whereas the
    one without it does.
3.  Since uniq only removes adjacent duplicated lines, the lines in the file should be sorted using sort command and then 
    pipe the output to the the uniq command.  That is, sort salmon.txt | uniq.  The reason why uniq removes just adjacent 
    duplicated lines is that I guess that it is just computationally easier to perform the operation on adjacent items, since
    you would have to do a lot of looping if the dataset happens to be very large.
4. cat animals.txt command displays the content of the whole file.  cat animals.txt | head -5, this command passes teh top five 
   content through the pipe.  cat animals.txt | head -5 | tails -3, this command passes the bottom three content through the 
   pipe.  cat animals.txt | head -5 | tails-3 | sort -r, this command sort the three content in reversed order.  That is, the top 
   one goes to the bottom position; the middle one goes to the top position, and the bottom one goes to the middle position.
5. cut -d, -f 2 animals.txt:  this command extract only the second field of the file delimited by comma.  In order to extract
   a single instance of each animals from this text file, sort and uniq commands should be added.  That is, cut -d, -f 2 animals.txt
   | sort | uniq
   
   
   
   
   
   
   
   
   
   
