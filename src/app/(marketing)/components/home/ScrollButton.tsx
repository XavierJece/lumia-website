'use client'

import { ChevronDown } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'

export function ScrollButton() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }
  return (
    <Button
      onClick={handleScroll}
      variant="ghost"
      size="icon"
      className="transition-transform hover:bg-transparent  hover:text-primary-green animate-bounce rounded-full duration-1000"
      aria-label="Rolar para baixo"
    >
      <ChevronDown className="size-8" />
    </Button>
  )
}
