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

<p class="lead">I'm a PhD candidate in the Department of Earth System Science at the University of California, Irvine, where I'm advised by <a href="https://www.janebaldw.in/">Dr. Jane Baldwin</a> in the <a href="https://www.janebaldw.in/">Climate and Extreme Events Risk Group</a>.</p>

My research focuses on **compound natural hazards**, extreme events that occur together or in quick succession, and on how they affect people and communities. [PLACEHOLDER: one or two sentences on the specific questions you ask and the tools you use, e.g. "I use observations and climate model simulations to understand…"]

Outside of research, you'll usually find me running, hiking, or camping, or working on my latest knitting or crochet project.

<ul class="interests" aria-label="Research interests">
  <li>Compound hazards</li>
  <li>Climate extremes</li>
  <li>Societal impacts</li>
  <li>Climate risk</li>
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
