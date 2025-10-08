---
page_id: teaching
layout: page
title: Enseñanza
permalink: /teaching/
description: 
nav: true
nav_order: 6
# display_categories: [Postgrado, Pregrado, CABANA, Extención]
display_categories: [graduate, undergraduate, cabana, extension]
horizontal: false
---

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <a id="{{ site.data[site.active_lang].strings.categories[category] }}" href=".#{{ site.data[site.active_lang].strings.categories[category] }}">
        <h2 class="category">{{ site.data[site.active_lang].strings.categories[category] }}</h2>
      </a>
      {% if site.teaching %}
        {% assign categorized_courses = site.teaching | where: "category", category %}
        {% assign sorted_courses = categorized_courses | sort: "importance" %}
        <!-- Generate cards for each project -->
        {% if page.horizontal %}
          <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
              {% for project in sorted_courses %}
                {% include projects_horizontal.liquid %}
              {% endfor %}
            </div>
          </div>
        {% else %}
          <div class="row row-cols-1 row-cols-md-3">
            {% for project in sorted_courses %}
              {% include projects.liquid %}
            {% endfor %}
          </div>
        {% endif %}
      {% else %}
        <p>No teaching items available in this category.</p>
      {% endif %}
    {% endfor %}
  {% else %}
    <!-- Display projects without categories -->
    {% if site.teaching %}
      {% assign sorted_courses = site.teaching | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for project in sorted_courses %}
              {% include projects_horizontal.liquid %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-3">
          {% for project in sorted_courses %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% else %}
      <p>No hay artículos de enseñanza disponibles.</p>
    {% endif %}
  {% endif %}
</div>
