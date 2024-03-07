/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      os: false,
      path: false,
      crypto: false,
    }
    return config
  },
  transpilePackages: [
    'blockchain-helper',
  ],
}

export default nextConfig