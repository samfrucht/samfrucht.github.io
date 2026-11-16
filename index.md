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

<p class="lead">I'm a PhD candidate at the University of California, Irvine, where I'm advised by <a href="https://www.janebaldw.in/">Dr. Jane Baldwin</a> in the <a href="https://www.janebaldw.in/">Climate and Extreme Events Risk Group</a>. I study compound hazards and their societal impacts.</p>

<ul class="interests" aria-label="Research interests">
  <li>Compound hazards</li>
  <li>Tropical cyclones</li>
  <li>Extreme heat</li>
  <li>Climate modeling</li>
  <li>Societal impacts</li>
</ul>

## Research

My dissertation focuses on **TC–heat events**: tropical cyclones followed by extreme heat. Tropical cyclones often cause widespread power outages. If extreme heat then hits the same region, people may be left without air conditioning or other cooling right when they need it most, which can be very dangerous for human health and wellbeing.

I use high-resolution global climate models (GCMs) to study these events.

## Background

I graduated from Cornell University in 2021 with a B.S. in Atmospheric Sciences and minors in Climate Change and in Environment & Sustainability.

Outside of research, you'll usually find me running, hiking, or camping, or working on my latest knitting or crochet project.

## News

<ul class="news">
{% for item in site.data.news limit: page.news_limit %}
  <li>
    <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%b %Y" }}</time>
    <div>{{ item.text | markdownify }}</div>
  </li>
{% endfor %}
</ul>
