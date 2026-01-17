import { valuesContent } from '~/shared/data/aboutContent'

export default function ValuesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            O que nos guia
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            {valuesContent.title}
          </h2>
          <p className="text-muted-foreground">{valuesContent.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesContent.values.map((value) => (
            <div
              key={value.title}
              className="bg-card p-6 rounded-xl shadow-soft border border-border text-center hover-lift"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
