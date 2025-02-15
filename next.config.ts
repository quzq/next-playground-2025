import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/next-playground-2025",
  assetPrefix: "/next-playground-2025/",
  images: {
    unoptimized: true, // 画像の最適化はオフにする（静的エクスポートの場合）
  },
  /* config options here */
};

export default nextConfig;
