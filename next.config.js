/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => { // necessary to avoid weird walletconnect dependency errors
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
}

module.exports = nextConfig
