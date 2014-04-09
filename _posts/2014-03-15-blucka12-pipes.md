---
layout: post
author: blucka12
title: Pipes and Filters
---

1. -n has the effect it has because it gives us a numbered list as the output
2. wc -l < mydata.dat reads the input of the contents of the file "mydata.dat" and gives a list, whereas wc -l mydata.dat gives a list from the file itself and goes straight to the screen.
3. "sort" is another command that can pipe with the "uniq" command.
4. To be honest, I'm a little confused about this one. I took "cat animals.txt | head -5 | tail -3 | sort -r > final.txt" and substituted "cubane.pdb" for "animals.txt" and "final.pdb" for "final.txt", the last of which was probably not necessary...but oh well. The output was <imgur screenshot file> So, from what I got, it took the first three lines and outputted them in reverse order. So the head -5 part is still a little weird to me...Here's a screenshot: 

<a href="http://imgur.com/irgHa0O"><img src="http://i.imgur.com/irgHa0O.png" title="Hosted by imgur.com" /></a>

5. Is alphabetical order one of the potential uses? Here's a screenshot of what I got when applying it to "methane.pdb":

<a href="http://imgur.com/krPJYBt"><img src="http://i.imgur.com/krPJYBt.png" title="Hosted by imgur.com"/></a>

