---
layout: post
author: katielmeyer
title: Pipes and filters
date: 2014-03-05
---


### Challenges

1) **Explain why -n has this effect.**
Adding -n to the sort command tells the program to sort the items by number value instead of the first character.

2) **What is the difference?**
They're both ways to tell the program where to get its input. When you don't specify with a <, 
the returned output gives both the wordcount & file name

3) **Why do you think uniq only removes adjacent duplicated lines? (Hint: think about very large data sets.) 
What other command could you combine with it in a pipe to remove all duplicated lines?**
In order to be able to remove each repetitive line from its input, it would need to be able to store each unique item and compare
each new line to that master list of items it's already found. For very long items or very long lists of items, that take a very long time. You 
could be sure to remove all duplicate items by first sorting the file alphabetically, then running uniq:

```

sort salmon.txt | uniq

```

4) **What text passes through each of the pipes and the final redirect in the pipeline below?**
The cat command just prints out the contents of one or more files. Since we only have one file in this case, I don't think it's really
necessary here. Head takes the first 5 lines of that file:

```

2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer

```

Then tail takes the last 3 lines of those 5:

```

2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer

```

Finally, those lines are sorted in reverse order and the output goes to final.txt.

```

2012-11-06,rabbit  
2012-11-06,deer                                                                                                                                        
2012-11-05,raccoon

```

5) **What other command(s) could be added to this in a pipeline to find out what animals the file contains (without any duplicates in their names)?**
We can find out the unique animals in this list by adding sort & uniq to the command.

```

cut -d , -f 2 animals.txt | sort | uniq

```

