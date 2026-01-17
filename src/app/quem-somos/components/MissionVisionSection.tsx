import { missionContent, visionContent } from '~/shared/data/aboutContent'

export default function MissionVisionSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-lumia">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <missionContent.icon className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              {missionContent.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {missionContent.description}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <visionContent.icon className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              {visionContent.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {visionContent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
