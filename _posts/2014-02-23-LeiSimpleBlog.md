---
layout: post
author: lei
title: Lei Wang's Simple Blog
---

by Lei Wang

Here is the link : http://silshack-leiw414.herokuapp.com/

I followed the given instruction step by step and everything worked fine until the final step, where the error occurred as following:

```
Warning: Permanently added the RSA host key for IP address '50.19.85.156' to the list of known hosts.                                                                                             
Fetching repository, done.                                                                                                                                                                        
To git@heroku.com:silshack-leiw414.git          ! [rejected]        master -> master (fetch first)                                                                                                                                               
error: failed to push some refs to 'git@heroku.com:silshack-leiw414.git'                                                                                                                          
hint: Updates were rejected because the remote contains work that you do                                                                                                                          
hint: not have locally. This is usually caused by another repository pushing                                                                                                                      
hint: to the same ref. You may want to first integrate the remote changes                                                                                                                         
hint: (e.g., 'git pull ...') before pushing again.                                                                                                                                                
hint: See the 'Note about fast-forwards' in 'git push --help' for details. 
```

I read the hint message thoroughly and I realized that the problem could be that I did not integrate the remote changes first by using "git pull origin master." Unfortunately, it still did not work even I tried again with integrating the changes first. Therefore, I did not know which part went wrong so I delete the app on Heroku and the simplehack folder on Nitrous and started it over. This time, it worked!

Then, I went to http://silshack-leiw414.com/admin to add my first blog. I inserted a img, a google map frame, a link, and added some CSS style of my blog. The process of getting Simple onto Heroku is quite interesting. I cannot wait to delve more into the "Simple" when I have time!
