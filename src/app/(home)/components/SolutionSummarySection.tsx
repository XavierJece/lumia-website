import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/shared/components/atoms/ui/button'
import { solutionsCategoryContent } from '~/shared/data/solutionContent'

export default function SolutionSummarySection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-lumia">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossas Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Soluções Completas para sua Empresa!
          </h2>
          <p className="text-muted-foreground">
            Oferecemos um pacote completo de serviços personalizados para
            conformidade e liberação do empreendimento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {solutionsCategoryContent.map((category, index) => (
            <div
              key={category.title}
              className={`bg-card p-6 rounded-xl shadow-soft hover-lift border border-border group stagger-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <category.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {category.forWhom}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link href="/solucoes">
              Ver Todos as Soluções
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
