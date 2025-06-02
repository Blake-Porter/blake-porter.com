module.exports = function(eleventyConfig) {
  // 1) Simple "keys" filter (if you still need it)
  eleventyConfig.addFilter("keys", (obj) => {
    if (!obj || typeof obj !== "object") return [];
    return Object.keys(obj);
  });

  // 2) Copy your static assets as before
  eleventyConfig.addPassthroughCopy("src/assets");

  // 3) Define a "guides" collection for every Markdown file under src/content
  eleventyConfig.addCollection("guides", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/content/**/*.md")
      .sort((a, b) => {
        // Optional: sort by date (newest first)
        return b.date - a.date;
      });
  });

  return {
    dir: {
      input: "src",        // everything under "src/" is processed
      includes: "_includes",
      output: "_site"
    }
  };
};
