---
layout: page
permalink: /teaching/
title: teaching
description: Teaching related materials. Feel free to use these materials in your own courses or workshops.
nav: true
nav_order: 6
display_categories: [Graduate, Undergraduate, Workshop]
horizontal: true
---

<!-- pages/courses.md -->
<div class="courses">
{%- if site.enable_course_categories and page.display_categories %}
  <!-- Display categorized courses -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_courses = site.courses | where: "category", category -%}
  {%- assign sorted_courses = categorized_courses | sort: "importance" %}
  <!-- Generate cards for each course -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for course in sorted_courses -%}
      {% include courses_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for course in sorted_courses -%}
      {% include courses.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display courses without categories -->
  {%- assign sorted_courses = site.courses | sort: "importance" -%}
  <!-- Generate cards for each course -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for course in sorted_courses -%}
      {% include courses_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for course in sorted_courses -%}
      {% include courses.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>



## Older Teaching Experience

### Teaching Assistantships at Vanderbilt University

* *Teaching Assistant, HIST287E: The Federalist Papers, Vanderbilt University, Spring 2015.*
  * Assisted the Chancellor with leading a senior seminar, and was lead instructor for three of the seminars. Responsible for grading and meeting with students.
* *Discussion Section Leader, HIST120: The Arab Spring and Its Contexts, Vanderbilt University, Spring 2014.*
  * Facilitated discussion section and was responsible for grading exams and
papers. Built a [course website](http://arabspringanditscontexts.wordpress.com)  and designed integrated digital activities for the course.
  * Built a twitter reading response assignment and archived tweets on the website.
* *Discussion Section Leader, JS256: Power and Diplomacy in the Middle East, Vanderbilt University, Spring 2013.*
  * Facilitated discussion section and was responsible for grading  exams and papers. Built a course website, available at [https://my.vanderbilt.edu/js256](https://my.vanderbilt.edu/js256).
  * Designed class assignments including: an online field trip to the “King–Crane Commission Archive” at Oberlin College, a digital timeline, and a twitter response assignment.
* *Discussion Section Leader, HIS173: The United States and the Cold War, Vanderbilt University, Fall 2012.*
  * Facilitated discussion and responsible for grading.

### Pedagogical Training at Vanderbilt University

* Vanderbilt Institute for Digital Learning Graduate Fellow 2014-2015
  * Designed and blogged about a series, In Pursuit of Digital Pedagogy, on possible digital tools and methods for higher education
* Certificate in College Teaching Seminar Spring 2015
  * Completed first half of the CFT Certificate in College Teaching
* HASTAC Scholar 2012-3
  * Blooged on digital pedagogy and digital humanities
* Teaching Practicum Fall 2012
  * Completed History Department seminar on college teaching. Included lectures, syllabi, and teaching philosophy. -->
