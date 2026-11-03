import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Single static landing page: no server needed. `next build` emits ./out
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
