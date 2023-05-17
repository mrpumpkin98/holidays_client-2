/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "holidays-client",
  swcMinify: true,

  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};

// module.exports = {
//   images: {
//     loader: "imgix",
//     domain: [process.env.CLIENT], // 이미지 도메인
//   },
// };

module.exports = nextConfig;
