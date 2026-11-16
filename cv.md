---
layout: page
title: Curriculum Vitae
---

<div class="cv-actions">
  <a class="btn btn--primary" href="{{ site.cv_pdf | relative_url }}" download>{% include icon.html name="download" %} Download CV (PDF)</a>
  <span class="updated">Last updated {{ site.cv_updated }}</span>
</div>

<!-- The short summary below is optional — delete any section you don't want.
     The full CV is the PDF (replace assets/files/cv.pdf with your Overleaf export). -->

## Education

<ul class="cv-list">
<li><span class="when">2021–2027</span><span><strong>Ph.D., [PLACEHOLDER Field]</strong>, University of California, Irvine<br>Advisor: [Name] · Dissertation: <em>[Working title]</em></span></li>
<li><span class="when">2021–2024</span><span><strong>M.S., [PLACEHOLDER Field]</strong>, University of California, Irvine</span></li>
<li><span class="when">2017–2021</span><span><strong>B.S., [PLACEHOLDER Field]</strong>, [University]</span></li>
</ul>

## Selected Awards & Fellowships

<ul class="cv-list">
<li><span class="when">2025</span><span>[PLACEHOLDER] Fellowship or award name, Organization</span></li>
<li><span class="when">2023</span><span>[PLACEHOLDER] Outstanding student presentation, Conference</span></li>
</ul>

## Skills

<ul class="cv-list">
<li><span class="when">Programming</span><span>[PLACEHOLDER] Python (xarray, numpy, pandas), MATLAB, Bash, Git</span></li>
<li><span class="when">Tools</span><span>[PLACEHOLDER] HPC / Slurm, climate model output (CMIP6), reanalysis (ERA5)</span></li>
</ul>

{% if site.cv_embed %}
## Full CV

<object class="cv-embed" data="{{ site.cv_pdf | relative_url }}" type="application/pdf" aria-label="CV PDF">
  <p>Your browser can't display the PDF here — <a href="{{ site.cv_pdf | relative_url }}">download it instead</a>.</p>
</object>
{% endif %}
