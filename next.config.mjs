/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // ✅ this replaces `next export`
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
