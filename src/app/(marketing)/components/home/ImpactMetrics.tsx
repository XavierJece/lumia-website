'use client'

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Building2, FileCheck, ThumbsUp, Users } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
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

function Counter({
  value,
  delay = 0,
  start = false,
}: {
  value: string
  delay?: number
  start?: boolean
}) {
  // Parse value: remove dots, keep only digits
  const numericValue = parseInt(value.replace(/\./g, ''), 10)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2, // approximate duration
  })

  useEffect(() => {
    if (start) {
      // Add delay before starting animation
      const timeout = setTimeout(() => {
        motionValue.set(numericValue)
      }, delay * 1000)
      return () => clearTimeout(timeout)
    }
  }, [start, delay, motionValue, numericValue])

  const displayValue = useTransform(springValue, (latest) => {
    if (latest === 0) return '0'
    // Format number with dots (e.g., 1200 -> 1.200)
    // Using simple regex or toLocaleString approach
    // Since input uses dots as thousand separators (pt-BR style roughly), we replicate that.
    return Math.round(latest)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  })

  return <motion.span>{displayValue}</motion.span>
}

export function ImpactMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-white-essential py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-16">
          {metrics.map((metric, index) => {
            // Split value into number and symbol if possible to color them differently
            // Logic: Assume symbol is the last character if it is '+' or '%'
            const hasSymbol =
              metric.value.endsWith('+') || metric.value.endsWith('%')
            const numberPart = hasSymbol
              ? metric.value.slice(0, -1)
              : metric.value
            const symbolPart = hasSymbol ? metric.value.slice(-1) : ''

            return (
              <motion.div
                key={metric.id}
                className="flex flex-col items-center gap-y-4 text-center cursor-default w-[calc(50%-1rem)] sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)]"
                initial="idle"
                whileHover="hover"
              >
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100"
                  variants={{
                    idle: { scale: 1 },
                    hover: { scale: 1.1 },
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <metric.icon
                    className="h-6 w-6 text-horizon-green"
                    aria-hidden="true"
                  />
                </motion.div>
                <div className="flex flex-col gap-y-1">
                  <dd className="text-4xl font-bold tracking-tight text-primary-green sm:text-5xl">
                    <span className="sr-only">{metric.value}</span>
                    <span aria-hidden="true">
                      <Counter
                        value={numberPart}
                        delay={index * 0.5}
                        start={isInView}
                      />
                    </span>
                    <span className="text-light-yellow">{symbolPart}</span>
                  </dd>
                  <dt className="text-base leading-7 text-neutral-600">
                    {metric.label}
                  </dt>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
