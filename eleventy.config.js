import fs from 'fs'
const projects = JSON.parse(fs.readFileSync('static/stuff.json', 'utf8'));

export default function(eleventyConfig) {
  console.log(eleventyConfig)
  eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true,
        autoescape: false, // warning: don’t do this!
  });
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.addNunjucksGlobal("projects", projects);
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("index.js");
  eleventyConfig.addPassthroughCopy("github-mark.svg");
};

