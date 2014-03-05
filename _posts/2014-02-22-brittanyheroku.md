---
author: brittany
title: Brittany's Heroku Blog Setup
layout: post
---

My Heroku app is up and running at the following link: http://silshack-britth.herokuapp.com/

Getting the blog up and running wasn't too bad. My main struggles came because of my original flawed understanding of github pushes and pulls. I ended up cloning the simplehack directory into my spring2014 folder, which I later found out I wasn't supposed to have done. As such, I thought when I made changes in simplehack and pushed them, they would show up on my github page. When they didn't, I thought I must have made some mistake with my commits and pushes. The process became clearer after I got some clarification from Grant.

I couldn't really think of anything cool to do to the blog, but I changed the background color and some of the font colors. For instance, to change the background, I made the following edit to layout.html:

```
<style>
            body {
                padding-top: 20px;      
                background-color: #0097C6; /*added*/
            }
```

I kept forgetting to commit and push these changes after I made them, so at first I thought it just wasn't working. However after making the pushes, changes began to appear. This was definitely a good exercise in getting use to using github from the command line and familiarizing myself with the processes of making commits and pushing changes. It feels a lot more intuitive after doing this exercise.
