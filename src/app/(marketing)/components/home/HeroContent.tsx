'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from '~/shared/components/atoms/ui/link'
import { CONTACT_INFO } from '~/shared/config/constants'
import { HeroHighlight } from './HeroHighlight'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98], // Custom easeOut
    },
  },
}

export function HeroContent() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-8 relative z-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl font-bold tracking-tight text-secondary-green sm:text-5xl lg:text-5xl font-maven leading-tight lg:leading-tight text-center"
        variants={itemVariants}
      >
        Conformidade Ambiental sem Burocracia:{' '}
        <span className="text-primary-green relative whitespace-nowrap inline-block">
          Agilidade e Clareza
          <HeroHighlight />
        </span>{' '}
        para Sua Empresa.
      </motion.h1>

      <motion.p
        className="text-lg leading-8 text-neutral-600 max-w-xl font-medium text-center"
        variants={itemVariants}
      >
        Traduzimos exigências legais em processos simples e eficientes. Garanta
        a segurança jurídica da sua operação sem perder o foco no negócio.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        variants={itemVariants}
      >
        <Link
          visual="button"
          href={CONTACT_INFO.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com especialista no WhatsApp"
          className="shadow-lg shadow-green-900/10 hover:shadow-green-900/20 transition-all duration-300"
        >
          <MessageCircle />
          Fale com um Especialista
        </Link>
        <Link
          href="/solucoes"
          visual="button"
          buttonVariant="outline"
          className="bg-white/50 backdrop-blur-sm border-secondary-green/20 hover:bg-white/80 transition-all duration-300"
        >
          Ver Nossas Soluções
          <ArrowRight />
        </Link>
      </motion.div>
    </motion.div>
  )
}
