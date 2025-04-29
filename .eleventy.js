const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // 1. Copy static assets
  eleventyConfig.addPassthroughCopy("resources");

  // 2. Copy root pages
  ["index.html", "about.html", "inspiration.html", "services.html"].forEach(page => {
    eleventyConfig.addPassthroughCopy(page);
  });

  // 3. Responsive image shortcode for all template types
  eleventyConfig.addAsyncShortcode("responsiveImage", async (src, alt, sizes = "100vw") => {
    let metadata = await Image(src, {
      widths: [400, 800, 1200, 1600],
      formats: ["avif", "jpeg"],
      outputDir: "./docs/images/",
      urlPath: "/images/"
    });
    let imageAttrs = { alt, sizes, loading: "lazy", decoding: "async" };
    return Image.generateHTML(metadata, imageAttrs);
  });

  // 4. Build a "guides" collection from Markdown
  eleventyConfig.addCollection("guides", c =>
    c.getFilteredByGlob("content/**/*.md")
  );

  // 5. Directory configuration
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "docs"
    }
  };
};