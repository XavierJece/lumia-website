import { ArrowRight } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'
import { Link } from '~/shared/components/atoms/ui/link'

export default function CTASection() {
  return (
    <section className="section-padding gradient-hero">
      <div className="container-lumia text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">
          Pronto para Regularizar Sua Empresa?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Entre em contato agora mesmo e faça seu orçamento! <br />{' '}
          <strong> Não arrisque multas e interdições.</strong>
        </p>
        <Button
          asChild
          size="lg"
          variant="tertiary"
          className="font-semibold text-lg px-10 shadow-elevated break-words whitespace-pre-wrap min-h-fit"
        >
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de de fazer um orçamento grátis.`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-pre-wrap hover:no-underline hover:text-horizon-green"
            trackParams={{
              category: 'Home',
              section_page: 'CTA',
              label: 'Fazer meu orçamento grátis',
              is_cta: true,
            }}
          >
            Fazer meu orçamento grátis
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
