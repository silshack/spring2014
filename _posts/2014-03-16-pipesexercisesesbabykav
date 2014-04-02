---
layout: post
author: ethan
date: 2014-03-16
title: Pipes and Stuffs
---

##Process
So doing these exercises I had to do them a couple of times to fully understand what they were doing. I also had to re-read some of the things to really understand what the heck was going on too. One thing that I got stuck on was sorting. Whenever I would sort and then try to get the head, it would always give me something that I wasn't expecting. Then after re-reading and trying to do EVERYTHING over again at least twice, I figured out I was forgetting to add the -n to make it sort numerically. Sorting it numerically gave me the right output. 

##Number 1
sorting with -n sorts it numerically. 

##Number 2 
they both count the number of lines. The difference is the "<". The "<" tells it to read from a file instead from standard input. The first one tells it to read from the file and the second one tells it to read from the standard input and then give the output of line numbers. 

##Number 3
I think that it only removes adjacent duplicates for a couple of different reasons. 
1) It only removes them becasue people might have duplicates for a reason. Sometimes adjacent entries could mean that one of the entries was an accident. So removing entries that are next to each other removes one of the mistakes. Othe entries that aren't beside each other could mean that they are there for a reason. 
2) It could just take too long for it to try to find other duplicates that aren't adjacent. There is a ton of data in these things and it could take too much time and energy to find repititions that aren't right beside each other. 
3) Sometimes the system can make copies on accident and the same file just shows up. It doesn't need to be there that many times and can be deleted to save space. 
4) To maybe get it to where it can find all of the duplicates you can compine it with this code: "sort salmon.txt | uniq". doing this will reorder and sort the list to put all of the duplicates so that it can actually find all of the duplicates that are right next to each other. 

##Number 4
Okay so this took a little thinking, but I think I've got it. 

We started with this file: animals.txt

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
head -5 gives us the first 5 lines of animals.txt

```
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```

Then tail -3 tells us to get the last three lines of that

```
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```

then sort -r tells us to reverse that order

```
2012-11-06,deer
2012-11-06,rabbit
2012-11-05,raccoon
```

and then that saves in the file final.txt

##Number 5
cut -d , -f 2 animals.txt | sort | uniq
this would sort it and then it would remove any duplicates. 