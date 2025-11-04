---
# -----------------------------------------------------------------------------
# About Page Configuration
# -----------------------------------------------------------------------------
page_id: about # Unique identifier for the page
layout: about # Page layout defined in _layouts/about.liquid
permalink: / # URL path for the page
title: Home # Page title
banner: bcem_logo_long_en.png # Banner image displayed at the top of the page. File should be at assets/img/logopic
# subtitle: <a href="https://cienciasbiologicas.uniandes.edu.co">Biological Sciences Department</a>, <a href="https://uniandes.edu.co/">Universidad de los Andes</a> <span class="fi fi-co"></span>                    # Page subtitle
# affiliation_logo: los_andes_logo.png      # logo to show below the subtitle. File should be at assets/img/logopic

# -----------------------------------------------------------------------------
# Recruitment Callout
# -----------------------------------------------------------------------------
# Used to display hiring announcements or open positions on the homepage.
# If empty, no callout will be displayed.
# Each item links to a full announcement in the "news" collection.
recruitment_callout: # Several items can be included
  - position_available: PhD Position on Genomic and Transcriptomic Analysis to Uncover Regulation Mechanisms of Moonlighting Proteins in Bacterial Pathogens (One Health Framework)
    announcement_page: news/announcement_4
  # - position_available:
  #   announcement_page:

# -----------------------------------------------------------------------------
# Language Switch Message
# -----------------------------------------------------------------------------
other_lang:
  include: true # Enables language switch message
  message: Visita nuestra página en # Message to display
  name: Español # Display name of the alternative language
  url: /es-es/ # URL of the translated version of this page (empty for default language)

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

Welcome to the homepage of the Research Group on Computational Biology and Microbial Ecology (BCEM) at Universidad de los Andes, Bogotá, Colombia. [We]({{ site.url }}{{ site.baseurl }}/team) are a multidisciplinary group involved in the development of computational biology. We work in diverse research areas such as microbial ecology, genomics, population genetics and systems biology.

The BCEM is a research group based on principles of excellence and scientific rigor, ensuring high-quality scientific research. Our members are characterized by their passion and scientific curiosity, as well as by their high level of commitment and discipline. As researchers we are based on mutual respect, based on a principle of empathy and solidarity with others, recognizing each other in our uniqueness, that is, in the difference, implying respect and the search for equity.

[Here]({{ site.url }}{{ site.baseurl }}/research) is a more detailed description of our research interests.
