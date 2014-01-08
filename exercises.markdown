---
layout: default
title: "Exericises"
---

## {{ site.course.number }} Exercises

<ul class="posts">

{% assign assignments = site.categories.exercise %}
{% for post in assignments %}
    <li><a href=" {{ site.baseurl }}{{ post.url }} "> {{ post.title }} </a> &raquo; <span>Due: {{ post.date | date: "%a, %b %d, %y" }} at {{ post.date | date: "%I:%M %p" }} </span> </li>

{% endfor %}

</ul>
