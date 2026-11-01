/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [] },
  async redirects() {
    return [
      { source: '/products/tradeflow-erp', destination: '/tradeflow', permanent: true }
    ];
  }
};
export default nextConfig;
