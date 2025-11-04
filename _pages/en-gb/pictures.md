---
# -----------------------------------------------------------------------------
# Pics Page Configuration
# -----------------------------------------------------------------------------
page_id: pics # Unique identifier for the page
layout: page # Page layout defined in _layouts/
permalink: /pics/ # URL path for the page
title: Pics # Page title
description: # Short page description
nav_header: true # Set to true to display the page in the header navigation menu
nav_order: 7 # Order of the page in the navigation menu
---

<!-- Carousel section: This displays a rotating slider of selected images controlled by data in: _data/pictures_gens.yml Useful for highlighting milestone events or timeline visuals. -->

## BCEM along the years

{% include carousel.liquid slides=site.data.pictures_gens %}

<!-- Gallery section: This renders an image gallery — typically pulling from _pics/ collection or defined image sets — showcasing social events and outdoor activities. -->

## BCEM outside the lab!

{% include gallery.liquid %}
