import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/QChBwbDDVU",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "karaoke-now.vietbrosinaus.com" }],
        destination: "https://www.karaokenow.co/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
