/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/contact-us",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
