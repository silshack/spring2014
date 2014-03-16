---
layout : post
author : bdferr
title : bdferr pipes and filters
---

Much of this assignment was done in class, without incident. I created an extra file called r-sorted-lengths to test the sort –r command. Apparently this does something unrelated to the –r flag in the command rm –r [directory name] which was mentioned here. http://software-carpentry.org/v5/novice/shell/02-create.html


At first I somehow accidentally did this: 
```
wc -l sort &#42;.pdb | sort | head -1
```
I got an error like so: “wc: sort: no such file or directory.” When I removed the first unnecessary sort, I got “107 total.” “107 total” is at line 7 of “lengths” and line 1 of “sorted-lengths.” Apparently I have told the shell to print the first line at the top of a list produced by doing a line count on every .pdb document in the folder and sorting them alphabetically. This is somewhat odd because line counts are numbers, so they should probably be sorted with sort –n.
This paragraph was somewhat confusing: 

“As well as using > to redirect a program's output, we can use < to redirect its input, i.e., to read from a file instead of from standard input. For example, instead of writing wc ammonia.pdb, we could write wc < ammonia.pdb. In the first case, wc gets a command line parameter telling it what file to open. In the second, wc doesn't have any command line parameters, so it reads from standard input, but we have told the shell to send the contents of ammonia.pdb to wc's standard input.”

I understand that both commands will produce the same output by performing the same operation (word count) on the same data (the contents of ammonia.pdb). It is obvious that something is different between the two, but I do not understand enough about what standard input is to see what the difference actually is beyond the difference in the terms being used.

I especially liked the &#42;[AB].txt expression, as I had not known that it was possible to create a wildcard expression which would accept any one of two (or perhaps even more) characters in a particular position.

Challenges:

1. The “-n” modifies the effect of the command “sort” by instructing the program to treat the input as a set of numbers and sort them from smallest to largest. “Sort” without this specification will simply sort the numbers as if they are words which are being sorted in alphabetical order. Each character in each number will be treated as if it is a letter; every number starting with 1 will come before every number starting with 2, and the actual values of the numbers will not come out in any proper order.

2. These are both ways of telling the shell to count the number of lines in the file called mydata.dat. However, the first case is telling the shell to send mydata.dat to the standard input of the program wc. The second case is giving the program wc a command line parameter, unlike the first, and telling wc to read from this rather than its standard input.

3. A possible reason the command “uniq” removes only adjacent duplicated lines is that in very large quantities of data, it might take too long to find remove every single duplicate. The operation necessary to search for every duplicate of every line in the entire document might involve comparing every line to every other line, which would be slow with a large quantity of data. On the other hand, removing adjacent duplicated lines only require the program to compare each line to the one above and below it.

4. The first command, cat animals.txt, simply takes the full list of contents of the file and provides it to the next program, called head. “Head -5” takes the top five lines of this file, as follows: 
```
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```
while “tail -3” takes the bottom three lines, as follows:
```
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```
Next, the sort –r command would sort these three lines in reverse alphabetical order, but as it happens this is the order they are already in, so the input to “sort –r” is actually the same as the text which the sort program outputs.
Finally, this text, rather than being displayed on the screen, is placed in a text file called final.txt.

5. The “uniq” command was just mentioned as a way to eliminate all adjacent duplicates, so we could eliminate all duplicates simply by first ensuring that they are adjacent. All we would need to do is to sort alphabetically, then use the uniq command, like so:
```
cat animals.txt | sort | uniq
```
The output would be:
```
bear
deer
fox
rabbit
raccoon
```
