import { Clock, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export interface ISocialNetworkContactItem {
  platform: 'instagram' | 'linkedin' | 'tiktok'
  icon: React.ElementType
  href: string
  label: string
}

export interface IContactInfoItem {
  type: 'phone' | 'mail' | 'address' | 'hours'
  icon: React.ElementType
  href: string
  label: string
  title: string
}

export const socialNetworksContent: ISocialNetworkContactItem[] = [
  {
    platform: 'instagram',
    icon: Instagram,
    href: 'https://instagram.com/lumia.eng',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    platform: 'linkedin',
    href: 'https://linkedin.com/company/lumiaeng',
    label: 'LinkedIn',
  },
]

export const contactInfo: IContactInfoItem[] = [
  {
    type: 'phone',
    title: 'Telefone / WhatsApp',
    icon: Phone,
    label: `(11) 94226-5492`,
    href: `tel:11942265492`,
  },
  {
    icon: Mail,
    title: 'E-mail',
    type: 'mail',
    label: 'contato@lumia.com.br',
    href: `mailto:contato@lumia.com.br`,
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    type: 'hours',
    label: 'Segunda a Sexta: 8h às 18h',
    href: '#',
  },
]
