// .eleventy.js
module.exports = function(eleventyConfig) {
  // 1. Copy your static assets
  eleventyConfig.addPassthroughCopy("resources");

  // 2. Copy all root HTML so your home/about/inspiration/services still live
  eleventyConfig.addPassthroughCopy("*.html");

  // 3. Build a “guides” collection from your Markdown
  eleventyConfig.addCollection("guides", c =>
    c.getFilteredByGlob("content/**/*.md")
  );

  // 4. Ignore any “templates-only” folders you might have
  eleventyConfig.ignores.add("_templates");

  // 5. Tell Eleventy where to look
  return {
    dir: {
      input:  ".",           // project root
      includes: "_includes", // your layouts & partials
      output: "_site"
    }
  };
};