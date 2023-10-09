const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.scdn.co"],
  },
  redirects: async () => {
    return [
      {
        source: "/to/youtube-translations",
        destination: "https://youtube.com/playlist?list=PL4EITLGzp8_NYyi37SmIqDQPZPA70Ta6M",
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
