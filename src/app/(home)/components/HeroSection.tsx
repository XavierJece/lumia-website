import { ArrowRight, Leaf } from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/shared/components/atoms/ui/button'

export default function HeroSection() {
  return (
    <section className="bg-gradient-subtle overflow-hidden">
      <div className="container-lumia section-padding">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
            <Leaf size={16} />
            Consultoria e Engenharia Especializada
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-accent-foreground mb-6 leading-tight animate-fade-up stagger-1">
            Soluções especializadas <br /> para sua empresa
          </h1>
          <p className="text-lg sm:text-xl text-accent-foreground/80 mb-8 leading-relaxed animate-fade-up stagger-2">
            Atuação completa na regularização de indústrias e comércios,
            garantindo conformidade com as normas ambientais, vigilância,
            sanitária e segurança contra incêndio e liberação legal do
            estabelecimento. A Lumia oferece tranquilidade para seu negócio, com
            praticidade e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8"
            >
              <Link href="/solucoes">Conheça Nossas Soluções</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="tertiary"
              className="font-semibold text-lg px-8 shadow-elevated"
            >
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços da LUMIA.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com um Especialista
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-2 left-1 lg:top-10 xl:top-20 lg:left-10 size-20 bg-gradient-nature rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/4 right-1 lg:top-1/3 lg:right-10 size-12 bg-gradient-forest rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="relative -bottom-6 xl:absolute xl:top-1/2 xl:left-5 size-16 bg-accent rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  )
}
