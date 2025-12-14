'use client'

import { motion } from 'framer-motion'

export function HeroHighlight() {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400/60 -z-10"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 5 Q 50 10 100 5"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: 0.5,
        }}
      />
    </svg>
  )
}
