import fs from 'fs'
const projects = JSON.parse(fs.readFileSync('static/stuff.json', 'utf8'));
const links = JSON.parse(fs.readFileSync('static/links.json', 'utf8'));

export default function(eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true,
        autoescape: false, // warning: don’t do this!
  });
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.addNunjucksGlobal("projects", projects);
  eleventyConfig.addNunjucksGlobal("links", links);
  eleventyConfig.addNunjucksGlobal("quote", "Simplicity is the ultimate sophistication");
  eleventyConfig.addPassthroughCopy("src/index.js");
  eleventyConfig.addPassthroughCopy("src/style.css");
};

