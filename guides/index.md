---
layout: layout.njk
title: "All Guides"
description: "Browse every travel guide by Blake Porter."
---

<ul class="guide-list">
{% for guide in collections.guides %}
  <li>
    <a href="{{ guide.url }}" class="btn btn-primary">
      {{ guide.data.title }}
      <span class="read-time">({{ guide.data.readTime }})</span>
    </a>
  </li>
{% endfor %}
</ul>