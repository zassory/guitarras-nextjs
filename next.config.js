/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,  
  images: {
    formats: ['image/avif','image/webp'],
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig
