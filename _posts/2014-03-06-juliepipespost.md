---
layout: post
author: julie
title: Julie's Pipes and Filters Post
---

I just completed the Pipes and Filtes exercies. I thought it was interesting to see the different things you can do with these commands. I think it's especially interesting how you can use the pipes to almost combine different commands. Instead of writing several different lines of code, you can use the pipes to take the output of one command and use that as the input in another. It also seems like the sort function would be really useful, especially if you had a lot of data. Here are my answers to the challenges:

1. Adding -n on to sort will sort the integers by numeric order. It tells the computer to read them as numbers, instead of as strings. 

2. In the first case, the program is inputting the file mydata.dat into the wc command. So, it counts the number of lines in the file, my data.dat. In the second example, it also counts the number of lines in the file, but it also gives you the name of the file, mydata.dat, to tell you which file has what number of lines. In the first case, since you're filtering the file into the command, wc, it just gives you the line count.

3. Maybe they don't remove all duplicated lines in case there is data that is intentionally duplicated. For example, what if you were testing how long it took you to run a mile, and it took you 10 minutes, and then 11 minutes, and then 10 minutes again. You wouldn't want to delete the second 10 minute time from your record, because that is from a different trial, even though it has the same result. Also, to delete all the duplicates, you could first sort the data and then run the uniq command. If the data was sorted, all the data that was the same would end up next to each other, since it would be placed in alphabetical order.

4. The first part of the command, cat animals.txt, concatenates the file, so the entire file passes through that part. The second part tells it to take the first five lines of animals.txt. The thrid part tells it to take the last three lines of the previous output, so it would be deer, rabbitt and racoon. The forth part tells it to sort that list in reserve alphabetical order. Finally, the output is directed into a file called final.txt
 
5. You could add the command uniq to get rid of duplicates. You could also sort them first, which would get rid of all duplicates, even the ones that were not adjacent originally. So the final command would look like: $ cut -d , -f 2 animals.txt | sort | uniq 

