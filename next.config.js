/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net", "i.ibb.co"],
  },
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports = withBundleAnalyzer(nextConfig)
