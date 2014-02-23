---
author: brittany
title: Brittany's Heroku Blog Setup
layout: post
---

My Heroku app is up and running at the following link: http://silshack-britth.herokuapp.com/

Getting the blog up and running wasn't too bad. My main struggles came because of my flawed understanding of github pushes and pulls. I ended up cloning the simplehack directory into my spring2014 folder, which I later found out I wasn't supposed to have done. As such, I thought when I made chang es and pushed them, they would go to my github page. When they didn't, I thought I must have made some mistake with my pushes and commits. However, the changes I was making to simplehack seemed to all take shape and my blog ran fine, so in general, the process became clearer. 

I didn't really make any cool changes to the simple blog, but I changed the background color and some of the font colors. For instance, to change the background, I added the following code to layout.html:

'''
<style>
            body {
                padding-top: 20px;      
                background-color: #0097C6; /*added*/
            }
            ...

'''

I kept forgetting to commit and push these changes after I made them, so at first I thought it wasn't working. This was definitely a good exercise in getting use to using github commands on the terminal and familiarizing myself with the processes of making changes. It feels a lot more intuitive after doing this exercise.
