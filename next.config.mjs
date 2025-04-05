/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            { 
                hostname: "utfs.io",
            },
        ],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: false,
      },
};

export default nextConfig;
