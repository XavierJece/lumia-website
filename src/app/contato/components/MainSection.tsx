import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/shared/components/atoms/ui/button'
import {
  contactInfo,
  IContactInfoItem,
  ISocialNetworkContactItem,
  socialNetworksContent,
} from '~/shared/data/contact'

interface IContactInfoProps {
  contactInfo: IContactInfoItem
}

interface SocialLinkProps {
  socialNetworksContent: ISocialNetworkContactItem
}

function ContactInfo({ contactInfo }: IContactInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <contactInfo.icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{contactInfo.title}</h3>
        <Link
          href={contactInfo.href}
          className="text-muted-foreground hover:text-primary-green transition-colors text-sm"
          target={contactInfo.href === '#' ? '_self' : '_blank'}
        >
          {contactInfo.label}
        </Link>
      </div>
    </div>
  )
}

function SocialLink({ socialNetworksContent }: SocialLinkProps) {
  return (
    <a
      href={socialNetworksContent.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-5 py-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group"
    >
      <socialNetworksContent.icon size={20} />
      <span className="font-medium">{socialNetworksContent.label}</span>
    </a>
  )
}

export default function MainSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp CTA */}
          <div className="bg-primary rounded-2xl p-8 sm:p-10 text-primary-foreground">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Fale Diretamente com um Especialista
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              O jeito mais rápido de resolver sua demanda ambiental. Clique no
              botão abaixo e inicie uma conversa agora mesmo. Responderemos o
              mais breve possível!
            </p>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-10 shadow-elevated"
            >
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de saber tirar uma dúvida sobre os serviços da LUMIA.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir WhatsApp
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                {contactInfo.map((contact) => (
                  <ContactInfo key={contact.title} contactInfo={contact} />
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {socialNetworksContent.map((socialItem) => (
                  <SocialLink
                    key={socialItem.href}
                    socialNetworksContent={socialItem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
