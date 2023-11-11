/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
          port: '',
          pathname: '/images/**',
        },
      ],
    },
  }
//   https://m.media-amazon.com/images/I/81IbT+qBZNL._SX569_.jpg

module.exports = nextConfig
