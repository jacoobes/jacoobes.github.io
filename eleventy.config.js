import fs from 'fs'
const links = JSON.parse(fs.readFileSync('static/links.json', 'utf8'));

export default function(eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true,
        autoescape: false, // warning: don’t do this!
  });


  eleventyConfig.addFilter("padzero", function(value) {
    if (isNaN(value)) return value;
    return value.toString().padStart(2, '0');
  });
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.addNunjucksGlobal("links", links);
  eleventyConfig.addNunjucksGlobal("quote", "Simplicity is the ultimate sophistication");
  eleventyConfig.addPassthroughCopy("src/index.js");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("CNAME");

};

