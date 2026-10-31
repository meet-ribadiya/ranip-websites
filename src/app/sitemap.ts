import type { MetadataRoute } from "next";

const siteUrl = "https://ssisranip.com";
const paths = ["", "/about-us", "/academics", "/gallery", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
