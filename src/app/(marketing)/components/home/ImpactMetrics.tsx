import React from 'react'
import GlassContainer from '~/shared/components/ui/GlassContainer'

const metrics = [
  { id: 1, name: 'Projetos Licenciados', value: '+500' },
  { id: 2, name: 'Clientes Atendidos', value: '+200' },
  { id: 3, name: 'Anos de Experiência', value: '10+' },
  { id: 4, name: 'Economia Gerada', value: 'R$ 5M+' },
]

export function ImpactMetrics() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <GlassContainer
          tone="dark"
          padding="lg"
          interactive={false}
          className="mx-auto max-w-none"
        >
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-green-100">
                  {metric.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </GlassContainer>
      </div>
    </div>
  )
}
