---
layout: post
author: jacobthill
title: Jacob Pipes and Filters
---

1) I used the bash help to find out the meaning of sort -n (sort —help). It is a numeric sort. It seem like sort without the modifier -n just sorts by column or place. So, 10 is before 6 because the first number 1 is before 6. On the other hand, -n sorts in numeric order.

2) The first command (wc -l < mydata.dat) doesn’t have a command line parameter,s o it reads from standard input but the left carrot tells the shell to read from my data.dat instead of standard input. In the second case wc gets a command line parameter telling it what file to open.

3) (sort | uniq) or (uniq -u) will both work to remove all duplicates from the file. The first one will work because it sorts the file first, so all identical lines will be next to each other. The second option will remove all similar items regardless of their position in the file. 

4)

cat animals.txt will produce:
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
2012-11-06,fox
2012-11-07,rabbit
2012-11-07,bear

head -5 will produce:
2012-11-05,deer                                                                                                                                                
2012-11-05,rabbit                                                                                                                                              
2012-11-05,raccoon                                                                                                                                             
2012-11-06,rabbit                                                                                                                                              
2012-11-06,deer

tail -3 will produce:
2012-11-05,raccoon                                                                                                                                             
2012-11-06,rabbit                                                                                                                                              
2012-11-06,deer

sort -r > final.txt will create a file called final.txt and put the following text in it:
2012-11-06,rabbit
2012-11-05,raccoon  
2012-11-06,deer

5) $ cut -d , -f 2 animals.txt | sort | uniq will produce the animals without any duplicates.



