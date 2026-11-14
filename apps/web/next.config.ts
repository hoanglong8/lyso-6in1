import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@lyso/calendar-vn", "@lyso/engine-bazi", "@lyso/engine-tuvi", "@lyso/engine-kinhdich", "@lyso/engine-lucnham", "@lyso/engine-kymon", "@lyso/engine-thaiat", "@lyso/luan-co-ban", "@lyso/van-su"],
};

export default nextConfig;
