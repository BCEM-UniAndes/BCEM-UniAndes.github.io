---
page_id: team
layout: page
permalink: /team/
title: Team
description:
nav: true
nav_order: 1
# display_categories: [Group Leader, Research Staff, Graduate Students, Undergraduate Students]
display_categories: [Group Leader, Graduate Students, Undergraduate Students]
---

<div class="team">

  {% for category in page.display_categories %}
    <h2 class="category">{{ category }}</h2>

    {% assign categorized_people = site.team | where: "display_category", category %}
    {% assign active_team = categorized_people | where_exp: "m", "m.ended == nil" | sort: "started" %}
    {% assign number_printed = 0 %}

    {% for member in active_team %}
      {% assign mod = number_printed | modulo: 3 %}
      {% if mod == 0 %}<div class="row mb-3">{% endif %}

      {% include team_member.liquid member=member %}

      {% assign number_printed = number_printed | plus: 1 %}
      {% if mod == 2 %}</div>{% endif %}
    {% endfor %}

    {% if number_printed > 0 and number_printed | modulo: 3 != 0 %}
      </div>
    {% endif %}

  {% endfor %}
</div>

<p>&nbsp;</p>

---

## Past members

<div class="row">
  {% assign past_team = site.team | where_exp: "m", "m.ended" | sort: "ended" | reverse %}
  {% for member in past_team %}
    <div class="col-md-6 mb-3">
      {% include former_team_member.liquid member=member %}
    </div>
  {% endfor %}
</div>
