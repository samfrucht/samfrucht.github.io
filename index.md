---
layout: page
title: About
permalink: /
news_limit: 6
---

{% if site.job_market != "" %}<div class="banner">{{ site.job_market | markdownify | remove: '<p>' | remove: '</p>' }}</div>{% endif %}

I am a fifth-year PhD candidate at the University of California, Irvine, advised by [Dr. Jane Baldwin](https://www.janebaldw.in/) in the [Climate and Extreme Events Risk Group](https://www.janebaldw.in/). My research focuses on compound hazards and their impacts on society.

My dissertation examines **TC–heat events**, in which a tropical cyclone is followed by extreme heat. Tropical cyclones often cause widespread power outages, and when extreme heat follows in the same region, communities can be left without cooling at the very moment they need it most, posing serious risks to human health and well-being. I use high-resolution global climate models (GCMs) to better understand these events.

Before coming to UCI, I earned a B.S. in Atmospheric Sciences from Cornell University in 2021, with minors in Climate Change and in Environment & Sustainability. Outside of research, I enjoy running, hiking, camping, knitting, and crocheting.

<ul class="interests" aria-label="Research interests">
  <li>Compound hazards</li>
  <li>Tropical cyclones</li>
  <li>Extreme heat</li>
  <li>Climate modeling</li>
  <li>Societal impacts</li>
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
