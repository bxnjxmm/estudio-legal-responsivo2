import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.dominio}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.dominio}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((p) => ({ url: `${site.dominio}/blog/${p.slug}`, lastModified: p.fechaISO, changeFrequency: 'yearly' as const, priority: 0.6 }))
  ];
}
