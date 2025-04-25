module.exports = function(eleventyConfig) {
  // 1) Copy all of your static assets unchanged
  eleventyConfig.addPassthroughCopy("resources");

  // 2) Build your “guides” collection from whatever you have under content/
  eleventyConfig.addCollection("guides", c =>
    c.getFilteredByGlob("content/guides/**/*.md")
     .reverse()
  );

  // 3) Ignore any template‐only folders you might have
  eleventyConfig.ignores.add("_templates");

  // 4) Here’s the critical bit—point Eleventy at the project root:
  return {
    dir: {
      input: ".",            // ← **must** be your repo root
      includes: "_includes", // where your layouts & partials live
      output: "_site"
    }
  };
};