import type { MetadataRoute } from "next";
import { getAllAlbumSlugs } from "@/data/gallery";

const siteUrl = "https://ssisranip.com";
const staticPaths = [
  "",
  "/about-us",
  "/academics",
  "/gallery",
  "/careers",
  "/contact",
  "/privacy-policy",
  "/term-condition",
  "/refund-cancellation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const albumPaths = getAllAlbumSlugs().map((slug) => `/gallery/${slug}`);
  const allPaths = [...staticPaths, ...albumPaths];

  return allPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
