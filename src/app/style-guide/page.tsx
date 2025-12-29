'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '~/shared/components/atoms/ui/button'
import { Card } from '~/shared/components/Card/Card'
import { FormField } from '~/shared/components/Form/FormField'
import { Input } from '~/shared/components/Form/Input'
import { Label } from '~/shared/components/Form/Label'
import { LoadingIcon } from '~/shared/components/Loading/Loading'
import { Logo } from '~/shared/components/Logo/Logo'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { GlassCard } from '~/shared/components/ui/GlassCard'
import GlassContainer from '~/shared/components/ui/GlassContainer'
import { colors } from '~/shared/styles/colors'

export default function StyleGuidePage() {
  const [inputValue, setInputValue] = useState('')
  const [formError, setFormError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (e.target.value.length < 3) {
      setFormError('O campo deve ter pelo menos 3 caracteres')
    } else {
      setFormError('')
    }
  }

  return (
    <div className="min-h-screen bg-white-essential">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <Heading level={1} className="mb-8">
          Guia de Estilo - Lumia Consultoria
        </Heading>

        {/* Color Palette Section */}
        <section className="mb-16">
          <Heading level={2} className="mb-6">
            Paleta de Cores
          </Heading>

          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="font-maven text-h3 text-neutral-800 mb-4">
              Cores Principais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ColorSwatch
                name="Verde Primário"
                hex={colors['primary-green']}
                className="bg-primary-green"
              />
              <ColorSwatch
                name="Verde Secundário"
                hex={colors['secondary-green']}
                className="bg-secondary-green"
              />
              <ColorSwatch
                name="Amarelo Acentuado"
                hex={colors['accent-yellow']}
                className="bg-accent-yellow"
              />
              <ColorSwatch
                name="Branco Essencial"
                hex={colors['white-essential']}
                className="bg-white-essential border border-neutral-200"
              />
            </div>
          </div>

          {/* Green Scale */}
          <div className="mb-8">
            <h3 className="font-maven text-h3 text-neutral-800 mb-4">
              Escala de Verde
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              <ColorSwatch
                name="Verde 50"
                hex={colors.green[50]}
                className="bg-green-50"
              />
              <ColorSwatch
                name="Verde 100"
                hex={colors.green[100]}
                className="bg-green-100"
              />
              <ColorSwatch
                name="Verde 200"
                hex={colors.green[200]}
                className="bg-green-200"
              />
              <ColorSwatch
                name="Verde 300"
                hex={colors.green[300]}
                className="bg-green-300"
              />
              <ColorSwatch
                name="Verde 400"
                hex={colors.green[400]}
                className="bg-green-400"
              />
              <ColorSwatch
                name="Verde 500"
                hex={colors.green[500]}
                className="bg-green-500"
              />
              <ColorSwatch
                name="Verde 600"
                hex={colors.green[600]}
                className="bg-green-600"
              />
              <ColorSwatch
                name="Verde 700"
                hex={colors.green[700]}
                className="bg-green-700"
              />
              <ColorSwatch
                name="Verde 800"
                hex={colors.green[800]}
                className="bg-green-800"
              />
              <ColorSwatch
                name="Verde 900"
                hex={colors.green[900]}
                className="bg-green-900"
              />
            </div>
          </div>

          {/* Yellow Scale */}
          <div className="mb-8">
            <h3 className="font-maven text-h3 text-neutral-800 mb-4">
              Escala de Amarelo
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              <ColorSwatch
                name="Amarelo 50"
                hex={colors.yellow[50]}
                className="bg-yellow-50"
              />
              <ColorSwatch
                name="Amarelo 100"
                hex={colors.yellow[100]}
                className="bg-yellow-100"
              />
              <ColorSwatch
                name="Amarelo 200"
                hex={colors.yellow[200]}
                className="bg-yellow-200"
              />
              <ColorSwatch
                name="Amarelo 300"
                hex={colors.yellow[300]}
                className="bg-yellow-300"
              />
              <ColorSwatch
                name="Amarelo 400"
                hex={colors.yellow[400]}
                className="bg-yellow-400"
              />
              <ColorSwatch
                name="Amarelo 500"
                hex={colors.yellow[500]}
                className="bg-yellow-500"
              />
              <ColorSwatch
                name="Amarelo 600"
                hex={colors.yellow[600]}
                className="bg-yellow-600"
              />
              <ColorSwatch
                name="Amarelo 700"
                hex={colors.yellow[700]}
                className="bg-yellow-700"
              />
              <ColorSwatch
                name="Amarelo 800"
                hex={colors.yellow[800]}
                className="bg-yellow-800"
              />
              <ColorSwatch
                name="Amarelo 900"
                hex={colors.yellow[900]}
                className="bg-yellow-900"
              />
            </div>
          </div>

          {/* Neutral Scale */}
          <div className="mb-8">
            <h3 className="font-maven text-h3 text-neutral-800 mb-4">
              Escala de Neutros
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-4">
              <ColorSwatch
                name="Cinza 50"
                hex={colors.neutral[50]}
                className="bg-neutral-50"
              />
              <ColorSwatch
                name="Cinza 100"
                hex={colors.neutral[100]}
                className="bg-neutral-100"
              />
              <ColorSwatch
                name="Cinza 200"
                hex={colors.neutral[200]}
                className="bg-neutral-200"
              />
              <ColorSwatch
                name="Cinza 300"
                hex={colors.neutral[300]}
                className="bg-neutral-300"
              />
              <ColorSwatch
                name="Cinza 400"
                hex={colors.neutral[400]}
                className="bg-neutral-400"
              />
              <ColorSwatch
                name="Cinza 500"
                hex={colors.neutral[500]}
                className="bg-neutral-500"
              />
              <ColorSwatch
                name="Cinza 600"
                hex={colors.neutral[600]}
                className="bg-neutral-600"
              />
              <ColorSwatch
                name="Cinza 700"
                hex={colors.neutral[700]}
                className="bg-neutral-700"
              />
              <ColorSwatch
                name="Cinza 800"
                hex={colors.neutral[800]}
                className="bg-neutral-800"
              />
              <ColorSwatch
                name="Cinza 900"
                hex={colors.neutral[900]}
                className="bg-neutral-900"
              />
              <ColorSwatch
                name="Preto"
                hex={colors.black}
                className="bg-black"
              />
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-8">
            <h3 className="font-maven text-h3 text-neutral-800 mb-4">
              Cores Semânticas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch
                name="Sucesso"
                hex={colors.success}
                className="bg-success"
              />
              <ColorSwatch
                name="Erro"
                hex={colors.error}
                className="bg-error"
              />
              <ColorSwatch
                name="Aviso"
                hex={colors.warning}
                className="bg-warning"
              />
              <ColorSwatch name="Info" hex={colors.info} className="bg-info" />
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <Heading level={2} className="mb-6">
            Tipografia
          </Heading>

          <div className="space-y-6">
            <TypographyExample
              name="H1 - Título Principal"
              className="font-maven text-h1 text-neutral-900"
              text="Heading 1"
            />
            <TypographyExample
              name="H2 - Seções Principais"
              className="font-maven text-h2 text-neutral-900"
              text="Heading 2"
            />
            <TypographyExample
              name="H3 - Subseções"
              className="font-maven text-h3 text-neutral-800"
              text="Heading 3"
            />
            <TypographyExample
              name="H4 - Grupos de Conteúdo"
              className="font-maven text-h4 text-neutral-800"
              text="Heading 4"
            />
            <TypographyExample
              name="H5 - Subtítulos"
              className="font-maven text-h5 text-neutral-800"
              text="Heading 5"
            />
            <TypographyExample
              name="H6 - Elementos Menores"
              className="font-maven text-h6 text-neutral-800"
              text="Heading 6"
            />
            <TypographyExample
              name="Lead/Intro - Texto Introdutório"
              className="text-lead text-neutral-700"
              text="Este é um texto introdutório que serve para destacar informações importantes no início de uma seção."
            />
            <TypographyExample
              name="Body Large - Conteúdo Principal"
              className="text-body-large text-neutral-700"
              text="Este é um texto de corpo grande, ideal para artigos extensos e conteúdo principal que requer melhor legibilidade."
            />
            <TypographyExample
              name="Body Base - Texto Padrão"
              className="text-body-base text-neutral-700"
              text="Este é o texto padrão do sistema, usado na maioria dos casos para conteúdo corrido e elementos de interface."
            />
            <TypographyExample
              name="Body Small - Legendas"
              className="text-body-small text-neutral-600"
              text="Este é um texto pequeno, usado para legendas, metadados e informações secundárias."
            />
            <TypographyExample
              name="Caption - Notas"
              className="text-caption text-neutral-600"
              text="Caption text"
            />
          </div>
        </section>

        {/* Glass Components */}
        <section className="mb-16">
          <Heading level={2} className="mb-6">
            Glass Components
          </Heading>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <GlassContainer overlay className="min-h-[200px]">
              <Heading level={3} className="text-neutral-900">
                Blocos com profundidade
              </Heading>
              <Text>
                Use o GlassContainer para agrupar seções com blur e iluminação
                suave. Ele aceita overlay animado e variações de padding.
              </Text>
              <Button>
                <ArrowRight size={16} />
                Call to action
              </Button>
            </GlassContainer>
            <GlassCard
              eyebrow="Destaque"
              title="GlassCard"
              subtitle="Cartão com header e footer"
              footer={
                <Button variant="secondary" size="sm">
                  Saiba mais
                </Button>
              }
            >
              <Text>
                Use o GlassCard para conteúdos com header/footer opcionais. O
                hover levanta o card e mantém foco visível para acessibilidade.
              </Text>
            </GlassCard>
          </div>
        </section>

        {/* Components Section */}
        <section className="mb-16">
          <Heading level={2} className="mb-6">
            Componentes
          </Heading>

          {/* Buttons */}
          <div className="mb-12">
            <Heading level={3} className="mb-4 text-neutral-800">
              Botões
            </Heading>
            <div className="space-y-6">
              <div>
                <Text className="text-body-small text-neutral-600 mb-3">
                  Variantes
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">
                    <ArrowRight size={16} />
                    Botão Primário
                  </Button>
                  <Button variant="secondary">Botão Secundário</Button>
                  <Button variant="ghost">Botão Ghost</Button>
                </div>
              </div>
              <div>
                <Text className="text-body-small text-neutral-600 mb-3">
                  Tamanhos
                </Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Pequeno</Button>
                  <Button size="default">Padrão</Button>
                  <Button size="lg">Grande</Button>
                </div>
              </div>
              <div>
                <Text className="text-body-small text-neutral-600 mb-3">
                  Estados
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Button>Normal</Button>
                  <Button disabled>Desabilitado</Button>
                  <Button disabled>
                    <LoadingIcon className="animate-spin" />
                    Carregando
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Components */}
          <div className="mb-12">
            <h3 className="font-maven text-h3 text-neutral-800 mb-4">
              Componentes de Formulário
            </h3>
            <div className="space-y-6 max-w-md">
              <FormField
                label="Campo de Texto"
                inputProps={{
                  id: 'example-input',
                  placeholder: 'Digite algo...',
                  value: inputValue,
                  onChange: handleInputChange,
                }}
                error={formError}
              />
              <FormField
                label="Campo sem Erro"
                inputProps={{
                  id: 'example-input-2',
                  placeholder: 'Campo válido',
                }}
              />
              <div>
                <Label htmlFor="disabled-input">Campo Desabilitado</Label>
                <Input
                  id="disabled-input"
                  placeholder="Desabilitado"
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-12">
            <h3 className="font-maven text-h3 text-neutral-800 mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <h4 className="font-maven text-h5 text-neutral-900 mb-2">
                  Card Simples
                </h4>
                <p className="text-body-base text-neutral-700">
                  Este é um exemplo de card simples com conteúdo básico.
                </p>
              </Card>
              <Card
                header={
                  <h4 className="font-maven text-h5 text-neutral-900">
                    Card com Header
                  </h4>
                }
                footer={
                  <Button variant="primary" size="sm">
                    Ação
                  </Button>
                }
              >
                <p className="text-body-base text-neutral-700">
                  Este card possui um header e um footer com uma ação.
                </p>
              </Card>
              <Card>
                <h4 className="font-maven text-h5 text-neutral-900 mb-2">
                  Card Interativo
                </h4>
                <p className="text-body-base text-neutral-700 mb-4">
                  Passe o mouse sobre este card para ver o efeito hover.
                </p>
                <Button variant="secondary" size="sm">
                  Saiba Mais
                </Button>
              </Card>
            </div>
          </div>

          {/* Logo Usage */}
          <div className="mb-12">
            <h3 className="font-maven text-h3 text-neutral-800 mb-4">
              Uso do Logo
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-montserrat text-body-small text-neutral-600 mb-4">
                  Em Fundo Claro
                </h4>
                <div className="bg-white-essential p-8 rounded border border-neutral-200 space-y-4">
                  <div>
                    <p className="text-body-small text-neutral-600 mb-2">
                      Horizontal
                    </p>
                    <Logo variant="horizontal" colorScheme="dark" />
                  </div>
                  <div>
                    <p className="text-body-small text-neutral-600 mb-2">
                      Vertical
                    </p>
                    <Logo variant="vertical" colorScheme="dark" />
                  </div>
                  <div>
                    <p className="text-body-small text-neutral-600 mb-2">
                      Símbolo
                    </p>
                    <Logo variant="symbol" colorScheme="dark" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-montserrat text-body-small text-neutral-600 mb-4">
                  Em Fundo Escuro
                </h4>
                <div className="bg-secondary-green p-8 rounded space-y-4">
                  <div>
                    <p className="text-body-small text-white-essential mb-2">
                      Horizontal
                    </p>
                    <Logo variant="horizontal" colorScheme="light" />
                  </div>
                  <div>
                    <p className="text-body-small text-white-essential mb-2">
                      Vertical
                    </p>
                    <Logo variant="vertical" colorScheme="light" />
                  </div>
                  <div>
                    <p className="text-body-small text-white-essential mb-2">
                      Símbolo
                    </p>
                    <Logo variant="symbol" colorScheme="light" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-montserrat text-body-small text-neutral-600 mb-4">
                  Versão Colorida
                </h4>
                <div className="bg-white-essential p-8 rounded border border-neutral-200 space-y-4">
                  <div>
                    <p className="text-body-small text-neutral-600 mb-2">
                      Horizontal
                    </p>
                    <Logo variant="horizontal" colorScheme="color" />
                  </div>
                  <div>
                    <p className="text-body-small text-neutral-600 mb-2">
                      Vertical
                    </p>
                    <Logo variant="vertical" colorScheme="color" />
                  </div>
                  <div>
                    <p className="text-body-small text-neutral-600 mb-2">
                      Símbolo
                    </p>
                    <Logo variant="symbol" colorScheme="color" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ColorSwatch({
  name,
  hex,
  className,
}: {
  name: string
  hex: string
  className: string
}) {
  return (
    <div className="space-y-2">
      <div className={`h-24 rounded border border-neutral-200 ${className}`} />
      <div>
        <p className="text-body-small font-medium text-neutral-900">{name}</p>
        <p className="text-caption text-neutral-600">{hex}</p>
      </div>
    </div>
  )
}

function TypographyExample({
  name,
  className,
  text,
}: {
  name: string
  className: string
  text: string
}) {
  return (
    <div className="border-b border-neutral-200 pb-4">
      <p className="text-body-small text-neutral-600 mb-2">{name}</p>
      <p className={className}>{text}</p>
    </div>
  )
}
