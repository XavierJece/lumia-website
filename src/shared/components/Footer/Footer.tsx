import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { footerContent } from '~/shared/data/footerContent'
import { Logo } from '../Logo/Logo'

const ContactIcon: Record<'phone' | 'mail' | 'address', ReactElement> = {
  phone: <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />,
  mail: <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />,
  address: <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />,
}

const SocialIcon: Record<'instagram' | 'linkedin', ReactElement> = {
  instagram: <Instagram size={18} />,
  linkedin: <Linkedin size={18} />,
}

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pb-4">
      <div className="container-lumia section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1 flex items-center justify-center flex-col">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Logo variant="simple" colorScheme="color" className="" />
          </Link>
          <p className="text-secondary-foreground/80 text-sm leading-relaxed text-center">
            Soluções ambientais inteligentes para empresas que buscam
            regularização, segurança e tranquilidade.
          </p>
        </div>

        {footerContent.columns.map((column) => (
          <div key={column.title}>
            <h4 className="font-heading font-semibold text-lg mb-6">
              {column.title}
            </h4>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-6">Contato</h4>
          <ul className="space-y-4">
            {footerContent.social.contactItems.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                {ContactIcon[item.type]}
                <Link
                  href={item.href}
                  className="text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
                  target="_blank"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            {footerContent.social.socialNetworks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={item.label}
              >
                {SocialIcon[item.platform]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <span className="px-4 mt-8 pt-4 border-t border-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 text-sm text-center">
        © {new Date().getFullYear()} LUMIA Consultoria e Engenharia Integrada.
        Todos os direitos reservados.
      </span>
    </footer>
  )
}

export default Footer
