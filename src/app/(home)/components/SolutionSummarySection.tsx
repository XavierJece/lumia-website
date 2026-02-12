'use client'

import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button } from '~/shared/components/atoms/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '~/shared/components/atoms/ui/carousel'
import { solutionsCategoryContent } from '~/shared/data/solutionContent'

export function CarouselView() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const solutionsCategoryContentMobile = solutionsCategoryContent.slice(0, 4)

  return (
    <>
      {/* Mobile: vertical grid of 2 columns */}
      <div className="flex flex-wrap gap-3 sm:hidden">
        {solutionsCategoryContentMobile.map((category) => (
          <Link
            key={category.title}
            href={`/solutions?c=${category.slug}`}
            className="block bg-card p-4 rounded-xl shadow-soft border border-border group transition-all duration-300 hover:border-primary/30"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
              <category.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
              {category.title}
            </h3>{' '}
            <ReactMarkdown
              components={{
                p: ({ _, ...props }) => (
                  <p
                    className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1 mb-3"
                    {...props}
                  />
                ),
              }}
            >
              {category.description.split('\n\n')[0]}
            </ReactMarkdown>
          </Link>
        ))}
      </div>

      {/* Desktop/Tablet: carousel */}

      <div className="hidden sm:block relative">
        {/* Sombra esquerda sutil */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none rounded-l-xl" />
        {/* Sombra direita sutil */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none rounded-r-xl" />
        <Carousel
          setApi={setApi}
          opts={{
            align: 'center',
            loop: true,
            dragFree: false,
          }}
          plugins={[
            Autoplay({
              delay: 1200,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="py-1">
            {solutionsCategoryContent.map((category) => (
              <CarouselItem
                key={category.title}
                className="pl-3 basis-[40%] md:basis-[30%] lg:basis-[23%]"
              >
                <Link
                  href={`/solutions?c=${category.slug}`}
                  className="block bg-card p-6 rounded-xl shadow-soft hover-lift border border-border group h-full transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <ReactMarkdown
                    components={{
                      p: ({ _, ...props }) => (
                        <p
                          className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1 mb-3"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {category.description.split('\n\n')[0]}
                  </ReactMarkdown>

                  <span className="flex-shrink-0 flex items-center text-primary font-semibold text-sm">
                    Saiba mais
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation: arrows + dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => api?.scrollPrev()}
            className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200"
            aria-label="Anterior"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 h-2 bg-primary'
                    : 'w-2 h-2 bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => api?.scrollNext()}
            className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200"
            aria-label="Próximo"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </>
  )
}

export function GridView() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {solutionsCategoryContent.map((category, index) => (
        <div
          key={category.title}
          className={`bg-card p-6 rounded-xl shadow-soft hover-lift border border-border group stagger-${index + 1}`}
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
            <category.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
            {category.title}
          </h3>
          <ReactMarkdown
            components={{
              p: ({ _, ...props }) => (
                <p
                  className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1 mb-3"
                  {...props}
                />
              ),
            }}
          >
            {category.description.split('\n\n')[0]}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  )
}

export default function SolutionSummarySection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-lumia">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossas Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Soluções Completas para sua Empresa!
          </h2>
          <p className="text-muted-foreground">
            Oferecemos um pacote completo de serviços personalizados para
            conformidade e liberação do empreendimento.
          </p>
        </div>

        {/* <GridView /> */}
        <CarouselView />

        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link href="/solutions">
              Ver Todos as Soluções
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
