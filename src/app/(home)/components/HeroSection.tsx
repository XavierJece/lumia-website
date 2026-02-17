import { ArrowRight, Leaf } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'
import { Link } from '~/shared/components/atoms/ui/link'
import { Text } from '~/shared/components/atoms/ui/text'
import { heroContent } from '~/shared/data/homeContent'

export default function HeroSection() {
  return (
    <section className="bg-gradient-subtle overflow-hidden">
      <div className="container-lumia section-padding">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
            <Leaf size={16} />
            {heroContent.title}
          </span>
          <Text
            components={{
              p: (props) => (
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-accent-foreground mb-6 leading-tight animate-fade-up stagger-1"
                  {...props}
                />
              ),
            }}
          >
            {heroContent.subtitle}
          </Text>
          <Text
            components={{
              p: (props) => (
                <p
                  className="text-lg sm:text-xl text-accent-foreground/80 mb-8 leading-relaxed animate-fade-up stagger-2"
                  {...props}
                />
              ),
            }}
          >
            {heroContent.description}
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8"
            >
              <Link
                href={heroContent.buttons[0].link}
                className="hover:no-underline"
                trackParams={{
                  category: 'Home',
                  section_page: 'Hero',
                  label: heroContent.buttons[0].label,
                }}
              >
                {heroContent.buttons[0].label}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="tertiary"
              className="font-semibold text-lg px-8 shadow-elevated"
            >
              <Link
                href={heroContent.buttons[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:no-underline hover:text-horizon-green"
                trackParams={{
                  category: 'Home',
                  section_page: 'Hero',
                  label: heroContent.buttons[1].label,
                  is_cta: true,
                }}
              >
                {heroContent.buttons[1].label}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-2 left-1 lg:top-10 xl:top-20 lg:left-10 size-20 bg-gradient-nature rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/4 right-1 lg:top-1/3 lg:right-10 size-12 bg-gradient-forest rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="relative -bottom-6 xl:absolute xl:top-1/2 xl:left-5 size-16 bg-accent rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  )
}
