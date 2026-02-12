import { CheckCircle2, Clock, Phone, Shield, Users } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Button } from '~/shared/components/atoms/ui/button'
import { Link } from '~/shared/components/atoms/ui/link'
import { ISolutionServiceContent } from '~/shared/data/solutionContent'

interface IContentSection {
  solution: Pick<
    ISolutionServiceContent,
    'description' | 'businessAdvantages' | 'title'
  >
}

export function ContentSection({ solution }: IContentSection) {
  return (
    <section className="section-padding bg-muted">
      <div className="container-lumia">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
              Sobre o Serviço
            </h2>
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  p: ({ _, ...props }) => (
                    <p
                      className="text-muted-foreground leading-relaxed mb-4"
                      {...props}
                    />
                  ),
                }}
              >
                {solution.description}
              </ReactMarkdown>
            </div>

            {/* Benefits */}
            <div className="mt-12">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Benefícios para sua Empresa
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {solution.businessAdvantages.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* CTA Card */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-soft sticky top-24">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Solicite um Orçamento
              </h3>
              <p className="text-muted-foreground mb-6">
                Fale com nossa equipe e receba uma proposta personalizada para
                sua necessidade.
              </p>

              <Button
                asChild
                size="lg"
                className="w-full mb-4"
                variant="default"
              >
                <Link
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre *${solution.title}*.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="un"
                >
                  <Phone size={18} className="mr-2" />
                  Fale no WhatsApp
                </Link>
              </Button>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  Resposta em até 24h úteis
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Shield size={16} className="text-primary" />
                  Orçamento sem compromisso
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Users size={16} className="text-primary" />
                  Atendimento personalizado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
