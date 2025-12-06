import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '~/shared/components/Button/Button'
import { ArrowRight, Quote } from 'lucide-react'
import { GlassCard } from '~/shared/components/ui/GlassCard'

// More realistic sectors/clients based on research
const sectors = [
  'Indústria Metalúrgica',
  'Hospitais e Clínicas',
  'Logística e Transportes',
  'Construção Civil',
  'Postos de Combustível',
  'Indústria Alimentícia',
]

const testimonials = [
  {
    id: 1,
    content:
      'A Lumia transformou nossa gestão ambiental. O processo de licenciamento que estava travado há meses foi resolvido com agilidade e transparência.',
    author: 'Roberto Almeida',
    role: 'Diretor Industrial',
    company: 'Metalúrgica TechSteel',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop',
  },
  {
    id: 2,
    content:
      'Excelente suporte técnico na renovação do AVCB e nas adequações sanitárias. A equipe nos passa muita segurança jurídica.',
    author: 'Fernanda Costa',
    role: 'Gerente Administrativa',
    company: 'Rede Saúde Vital',
    image:
      'https://images.unsplash.com/photo-1573496359-7970941941bf?q=80&w=100&auto=format&fit=crop',
  },
]

export function Clients() {
  const btnStyles = buttonVariants({ variant: 'secondary' })

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl font-maven">
            Parceria de Confiança
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Resultados consistentes para empresas que não abrem mão da
            qualidade.
          </p>
        </div>

        {/* Sectors Grid - Replaced grayscale/opacity with clean cards for visibility */}
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-6 gap-y-6 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-6 mb-24">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <span className="text-sm font-semibold text-neutral-700 text-center leading-tight">
                {sector}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <GlassCard
              key={testimonial.id}
              padding="lg"
              className="flex flex-col justify-between h-full"
            >
              <div className="flex gap-4 mb-6">
                <Quote className="h-10 w-10 text-primary-green/20 flex-shrink-0" />
                <p className="text-lg leading-relaxed text-neutral-700 italic">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
              <div className="flex items-center gap-x-4 mt-auto border-t border-neutral-100 pt-6">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-neutral-200 ring-2 ring-white">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm font-medium text-neutral-500">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/portfolio" className={btnStyles.base()}>
            Ver Portfolio Completo
            <ArrowRight className={btnStyles.icon()} />
          </Link>
        </div>
      </div>
    </section>
  )
}
