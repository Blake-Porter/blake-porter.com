module.exports = function(eleventyConfig) {
  // 1. Copy static assets
  eleventyConfig.addPassthroughCopy("resources");

  // 2. Copy all root HTML so home/about/inspiration/services still live
  eleventyConfig.addPassthroughCopy("*.html");

  // 3. Build a “guides” collection from Markdown
  eleventyConfig.addCollection("guides", c =>
    c.getFilteredByGlob("content/**/*.md")
  );

  // 4. Tell Eleventy where to look
  return {
    dir: {
      input:  ".",           // project root
      includes: "_includes", // layouts & partials
      output: "_site"
    }
  };
};