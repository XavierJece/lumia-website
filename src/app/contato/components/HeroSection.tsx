import { MessageCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="gradient-hero section-padding">
      <div className="container-lumia">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <MessageCircle size={16} />
            Fale Conosco
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Contato
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Estamos prontos para atender você. Entre em contato e descubra como
            podemos ajudar sua empresa.
          </p>
        </div>
      </div>
    </section>
  )
}
