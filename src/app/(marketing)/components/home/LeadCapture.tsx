'use client'

import React, { useState } from 'react'
import { FileText, Download } from 'lucide-react'

export function LeadCapture() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Placeholder submit logic
    setTimeout(() => {
      alert('Obrigado! O material foi enviado para o seu e-mail.')
      setIsSubmitting(false)
      setEmail('')
      setName('')
    }, 1000)
  }

  return (
    <section className="relative overflow-hidden bg-horizon-green py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -mt-10 -ml-10 w-96 h-96 bg-primary-green/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-maven">
              Guia Definitivo para Regularização Ambiental
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Baixe nosso e-book gratuito e descubra o passo a passo para manter
              sua empresa 100% regularizada e evitar multas.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <div className="rounded-lg bg-white/10 p-3 ring-1 ring-white/20">
                <FileText className="h-6 w-6 text-accent-yellow" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-white">
                  O que você vai aprender:
                </h3>
                <ul className="mt-2 space-y-2 text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" />
                    Principais licenças exigidas por setor
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" />
                    Checklist de documentos essenciais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" />
                    Prazos e validades
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md lg:ml-auto lg:mt-0">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-neutral-900/5"
            >
              <h3 className="text-lg font-semibold leading-7 text-neutral-900 mb-6">
                Receba gratuitamente
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-neutral-900"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 block w-full rounded-md border-0 py-2.5 text-neutral-900 ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6 px-3"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-neutral-900"
                  >
                    E-mail corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 block w-full rounded-md border-0 py-2.5 text-neutral-900 ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-green sm:text-sm sm:leading-6 px-3"
                    placeholder="voce@empresa.com.br"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center items-center gap-2 rounded-md bg-primary-green px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Download className="h-4 w-4" /> Baixar Material
                    </>
                  )}
                </button>
              </div>
              <p className="mt-4 text-center text-xs text-neutral-500">
                Seus dados estão seguros. Política de Privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
