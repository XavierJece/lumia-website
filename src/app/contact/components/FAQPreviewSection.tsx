'use client'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/shared/components/atoms/ui/accordion'
import { Button } from '~/shared/components/atoms/ui/button'
import { Link } from '~/shared/components/atoms/ui/link'
import { FAQQuestionsContent } from '~/shared/data/contact'
import { event } from '~/shared/lib/gtag'

export default function FAQPreviewSection() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  const onAccordionValueChange = (value: string) => {
    if (value) {
      const openedFaq = FAQQuestionsContent.find((faq) => faq.id === value)
      event('accordion_open', {
        event_category: 'Contato',
        section_page: 'FAQ',
        question_id: value,
        question_text: openedFaq?.question || 'unknown',
      })
    } else if (openItem) {
      const closedFaq = FAQQuestionsContent.find((faq) => faq.id === openItem)
      event('accordion_close', {
        event_category: 'Contato',
        section_page: 'FAQ',
        question_id: openItem,
        question_text: closedFaq?.question || 'unknown',
      })
    }
    setOpenItem(value)
  }

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-lumia">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Dúvidas Frequentes
          </h2>

          <Accordion
            type="single"
            collapsible
            className="mb-8 space-y-4"
            onValueChange={onAccordionValueChange}
          >
            {FAQQuestionsContent.map((faq) => (
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
            Ainda tem dúvidas? Entre em contato conosco.
          </p>
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá! Gostaria de saber tirar uma dúvida sobre os serviços da LUMIA.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:no-underline"
              trackParams={{
                category: 'Contato',
                section_page: 'FAQ',
                label: 'Tire Suas Dúvidas',
                is_cta: true,
              }}
            >
              Tire Suas Dúvidas
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
