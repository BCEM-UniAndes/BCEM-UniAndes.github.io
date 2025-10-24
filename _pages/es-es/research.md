---
page_id: research
layout: page
permalink: /research/
title: Investigación
description: Trabajamos en diversas áreas de investigación, como ecología microbiana, genómica, genética de poblaciones y biología de sistemas.
nav_header: true
nav_order: 2
---

{% assign sorted_topics = site.research | sort: "order" %}
{% for topic in sorted_topics %}
{% include research.liquid topic=topic %}
{% endfor %}
