---
layout: post
author: chunxi
title: Chunxi's CodingBat
date: 2014-02-05
---

Post by Chunxi Zhang

## Chunxi's CodingBat

**Choose three exercise.**

*1.List1-make pi*

 I feel this one is very interesting is because the code is quiet simple. I thought the problem would be harder. 
 So I tried to define pi as the first step. In fact, you do not need to do that. Finally, I simply type
 
 ```
 return [3,1,4]
 ```
 
 *2.Logic-1 > date_fashion*
 
 I made a mistake at first. The logic here is interesting. 
 The original version is:
 
  ```
 def date_fashion(you, date):
  if you>=8 or date>=8:
   return 2
  if you<=2 or date<=2:
   return 0
  else:
   return 1
  ```
   
   But is had problems. If you is greater than 8, your date is less than 2. It will return 2. What I expect is 0. Therefore, I changed the order.
  
  ```
  def date_fashion(you, date):
  if you<=2 or date<=2:
   return 0
  if you>=8 or date>=8:
   return 2
  
  else:
   return 1
  ```
  
  *3.Logic-1 > caught_speeding *
 
  At the very beginning, I tried to devide into two parts. If it is my birthday or not. Then consider the speed. But I found out there were a lot to input. Most of them were same.Therefore, I tried to simpify the code. To make the code shorter. I define "boon", if it is not the birthday, it will be 0.
 
 ```
def caught_speeding(speed, is_birthday):
 boon = 0
 if is_birthday == True:
   boon = 5
 if speed <= 60+boon:
   return 0
 elif speed >= 81+boon:
   return 2
 else:
   return 1
 ```
 
 **Pictures**
 
 *warmup1*
 
 ![Image](http://farm6.staticflickr.com/5518/12331086384_0a5f30a6a7_m.jpg)
 
 *string1*
 
 ![Image](http://farm4.staticflickr.com/3778/12330665145_f2cb1c4548_m.jpg)
 
 *list1*
 
 ![Image](http://farm8.staticflickr.com/7416/12331126244_5daa15dcfb_m.jpg)
 
 *logic1*
 
 ![Image](http://farm4.staticflickr.com/3725/12331141364_d866c7f812_m.jpg)
 
 
  
  
  
