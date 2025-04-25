module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("resources");

  // Build a "guides" collection from content/guides/**/*.md
  eleventyConfig.addCollection("guides", collectionApi => {
    return collectionApi.getFilteredByGlob("content/guides/**/*.md").reverse();
  });

  return {
    dir: {
      input: ".",             // project root
      includes: "_includes",  // where layout.njk lives
      data: "content",        // optional: if you store global data under /content/_data
      output: "_site"
    }
  };
};