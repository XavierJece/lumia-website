'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '~/shared/components/shadcn'

const faqs = [
  {
    question: 'Preciso de licença ambiental para abrir um consultório?',
    answer:
      'Depende da localização e do tipo de procedimento realizado. Em geral, é necessário verificar a dispensa ou o licenciamento simplificado junto ao órgão municipal.',
  },
  {
    question: 'Quanto tempo demora para obter um AVCB?',
    answer:
      'O prazo varia conforme a complexidade da edificação e as adequações necessárias. Após a instalação dos sistemas de segurança, a vistoria dos bombeiros costuma ocorrer em até 30 dias.',
  },
  {
    question: 'O que é PGRS e é obrigatório?',
    answer:
      'O Plano de Gerenciamento de Resíduos Sólidos (PGRS) é um documento técnico que identifica o tipo e a quantidade de resíduos gerados e aponta as práticas corretas de manejo. É obrigatório para a maioria das empresas geradoras de resíduos.',
  },
  {
    question: 'Como funciona o processo de renovação de licenças?',
    answer:
      'Monitoramos os prazos de validade e iniciamos o processo de renovação com antecedência (geralmente 120 dias antes do vencimento) para garantir que sua empresa não fique descoberta.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl font-maven">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Tire suas dúvidas sobre regularização ambiental e sanitária.
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-neutral-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-start justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold leading-7 text-neutral-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDown
                    className={cn(
                      'h-6 w-6 transform text-primary-green transition-transform duration-200',
                      openIndex === index ? 'rotate-180' : 'rotate-0',
                    )}
                    aria-hidden="true"
                  />
                </span>
              </button>
              <div
                className={cn(
                  'mt-2 pr-12 overflow-hidden transition-all duration-300 ease-in-out',
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0',
                )}
              >
                <p className="text-base leading-7 text-neutral-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
