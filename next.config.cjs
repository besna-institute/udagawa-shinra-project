/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const nextConfig = {
  reactStrictMode: true,
};
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        removeOriginalExtension: true,
        responsive: {
          adapter: require("responsive-loader/sharp"),
          sizes: [640, 960, 1200, 1800],
        },
      },
    ],
  ],
  nextConfig
);
