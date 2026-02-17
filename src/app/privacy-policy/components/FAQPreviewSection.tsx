'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/shared/components/atoms/ui/accordion'
import { Button } from '~/shared/components/atoms/ui/button'
import { Link } from '~/shared/components/atoms/ui/link'
import { IFAQItem } from '~/shared/data/contact'

const FAQQuestionsPrivacy: IFAQItem[] = [
  {
    id: '1',
    question: 'Preciso aceitar todos os cookies para usar o site?',
    answer:
      'Não. Você pode continuar navegando normalmente mesmo após rejeitar os cookies não essenciais. Apenas funcionalidades que dependem desses cookies (como personalização avançada) podem não estar disponíveis.',
  },
  {
    id: '2',
    question: 'Como posso revogar meu consentimento depois de aceitar?',
    answer:
      'Você pode limpar os cookies do seu navegador ou utilizar a opção "Gerenciar consentimento" disponível no rodapé do site (em breve). A qualquer momento, você também pode nos contatar para solicitar a exclusão de seus dados.',
  },
  {
    id: '3',
    question: 'O Google Analytics armazena meus dados pessoais?',
    answer:
      'O Google Analytics coleta apenas dados anónimos e agregados. Não coletamos informações como nome ou e-mail através dessa ferramenta. O endereço IP é anonimizado antes de ser processado.',
  },
]

export default function FAQPreviewSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-lumia">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="mb-8 space-y-4">
            {FAQQuestionsPrivacy.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-card rounded-lg shadow-soft border border-border overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors text-left">
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mb-8">
            Ainda tem dúvidas?
            <br /> Nossa equipe está à disposição para esclarecer qualquer
            questão sobre o tratamento dos seus dados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contato">Entre em contato</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
