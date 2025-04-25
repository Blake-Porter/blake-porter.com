module.exports = function(eleventyConfig) {
  // Pass through all of your static assets
  eleventyConfig.addPassthroughCopy("resources");

  // Build a "guides" collection from everything in /guides/**/*.md
  eleventyConfig.addCollection("guides", collectionApi => {
    return collectionApi.getFilteredByGlob("guides/**/*.md").reverse();
  });

  return {
    dir: {
      input: ".",            // root of project
      includes: "_includes", // where layout.njk & guide.njk live
      output: "_site"
    }
  };
};