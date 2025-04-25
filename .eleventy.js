module.exports = function(eleventyConfig) {
  // Copy everything in `resources/` directly to the output
  eleventyConfig.addPassthroughCopy("resources");

  return {
    dir: {
      input: "guides",    // where your Markdown lives
      output: "_site"     // where Eleventy writes the built site
    }
  };
};

module.exports = function(eleventyConfig) {
  // Copy your CSS/JS as before
  eleventyConfig.addPassthroughCopy("resources");

  // Create a "guides" collection of every Markdown file in guides/
  eleventyConfig.addCollection("guides", collectionApi => {
    return collectionApi.getFilteredByGlob("guides/*.md");
  });

  return {
    dir: {
      input: "guides",
      output: "_site"
    }
  };
};