---
layout: page
title: About
hide_title: true
permalink: /
news_limit: 6
---

{% if site.job_market != "" %}<div class="banner">{{ site.job_market | markdownify | remove: '<p>' | remove: '</p>' }}</div>{% endif %}

# Hi, I'm Samantha.
{: .page__title}

<p class="lead">[PLACEHOLDER] I'm a PhD candidate in the <a href="#">Department of ...</a> at the University of California, Irvine, advised by <a href="#">Prof. Advisor Name</a>. My research focuses on ...</p>

[PLACEHOLDER] A second paragraph: the big questions that drive your work, the methods you use (e.g., observations, climate models, statistics), and why it matters. Two or three sentences is plenty.

[PLACEHOLDER] A third, optional paragraph: before UCI, I received my B.S. in ... from .... Outside of research, I enjoy ....

<ul class="interests" aria-label="Research interests">
  <li>[Interest 1]</li>
  <li>[Interest 2]</li>
  <li>[Interest 3]</li>
  <li>[Interest 4]</li>
</ul>

## News

<ul class="news">
{% for item in site.data.news limit: page.news_limit %}
  <li>
    <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%b %Y" }}</time>
    <div>{{ item.text | markdownify }}</div>
  </li>
{% endfor %}
</ul>
