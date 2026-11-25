---
layout: page
title: Vita
permalink: /vita/
---
{%- comment -%}
  Abbreviated CV. The full CV is the PDF: export it from Overleaf, name it
  cv.pdf, and upload it to assets/files/ (replacing the old one).
  Publications and presentations below are pulled automatically from
  _data/publications.yml and _data/presentations.yml.
  Delete any section you don't want.
{%- endcomment -%}

<div class="cv-actions">
  <a class="btn btn--primary" href="{{ site.cv_pdf | relative_url }}">{% include icon.html name="file-pdf" %} Full CV (PDF)</a>
  <span class="updated">Last updated {{ site.cv_updated }}</span>
</div>

## Education

<ul class="cv-list">
<li><span class="when">2022–present</span><span><strong>Ph.D. Candidate, [PLACEHOLDER Field]</strong><br>University of California, Irvine<br>Advisor: Dr. Jane Baldwin</span></li>
<li><span class="when">2021</span><span><strong>B.S., Atmospheric Sciences</strong><br>Cornell University<br>Minors: Climate Change; Environment &amp; Sustainability</span></li>
</ul>

## Publications

<ul class="cv-list cv-list--refs">
{% for p in site.data.publications %}
<li><span class="when">{{ p.year }}</span><span>{% include authors.html authors=p.authors %} {{ p.title }}. <em>{{ p.journal }}</em>{% if p.details and p.details != "" %}, {{ p.details }}{% endif %}.{% if p.doi and p.doi != "" %} <a href="https://doi.org/{{ p.doi }}">doi:{{ p.doi }}</a>{% elsif p.preprint and p.preprint != "" %} <a href="{{ p.preprint }}">Preprint</a>{% endif %}{% case p.status %}{% when "in-review" %} <span class="tag tag--talk">Under review</span>{% when "accepted" %} <span class="tag tag--talk">In press</span>{% endcase %}</span></li>
{% endfor %}
</ul>

## Selected Presentations

<ul class="cv-list cv-list--refs">
{% assign talks = site.data.presentations | sort: "date" | reverse %}
{% for t in talks %}
<li><span class="when">{{ t.date | date: "%Y" }}</span><span>{% if t.authors %}{% include authors.html authors=t.authors %} {% endif %}{{ t.title }}. <em>{{ t.event }}</em>{% if t.location %}, {{ t.location }}{% endif %}. <span class="tag">{{ t.type }}</span></span></li>
{% endfor %}
</ul>

## Awards &amp; Fellowships

<ul class="cv-list">
<li><span class="when">2025</span><span>[PLACEHOLDER] Fellowship or award name, Organization</span></li>
<li><span class="when">2023</span><span>[PLACEHOLDER] Outstanding student presentation, Conference</span></li>
</ul>

## Skills

<ul class="cv-list">
<li><span class="when">Programming</span><span>[PLACEHOLDER] Python (xarray, numpy, pandas), Bash, Git</span></li>
<li><span class="when">Tools</span><span>[PLACEHOLDER] HPC, global climate model output, reanalysis</span></li>
</ul>
