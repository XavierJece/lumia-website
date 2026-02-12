import { ISolutionServiceContent } from '~/shared/data/solutionContent'

const process = [
  {
    title: 'Diagnóstico Inicial',
    description:
      'Análise completa da situação do empreendimento e identificação das licenças necessárias.',
  },
  {
    title: 'Documentação',
    description:
      'Levantamento e organização de toda documentação técnica e legal necessária.',
  },
  {
    title: 'Estudos Técnicos',
    description:
      'Elaboração dos estudos ambientais exigidos pelo órgão licenciador.',
  },
  {
    title: 'Protocolo e Acompanhamento',
    description:
      'Submissão do processo e acompanhamento junto ao órgão ambiental.',
  },
  {
    title: 'Obtenção da Licença',
    description:
      'Entrega da licença e orientações para manutenção da regularidade.',
  },
]

interface IProcessSectionProps {
  solution: Pick<ISolutionServiceContent, 'process'>
}

export function ProcessSection({ solution }: IProcessSectionProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nosso processo é transparente e organizado para garantir os melhores
            resultados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(solution.process || process).map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl border border-border p-6 hover-lift"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
