---
layout: layout.njk
title: "All Guides"
description: "Browse every travel guide by Blake Porter."
---

<ul>
{% for guide in collections.guides %}
  <li>
    <a href="{{ guide.url }}">
      {{ guide.data.title }} 
      <span class="read-time">({{ guide.data.readTime }})</span>
    </a>
  </li>
{% endfor %}
</ul>