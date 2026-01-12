import { Briefcase } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="gradient-hero section-padding">
      <div className="container-lumia">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <Briefcase size={16} />
            Soluções Especializadas
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Nossas Soluções
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Na LUMIA, entendemos que cada empresa tem desafios únicos.
            Organizamos nossas especialidades para que você encontre rapidamente
            a solução ideal para regularizar, otimizar e proteger o seu negócio.
            Fale conosco e tenha um parceiro técnico ao seu lado.
          </p>
        </div>
      </div>
    </section>
  )
}
