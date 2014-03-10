---
layout: post
author: agooch
title: Mandy's Pipes and Filters Exercise
---

# My Experience

I found this exercise to be relatively simple. I really enjoy working in command line, so this was great practice. 

We did most of the assignment in class, which helped me to better understand some of the command line's functionality. I can definitely see how using some of these commands would be beneficial when dealing with large datasets or files. I particularly find the sort and redirect commands to be very useful. The sort command allows you to sort the contents of a file and you can further sort based on more specifics such as by number or position in the list of files. The redirect allows you to send a command's output to a designated file. 

I think a bit more practice with pipes will help to cement the idea in my head, but I am understanding how a pipeline can be used to generate the input for the second command from the output of the first command.  

Overall, I felt pretty confident throughout this exercise. I think the repetition really helps with command line, since it is really about getting down the syntax and understanding the vocabulary. Once you have those down, it isn't too difficult to move through various branches and files. 

# Challenges

**1**

The *sort* command sorts the output numerically by the first integer; however, the *sort -n* command sorts the output numerically by the entire number due to the *-n*. Therefore instead of sorting the output by the first character, it instead recognizes the numbers and sorts those instead.

**2**

*wc -l < mydata.dat* is telling the program to send the input of mydata.dat to *wc -l*'s standard input. 

*wc -l mydata.dat* is telling the program to open mydata.dat and generate the output of the wordcount of the lines. 

**3**

*uniq* removes only adjacent duplicated lines in order to make reading through large datasets easier or save space. You can use additional commands to help read through larger data sets as well. For example, you can use the *uniq -c* command to count the occurences of lines in a file. Or, if you are looking for the data that is completely unique and not duplicated at all within a file you can use the *uniq -u* command.

If you wanted to combine the command with a pipe you could use something like *sort salmon.txt | uniq*. This will remove all adjacent duplicant lines.

**4**

2012-11-06,deer is at head -5; 2012-11-06,fox is at tail -3; *sort -r* reverses their order and *> final.txt* puts the output in a final.txt file. The output will be:

```

2012-11-06,fox 
2012-11-06,deer

```

**5**

You could create this pipeline to see what animals are in this file and generate the output in a separate file: *cut -d , -f 2 animals.txt | sort | uniq > final.txt*

