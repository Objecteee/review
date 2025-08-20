import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"gips3.baidu.com",
      }
    ],
  },
};

export default nextConfig;
