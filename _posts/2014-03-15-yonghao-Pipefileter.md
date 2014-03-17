---
layout: post
author: yonghao
title: yonghao's Shell command exercise
date: 2014-03-15
---


## Experience

One senior software engineer tole me Linux system is a life skill for programmer. I have been learning linux command for a while. 
But I just use linux command to compile, makefile, SSH etc. This exercise make me learn another cool things about Linux.
I learn more knowledge about shell command. In challenge 4, I try meself then I found I got a wrong answer before.

## Challenge

**C1**

`sort` will sort character by character. But if we use `sort -n`, it will consider string numerical value as a whole.

**C2**

`wc -l < mydata.dat`: wc reads from standard outpus which comes from mydata.adt.
`wc -l mydata.dat`: wc gets a command line parameter telling it to open mydata.dat and get the output result.

**C3**

`uniq` is faster when handleing large scale data set, it compare line by line ,so it just remove adjacent duplicated lines.
The command `uniq -u` will Print only Unique Lines. OR we can `sort salmon.txt| uniq` to remove all duplicated lines.

**C4**

`head -5` get the first 5 lines in animals.txt: 

```
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```
`tail -3` get the last three lines of the 5 lines above:

```
2012-11-05,raccoon                                                                                                                                                                 
2012-11-06,rabbit                                                                                                                                                                  
2012-11-06,deer
  
```
`sort -r > final.txt` resversed sort the outcome and save the results to final.txt. So finally, in final.txt, the result is:

```
2012-11-06,rabbit
2012-11-06,deer
2012-11-05,raccoon
```

**C5**

`cut -d, -f 2 animals.txt | sort | uniq`
