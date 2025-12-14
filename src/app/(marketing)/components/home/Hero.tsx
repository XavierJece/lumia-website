import { twMerge } from 'tailwind-merge'
import { HeroContent } from './HeroContent'
import { ScrollButton } from './ScrollButton'

export function Hero() {
  return (
    <section
      className={twMerge(
        'relative',
        'min-h-[100dvh]',
        'bg-gradient-to-b from-green-50/80 to-white-essential',
        'flex flex-col items-center justify-center',
        'gap-24',
        'px-6 py-12 sm:py-24',
        'overflow-hidden',
        'isolate',
      )}
    >
      <HeroContent />

      {/* Scroll Cue Indicator */}
      <ScrollButton />

      {/* Decorative Background */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-nature rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-forest rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-amarelo-luz rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  )
}
