---
author: allen
title: Allen's Pipes and Filters Exercises
layout: post
date: 2014-03-05
---

##Pipes and Filters

**Exercises**

For most of these exercises I just did some Google searches for command tools I didn't know and there were plenty of
useful results. The IBM webpage specifically had an answer to why it would be a bad idea to remove all duplicates
from large data sets, explaining that "it is a bad idea to use uniq or any other tool to remove duplicate lines from
files containing financial or other important data. In such cases, a duplicate line almost always means another
transaction for the same amount, and removing it would cause a lot of trouble for the accounting department. 
Do not do it!"
The internet is a very useful tool!

1.   Explain `sort -n`

     So the reason `sort -n` works for sorting numbers, but `sort` does not, is that `sort` automatically 
     sorts assuming the input is a string. So it will only look at the first character to sort files and 
     will then look at the second character to sort strings that have the same first character, etc. This is 
     why 10 comes before 2 when you run sort. `sort -n` does a numeral sort, so it takes the input as integers 
     and so it can successfully sort 2 and 10.

2.   What is the difference between `wc -l mydata.dat` and `wc -l < mydata.dat`

     This is explained a couple of times in the explanations. `<` redirects the input, i.e., to read from a file
     instead of from standard input. In the first case, `wc` gets a command line parameter telling it what file to 
     open. In the second, wc doesn't have any command line parameters, so it reads from standard input, but we have
     told the shell to send the contents of `mydata.dat` to `wc`'s standard input. The output is almost exactly the 
     same. The input without the `<` prints out the line count and the name of the file. With the `<` print out just
     the line count but not the name of the file.

3.   Why do you think `uniq` only removes adjacent duplicated lines? (Hint: think about very large data sets.) 
     What other command could you combine with it in a pipe to remove all duplicated lines?

     Large data sets may have duplicate lines for different sets of data. So removing these dupicates means you're
     losing useful data. In order to remove all duplicates, you can do `|sort|uniq` which can also create the problem of
     original order being lost in the file, which can be a problem if order is important.

4.   What text passes through each of the pipes and the final redirect in the pipeline below?
     ```cat animals.txt | head -5 | tail -3 | sort -r > final.txt```


    This is a pretty long command, but it's not as complicated as it looks. 
    The `cat` reads the file `animals.txt`.
    Then it takes the first 5 lines using `head -5` and then the last three lines from those five, by piping it 
    through `tail -3`. 
    Then it goes through `sort -r` which does a reverse sort of what's left. Finally it stores the three reverse
    sorted lines in a file called `final.txt`. And we're done :D

    This is what gets put into `final.txt`: 
    ```
    2012-11-06,rabbit
    2012-11-06,deer
    2012-11-05,raccoon
    ```

5.   The command `cut -d , -f 2 animals.txt` produces the following output: 

    ```
    deer
    rabbit
    raccoon
    rabbit
    deer
    fox
    rabbit
    bear
    ```

    What other command(s) could be added to this in a pipeline to find out what animals the file contains (without any duplicates in their names)? 

    What this command does is it extracts sections of each line, based on a delimeter denoted by the `-d` followed 
    by `,`. The `-f 2` means to extract the second field. So the whole statement means to take animals.txt, seperate
    feilds based on `,` and then extract the second feild on each line. In this case the animal names. We can add `sort`
    and `uniq` on the extracted sections to remove duplicates.