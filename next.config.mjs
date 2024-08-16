/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/operations/textcomparer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
