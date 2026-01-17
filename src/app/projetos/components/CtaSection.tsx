import { ArrowRight } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'

export function CtaSection() {
  return (
    <section className="section-padding gradient-hero">
      <div className="container-lumia text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-foreground mb-6">
          Seu Projeto Pode Ser o Próximo
        </h2>
        <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Cada empresa tem necessidades únicas. Conte-nos sobre seu desafio e
          vamos desenvolver juntos a solução ideal para você
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-10"
        >
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Vi os projetos da LUMIA e gostaria de conversar sobre minha demanda.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inicie seu Projeto
            <ArrowRight className="ml-2" size={20} />
          </a>
        </Button>
      </div>
    </section>
  )
}
