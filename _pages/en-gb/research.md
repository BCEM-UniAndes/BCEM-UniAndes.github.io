---
page_id: research
layout: page
permalink: /research/
title: Research
description: We work in diverse research areas such as microbial ecology, genomics, population genetics and systems biology.
nav: true
nav_order: 2
---

{% assign sorted_topics = site.research | sort: "order" %}
{% for topic in sorted_topics %}
  {% include research.liquid topic=topic %}
{% endfor %}