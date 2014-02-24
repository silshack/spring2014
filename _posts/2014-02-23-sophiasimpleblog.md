---
layout: post
author: slaffer
title: Sophia's Not So Simple Blog
---

Here is a link to my blog up and running: [Sophia's blog post] (http://silshack-slaffer.herokuapp.com/a-successful-post-indeed-1)

My process for getting my instance of Simple onto Heroku was slightly frustrating but was also a good learning experience. 
The first time I created the Simple Blog, my user name and password would not authenticate. I tried to change my password in 
the ```settings.py``` file and commit and push these changes with no success. I then started over by deleting the simplehack repo 
and making a new Heroku app. On this second try, I received an application error.

I was not sure how to troubleshoot these issues (since I wasn’t really sure what the scripts were doing) so I contacted Elliott for help.
I then tried again to start the process fresh and received the same application error. I discovered through viewing the Heroku logs, 
this was caused by an H10 error that seemed to be connected to a database issue, which caused the app to crash. Elliott also suggested 
over email that I look at my hidden ```.bashrc``` file and delete any lines of code that referenced Heroku. I did this, started over, 
and received an application error again. Elliott and I then did a video chat session with screenshare and walked through the process 
together.

First, Elliott showed me how I had multiple copies of Heroku databases in both the ```.bashrc``` and ```db.py``` files and this was most 
likely caused by the previous script issue. He then had me do a ```git reset --hard``` which reset my box to a previous commit. 
We then walked through the process together and Elliot explained what each command line prompt was doing. This was really helpful to 
demystify the process and clarify why I was having issues. Essentially, my ```db.py``` file should only have been pointing to the 
database linked to my Heroku app; however, it listed multiple databases which confused Heroku. 

Through this process, I have gained a good grasp on how to do some basic things in command line including doing a commit, calling log 
files, and viewing hidden files. It also exemplified how to troubleshoot an issue one really needs to thoroughly understand the applications and 
scripts being used.  Elliott was great at walking me through this, thanks!