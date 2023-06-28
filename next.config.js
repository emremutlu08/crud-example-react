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
};

module.exports = nextConfig;
