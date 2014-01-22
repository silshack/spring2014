---
layout: default
title: "How-tos"
---

## {{ site.course.number }} How-tos

General references for how to do useful things for this class.

<ul class="posts">

{% assign how-tos = site.categories.how-to %}
{% for post in how-tos %}
    <li><a href=" {{ site.baseurl }}{{ post.url }} "> {{ post.title }} </a></li>
{% endfor %}

</ul>
