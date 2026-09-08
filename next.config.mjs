/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'miro.medium.com' }]
  },
  // TypeScript 7 has no JS compiler API; use project-local tsc during next build.
  experimental: {
    useTypeScriptCli: true
  }
};

export default nextConfig;
