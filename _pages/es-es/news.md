---
# -----------------------------------------------------------------------------
# News Page Configuration
# -----------------------------------------------------------------------------
page_id: news # Unique identifier for the page
layout: page # Page layout defined in _layouts/
permalink: /news/ # URL path for the page
title: Noticias # Page title

# News items are managed as markdown documents inside the `_news/` collection,
# each with its own YAML front matter (title, date, and optional banner or tags).
# They will automatically appear here, sorted by date (newest first).
---

{% include news.liquid %}
