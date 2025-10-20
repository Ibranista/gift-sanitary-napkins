/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use Next.js image optimization (default). Remove `unoptimized: true` so
  // Next can serve WebP/AVIF and properly sized images for LCP improvements.
};

export default nextConfig;
