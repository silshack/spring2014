---
layout: post
author: chunxi
title: Chunxi's Pipes and Filters
date: 2014-03-15
---

Post by Chunxi Zhang


##My experience##

In general, I think this exercise is not hard. It is because we praticed some of this assignment erlier in the class. From this
assignment, I have learned some new founctions of command line. I used to think it is not very useful. It took me sometime to
finish the No.5 question. Then I realized I need to create a pipeline to see what animals are in the file, then we need to sort 
and unique the outputs.

##Challenge##

**1.**

The  ```sort```  command will alphabetizes the file  by the first integer. However, ```sort -n``` will sort the outputs by the numbers
instead of chatacter. 

**2.**

 ``` wc -l < mydata.dat ```  the program will send the input of mydata.dat to wc -l's standard input

 ``` wc -l mydata.dat ```    the program will open mydata.dat and get the output results

**3.**

 ```uniq``` is very useful expecially for large scale data set. It removes only adjacent duplicated lines by comparing line
 by line. Therefore it can save space make the data set easier to read. 

  Other command can be  ```sort salmon.txt| uniq ``` . It can remove all adjacent duplicant lines. 

**4.**

It can be divided into three different steps. Once we get anima.text, we use "head -5" to get the first 5 lines of the test.

```
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```

Then "tail -3" will print the last three lines of the output.

```
2012-11-05,raccoon                                                                                                                                                                 
2012-11-06,rabbit                                                                                                                                                                  
2012-11-06,deer
```

Finally, "sort -r > final.txt" will resort the outcome and save the result as "final.txt".

```
2012-11-06,rabbit
2012-11-06,deer
2012-11-05,raccoon
```

**5.**

It took me some time to get my head straight. But once you understand what you want, it is easy.
```
cut -d, -f 2 animals.txt | sort | uniq
```
