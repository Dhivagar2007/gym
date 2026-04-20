const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for GitHub Pages
  basePath: isProd ? "/gym" : "",
  assetPrefix: isProd ? "/gym/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;