import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://kingschoice-website.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/products', '/delivery', '/contact'];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
