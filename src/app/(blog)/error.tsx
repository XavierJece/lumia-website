'use client'

import { useEffect } from 'react'

export default function BlogError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error('Erro ao carregar o blog', error)
  }, [error])

  return (
    <main className="bg-white-essential">
      <section className="container mx-auto px-6 pb-16 pt-14 text-center lg:px-8">
        <h1 className="text-2xl font-bold text-neutral-900">Algo deu errado</h1>
        <p className="mt-3 text-neutral-700">
          Não conseguimos carregar os artigos agora. Tente novamente em
          instantes.
        </p>
        <a
          href="/blog"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Recarregar
        </a>
      </section>
    </main>
  )
}
