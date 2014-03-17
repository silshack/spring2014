---
author: brittany
layout: post
title: Brittany's Pipes & Filters
---

I liked this tutorial/exercise. I had been using several of these unix commands without really knowing how they worked, based solely on examples I had seen in other classes and on the web. This was a good chance to really get a better understanding of these commands, as well as being introduced to some new ones (like uniq and head). It’s always nice to understand why you’re using something rather than just using it blindly!

##Questions

* **sort v. sort -n:** The program is initially looking at these numbers as just strings of text. As such, it seems to compare the individual digits as opposed to the number as a whole (therefore, all numbers starting with ‘1’ are at the top, followed by those starting with ‘2’, etc). Using -n explicitly tells the program that it should be considering each string as a numerical unit.

* **wc -l mydata.dat v. wc -l < mydata.dat:** Both generally give the same output (the number of lines in the text of the file, mydata.dat). However, the first command is getting its input redirected from a file; the file’s contents are sent to standard input to be used in the program. With the second command, a simple command line parameter is given to tell the program what file to use as input. One difference in the output when you run these commands is that the first will not tell you the file used; it has simply read in the text that was passed to standard input. In the second case, the program knows the exact file it is reading from, so it lists that file in its output. 
[Source](http://www.tutorialspoint.com/unix/unix-io-redirections.htm)

* **uniq:** I’m not completely sure, but it would seem to be more computationally complex to use uniq to isolate only a single unique instance of every distinct item. It they aren’t pre-sorted, you would have to loop over the entire dataset to find all instances of the same text, and repeat this for all lines. It might not be hard for small, simple data, but it could take a while for a really large dataset. You could combine sort with uniq in order to group all like types together first, then remove all but one.

* **What happens?: cat animals.txt | head -5 | tail -3 | sort -r > final.txt:** The first pipe presents the text of animals.txt. In the next pipe, the first five lines of that text are given. In the next pipe, the last 3 lines of the previous output are given. In the last pipe, those final three lines are sorted in reverse order, and the output is directed to a file called final.txt

```
cat animals.txt:
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
2012-11-06,fox
2012-11-07,rabbit
2012-11-07,bear
```

```
head -5
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```

```
tail -3
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```

```
sort -r
2012-11-06,rabbit
2012-11-06,deer
2012-11-05,raccoon
[saved in file final.txt]
```

* **Finding unique types: $ cut -d , -f 2 animals.txt:** You could add sort and then uniq to determine the unique animals in the data

```
cut -d, -f 2 animals.txt | sort | uniq
```

```
OUTPUT:
bear
deer
fox
rabbit
raccoon
```