/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig
