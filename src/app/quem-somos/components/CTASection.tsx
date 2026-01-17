import { ArrowRight } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'

export default function CTASection() {
  return (
    <section className="section-padding gradient-hero">
      <div className="container-lumia text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Conheça mais sobre como a LUMIA pode ajudar sua empresa. Entre em
          contato e agende uma conversa com nossos especialistas.
        </p>
        <Button
          asChild
          size="lg"
          variant="tertiary"
          className="font-semibold text-lg px-10 shadow-elevated"
        >
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Conheci a LUMIA e gostaria de saber mais.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
            <ArrowRight className="ml-2" size={20} />
          </a>
        </Button>
      </div>
    </section>
  )
}
