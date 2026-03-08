import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "drevcael.com" }],
        destination: "https://drevcael.org/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.drevcael.com" }],
        destination: "https://drevcael.org/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.drevcael.org" }],
        destination: "https://drevcael.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
