/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "**",
      },
    ],
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

module.exports = nextConfig
