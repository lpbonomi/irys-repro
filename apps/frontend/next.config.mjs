/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'database',
    'blockchain-helper',
  ],
}

export default nextConfig