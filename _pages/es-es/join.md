---
# -----------------------------------------------------------------------------
# Join Us Page Configuration
# -----------------------------------------------------------------------------
page_id: join # Unique identifier for the page
layout: page # Page layout defined in _layouts/
permalink: /join/ # URL path for the page
title: Únete # Page title
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
    Nuestro grupo reúne miembros con formaciones y habilidades diversas que contribuyen a un entorno altamente colaborativo e interdisciplinario. Siempre estamos interesados en recibir nuevos estudiantes motivados e investigadores talentosos en cualquier etapa de su carrera que deseen unirse a nuestro equipo.  
    <br><br>
    También animamos a los aquellos interesados en formar parte del grupo a contactar a miembros actuales o antiguos para conocer más sobre nuestro entorno de investigación y las oportunidades disponibles.

  # Structured descriptions for each recruitment category.
  positions:
    - position: Estudiantes de pregrado
      description: >
        Damos la bienvenida a estudiantes motivados en cualquier etapa de su formación. Sin embargo, recomendamos haber tomado cursos con el profesor Alejandro y/o en áreas relevantes para el laboratorio, como biología molecular, bioinformática, bioestadística y ecología microbiana.  
        <br><br>
        Una excelente manera de involucrarse es contactando al profesor Alejandro para solicitar participar en nuestras reuniones de laboratorio (*Lab meetings*) y *Journal clubs*. Esto ofrece una gran oportunidad para familiarizarse con nuestros temas de investigación, metodologías y cultura de trabajo colaborativa.  
        <br><br>
        Si estás interesado en realizar tu trabajo de grado con nuestro grupo, te recomendamos ponerte en contacto con el profesor Alejandro con suficiente antelación, idealmente al menos un semestre antes de planear registrarlo, de modo que haya tiempo para explorar posibles ideas de investigación, discutir oportunidades actuales y asegurar una buena correspondencia entre tus intereses y el enfoque del laboratorio.  
        <br><br>
        Para facilitarnos el proceso, por favor inicia el asunto del correo con “<ins>[Undergrad BCEM Lab Application]</ins>”.

    - position: Estudiantes de posgrado
      description: >
        Estamos abiertos a recibir estudiantes de los programas de Biología Computacional y Ciencias Biológicas de la Universidad de los Andes. Ten en cuenta que las oportunidades dependen de la disponibilidad de financiación y de las necesidades de los proyectos.  
        <br><br>
        Adicionalmente, pueden existir oportunidades de financiación parcial o total a través de asistencias de investigación o docencia ofrecidas por la Escuela de Posgrados o el Departamento de Ciencias Biológicas.  
        <br><br>
        Para consultas espontáneas, envía un correo electrónico al profesor Alejandro e incluye tu hoja de vida (CV). Para facilitarnos el proceso, por favor inicia el asunto del correo con “<ins>[Graduate BCEM Lab Application]</ins>”.

    - position: Investigadores posdoctorales
      description: >
        Para consultas espontáneas, envía un correo electrónico al profesor Alejandro e incluye tu hoja de vida (CV). Para facilitarnos el proceso, por favor inicia el asunto del correo con “<ins>[Postdoc BCEM Lab Application]</ins>”.

  # Optional listings of currently open positions
  # Used to display hiring announcements or open positions on the homepage.
  # Each item links to a full announcement in the "news" collection.
  openings: # Several items can be included
    - position_available: Posición de doctorado en Análisis Genómico y Transcriptómico para descubrir los mecanismos regulatorios de proteínas multifuncionales en patógenos bacterianos (Marco One Health)
      announcement_page: news/announcement_4
    # - position_available:
    #   announcement_page:
---

# ¿Interesado en hacer parte del grupo?

{% include join_us.liquid %}
