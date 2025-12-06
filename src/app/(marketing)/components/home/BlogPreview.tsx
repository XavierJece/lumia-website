import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Licenciamento Ambiental 2025: O que muda para indústrias?',
    summary:
      'Novas diretrizes da CETESB e órgãos federais exigem maior rigor no controle de efluentes. Saiba como adequar sua planta industrial.',
    image:
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop',
    date: '06 Dez, 2025',
    category: 'Legislação',
  },
  {
    id: 2,
    title: 'Guia Prático de PGRS para Empresas',
    summary:
      'Passo a passo para elaborar o Plano de Gerenciamento de Resíduos Sólidos e evitar multas pesadas na fiscalização.',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    date: '01 Dez, 2025',
    category: 'Gestão',
  },
  {
    id: 3,
    title: 'Segurança Contra Incêndio: AVCB sem mistérios',
    summary:
      'Entenda os principais pontos de atenção na vistoria do Corpo de Bombeiros e como garantir a aprovação do seu projeto.',
    image: '/images/woman_presents_ESG.webp',
    date: '28 Nov, 2025',
    category: 'Segurança',
  },
]

export function BlogPreview() {
  return (
    <section className="py-24 bg-white-essential">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl font-maven">
              Conhecimento Especializado
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Artigos técnicos e atualizações para manter sua empresa em dia.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/blog"
              className="text-primary-green font-semibold hover:text-green-700 flex items-center gap-2 transition-colors"
            >
              Ver todos os artigos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between group h-full"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100 mb-6 shadow-sm transition-shadow group-hover:shadow-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-neutral-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-700 hover:bg-green-100 transition-colors">
                  {post.category}
                </span>
              </div>
              <div className="group relative flex flex-col flex-1">
                <h3 className="mt-3 text-xl font-bold leading-snug text-neutral-900 group-hover:text-primary-green transition-colors font-maven">
                  <Link href={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
                  {post.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
