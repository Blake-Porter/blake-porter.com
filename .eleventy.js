module.exports = function(eleventyConfig) {
  // Copy /src/assets/ to /_site/assets/
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    htmlTemplateEngine: "njk"
  };
};
