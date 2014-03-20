---
layout: post
author: zbay
title: Zach's Pipes and Filters exercise
date: 2014-03-09
---

Working through the exercises for this week's assignment, I created text files in my pipes folder to test the different Unix commands.
It took a while for me to get a handle on the order of commands in a series of pipes, but trial and error helped me figure it out.

Here are my answers to the 5 challenges.

**Challenge 1**. The sort command’s default is to order alphabetically, sorting by the first character, second character and so on. sort –n, on the other hand, sorts numerically.

**Challenge 2**. The second command prints the file name in addition to the word count. The first one just prints the word count.

**Challenge 3**. It’s possible that uniq was intended merely to combat unintentional duplicates, removing data that was accidentally entered twice consecutively.

Command:
```
sort salmon.txt | uniq 
```


**Challenge 4**. 

```
cat animals.txt | head -5 | tail -3 | sort -r > final.txt
```

Pipe 1: All info passes through.

Pipe 2: The first 5 lines of animals.txt pass through.

Pipe 3: The last 3 lines passed through Pipe 2 are passed on, to be sorted and recorded in final.txt.


**Challenge 5**. 

This command yields the unique animal names:
```
cut -d, -f 2 animals.txt  | sort |  uniq   
```