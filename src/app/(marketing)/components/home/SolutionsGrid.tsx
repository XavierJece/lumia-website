import { AlertTriangle, ArrowRight, Factory, Handshake } from 'lucide-react'
import { Link } from '~/shared/components/atoms/ui/link'
import { GlassCard } from '~/shared/components/ui/GlassCard'
import { Section } from '~/shared/components/ui/section'
import { ISolutionCard } from './types'

const solutions: ISolutionCard[] = [
  {
    title: 'Licenciamento Ambiental para Indústrias',
    description:
      'Obtenha e renove suas licenças (LP, LI, LO) com agilidade e segurança jurídica para operar sem interrupções.',
    href: '/solucoes/licenciamento-industrial',
    icon: Factory,
  },
  {
    title: 'Regularização de Emergência e Defesa',
    description:
      'Atuamos rapidamente em casos de autuação ou embargo. Nossa expertise é sua melhor defesa.',
    href: '/solucoes/regularizacao-emergencia',
    icon: AlertTriangle,
  },
  {
    title: 'Assessoria Contínua para Empresas',
    description:
      'Tenha um parceiro estratégico permanente para monitorar legislação e manter sua operação sempre regular.',
    href: '/solucoes/assessoria-continua',
    icon: Handshake,
  },
]

export default function SolutionsGrid() {
  return (
    <Section id="solucoes" className="relative z-10 scroll-mt-24">
      <Section.Header>
        <Section.Title>Soluções para o seu desafio.</Section.Title>
        <Section.Subtitle>
          Simplificamos a conformidade ambiental para que você foque no
          crescimento do seu negócio.
        </Section.Subtitle>
      </Section.Header>

      <Section.Content>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {solutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group flex h-full flex-col focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
              visual="text"
              hoverEffect="none"
            >
              <GlassCard
                interactive
                tone="light"
                padding="lg"
                className="flex-1 rounded-xl border-neutral-200 shadow-sm transition-all duration-300 ease-in-out hover:border-primary-green/20 hover:shadow-lg"
              >
                <div className="flex flex-1 w-full flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-primary-green transition-colors duration-300 ease-in-out group-hover:bg-primary-green group-hover:text-white">
                      <solution.icon className="h-6 w-6" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="font-maven text-h5 font-bold text-secondary-green">
                        {solution.title}
                      </h3>
                      <p className="text-body-base text-neutral-500 line-clamp-4">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-primary-green transition-all duration-300 ease-in-out group-hover:gap-3">
                    <span>Saiba mais</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section.Content>
    </Section>
  )
}
