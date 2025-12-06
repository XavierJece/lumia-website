import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '~/shared/components/Button/Button'
import { ArrowRight } from 'lucide-react'

// Placeholder logos or names
const clients = [
  { name: 'Empresa A', logo: '/api/placeholder/150/50' },
  { name: 'Empresa B', logo: '/api/placeholder/150/50' },
  { name: 'Empresa C', logo: '/api/placeholder/150/50' },
  { name: 'Empresa D', logo: '/api/placeholder/150/50' },
  { name: 'Empresa E', logo: '/api/placeholder/150/50' },
]

export function SocialProof() {
  const btnStyles = buttonVariants({ variant: 'secondary' })

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 font-maven">
              Confiança construída com grandes resultados
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Atuamos lado a lado com empresas que prezam pela segurança
              jurídica e ambiental. Nossa expertise garante que seu foco
              permaneça no crescimento do negócio.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Link href="/portfolio" className={btnStyles.base()}>
                Ver Cases de Sucesso
                <ArrowRight className={`h-4 w-4 ${btnStyles.icon()}`} />
              </Link>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {/* Since we don't have real logos yet, we use text placeholders styled as logos */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 grayscale opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="h-12 w-32 bg-neutral-200 rounded animate-pulse flex items-center justify-center text-neutral-400 font-bold">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
