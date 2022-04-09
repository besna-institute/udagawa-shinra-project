/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/udagawa-shinra-project",
  async rewrites() {
    return [
      {
        source: "/_next",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
