import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rex-landing",
  images: { unoptimized: true },
};

export default nextConfig;
