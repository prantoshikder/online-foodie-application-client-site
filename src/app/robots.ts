import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://foodie-online.vercel.app/sitemap.xml",
    host: "https://foodie-online.vercel.app",
  };
}
