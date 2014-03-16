---
layout : post
author : bdferr
title : bdferr pipes and filters
---

Much of this assignment was done in class, without incident. I later asked Grant for help with basic Nitrous details which I had forgotten. I found that the "preview" function is not reliable for some reason which Grant could not explain; it displays an old version of the file I am working on, but will not update the file after I update it in Nitrous, so I simply made several commits and pushed to GitHub several times.

I created an extra file called r-sorted-lengths to test the sort –r command. Apparently this does something unrelated to the –r flag in the command rm –r &lt;directory  name&gt; which was mentioned [here](http://software-carpentry.org/v5/novice/shell/02-create.html). 


At first I somehow accidentally did this: 

```
wc -l sort *.pdb | sort | head -1
```

I got an error like so: “wc: sort: no such file or directory.” When I removed the first unnecessary sort, I got “107 total.” “107 total” is at line 7 of “lengths” and line 1 of “sorted-lengths.” Apparently I have told the shell to print the first line at the top of a list produced by doing a line count on every .pdb document in the folder and sorting them alphabetically. This is somewhat odd because line counts are numbers, so they should probably be sorted with sort –n.
This paragraph was somewhat confusing: 

“As well as using > to redirect a program's output, we can use < to redirect its input, i.e., to read from a file instead of from standard input. For example, instead of writing wc ammonia.pdb, we could write wc < ammonia.pdb. In the first case, wc gets a command line parameter telling it what file to open. In the second, wc doesn't have any command line parameters, so it reads from standard input, but we have told the shell to send the contents of ammonia.pdb to wc's standard input.”

It seemed at first that both commands would perform the same operation (word count) on the same data. It was obvious that something was different between the two but I did not understand what. I asked Grant about this, and he explained that the command with the < is referring to the contents of the file while the other command is referring to the file as a whole. This still seemed very abstract to me and I still did not understand the difference in what was being done; for the purposes of a word count it would seem that the contents of a file and the file as a whole are the same thing. Apparently what I should have done was test out the commands in Nitrous on cubane.pdb; upon doing so I learned that the redirect to standard input will actually not display the name of the file, while providing the file as a command parameter will. This finally explained concretely what the difference between the commands was.

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

while “tail -3” takes the bottom three lines of those five, as follows:

```
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```

Next, the sort –r command would sort these three lines in reverse alphabetical order, but as it happens this is the order they are already in, so the input to “sort –r” is actually the same as the text which the sort program outputs.
Finally, this text, rather than being displayed on the screen, is placed in a text file called final.txt.

5. The “uniq” command was just mentioned as a way to eliminate all adjacent duplicates, so we could eliminate all duplicates simply by first ensuring that they are adjacent. All we would need to do after cutting the dates off is to sort alphabetically, then use the uniq command, like so:

```
cut -d , -f 2 animals.txt | sort | uniqF
```

The output would be:

```
bear
deer
fox
rabbit
raccoon
```
