import React from 'react'
import { ClipboardCheck, Lightbulb, Hammer, CheckCircle } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Diagnóstico',
    description:
      'Analisamos a situação atual da sua empresa e identificamos todas as necessidades legais.',
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: 'Planejamento',
    description:
      'Definimos a melhor estratégia e cronograma para regularização com menor impacto na operação.',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Execução',
    description:
      'Elaboramos todos os laudos, projetos e documentos técnicos necessários.',
    icon: Hammer,
  },
  {
    id: 4,
    title: 'Entrega e Acompanhamento',
    description:
      'Protocolamos os processos e monitoramos até a emissão da licença definitiva.',
    icon: CheckCircle,
  },
]

export function Methodology() {
  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl font-maven">
            Como Trabalhamos
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Nossa metodologia garante uma{' '}
            <strong className="text-primary-green">
              Solução Personalizada
            </strong>{' '}
            para cada cliente, com transparência em todas as etapas.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-neutral-200 -z-10" />

            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-primary-green shadow-sm mb-6 z-10">
                  <step.icon className="h-8 w-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-neutral-900 mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-base leading-7 text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
