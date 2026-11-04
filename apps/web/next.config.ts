import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@lyso/calendar-vn", "@lyso/engine-bazi", "@lyso/engine-tuvi"],
};

export default nextConfig;
