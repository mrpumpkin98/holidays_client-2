export default {
  titleTemplate: "%s | holidays",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/appIcons/icon-192x192.png",
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
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    // ...
  ],
  openGraph: {
    type: "website",
    site_name: "holidays",
    images: [{ url: "https://example.com/example_square_image.png123123123" }],
  },
  // Dynamic Values
  title: "Page holidays", // 실제 페이지 제목
  description: "Page Description", // 페이지 설명
};
