---
# -----------------------------------------------------------------------------
# Research Page Configuration
# -----------------------------------------------------------------------------
page_id: research # Unique identifier for the page
layout: page # Page layout defined in _layouts/
permalink: /research/ # URL path for the page
title: Investigación # Page title
description: > # Short page description
  Trabajamos en diversas áreas de investigación, como ecología microbiana, genómica, genética de poblaciones y biología de sistemas.
nav_header: true # Set to true to display the page in the header navigation menu
nav_order: 2 # Order of the page in the navigation menu
---

{% assign sorted_topics = site.research | sort: "order" %}
{% for topic in sorted_topics %}
{% include research.liquid topic=topic %}
{% endfor %}
