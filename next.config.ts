import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY, // 서버용
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // 클라이언트용
  },
};
module.exports = nextConfig;
export default nextConfig;
