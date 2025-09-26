/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export for Surge
  images: { unoptimized: true }, // make next/image static
  trailingSlash: true, // helps static hosts
  eslint: { ignoreDuringBuilds: true }, // quick unblock; optional
};
export default nextConfig;
