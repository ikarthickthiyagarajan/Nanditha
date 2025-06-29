/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Removed experimental optimiseCss flag – Vercel already does CSS optimisation and it
  // pulls in the optional “critters” package which caused the build to fail.
}

export default nextConfig
