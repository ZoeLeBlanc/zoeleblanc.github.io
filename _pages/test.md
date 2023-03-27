<!-- ---
layout: page
title: test
permalink: /test/
description: A growing collection of your cool projects.
nav: true
nav_order: 2
display_categories: [work, fun]
horizontal: false
---

<!-- Add code for category selection -->
<!-- <div class="category-select">
  <label for="category-dropdown">Select a category:</label>
  <select id="category-dropdown">
    <option value="all">All categories</option>
    {% for category in page.display_categories %}
      <option value="{{ category }}">{{ category }}</option>
    {% endfor %}
  </select>
</div>

<div class="projects"> -->
  <!-- Display projects -->
  <!-- {% assign sorted_projects = site.projects | sort: "importance" -%}
  {% if page.horizontal -%}
    <div class="container">
      <div class="row row-cols-2">
        {% for project in sorted_projects -%}
          {% include projects_horizontal.html %}
        {% endfor %}
      </div>
    </div>
  {% else -%}
    <div class="grid">
      {% for project in sorted_projects -%}
        {% include projects.html %}
      {% endfor %}
    </div>
  {% endif -%}
</div> -->

<!-- Add JavaScript/jQuery code to filter projects -->
<!-- <script>
$(document).ready(function() {
  $('.grid').find('.grid-item').each(function() {
      let chips = $(this).find('.project-category-chip');
      chips.each(function() {
        console.log($(this).text());
      });
  });
  $('#category-dropdown').on('change', function() {
    var selectedCategory = $(this).val();
    console.log(selectedCategory);
    if (selectedCategory === 'all') {
      $('.grid-item').show();
    } else {
      $('.grid-item').each(function() {
        var projectCategories = $(this).data('categories');
        let chips = $(this).find('.project-category-chip');
        chips.each(function() {
          console.log($(this).text().trim(), selectedCategory, $(this).text().trim() === selectedCategory);
        });
        let filtered_chips = chips.filter(function() {
          if ($(this).text().trim() === selectedCategory) {
            return true;
          } else {
            return false;
          }
        });
        console.log(filtered_chips);
        // if ($.inArray(selectedCategory, projectCategories) !== -1) {
        //   $(this).show();
        // } else {
        //   $(this).hide();
        // }
      });
    }
  });
});



</script> -->
