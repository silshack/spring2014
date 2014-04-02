---
layout: post
author: yonghao
title: yonghao's twitter hack with extra function
date: 2014-03-28
---

## What I did

I create own application and add some function in tweethack.py. Now my application allow users to tweet media message.

To run it, you need to git clone my update version of tweethack:

https://github.com/yonghaoy/tweethack


The code I added:

```
elif tos == "tweet pictures":
    print "Let's tweet a picture from the command line!"
    
    while exit != True:
      tweet = raw_input("What would you like to tweet?  ")
      photo = open('img/unc.jpg','rb')
      twitter.update_status_with_media(status = tweet, media = photo)
      exit = raw_input("Type exit to go back or press enter to Tweet again.  ")
      if exit == "exit":
        exit = True

```

## Access to my key

I have public my access secret in a google doc and share my doc to my google plus, and tag Elliot.

## Demo:

<blockquote class="twitter-tweet" lang="zh-cn"><p>test photo <a href="http://t.co/eGdesYkRax">pic.twitter.com/eGdesYkRax</a></p>&mdash; yonghao yu (@yonghao_yu) <a href="https://twitter.com/yonghao_yu/statuses/449633922729926656">2014年3月28日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

For some reason, the picture won't show in github's post, but it works in my twitter