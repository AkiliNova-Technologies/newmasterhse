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
      { source: "/case-studies", destination: "/projects", permanent: true },
      { source: "/case-studies/:slug", destination: "/projects", permanent: true },
      { source: "/specialised-services", destination: "/projects", permanent: true },
      { source: "/specialised-services/:slug", destination: "/projects", permanent: true },
      { source: "/podcast", destination: "/podcasts", permanent: true },
      { source: "/institute-of-health-and-safety", destination: "/programmes/institute", permanent: true },
      { source: "/institute", destination: "/programmes/institute", permanent: true },
    ];
  },
};

export default nextConfig;
