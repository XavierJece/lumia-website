import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '~/shared/components/Button/Button'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { glassTokens } from '~/shared/styles/tokens'

export function Hero() {
  const primaryBtn = buttonVariants({ variant: 'primary', size: 'lg' })
  const secondaryBtn = buttonVariants({ variant: 'secondary', size: 'lg' })

  return (
    <section className="relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-green-50/50 to-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] left-[20%] h-[500px] w-[500px] rounded-full bg-green-200/20 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <div
          className={`inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-800 ${glassTokens.shadow}`}
        >
          <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2"></span>
          Consultoria Ambiental Especializada
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl font-maven">
          Consultoria ambiental com{' '}
          <span className="text-green-700">agilidade</span> e compliance total
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Segmentamos a jornada em dois caminhos: <strong>Solve Now</strong>{' '}
          para casos urgentes e <strong>Start Here</strong> para novos projetos.
          Sempre com atendimento direto via WhatsApp.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/servicos/urgente" className={primaryBtn.base()}>
            <MessageCircle className={primaryBtn.icon()} />
            Resolver Agora
          </Link>
          <Link href="/servicos/planejamento" className={secondaryBtn.base()}>
            Começar Projeto
            <ArrowRight className={secondaryBtn.icon()} />
          </Link>
        </div>
      </div>
    </section>
  )
}
