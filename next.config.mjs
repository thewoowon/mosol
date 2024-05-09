/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
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
        hostname: "devapi.tikitaka.chat",
        port: "",
        pathname: "/result/image/**/*",
      },
    ],
  },
};

export default nextConfig;
