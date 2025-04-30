const _ = require("lodash");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // 1. URL-encode filter for all templates
  eleventyConfig.addFilter("url_encode", str => encodeURIComponent(str || ""));
  eleventyConfig.addNunjucksFilter("url_encode", eleventyConfig.getFilter("url_encode"));

  // 1.5 Allow Object.keys in Nunjucks
  eleventyConfig.addFilter("keys", obj => {
    if(!obj || typeof obj !== "object") return [];
    return Object.keys(obj);
  });


  // 2. Copy static assets
  eleventyConfig.addPassthroughCopy("resources");

  // 3. Copy root HTML pages
  ["index.html", "about.html", "inspiration.html", "services.html"].forEach(page => {
    eleventyConfig.addPassthroughCopy(page);
  });

  // 4. Responsive image shortcode
  eleventyConfig.addAsyncShortcode("responsiveImage", async (src, alt, sizes = "100vw") => {
    let metadata = await Image(src, {
      widths: [400, 800, 1200, 1600],
      formats: ["avif", "jpeg"],
      outputDir: "./docs/images/",
      urlPath: "/images/"
    });
    let attrs = { alt, sizes, loading: "lazy", decoding: "async" };
    return Image.generateHTML(metadata, attrs);
  });

  // 5. Guides collection
  eleventyConfig.addCollection("guides", collection =>
    collection.getFilteredByGlob("content/**/*.md")
  );

  // 6. Directory configuration
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "docs"
    }
  };
};