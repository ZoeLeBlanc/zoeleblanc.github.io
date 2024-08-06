---
layout: page
permalink: /coding/
title: coding
description: Coding related materials.
nav: true
nav_order: 4
toc:
  sidebar: left
---

As a digital historian, much of my work involves writing code, whether for teaching or my research. You can find my GitHub profile and some of my most active repositories on this page, as well as my most active organizations. One small note is that for a few years my local GitHub configuration was not correct, so you may come across a ghost Zoe LeBlanc account. I have since fixed this, but it means that some of my commits and activity will not show up on my main account.

## GitHub Profile

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

  ---

{% endfor %}
{% endif %}
{% endif %}

## GitHub Repositories

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## GitHub Organizations

1. Technical Lead for the *Programming Historian* [https://github.com/programminghistorian](https://github.com/programminghistorian)
2. PI of *Informing the Third World* [https://github.com/Informing-The-Third-World](https://github.com/Informing-The-Third-World)
3. Co-PI of *Coding DH* with Jeri Wieringa [https://github.com/CodingDH](https://github.com/CodingDH)
4. Co-PI of *NANReP* with Maurice Labelle, Cindy Ewing, and Heidi Tworek [https://github.com/NANReP](https://github.com/NANReP)
5. Co-PI of *CARTi* with Gabi Kirilloff, John R. Ladd, Matt Lavin, Anna Preus, and Melanie Walsh [https://github.com/CA-Research-and-Teaching](https://github.com/CA-Research-and-Teaching)