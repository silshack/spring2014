---
author : bdferr
layout : post
title : Bdferr's post on Simple
---

After beginning this assignment in class on Wednesday, I foolishly re-did one of the commands today in Nitrous, 
namely "git clone https://github.com/silshack/simplehack.git," which gave me the error message 
“fatal: destination path ‘simplehack’ already exists and is not an empty directory.” 
After this, I simply proceeded with the instructions on smartypants' blog, starting from “cd simplehack.” 
“Git status” confirmed that I had already done the next two steps 
in the same box as cd simplehack on smartypants’ blog, 
so I proceeded with git add . and git commit –m “Created config.”
I had already configured my blog, simply accepting defaults in response to several prompts 
which I did not know anything about.

My first attempt at ./setupenv1.sh gave me an error message: 
“-bash: ./setupenv1.sh: No such file or directory.” 
However, just as I was about to cast “Summon Grant,” I noticed a “trouble” heading on smartypants’ blog. 
After following its instructions to do “git pull origin master,” I did not have any further difficulties 
with these setup files.

At first, I attempted to load https://silshack-bdferr.herokuapp.com/ while the last setup file was still being processed 
and got an error message; apparently “git push heroku master,” at least in this case, 
takes quite a while to complete. Now, though, it works!

Next, I wondered if I could embed a video in a blog post on Simple, so I cast “Summon Grant.” 
Grant explained that there was a standard code for embedding a video, so I consulted the search engine Startpage.com 
for information on how to do this. I used Startpage instead of Google because Startpage
at least claims to make more of an effort to protect privacy, e.g. by not recording IP addresses.
I found instructions [here](http://www.htmlgoodies.com/tutorials/web_graphics/article.php/3480061) 
and followed them for the Youtube version of one of my favorite albums. This was not a video in the proper sense, 
but there seems to be nothing preventing people from simply uploading studio albums to Youtube 
and providing a still image as the “video.” I hope this is not a copyright violation.

I also decided to use basic markdown, including italics, lists, and links, in the post.
I was sad to see that the markdown for unordered lists seems to simply indent each item,
rather than producing a bulleted list. I found that this did not give the impression of a list,
but gave the impression that I simply did not know how to use indentation properly. 
The same was true of the html &lt;ul&gt; tag, so I switched to an ordered list.

Finally, inspired by Chunxi's pictures of China, I decided to add entertaining images to my blog post.
You can see the final product [here](https://silshack-bdferr.herokuapp.com/do-i-put-a-title-here-or-what).
