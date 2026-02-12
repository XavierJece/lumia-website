import { ArrowLeft } from 'lucide-react'
import { Badge } from '~/shared/components/atoms/ui/badge'
import { Link } from '~/shared/components/atoms/ui/link'
import {
  ISolutionCategoryContent,
  ISolutionServiceContent,
} from '~/shared/data/solutionContent'

import ReactMarkdown from 'react-markdown'

interface IHeroSection {
  category: Pick<ISolutionCategoryContent, 'quickLinks' | 'icon'>
  solution: Pick<ISolutionServiceContent, 'title' | 'icon' | 'subtitle'>
}

export function HeroSection({ category, solution }: IHeroSection) {
  return (
    <section className="gradient-hero section-padding">
      <div className="container-lumia">
        {/* Breadcrumb */}
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Voltar para Soluções
        </Link>

        <div className="max-w-3xl">
          <Badge className="bg-accent/20 text-accent text-sm mb-6">
            <category.icon className="mr-2" size={20} />
            {category.quickLinks}
          </Badge>
          <h1 className="flex items-center text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            {solution.title}
          </h1>

          <ReactMarkdown
            components={{
              p: ({ _, ...props }) => (
                <p
                  className="text-xl text-primary-foreground/80 leading-relaxed"
                  {...props}
                />
              ),
            }}
          >
            {solution.subtitle || 'Add Subtitle'}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  )
}
