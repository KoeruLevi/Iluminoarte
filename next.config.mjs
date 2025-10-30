/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },
  // Export estático (Next 13/14 App Router)
  output: 'export',
  // Necesario si en el futuro usas next/image con export
  images: { unoptimized: true },
};

export default nextConfig;