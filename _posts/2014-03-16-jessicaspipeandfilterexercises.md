---
layout: post
author: jskaa
title: Pipes and Filters Exercises
date: 2014-03-16
---

##The Process

I think I enjoyed this week's exercises quite a lot. I have used a few before, such as ```ls```, ```pwd```, and a few other 
basic ones, but this really opened up to me how powerful command line is, and how the shell actually works and processes 
these commands. The challenges were fairly simple, but let me really practice how to use the command line. 
I also googled around online a lot, and found plenty of really helpful resources! 

##Challenges

###1. sort vs sort -n

This challenge was one which we mentioned briefly in class. By default, the ```sort``` command is using the first integer
it runs across as the number upon which it sorts. Meaning for "10", "100", and "1000", it is only taking into account the 
"1" when sorting. So when you have any other number, such as "2", the ```sort``` command is only comparing the "2" and the "1"
digit and finds that the "2" is higher. On the other hand, ```sort -n``` tells the program to sort by arithmetic value, and
so will take into account the full number, as well as minus signs and decimal digits.

###2. wc -l < mydata.dat vs wc -l mydata.dat

In ```wc -l < mydata.dat``` , ```wc``` is not given any command line parameters, and so defaults to reading from standard input. But,
we have told shell to send the contents of ```mydata.dat``` to the standard input which ```wc``` will use. 

In ```wc -l mydata.dat```, ```wc``` is given a command line parameter telling it to open data from ```mydata.dat```. 

I have found that both will output the number of lines within a file, but ```wc -l mydata.dat``` will list the ```mydata.dat``` 
filename which was specified as the parameter, while ```wc -l < mydata.dat``` will not specify the ```mydata.dat``` which was sent to the
standard input.

###3. Uniq

Now this might be wrong, but it seems to me that the ```uniq``` command would be useful when cleaning up data sets and only
wanting to see every instance when there is a change, and not necessarily every single instance of something occurring. I've
done some psychology research, and what we were concerned with was how often a participant switched two presented rewards, 
and not necessarily how many times they chose a certain reward consecutively. If data had been collected for every single choice,
```uniq``` would have been a great command to clean up the data. I'm guessing ```uniq``` could also get rid of accidental double entries
in large data sets. 

If you wanted to remove ALL duplicated lines, then you could use ```sort``` first in order to have all the data sets sorted, with duplicates
listed adjacently, and then ``` | uniq``` to remove all of the duplicates, which would be located adjacent. 

###4. animals.txt

Time to break this up into pieces. The command is ```cat animals.txt | head -5 | tail -3 | sort -r > final.txt``` .

In the first part ```cat animals.txt```, ```cat``` is concatenating the contents of the files defined in the parameter. Since ```animals.txt```
is the only defined file, it just lists the contents of ```animals.txt```. So the output for this portion should be list:

```
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
2012-11-06,fox
2012-11-07,rabbit
2012-11-07,bear
```

```head -5``` means we want the first 5 lines of the file, meaning the output is list:

```
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```

```tail -3``` displays the last 3 lines of a file, meaning the output is list:

```
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```

```sort -r > final.txt``` is doing 2 things. First, ```sort -r``` is reversing the order of the specified sort. ``` > final.txt```
is a command to find a folder ```final.txt``` and overwrite it with this new data, or create and save this new data if
```final.txt``` did not originally exist. The data saved in file ```final.txt``` should be list:

```
2012-11-06,rabbit                                                                                                                                                                
2012-11-06,deer                                                                                                                                                                  
2012-11-05,raccoon
```

###5. What animals does the file contain? (No duplicates)

Given the command ```cut -d , -f 2 animals.txt```, we can use the ```uniq``` and ```sort``` command to remove all duplicates. 
```cut -d , -f 2 animals.txt | sort | uniq ```, which would return a list"

```
bear                                                                                                                                                                             
deer                                                                                                                                                                             
fox                                                                                                                                                                              
rabbit                                                                                                                                                                           
raccoon 
```
