---
# -----------------------------------------------------------------------------
# Teaching Page Configuration
# -----------------------------------------------------------------------------
page_id: teaching # Unique identifier for the page
layout: page # Page layout defined in _layouts/
title: Teaching # URL path for the page
permalink: /teaching/ # Page title
description: > # Short page description
  Courses and programs taught by the group
nav_header: true # Set to true to display the page in the header navigation menu
nav_order: 6 # Order of the page in the navigation menu

# -----------------------------------------------------------------------------
# Courses Layout
# -----------------------------------------------------------------------------
# The following section controls how teaching content is grouped and displayed.
# Each category corresponds to a tag entry each file under _teaching/ must have
# to ve displayed and can be used for filtering or section headers on the page.
display_categories:
  - id: graduate
    description: Graduate level courses and programs
  - id: undergraduate
    description: Undergraduate level courses and programs
  - id: cabana
    description: CABANA specific courses and programs
  - id: extension
    description: Extension courses and programs
horizontal: false # defines whether categories are arranged horizontally or vertically
---

{% include teaching.liquid %}
