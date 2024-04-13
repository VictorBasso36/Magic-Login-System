/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
          port: "",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  