import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: "asset/source",
    });
    return config;
  },
  turbopack: {
    rules: {
      "*.{glsl,vs,fs,vert,frag}": {
        type: "raw",
      },
    },
  },
};

export default nextConfig;
