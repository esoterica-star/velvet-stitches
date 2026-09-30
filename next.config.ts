import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Our placeholder product art is SVG. Safe here because we serve only our
    // own local files — remove once real photos (jpg/webp) replace them.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
