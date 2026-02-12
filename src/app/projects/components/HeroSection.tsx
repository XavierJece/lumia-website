import { CheckCircle2 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="gradient-hero section-padding">
      <div className="container-lumia">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <CheckCircle2 size={16} />
            Cases de Sucesso
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Nossos Projetos
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Conheça alguns dos projetos realizados pela LUMIA e os resultados
            alcançados para nossos clientes em diferentes segmentos.
          </p>
        </div>
      </div>
    </section>
  )
}
