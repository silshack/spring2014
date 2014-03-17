---
layout: post
author: sunhwap
title: pipes and filters
date: 2014-03-13
---

## Pipes and Filter exercises

1. The plain sort command just considers the text as a string of characters rather than a single numerical element whereas 
    sort -n arranges the given list of numbers numerically int he ascending order of the numerical value of each number.
2. wc -l mydata.dat: this command reads from a file, mydata.dat instead of from standard input and shows the number of lines 
   in the file whereas wc -l mydata.dat shows the number of lines in the file, mydata.dat.  One thing that I noticed between 
   these two commands is that the one with the '<' does not list the filename int he output, whereas teh one without it does.
3. Since uniq only removes adjacent duplicated lines, the lines in the files should be sorted using sort command and then pipe 
   the the output to the uniq command.  That is, sort salmontxt | uniq.  The reason why uniq removes just adjacent duplicated 
   lines is that I guess that it is just computationally easier and faster to perform the operation on adjacent items, since
   you would have to do a lot of looping if the dataset happens to be very large.
4. cat animals.txt command displays the content of the whole file.  cat animals.txt | head -5, this command 
   passes the top five content through the pipe.  cat animals.txt | head -5 | tails -3, this command passes 
   the bottom three content through the pipe.  cat animals.txt | head -5 | tails-3 | sort -r, this command 
   sort the three content in reversed order.  That is, the top one goes to the bottom position; the middle 
   one goes to the top position, and the bottom one goes to the middle position.
5. cut -d, -f 2 animlas.txt: this command extracts only the second field of the file delimited by comma.
   In order to extract a single instance of each animal from this text file, sort and uniq commands should
   be added.  That is, cut -d, -f 2 animals.txt | sort | uniq
  


