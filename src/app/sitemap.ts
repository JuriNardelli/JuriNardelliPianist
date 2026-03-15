import type { MetadataRoute } from "next";

const blogSlugs = [
  "why-adults-make-better-piano-students",
  "online-piano-lessons-skeptic-convert",
  "how-to-practice-piano-efficiently",
  "what-to-look-for-in-a-piano-teacher",
  "five-pieces-every-adult-beginner-should-learn",
  "why-chopin-is-perfect-for-adult-learners",
  "best-setup-for-online-piano-lessons",
  "best-software-and-apps-for-piano-students",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jurinardelli.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/biography`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/academy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
