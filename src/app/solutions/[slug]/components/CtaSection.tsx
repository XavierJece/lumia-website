import { ArrowRight, FileCheck } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'
import { Link } from '~/shared/components/atoms/ui/link'

export function CtaSection() {
  return (
    <section className="section-padding gradient-hero">
      <div className="container-lumia text-center">
        <FileCheck className="w-16 h-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-foreground mb-6">
          Pronto para Regularizar sua Empresa?
        </h2>
        <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Nossa equipe está pronta para ajudar. Entre em contato e descubra como
          podemos facilitar o processo para você.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-10 break-all w-full max-w-sm"
        >
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Tenho uma demanda específica e gostaria de conversar.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento Grátis
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
