---
layout: page
title: Vita
permalink: /vita/
---
{%- comment -%}
  Abbreviated CV. Each entry is one <li> with three parts:
    <span class="when">  date on the left
    <strong>             main line (degree / position / award)
    <span class="sub">   second, lighter line (institution, group, etc.)
  Copy an <li> ... </li> line to add an entry; delete one to remove it.
  Publications and presentations are pulled automatically from
  _data/publications.yml and _data/presentations.yml.
{%- endcomment -%}

<p>This is an abbreviated vita. A full, up-to-date CV is available for download below.</p>

<div class="cv-actions">
  <a class="btn btn--primary" href="{{ site.cv_pdf | relative_url }}">{% include icon.html name="file-pdf" %} CV</a>
  <span class="updated">Updated {{ site.cv_updated }}</span>
</div>

## Education

<ul class="cv-list">
<li><span class="when">2022 – Present</span><span><strong>Ph.D. in Earth System Science</strong><span class="sub">University of California, Irvine · Advisor: Dr. Jane Baldwin</span></span></li>
<li><span class="when">Aug 2024</span><span><strong>M.S. in Earth System Science</strong><span class="sub">University of California, Irvine</span></span></li>
<li><span class="when">May 2021</span><span><strong>B.S. in Atmospheric Science, Cum Laude</strong><span class="sub">Cornell University · Minors in Climate Change and in Environment &amp; Sustainability</span></span></li>
</ul>

## Research Experience

<ul class="cv-list">
<li><span class="when">2022 – Present</span><span><strong>Graduate Research Assistant</strong><span class="sub">Department of Earth System Science, UC Irvine · Advisor: Dr. Jane Baldwin</span></span></li>
<li><span class="when">Summers 2021–22</span><span><strong>Research Intern</strong><span class="sub">NASA Goddard Institute for Space Studies · Advisor: Dr. Ron Miller</span></span></li>
<li><span class="when">Summer 2020</span><span><strong>Undergraduate Research Assistant</strong><span class="sub">Department of Earth and Atmospheric Sciences, Cornell University · Advisor: Dr. Art DeGaetano</span></span></li>
<li><span class="when">Feb – Apr 2020</span><span><strong>Visiting Research Scholar</strong><span class="sub">Climate Change Research Centre, University of New South Wales · Advisors: Dr. Melissa Hart &amp; Dr. Angela Maharaj</span></span></li>
<li><span class="when">Summer 2019</span><span><strong>Research Intern</strong><span class="sub">NASA Goddard Space Flight Center · Advisor: Dr. Ali Tokay</span></span></li>
<li><span class="when">Fall 2018</span><span><strong>Undergraduate Research Assistant</strong><span class="sub">Department of Earth and Atmospheric Sciences, Cornell University · Advisor: Dr. Natalie Mahowald</span></span></li>
</ul>

## Awards & Fellowships

<ul class="cv-list">
<li><span class="when">2025</span><span><strong>Outstanding Contribution to the Department</strong><span class="sub">University of California, Irvine</span></span></li>
<li><span class="when">2024</span><span><strong>Student Award</strong><span class="sub">Symposium on Hurricane Risk in a Changing Climate</span></span></li>
<li><span class="when">2024</span><span><strong>Physical Sciences Advancing Inclusive Excellence Award</strong><span class="sub">University of California, Irvine</span></span></li>
<li><span class="when">2023</span><span><strong>Graduate Research Fellowship Program (GRFP)</strong><span class="sub">National Science Foundation</span></span></li>
<li><span class="when">2023</span><span><strong>CalSpace Fellowship</strong><span class="sub">University of California, Irvine</span></span></li>
<li><span class="when">2019, 2022</span><span><strong>Sally Ride Internship Award</strong><span class="sub">NASA</span></span></li>
<li><span class="when">2021</span><span><strong>CALS Academic Excellence Award</strong><span class="sub">Cornell University</span></span></li>
<li><span class="when">2020</span><span><strong>Visiting Researcher Scholarship</strong><span class="sub">University of New South Wales</span></span></li>
</ul>

## Publications

<ul class="cv-list cv-list--refs">
{% for p in site.data.publications %}
<li><span class="when">{{ p.year }}</span><span>{% include authors.html authors=p.authors %} {{ p.title }}. <em>{{ p.journal }}</em>{% if p.details and p.details != "" %}, {{ p.details }}{% endif %}.{% if p.doi and p.doi != "" %} <a href="https://doi.org/{{ p.doi }}">doi:{{ p.doi }}</a>{% elsif p.preprint and p.preprint != "" %} <a href="{{ p.preprint }}">Preprint</a>{% endif %}{% if p.pdf and p.pdf != "" %} · <a href="{{ p.pdf | relative_url }}">PDF</a>{% endif %}{% case p.status %}{% when "in-review" %} <span class="tag tag--talk">Under review</span>{% when "accepted" %} <span class="tag tag--talk">In press</span>{% endcase %}</span></li>
{% endfor %}
</ul>

## Selected Presentations

<ul class="cv-list cv-list--refs">
{% assign talks = site.data.presentations | sort: "date" | reverse %}
{% for t in talks %}
<li><span class="when">{{ t.date | date: "%b %Y" }}</span><span>{% if t.authors %}{% include authors.html authors=t.authors %} {% endif %}{{ t.title }}. <em>{{ t.event }}</em>{% if t.location %}, {{ t.location }}{% endif %}. <span class="tag tag--{{ t.type }}">{{ t.type }}</span></span></li>
{% endfor %}
</ul>

## Teaching

<ul class="cv-list">
<li><span class="when">Winter 2025</span><span><strong>Teaching Assistant, Climate Change</strong><span class="sub">University of California, Irvine</span></span></li>
<li><span class="when">Fall 2024</span><span><strong>Teaching Assistant, Catastrophes</strong><span class="sub">University of California, Irvine</span></span></li>
<li><span class="when">Fall 2020</span><span><strong>Teaching Assistant, Introduction to Oceanography</strong><span class="sub">Cornell University</span></span></li>
</ul>

## Service

<ul class="cv-list">
<li><span class="when">2025 – Present</span><span><strong>Reviewer</strong><span class="sub"><em>Weather, Climate, and Society</em> (AMS)</span></span></li>
<li><span class="when">2024 – Present</span><span><strong>Graduate Representative</strong><span class="sub">Department of Earth System Science, UC Irvine</span></span></li>
<li><span class="when">2023 – 2026</span><span><strong>Graduate Mentorship Program Lead &amp; Mentor</strong><span class="sub">UC Irvine</span></span></li>
</ul>

<p class="cv-note">Additional mentoring and outreach activities are listed in my <a href="{{ site.cv_pdf | relative_url }}">full CV</a>.</p>

## Skills

<p>Python (Xarray, Cartopy, netCDF4, NumPy, Matplotlib) · Linux · LaTeX · QGIS · Google Earth Engine · Minitab</p>
