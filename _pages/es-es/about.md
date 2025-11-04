---
# -----------------------------------------------------------------------------
# About Page Configuration
# -----------------------------------------------------------------------------
page_id: about # Unique identifier for the page
layout: about # Page layout defined in _layouts/about.liquid
permalink: / # URL path for the page
title: Inicio # Page title
banner: bcem_logo_long_es.png # Banner image displayed at the top of the page. File should be at assets/img/logopic
# subtitle: <a href="https://cienciasbiologicas.uniandes.edu.co">Biological Sciences Department</a>, <a href="https://uniandes.edu.co/">Universidad de los Andes</a> <span class="fi fi-co"></span>                  # Page subtitle
# affiliation_logo: los_andes_logo.png    # logo to show below the subtitle. File should be at assets/img/logopic

# -----------------------------------------------------------------------------
# Recruitment Callout
# -----------------------------------------------------------------------------
# Used to display hiring announcements or open positions on the homepage.
# If empty, no callout will be displayed.
# Each item links to a full announcement in the "news" collection.
recruitment_callout: # Several items can be included
  - position_available: Posición doctoral en análisis genómicos y transcriptómicos para elucidar mecanismos de regulación de proteínas Moonlighting en patógenos bacterianos (enfoque One Health)
    announcement_page: news/announcement_4
  # - position_available:
  #   announcement_page:

# -----------------------------------------------------------------------------
# Language Switch Message
# -----------------------------------------------------------------------------
other_lang:
  include: true # Enables language switch message
  message: Check our website in # Message to display
  name: English # Display name of the alternative language
  url: # URL of the translated version of this page (empty for default language)

# -----------------------------------------------------------------------------
# Home Page Slider
# -----------------------------------------------------------------------------
# Images displayed in a slideshow carousel on the homepage.
# Provide paths relative to `assets/img/`.
# If empty, no image will be displayed.
# If only one image, it just displays a static image
homeslides:
  - img: homeslides/DSC_1551.jpg
  # - img:

# -----------------------------------------------------------------------------
# Content Modules
# -----------------------------------------------------------------------------
# Activate or deactivate different choices of content modules in the Home page
social: true # Show social media icons defined in `_config.yml`
news: true # Display list of recent news items
latest_posts: false # Display recent blog posts (if blogging enabled)
selected_papers: false # Display publications flagged as selected={true}
affiliations: true # Display institutional affiliations defined at _data/collaborators.yml
collaborators: true # Display list of collaborators on the page defined at _data/affiliations_and_sponsors.yml
---

Bienvenid@ a la página de inicio del Grupo de Investigación en Biología Computacional y Ecología Microbiana (BCEM) de la Universidad de los Andes, Bogotá, Colombia. [Somos]({{ site.url }}{{ site.baseurl }}/team) un grupo multidisciplinar implicado en el desarrollo de la biología computacional. Trabajamos en diversas áreas de investigación como la ecología microbiana, la genómica, la genética de poblaciones y la biología de sistemas.

El BCEM es un grupo de investigación basado en principios de excelencia y rigor científico, que garantiza una investigación científica de alta calidad. Nuestros miembros se caracterizan por su pasión y curiosidad científica, así como por su alto nivel de compromiso y disciplina. Como investigadores nos basamos en el respeto mutuo, partiendo de un principio de empatía y solidaridad con el otro, reconociéndonos en nuestra singularidad, es decir, en la diferencia, lo que implica respeto y búsqueda de equidad.

[He]({{ site.url }}{{ site.baseurl }}/research) aquí una descripción más detallada de nuestros intereses de investigación.
