import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://propertiesinegypt.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // For a single-page landing site, the root URL is sufficient. 
    // Future sub-pages (like /properties/[id] or /about) can be added here.
  ];
}
