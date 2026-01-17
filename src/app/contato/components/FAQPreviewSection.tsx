import { ArrowRight } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'

export default function FAQPreviewSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-lumia">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Dúvidas Frequentes?
          </h2>
          <p className="text-muted-foreground mb-8">
            Se você tem dúvidas sobre nossos serviços, processos ou como podemos
            ajudar sua empresa, entre em contato. Teremos prazer em esclarecer
            tudo de forma clara e objetiva.
          </p>
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de saber tirar uma dúvida sobre os serviços da LUMIA.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tire Suas Dúvidas
              <ArrowRight className="ml-2" size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
