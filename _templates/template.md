---
layout: guide.njk
title: "TITLE HERE"
slug: "your-page-slug"                   # URL-friendly identifier
description: "One- or two-sentence summary for previews."
excerpt: "A short teaser text for lists or social shares."
date: YYYY-MM-DD
author: "Blake Porter"
region: "REGION HERE"                    # e.g. "japan", "usa"
city: "CITY OR AREA HERE"                # e.g. "tokyo", "seattle"
category: "itineraries"                  # OR "explore", "tips-gear"
tags:
  - tag1                                 # Keywords for filtering and navigation
  - tag2
readTime: "X min read"
bannerImage: "/resources/images/guides/{{ category }}/{{ slug }}/banner.jpg"
bannerAlt: "Short alt text for the banner image"
estimatedCostYen: 0                      # Input total cost in JPY
season: "spring"                         # OR "summer", "autumn", "winter", "all-year"
canonicalURL: "https://blake-porter.com/guides/{{ slug }}.html"
# Uncomment if you need a flat-file URL:
# permalink: "/guides/{{ slug }}.html"
---

## 🛤 Introduction

Write 2–3 sentences that introduce the topic, location, or context for the reader.

---

## 📍 Quick Facts

- **Region:** REGION  
- **City:** CITY  
- **Best Season:** SEASON  
- **Estimated Cost:** ¥{{ estimatedCostYen }} JPY (~${{ (estimatedCostYen * exchangeRate) | number }} USD)

---

## 🧭 Main Content

> Structure this section depending on the type:

**Itineraries**  
- Day 1 – Activity/Location  
- Day 2 – Activity/Location  
- Day 3 – Activity/Location  

**Explore**  
- Topic 1 (e.g., Best ramen shops)  
- Topic 2 (e.g., Museum highlights)  
- Topic 3 (e.g., Hidden hikes)  

**Tips & Gear**  
- Tip 1 (e.g., Booking hacks)  
- Gear 1 (e.g., Best daypack brands)  

---

## 📷 Gallery (Optional)

Add image callouts if needed:

```markdown
![Alt text](/resources/images/guides/{{ category }}/{{ slug }}/image1.jpg)