import React from 'react'
import { Users, Building2, FileCheck, ThumbsUp } from 'lucide-react'
import { IMetricCard } from './types'

const metrics: IMetricCard[] = [
  { id: 1, value: '15+', label: 'Especialistas técnicos', icon: Users },
  { id: 2, value: '280+', label: 'Clientes em conformidade', icon: Building2 },
  {
    id: 3,
    value: '1.200+',
    label: 'Processos administrativos gerenciados',
    icon: FileCheck,
  },
  { id: 4, value: '98%', label: 'Satisfação dos clientes', icon: ThumbsUp },
]

export function ImpactMetrics() {
  return (
    <section className="bg-white-essential py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            // Split value into number and symbol if possible to color them differently
            // Logic: Assume symbol is the last character if it is '+' or '%'
            const hasSymbol =
              metric.value.endsWith('+') || metric.value.endsWith('%')
            const numberPart = hasSymbol
              ? metric.value.slice(0, -1)
              : metric.value
            const symbolPart = hasSymbol ? metric.value.slice(-1) : ''

            return (
              <div
                key={metric.id}
                className="flex flex-col items-center gap-y-4 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100">
                  <metric.icon
                    className="h-6 w-6 text-horizon-green"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <dd className="text-4xl font-bold tracking-tight text-primary-green sm:text-5xl">
                    {numberPart}
                    <span className="text-light-yellow">{symbolPart}</span>
                  </dd>
                  <dt className="text-base leading-7 text-neutral-600">
                    {metric.label}
                  </dt>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
