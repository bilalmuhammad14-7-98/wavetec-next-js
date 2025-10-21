/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // static export for Surge
  images: { unoptimized: true }, // make next/image static
  trailingSlash: true, // helps static hosts
  eslint: { ignoreDuringBuilds: true }, // quick unblock; optional
  async rewrites() {
    return [
      {
        source: '/api/wp/:path*',
        destination: 'https://staging.wavetec.com/wp-json/:path*', // proxy to WordPress
      },
    ];
  },
};
export default nextConfig;
