import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/case-studies", destination: "/specialised-services", permanent: true },
      {
        source: "/case-studies/:slug",
        destination: "/specialised-services/:slug",
        permanent: true,
      },
      { source: "/podcast", destination: "/podcasts", permanent: true },
      {
        source: "/institute-of-health-and-safety",
        destination: "/institute",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
