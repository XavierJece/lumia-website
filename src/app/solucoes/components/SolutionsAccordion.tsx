'use client'

import { Accordion } from '@radix-ui/react-accordion'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/shared/components/atoms/ui/accordion'
import { ISolutionContent } from '~/shared/data/solutionContent'
import { SolutionItem } from './SolutionItem'

interface SolutionsAccordionProps {
  sections: ISolutionContent[]
}

export function SolutionsAccordion({ sections }: SolutionsAccordionProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <Accordion
          type="multiple"
          defaultValue={sections.map((s) => s.href)}
          className="space-y-6"
        >
          {sections.map((section) => (
            <AccordionItem
              key={section.href}
              value={section.href}
              className="bg-card rounded-lg shadow-soft border border-border overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-foreground">
                      {section.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {section.forWhom}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-4 pt-2">
                  {section.services.map((service) => (
                    <SolutionItem key={service} service={service} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
