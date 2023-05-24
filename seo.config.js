export default {
  titleTemplate: "%s | holidays",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    // ...
  ],
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#FFFFFF",
    },
    // ...
  ],
  openGraph: {
    type: "website",
    site_name: "holidays",
    images: [{ url: "https://example.com/example_square_image.png" }],
  },
  // Dynamic Values
  title: "Page holidays", // 실제 페이지 제목
  description: "Page Description", // 페이지 설명
};
