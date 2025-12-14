'use client'

import {
  LazyMotion,
  domAnimation,
  m,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { CheckCircle, FileText, Search, Users } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

import { Button } from '~/shared/components/atoms/ui/button'
import { Section } from '~/shared/components/ui/section'
import { CONTACT_INFO } from '~/shared/config/constants'

import { useReducedMotion, useScrollProgress } from './hooks/useScrollProgress'
import type { IMethodologyStep } from './types'

const steps: IMethodologyStep[] = [
  {
    id: 1,
    title: 'Diagnóstico & Estratégia',
    description:
      'Mapeamos todos os requisitos legais aplicáveis ao seu negócio com um diagnóstico transparente e sem custos ocultos.',
    diferencial:
      'Utilizamos nosso banco de dados de processos semelhantes para definir a estratégia mais rápida e segura desde o início.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Tradução & Preparação',
    description:
      'Convertemos exigências técnicas em documentação clara e organizamos todo o necessário para submissão.',
    diferencial:
      'Nossa equipe multidisciplinar elimina idas e vindas com órgãos reguladores.',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Mediação & Gestão',
    description:
      'Representamos sua empresa junto aos órgãos ambientais, gerenciando prazos e comunicações.',
    diferencial: 'Relacionamento consolidado com órgãos agiliza aprovações.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Conformidade Concluída',
    description:
      'Entregamos sua licença ou regularização com toda documentação organizada para futuras renovações.',
    diferencial:
      'Você recebe um dossiê completo para gestão contínua da conformidade.',
    icon: CheckCircle,
  },
]

interface IStepCardProps {
  step: IMethodologyStep
  index: number
  progress: MotionValue<number>
  prefersReducedMotion: boolean
}

function StepCard({
  step,
  index,
  progress,
  prefersReducedMotion,
}: IStepCardProps) {
  const stepThreshold = index / steps.length
  const stepEndThreshold = (index + 1) / steps.length

  // Card fades in when progress reaches its position
  const opacity = useTransform(
    progress,
    [stepThreshold, stepThreshold + 0.1],
    [0, 1],
  )

  const translateY = useTransform(
    progress,
    [stepThreshold, stepThreshold + 0.1],
    [20, 0],
  )

  // Circle fill animation
  const circleFill = useTransform(
    progress,
    [stepThreshold, stepEndThreshold],
    ['rgb(0, 58, 51)', 'rgb(210, 214, 88)'],
  )

  const isAbove = index % 2 === 0

  return (
    <div
      className={`relative flex flex-col items-center lg:w-1/4 ${
        isAbove ? 'lg:order-first' : 'lg:order-last'
      }`}
    >
      {/* Mobile: Horizontal connector line */}
      <div className="absolute left-8 top-4 h-0.5 w-6 bg-horizon-green lg:hidden" />

      {/* Desktop: Vertical connector line */}
      <div
        className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-horizon-green ${
          isAbove ? 'bottom-0 translate-y-full' : 'top-0 -translate-y-full'
        }`}
      />

      {/* Numbered circle */}
      <m.div
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-horizon-green shadow-sm mb-4"
        style={
          prefersReducedMotion
            ? { backgroundColor: 'rgb(210, 214, 88)' }
            : { backgroundColor: circleFill }
        }
      >
        <span className="text-xl font-bold text-horizon-green">{step.id}</span>
      </m.div>

      {/* Card content */}
      <m.div
        className="text-center px-4"
        style={
          prefersReducedMotion
            ? { opacity: 1, y: 0 }
            : { opacity, y: translateY }
        }
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <step.icon className="h-5 w-5 text-primary-green" />
          <h3 className="text-lg font-semibold text-neutral-900 font-maven">
            {step.title}
          </h3>
        </div>
        <p className="text-sm text-neutral-600 mb-3">{step.description}</p>
        <p className="text-sm italic text-primary-green font-medium">
          {step.diferencial}
        </p>
      </m.div>
    </div>
  )
}

interface ITimelineProgressProps {
  progress: MotionValue<number>
  prefersReducedMotion: boolean
}

interface IStepMarkerProps {
  stepId: number
  index: number
  progress: MotionValue<number>
  prefersReducedMotion: boolean
}

function StepMarker({
  stepId,
  index,
  progress,
  prefersReducedMotion,
}: IStepMarkerProps) {
  const markerPosition = index / (steps.length - 1)
  const markerFill = useTransform(
    progress,
    [markerPosition - 0.1, markerPosition],
    ['rgb(0, 58, 51)', 'rgb(210, 214, 88)'],
  )

  return (
    <m.div
      key={stepId}
      className="w-3 h-3 rounded-full border-2 border-horizon-green"
      style={{
        backgroundColor: prefersReducedMotion
          ? 'rgb(210, 214, 88)'
          : markerFill,
      }}
    />
  )
}

function TimelineProgress({
  progress,
  prefersReducedMotion,
}: ITimelineProgressProps) {
  const scaleX = useTransform(progress, [0, 1], [0, 1])

  return (
    <div className="relative w-full h-1 my-8 hidden lg:block">
      {/* Green base line */}
      <div className="absolute inset-0 bg-horizon-green rounded-full" />
      {/* Yellow progress line */}
      <m.div
        className="absolute inset-0 bg-light-yellow rounded-full origin-left"
        style={prefersReducedMotion ? { scaleX: 1 } : { scaleX }}
      />
      {/* Step markers */}
      <div className="absolute inset-0 flex justify-between items-center px-[12.5%]">
        {steps.map((step, index) => (
          <StepMarker
            key={step.id}
            stepId={step.id}
            index={index}
            progress={progress}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </div>
  )
}

function MobileTimeline({
  progress,
  prefersReducedMotion,
}: ITimelineProgressProps) {
  const scaleY = useTransform(progress, [0, 1], [0, 1])

  return (
    <div className="relative lg:hidden">
      {/* Vertical line container */}
      <div className="absolute left-8 top-0 bottom-0 w-1">
        {/* Green base line */}
        <div className="absolute inset-0 bg-horizon-green rounded-full" />
        {/* Yellow progress line */}
        <m.div
          className="absolute inset-0 bg-light-yellow rounded-full origin-top"
          style={prefersReducedMotion ? { scaleY: 1 } : { scaleY }}
        />
      </div>

      {/* Step cards */}
      <div className="space-y-12 pl-20">
        {steps.map((step, index) => (
          <MobileStepCard
            key={step.id}
            step={step}
            index={index}
            progress={progress}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </div>
  )
}

interface IMobileStepCardProps {
  step: IMethodologyStep
  index: number
  progress: MotionValue<number>
  prefersReducedMotion: boolean
}

function MobileStepCard({
  step,
  index,
  progress,
  prefersReducedMotion,
}: IMobileStepCardProps) {
  const stepThreshold = index / steps.length
  const stepEndThreshold = (index + 1) / steps.length

  const opacity = useTransform(
    progress,
    [stepThreshold, stepThreshold + 0.15],
    [0, 1],
  )

  const translateX = useTransform(
    progress,
    [stepThreshold, stepThreshold + 0.15],
    [20, 0],
  )

  const circleFill = useTransform(
    progress,
    [stepThreshold, stepEndThreshold],
    ['rgb(0, 58, 51)', 'rgb(210, 214, 88)'],
  )

  return (
    <div className="relative">
      {/* Circle marker */}
      <m.div
        className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-horizon-green shadow-sm"
        style={
          prefersReducedMotion
            ? { backgroundColor: 'rgb(210, 214, 88)' }
            : { backgroundColor: circleFill }
        }
      >
        <span className="text-sm font-bold text-horizon-green">{step.id}</span>
      </m.div>

      {/* Card content */}
      <m.div
        className="bg-white-essential rounded-lg p-4 shadow-sm border border-neutral-100"
        style={
          prefersReducedMotion
            ? { opacity: 1, x: 0 }
            : { opacity, x: translateX }
        }
      >
        <div className="flex items-center gap-2 mb-2">
          <step.icon className="h-5 w-5 text-primary-green" />
          <h3 className="text-lg font-semibold text-neutral-900 font-maven">
            {step.title}
          </h3>
        </div>
        <p className="text-sm text-neutral-600 mb-3">{step.description}</p>
        <p className="text-sm italic text-primary-green font-medium">
          {step.diferencial}
        </p>
      </m.div>
    </div>
  )
}

export function Methodology() {
  const containerRef = useRef<HTMLElement>(null)
  const { progress } = useScrollProgress(containerRef)
  const prefersReducedMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      <Section
        ref={containerRef}
        className="relative overflow-hidden"
        aria-labelledby="methodology-heading"
      >
        <Section.Header>
          <Section.Title id="methodology-heading">
            Nós facilitamos o diálogo. Você foca no seu negócio.
          </Section.Title>
          <Section.Subtitle className="max-w-3xl">
            Mediamos a relação entre sua empresa e os órgãos reguladores,
            traduzindo exigências em ações claras.
          </Section.Subtitle>
        </Section.Header>

        <Section.Content>
          {/* Operating Diagram Illustration */}
          <div className="mb-16">
            <Image
              src="/images/operating_diagram.svg"
              alt="Diagrama mostrando o fluxo de mediação da Lumia entre empresas e órgãos reguladores, simplificando processos burocráticos"
              width={800}
              height={400}
              className="w-full max-w-3xl mx-auto"
              priority={false}
            />
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block mx-auto max-w-6xl">
            {/* Cards above the line (steps 1 and 3) */}
            <div className="flex justify-between mb-8">
              {steps
                .filter((_, index) => index % 2 === 0)
                .map((step) => {
                  const originalIndex = steps.findIndex((s) => s.id === step.id)
                  return (
                    <div
                      key={step.id}
                      className="w-1/4 px-2"
                      style={{
                        marginLeft:
                          originalIndex === 0 ? '0' : 'calc(25% - 0.5rem)',
                      }}
                    >
                      <StepCard
                        step={step}
                        index={originalIndex}
                        progress={progress}
                        prefersReducedMotion={prefersReducedMotion}
                      />
                    </div>
                  )
                })}
            </div>

            {/* Timeline Progress Line */}
            <TimelineProgress
              progress={progress}
              prefersReducedMotion={prefersReducedMotion}
            />

            {/* Cards below the line (steps 2 and 4) */}
            <div className="flex justify-between mt-8">
              <div className="w-1/4" /> {/* Spacer for step 1 position */}
              {steps
                .filter((_, index) => index % 2 === 1)
                .map((step) => {
                  const originalIndex = steps.findIndex((s) => s.id === step.id)
                  return (
                    <div
                      key={step.id}
                      className="w-1/4 px-2"
                      style={{
                        marginRight:
                          originalIndex === 3 ? '0' : 'calc(25% - 0.5rem)',
                      }}
                    >
                      <StepCard
                        step={step}
                        index={originalIndex}
                        progress={progress}
                        prefersReducedMotion={prefersReducedMotion}
                      />
                    </div>
                  )
                })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <MobileTimeline
            progress={progress}
            prefersReducedMotion={prefersReducedMotion}
          />

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <a
                href={CONTACT_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com um de nossos especialistas
              </a>
            </Button>
          </div>
        </Section.Content>
      </Section>
    </LazyMotion>
  )
}
