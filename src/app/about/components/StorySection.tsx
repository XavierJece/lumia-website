import Image from 'next/image'
import { storyContent } from '~/shared/data/aboutContent'

export default function StorySection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              {storyContent.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {storyContent.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden shadow-card">
              <div className="w-full h-full gradient-hero flex items-center justify-center">
                {/* <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-12 h-12 text-accent" />
                  </div>
                  <p className="text-primary-foreground/80 text-lg font-medium">
                    Inovação + Tradição
                  </p>
                </div> */}
                <Image
                  src="/ket/ket6.JPEG"
                  alt="About Summary"
                  className="size-full object-cover bg-muted rounded-2xl border-2"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
