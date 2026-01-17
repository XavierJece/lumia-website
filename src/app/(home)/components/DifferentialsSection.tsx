import { CheckCircle2, Shield, Users, Zap } from 'lucide-react'

const differentials = [
  {
    icon: Users,
    title: 'Atendimento Próximo',
    description:
      'Equipe dedicada que entende as necessidades específicas do seu negócio.',
  },
  {
    icon: Zap,
    title: 'Agilidade',
    description:
      'Processos otimizados para entregas rápidas sem perder a qualidade.',
  },
  {
    icon: Shield,
    title: 'Conformidade Legal',
    description: 'Garantia de adequação às normas ambientais vigentes.',
  },
  {
    icon: CheckCircle2,
    title: 'Soluções Personalizadas',
    description: 'Cada projeto é único e tratado com atenção individualizada.',
  },
]
export default function DifferentialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Por que a LUMIA?
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground">
            O que nos torna a escolha certa para as necessidades ambientais da
            sua empresa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((diff) => (
            <div key={diff.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <diff.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {diff.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
