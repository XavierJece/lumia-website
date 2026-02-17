import { Cookie } from 'lucide-react'

export const metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como a LUMIA coleta, usa e protege seus dados pessoais em conformidade com a LGPD.',
}

export default function HeroSection() {
  return (
    <section className="gradient-hero section-padding">
      <div className="container-lumia">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <Cookie size={16} />
            Cookies e Dados
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Política de Privacidade
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            A sua privacidade é importante para nós. Entenda como tratamos seus
            dados em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>
      </div>
    </section>
  )
}
