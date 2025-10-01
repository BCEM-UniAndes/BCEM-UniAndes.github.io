---
page_id: pics
layout: page
permalink: /pics/
title: Pics
description: 
nav: true
nav_order: 6
---

## BCEM a lo largo de los años

<div id="carouselExample" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    {% for pic in site.data.pictures_gens %}
      <li data-target="#carouselExample" data-slide-to="{{ forloop.index0 }}" class="{% if forloop.first %}active{% endif %}"></li>
    {% endfor %}
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    {% for pic in site.data.pictures_gens %}
      <div class="carousel-item {% if forloop.first %}active{% endif %}">
        <div class="text-center mb-2">
          <h3 style="font-size: 1.5rem; font-weight: bold;">{{ pic.year }}</h3>
        </div>
        <img src="{{ site.url }}{{ site.baseurl }}/assets/img/picpic/gens/{{ pic.image }}" class="d-block w-100 img-responsive" style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25); border-radius: 5px;" alt="{{ pic.year }}">
      </div>
    {% endfor %}
  </div>

  <!-- Controls -->
  <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<p>&nbsp;</p>

---

## Galería

<div class="row">
  {% assign number_printed = 0 %}
  {% for pic in site.data.pictures_gal %}
    
    {% assign even_odd = number_printed | modulo: 2 %}
    
    <div class="col-sm-6 mb-4">
      <div class="rounded shadow p-0"> <!-- Removed p-3 class to remove padding -->
        <img src="{{ site.url }}{{ site.baseurl }}/assets/img/picpic/gallery/{{ pic.image }}" class="img-fluid rounded" alt="{{ pic.alt_text }}" style="width: 100%; height: auto; display: block;">
        <!-- Added inline styles to ensure full width and responsive behavior -->
      </div>
    </div>
    
    {% assign number_printed = number_printed | plus: 1 %}
    
    {% if even_odd == 1 or forloop.last %}
</div>
<div class="row">
    {% endif %}
    
  {% endfor %}
</div>

<p>&nbsp;</p>