module.exports = function(eleventyConfig) {
  // Copy everything under src/assets/ into _site/assets/
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",      // your content folder
      includes: "_includes", // where your layouts/partials live
      output: "_site"    // build folder
    }
  };
};
