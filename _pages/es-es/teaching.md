---
# -----------------------------------------------------------------------------
# Teaching Page Configuration
# -----------------------------------------------------------------------------
page_id: teaching # Unique identifier for the page
layout: page # Page layout defined in _layouts/
title: Enseñanza # URL path for the page
permalink: /teaching/ # Page title
description: > # Short page description
  Cursos y programas impartidos por el grupo
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
    description: Cursos y programas de nivel de posgrado
  - id: undergraduate
    description: Cursos y programas de nivel de pregrado
  - id: cabana
    description: Cursos y programas específicos de CABANA
  - id: extension
    description: Cursos y programas de extensión
horizontal: true # defines whether categories are arranged horizontally or vertically
---

{% include teaching.liquid %}
