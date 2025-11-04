---
# -----------------------------------------------------------------------------
# Join Us Page Configuration
# -----------------------------------------------------------------------------
page_id: join # Unique identifier for the page
layout: page # Page layout defined in _layouts/
permalink: /join/ # URL path for the page
title: Join us # Page title
description: # Short page description
nav_header: false # Set to true to display the page in the header navigation menu
nav_footer: true # Set to true to display the page in the footer navigation menu
nav_order: 2 # Order of the page in the navigation menu

# -----------------------------------------------------------------------------
# Page Content
# -----------------------------------------------------------------------------
join_us:
  # General introductory message at the top of the page.
  overall: >
    Our group brings together members from diverse backgrounds and skill sets who contribute to a highly collaborative and interdisciplinary environment, and we are always welcoming new motivated students and talented researchers at any stage of their careers who wish to join our team.
    <br><br>
    We also encourage prospective members to contact current or former lab members to learn more about our research environment and potential opportunities.

  # Structured descriptions for each recruitment category.
  positions:
    - position: Undergraduate Students
      description: >
        We welcome motivated undergraduate students at any stage of their academic journey. However, we recommend having taken courses with Professor Alejandro and/or in areas relevant to the lab, such as molecular biology, bioinformatics, biostatistics, and microbial ecology.  
        <br><br>
        A great way to get involved is by reaching out to Professor Alejandro asking to join our Lab meetings and Journal clubs. This provides an excellent opportunity to get familiar with our research topics, methodologies, and collaborative work culture.  
        <br><br>
        If you are interested in conducting your undergraduate thesis with our group, please contact Professor Alejandro well in advance—ideally at least one semester before you plan to register your project. This allows time to explore possible research ideas, discuss current opportunities, and ensure a good match between your interests and the lab’s focus.
        <br><br>
        To make our lives easier, please start the email subject line with “<ins>[Undergrad BCEM Lab Application]</ins>”.

    - position: Graduate Students
      description: >
        We are open to recruiting students from the Computational Biology and Biological Sciences programs at Uniandes. Please note that opportunities depend on available funding and project needs.
        <br><br>
        Additionaly, partial or full funding may be available through research or teaching assistantships offered by the School of Graduate Studies or the Department of Biological Sciences.  
        <br><br>
        For spontaneous inquiries, please email Professor Alejandro and include your CV. To make our lives easier, please start the email subject line with “<ins>[Graduate BCEM Lab Application]</ins>”.

    - position: Postdoctoral Scientists
      description: >
        For spontaneous inquiries, please email Professor Alejandro and include your CV. To make our lives easier, please start the email subject line with “<ins>[Postdoc BCEM Lab Application]</ins>”.

  # Optional listings of currently open positions
  # Used to display hiring announcements or open positions on the homepage.
  # Each item links to a full announcement in the "news" collection.
  openings: # Several items can be included
    - position_available: PhD Position on Genomic and Transcriptomic Analysis to Uncover Regulatory Mechanisms of Moonlighting Proteins in Bacterial Pathogens (One Health Framework)
      announcement_page: news/announcement_4
    # - position_available:
    #   announcement_page:
---

# Interested in joining the lab?

{% include join_us.liquid %}
