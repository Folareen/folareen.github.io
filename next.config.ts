import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves a static file tree — build to ./out instead of
  // running a Node server. This repo is the folareen.github.io user
  // site (served at the domain root), so no basePath is needed.
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
