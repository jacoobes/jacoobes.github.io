import fs from 'fs'
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  // Optimize all <img> tags in rendered HTML into responsive <picture> markup.
  // See https://www.11ty.dev/docs/plugins/image/
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // Output image formats
    formats: ["avif", "webp", "jpeg"],

    // Output widths (in pixels). Aspect ratio is preserved.
    // "auto" keeps the original width so retina screens get full-res pixels.
    widths: [320, 640, 960, 1280, "auto"],

    // Sharp's AVIF default (q50) smears text and pixel-art edges in screenshots.
    sharpAvifOptions: { quality: 80 },

    // Default attributes applied to every <img> (per-image markup overrides these)
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
        sizes: "(max-width: 48rem) calc(100vw - 2em), 80ch",
      },
      pictureAttributes: {},
    },
  });

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
  eleventyConfig.addNunjucksGlobal("quote", "Simplicity is the ultimate sophistication");
  eleventyConfig.addPassthroughCopy("src/index.js");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("CNAME");

};

