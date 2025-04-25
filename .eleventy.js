module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("resources");

  eleventyConfig.addCollection("guides", collectionApi => {
    return collectionApi
      .getFilteredByGlob("content/*/*.md")  // catch both features & itineraries
      .reverse();
  });

  eleventyConfig.ignores.add("_templates");

  return {
    dir: {
      input: ".",             // project root
      includes: "_includes",
      output: "_site"
    }
  };
}