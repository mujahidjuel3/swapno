import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns:  [
      {
        protocol: 'https',
        hostname:"d2t8nl1y0ie1km.cloudfront.net"},
        {
          protocol: 'https',
          hostname: 'www.shwapno.com'},
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org'},
            {
              protocol: 'https',
              hostname: 'stock.adobe.com'}
              ],
  },
};

export default nextConfig;
