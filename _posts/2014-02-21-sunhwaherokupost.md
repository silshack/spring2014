---
layout: post
author: sunhwap
title: sunhwa's heroku first post
date: 2014-02-21
---

After SSH key was added to my Heroku account, I was able to go on to my heroku site:
http://silshack-sunhwa.herokuapp.com.  The site let me type my first post when I added /admin to this url.  
I made some attempts to make a few changes to CSS layout codes to hope to get the site to look better but failed. 
Then I later realized thanks to Grant's help that I have to do git push for the changes to be reflected on Heroku site. 
So to make a change in background color to Heroku site, I inserted the background color code in the layout.html:

``` 
   <style>
          body {background-color: #FF8C00;
                padding-top: 20px;
            }
```

Then,  I changed font style to Georgia and font size. 
  
```
  font-family: "{{ config.FONT_NAME }}", Georgia /*sans-serif*/;
                line-height: 1.8em;
                font-size: 15px;
                font-weight: 400;
            }
            
            body, pre, input {
            font-family: "{{ config.FONT_NAME }}", Georgia /*sans-serif*/;
                line-height: 1.8em;
                font-size: 20px;
                font-weight: 400; }
```

Lastly, I inserted Sunhwa's Blog in the title.  

```
BLOG_TITLE = "Sunhwa's Blog"/* added*/
```

