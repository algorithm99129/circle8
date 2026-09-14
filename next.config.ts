import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Turbopack's on-disk compiler cache is off: on this PC a scanner briefly locks new files on the E: drive
    // and the cache fails to initialise ("Failed to open database"). Costs a little compile time, nothing else.
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
