module.exports = function (eleventyConfig) {
  // Copy your CSS, JS, images, etc.
  eleventyConfig.addPassthroughCopy("resources");

  // Custom collection: all .md files in /content/guides and subfolders
  eleventyConfig.addCollection("guides", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/guides/**/*.md").reverse();
  });

  return {
    dir: {
      input: ".",            // use the root of the project
      includes: "_includes", // where your layout.njk and guide.njk live
      output: "_site"
    }
  };
};
