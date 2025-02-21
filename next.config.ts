import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,

    async redirects() {
      return [
        {source: '/next/unos',destination: 'https://mrjaz.com',permanent: true,},
      ]
    },

  
};


export default nextConfig;
