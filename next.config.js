/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com", "i.scdn.co", "i.ytimg.com"],
  },
  experimental: {
    fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
  },
};

require("dotenv").config();
