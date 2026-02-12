import { ArrowRight } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'
import { Link } from '~/shared/components/atoms/ui/link'

export function CtaSection() {
  return (
    <section className="section-padding gradient-hero">
      <div className="container-lumia text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-foreground mb-6">
          Não Encontrou o que Procura?
        </h2>
        <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Entre em contato e conte sua necessidade. Nossa equipe está pronta
          para desenvolver uma solução personalizada para você.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-10 word-break"
        >
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Tenho uma demanda específica e gostaria de conversar.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
