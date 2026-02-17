import { MetadataRoute } from 'next'
import { solutionsServiceContent } from '~/shared/data/solutionContent'
import { slugFy } from '~/shared/utils/string'

type changeFrequencyType =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL não definida')
  }

  //
  const staticRoutes = [
    { path: '', priority: 1.0, changefreq: 'monthly' as const },
    { path: 'about', priority: 0.6, changefreq: 'monthly' },
    { path: 'contact', priority: 0.5, changefreq: 'yearly' },
    { path: 'projects', priority: 0.7, changefreq: 'weekly' },
    { path: 'solutions', priority: 0.8, changefreq: 'weekly' },
  ].map(({ path, priority, changefreq }) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: changefreq as changeFrequencyType,
    priority,
  }))

  // Rotas dinâmicas de soluções
  const solutions = solutionsServiceContent ?? []
  const solutionRoutes = solutions.map((solution) => ({
    url: `${baseUrl}/solutions/${slugFy(solution.title)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...solutionRoutes]
}
