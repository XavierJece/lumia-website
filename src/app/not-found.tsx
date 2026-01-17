import { ArrowRight, Home } from 'lucide-react'
import Imagem from 'next/image'
import Link from 'next/link'
import { Button } from '~/shared/components/atoms/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-subtle">
      <div className="container-lumia section-padding text-center">
        <div className="max-w-2xl mx-auto">
          {/* Error Code */}
          <div className="mb-8 animate-fade-up">
            <Imagem
              alt="404"
              src="/images/not-found.svg"
              width={1000}
              height={200}
            />
            {/* <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-heading font-bold text-primary/20 leading-none">
              404
            </h1> */}
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-up stagger-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent-foreground leading-tight">
              Página não encontrada
            </h2>

            <p className="text-lg sm:text-xl text-accent-foreground/80 leading-relaxed max-w-lg mx-auto">
              Ops! Parece que a página que você está procurando não existe ou
              foi movida. Vamos te ajudar a encontrar o que precisa.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up stagger-2">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8"
            >
              <Link href="/">
                <Home className="mr-2" size={20} />
                Voltar ao Início
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="tertiary"
              className="font-semibold text-lg px-8 shadow-elevated"
            >
              <Link href="/solucoes">
                Conheça Nossas Soluções
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          {/* Search Suggestion */}
          {/* <div className="mt-12 animate-fade-up stagger-3">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Search size={16} />
              Que tal explorar nossas soluções ambientais?
            </div>
          </div> */}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 size-20 bg-gradient-nature rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 size-12 bg-gradient-forest rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 size-16 bg-accent rounded-full opacity-20 animate-pulse delay-500"></div>
      <div className="absolute top-2/3 right-1/4 size-10 bg-primary/20 rounded-full opacity-15 animate-pulse delay-1500"></div>
    </div>
  )
}
