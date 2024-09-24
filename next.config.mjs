/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API_URL: "http://localhost:3000/api",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
