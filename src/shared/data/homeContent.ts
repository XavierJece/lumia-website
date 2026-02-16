export interface Button {
  label: string
  link: string
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: React.ElementType
}

export interface Indicator {
  label: string
  active?: boolean
  icon?: React.ElementType
}

export interface HeroContent {
  title: string
  subtitle: string
  description: string
  buttons: Button[]
  indicators?: Indicator[]
  backgroundImage?: string
  tagline: string
}

export const heroContent: HeroContent = {
  tagline: 'Regularização ambiental e legal para o seu negócio',
  title: `Consultoria e Engenharia Especializada`,
  subtitle: `Soluções especializadas <br /> para sua empresa`,
  description: `Atuação completa na regularização de indústrias e comércios, garantindo conformidade com as normas ambientais, vigilância, sanitária e segurança contra incêndio e liberação legal do estabelecimento. A Lumia oferece tranquilidade para seu negócio, com praticidade e eficiência.`,
  buttons: [
    {
      label: `Conheça Nossas Soluções`,
      link: `/solutions`,
    },
    {
      label: `Fale com um Especialista`,
      link: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços da LUMIA.`,
    },
  ],
}
