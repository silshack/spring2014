---
layout: default
title: Python Console
---

{% include python id='1' %}
print "Type and run your python code here"
print "="*25
import turtle
t = turtle.Turtle()
for c in ['red', 'green', 'yellow', 'blue']:
    t.color(c)
    t.forward(75)
    t.left(90)
{% include endpython id='1' %}
