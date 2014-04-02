---
layout: post
author: xuxiang
title: Xuxiang's Pipes and Filters assignment
---

##My Experiences##

I heared about Linux command long time ago. I always just think that I must to learn it because it is so useful, but I barely did it. 
Thanks for this assignment let me have a practical experience about Linux command. I think it is a little confuse and hard at the beginning. But when you are familiar with it, it will be much more convinent and quicker than a  graphical interface.

##Challenges##

**1.**

Only use ```sort``` to sort the file, the files will be sorted my the first digit. Instead, if use the ```sort -n```, the files will be sorted according to the first numeric number.

**2.**

The ```<``` can redirect a program's input. if we write a command like ```wc -l mydata.dat```, we get a command line parameter telling it what file to open. But if we use ```wc -l < mydata.dat```, ```wc``` doesn't have any command line parameters, so it reads from standard input, but we have told the shell to send the contents of ```mydata.dat``` to wc's standard input.

**3.**

I think why ```uniq``` only removes adjacent duplicated lines is because by this strategy, it will be faster than removes all duplicated lines one time. In large data set compareing each file's name with other files is time consuming thing. I can use ```sort salmon.txt | uniq``` to remove all duplicated lines.

**4.**

I tested it, finally it gave me a out put like this:
```
2012-11-06,rabbit
2012-11-06,deer
2012-11-05,raccoon
```
This command process can be divide into four steps:

First: ```cat animals.txt```
It gave me a output like this:
```
2012-11-05,deer                                                                                                                                                                                  
2012-11-05,rabbit                                                                                                                                                                                 
2012-11-05,raccoon                                                                                                                                                                                
2012-11-06,rabbit                                                                                                                                                                                 
2012-11-06,deer                                                                                                                                                                                   
2012-11-06,fox                                                                                                                                                                                    
2012-11-07,rabbit
```

Second:```head -5```
it will give a output which contains the top 5 lines:
```
2012-11-05,deer
2012-11-05,rabbit                                                                                                                                                                                 
2012-11-05,raccoon                                                                                                                                                                                
2012-11-06,rabbit                                                                                                                                                                                 
2012-11-06,deer
```

Third:```tail -3```
it will give a output which contains the bottom 3 lines:
```
2012-11-05,deer
2012-11-05,rabbit                                                                                                                                                                                 
2012-11-05,raccoon  
```

Finally:```sort -r > final.txt```
it will reverse sort these files and output it into a file:
```
2012-11-06,rabbit
2012-11-06,deer
2012-11-05,raccoon
```

**5.**

I can use ```cut -d, -f 2 animals.txt | sort | uniq```  to find out what animals the file contains.
