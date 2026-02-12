import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/shared/components/atoms/ui/button'

export default function AboutSummarySection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Sobre a LUMIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Expertise Técnica com Atendimento Humanizado
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A LUMIA nasceu da união de profissionais altamente capacitados em
              engenharia ambiental, sanitária, civil e assessoria técnica, com o
              objetivo de oferecer soluções práticas e acessíveis para empresas
              de todos os portes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa equipe combina conhecimento técnico profundo com uma
              abordagem próxima e personalizada, garantindo que cada cliente
              receba a atenção que merece.
            </p>
            <Button asChild variant="outline" className="font-semibold">
              <Link href="/about">
                Saiba Mais Sobre Nós
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/images/operating_diagram.svg"
              alt="About Summary"
              width={500}
              height={500}
              className="w-full h-full bg-muted rounded-2xl border-2 border-primary/75 "
            />
            <div className="hidden lg:block absolute -bottom-20 -right-6 bg-card p-6 rounded-xl shadow-elevated border border-border">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-foreground">
                    100+
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Projetos Realizados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
