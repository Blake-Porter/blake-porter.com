module.exports = function(eleventyConfig) {
  // 1. Copy static assets
  eleventyConfig.addPassthroughCopy("resources");

  // 2. Copy root HTML so home/about/inspiration/services still live
  eleventyConfig.addPassthroughCopy("index.html");        // home page
  eleventyConfig.addPassthroughCopy("about.html");        // about page
  eleventyConfig.addPassthroughCopy("inspiration.html");  // inspiration
  eleventyConfig.addPassthroughCopy("services.html");     // services

  // 3. Build a “guides” collection from Markdown
  eleventyConfig.addCollection("guides", c =>
    c.getFilteredByGlob("content/**/*.md")
  );

  // 4. Tell Eleventy where to look
  return {
    dir: {
      input:  ".",           // project root
      includes: "_includes", // layouts & partials
      output: "docs"
    }
  };
};