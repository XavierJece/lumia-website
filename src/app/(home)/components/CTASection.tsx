import { ArrowRight } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'

export default function CTASection() {
  return (
    <section className="section-padding gradient-hero">
      <div className="container-lumia text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">
          Pronto para Regularizar Sua Empresa?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Entre em contato agora mesmo e descubra como a LUMIA pode ajudar sua
          empresa a estar em conformidade com a legislação ambiental.
        </p>
        <Button
          asChild
          size="lg"
          variant="tertiary"
          className="font-semibold text-lg px-10 shadow-elevated break-words whitespace-pre-wrap min-h-fit"
        >
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços da LUMIA.`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-pre-wrap"
          >
            Falar com Especialista
            <ArrowRight className="ml-2" size={20} />
          </a>
        </Button>
      </div>
    </section>
  )
}
