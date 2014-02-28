---
title: Libby's Heroku App
author: libbby
layout: post
---

Getting Simple onto Heroku was the biggest pain. Luckily, Grant is some kind of command-line wizard and we found out that each time I re-tried the instructions (as they were updated/corrected) I created multiple databases as well as (somehow) creating 2 passwords and 2 secret keys. So if anyone else is having trouble and sees this, try checking your db and settings files in Nitrous.

I looked through the files, and decided to do something simple like change the background (to test my Nitrous ability, really).
I added a bg-color line to the layout.html file:

```
body {
  padding-top: 20px;
  background-color:#E0FFF5;
  }
```

http://silshack-libbby.herokuapp.com/
