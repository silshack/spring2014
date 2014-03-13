---
layout: post
author: slaffer
title: Sophia's Pipes and Filters Exercise
---

This exercise was useful for seeing how you can build more complex command pipelines in Unix using fairly simple commands. Learning how to call the manual 
for each command was also very helpful for understanding how a command behaves by default and how you can modify a command. It was also a useful exercise 
for learning how input and output works in command line. Nothing in this exercise was particularly challenging, but it was a good exercise for building 
my knowledge and comfort-level with working in command line. 

##Challenge Questions##


1. When running ```sort``` on the original file, the program is sorting by characters. By adding ```-n``` we are telling the program to sort 
the values as numerical values. 

2. In ```wc -l < mydata.dat``` we are telling the program to take the standard input from the ```mydata.dat``` file. Whereas, ``` wc -l  mydata.dat``` is 
using a command line parameter to tell the program what file to open and perform word count. 

3.	Adjacent duplicated lines in datasets could be a sign of data entry mistakes, so it is useful for the ```uniq``` command to simply remove all duplicates 
that are adjacent to each other. By adding the ```sort``` command, one could first put the lines in alphabetical order and then use ```uniq``` to remove 
duplicates with this final command: ```sort salmon.txt | uniq```. This is another sign of how UNIX allows you to build more complex commands by combining 
simple commands using pipes. 

4.	The first pipe ```cat animals.txt``` tells the program to concatenate all the files and since this is a single file it simply sends the contents of 
the file (output) to the next pipe as its input. The ```head -5``` takes the first 5 lines of the file, and ```tail -3``` takes the last three lines of 
these 5 lines, then ```sort –r``` sorts these three lines and then returns the results in reverse order. These three lines are then redirected into the 
temporary ```final.txt``` file instead of being printed as standard output. Essentially, the ```final.txt``` file should contain line 3, 4, and 5 
from ```animals.txt``` sorted in reverse order. 

5.	You could add ```sort``` to put the animal names in order and then use ```uniq``` to remove duplicates so the final command would 
be: ```cut –d, -f 2 animals.txt | sort | uniq```.

