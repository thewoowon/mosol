/** @type {import('next').NextConfig} */
import pkg from "./next-i18next.config.js";
const { i18n } = pkg;
// next.config.js
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  i18n,
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ko",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/en/:path*",
        destination: "/:path*",
      },
      {
        source: "/ko/:path*",
        destination: "/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        port: "",
        pathname: "/6qzLODAqs2g1LZbVYqtuQw/**/*",
      },
      {
        protocol: "https",
        hostname: "k.kakaocdn.net",
        port: "",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "stonslabdata.com",
        port: "",
        pathname: "/result/image/**/*",
      },
    ],
  },
};

export default nextConfig;
