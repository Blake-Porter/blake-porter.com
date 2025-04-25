module.exports = function(eleventyConfig) {
  // 1) Copy static assets
  eleventyConfig.addPassthroughCopy("resources");

  // 2) Build a "guides" collection from all Markdown under content/guides/
  eleventyConfig.addCollection("guides", collectionApi => {
    return collectionApi.getFilteredByGlob("content/guides/**/*.md").reverse();
  });

  // 3) Ignore your templates folder so Eleventy never tries to build skeleton.md
  eleventyConfig.ignores.add("_templates");

  // 4) Return your directory structure
  return {
    dir: {
      input: ".",            // project root (so it sees guides.html, content/, etc.)
      includes: "_includes", // your Eleventy layouts/partials
      output: "_site"        // built site goes here
    }
  };
};