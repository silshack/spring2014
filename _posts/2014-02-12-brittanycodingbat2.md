---
author: brittany
title: Brittany's CodingBat Exercises - Level 2
layout: post
---
##Screenshots

###Warmup-2

![Warmup-2](http://www.unc.edu/~bmhayes/inls560/warmup-2.png)


###List-2

![List-2](http://www.unc.edu/~bmhayes/inls560/list-2.png)


###String-2

![String-2](http://www.unc.edu/~bmhayes/inls560/string-2.png)


###Logic-2

![Logic-2](http://www.unc.edu/~bmhayes/inls560/logic-2.png)


##Three Interesting/Challenging Exercises

###List-2: centered_average(nums)
*Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.*

There were a couple of exercises in the List-2 section that were a bit tricky for me, including this one. The big thing here was that I had trouble figuring out how to deal with cases where all of the values are the same. My code looked for the index of the max() and min() in order to not include those values in the avg; however, in cases where the max and min are the same, the index returned would always be the lowest index (i.e., the values stored in variables smallest and largest were the same). I ended up adding an if-statement to find the highest index of the value to use in the largest variable. I'm sure there is a more efficient way to do this, but this option worked. 

```

def centered_average(nums):
    sum = 0
    total = len(nums)-2
    largest = nums.index(max(nums))
    smallest = nums.index(min(nums))
    if largest == smallest:
        for i in range(len(nums)):
            if nums[i] == nums[smallest]:
                largest = i
    for i in range(len(nums)):
        if i != largest and i != smallest:
            sum = sum + nums[i] 
    if total > 0:
        return sum / total
    else:
        return sum
    
```

###Logic-2: make_bricks(small, big, goal)
*We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return True if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops.*

This problem, along with make_chocolate(), were probably the most challenging exercises I've encountered so far. With make_bricks(), I initially was going to try to use some for loops, but I read in the description that loops were unneccessary. As such, I set out to think about how it could be solved otherwise. I started to think that the modulo operation would probably be of use in this case, in order to find the remainder (after big bricks) that you would need (made up of small bricks) to add up to the goal amount. I also realized that you could easily tell if it was impossible to make the goal length if the total of both small and big was less than the goal. I added that as a condition to my code. Along the same lines, if the sum of small and big brick lengths equaled the goal, that would automatically mean that the goal length was possible. I combined all of these observations to write this function. It required a few modifications (changing the order of statements, fixing some of the calculations, etc), but ultimately the code below worked. I later saw that there was a sample solution video, which was so much more concise than my code (but focused on the same things I did).

```
def make_bricks(small, big, goal):
    total = small + (5*big)
    if total < goal:
        return False
    if big != 0 and small != 0:
        remainding = goal % 5
        if remainding - small <= 0:
            return True
        else:
            return False     
    elif big == 0 and small != 0:
        if goal - small > 0:
            return False
        else:
            return True
    elif big !=0 and small == 0:
        remainding = goal % 5
        if remainding == 0:
            return True
        else:
            return False
    elif big == 0 and small == 0:
        return False
```


###Logic-2: make_chocolate(small, big, goal)
*We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.*

make_chocolate() was even harder than make_bricks() for me. I started out with the observations I had gleaned from completing make_bricks(), and modifying the code so that it would return the appropriate number rather than True/False. I kept running it and modifying little things, which would give me more correct tests, but there were a number of incorrect instances. I examined them and tried to figure out what they had in common, making little tweaks to my code in an attempt to account for those cases. At one point, I got all the actual test cases correct, but the bottom "other cases" element showed that there was still some underlying problem with my code. I decided to just step back and rewrite the code. I felt that the case I was not capturing correctly were those where you had multiple big bars, and you needed them all  [for example, the last case I was getting wrong -- make_chocolate(1000, 1000000, 5000006) --> 6]. I tried to use the middle case (right before the final else) to capture those kinds of instances. Ultimately, the rewritten code was much shorter and was successful for all cases.

```
def make_chocolate(small, big, goal):
    total = small + (5*big)         #sum weight of all chocolate
    if total < goal:                #sum weight is less than the goal, so goal is impossible
        return -1
    if total == goal:               #sum weight is exactly goal, so all small bars are needed
        return small
    if big*5 < goal and (goal - big*5) <= small:    #when you use all the big bars 
        return goal - (big*5)                       #and the remainder is <= remaining small bars
    else:
        remainding = goal % 5       
        if remainding == small:     #if remainder is same as small, all small bars are needed
            return small 
        if remainding > small:      #if remainder is greater than amt of small bars
            return -1               #request is impossible
        else:
            return remainding       #remainder is less than small, so return remainder
```


