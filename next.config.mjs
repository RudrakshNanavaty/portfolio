/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-icons'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
