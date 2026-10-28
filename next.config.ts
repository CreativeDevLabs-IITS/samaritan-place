import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS into ./dist,
  // so the domain's web root can point straight at that folder.
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  // Each page is written as page/index.html, so any static host (and the Nginx setup) can serve it.
  trailingSlash: true,
};

export default nextConfig;
