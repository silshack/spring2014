---
layout: post
author: lei
title: Lei's Pipes & Filters
---
# Process

I used to have some experience with basic shell command before, therefore this exercise was not hard for me to get start with. It gave me a chance to refresh my knowledge about shell command as well. I also found the website http://www.thegeekstuff.com/2010/11/50-linux-commands/ very useful for shell command beginners and learned a lot from it.
___
## Exercise

**C1**

The command `sort -n` compare according to string numerical value, rather than character by character.

**C2**

`wc -l < mydata.dat`：`wc -l` doesn't have any command line parameters, it reads from standard input and send the contents of mydata.dat to wc's standard input.
`wc -l mydata.dat`: wc gets a command line parameter telling it to open mydata.dat and get the output result.

**C3**

`uniq` is faster when working with large data sets, it removes only adjacent duplicated lines by comparing line by line. We can also use `sort salmon.txt| uniq` to remove all duplicated lines.

**C4**

we use "head -5" to get the first 5 lines of the animals.txt:  

```
2012-11-05,deer
2012-11-05,rabbit
2012-11-05,raccoon
2012-11-06,rabbit
2012-11-06,deer
```

Then use "tail -3" to get the last three lines of previous output.

```
2012-11-05,raccoon                                                                                                                                                                 
2012-11-06,rabbit                                                                                                                                                                  
2012-11-06,deer
  
```

"sort -r > final.txt" sort the previous outcome and save the result as "final.txt".

```
2012-11-06,rabbit
2012-11-06,deer
2012-11-05,raccoon
```

**C5**

`cut -d, -f 2 animals.txt | sort | uniq`
