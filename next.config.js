/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apimeme.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    APP_HOST: process.env.APP_HOST,
  },
};

module.exports = nextConfig;
