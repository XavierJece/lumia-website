import { Calendar, CheckCircle, Handshake, Search } from 'lucide-react'

import type { ITimelineStep } from './types'

/**
 * Static data for the Timeline Methodology component.
 * Contains 4 complete steps matching PRD specifications exactly.
 */
export const timelineSteps: ITimelineStep[] = [
  {
    id: 1,
    header: 'ETAPA 1',
    title: 'Diagnóstico & Estratégia',
    keyQuestion:
      'Pergunta que respondemos: Qual é o cenário completo de exigências legais para o seu negócio?',
    description:
      'Realizamos uma análise técnica minuciosa para identificar todos os requisitos legais municipais, estaduais e federais aplicáveis à sua operação.',
    diferencial:
      'Utilizamos um checklist inteligente e um banco de dados de processos similares para garantir que nenhuma exigência passe despercebida, eliminando surpresas futuras.',
    practicalExample:
      'Para um novo empreendimento comercial, identificamos a necessidade de licenças prévias do corpo de bombeiros, secretaria de meio ambiente e departamento de zoneamento urbano no primeiro relatório.',
    icon: Search,
  },
  {
    id: 2,
    header: 'ETAPA 2',
    title: 'Tradução & Planejamento',
    keyQuestion:
      'Pergunta que respondemos: Como transformamos a legislação complexa em um plano de ação claro para a sua equipe?',
    description:
      'Traduzimos a linguagem técnica e burocrática dos órgãos em um roadmap claro, com responsabilidades, prazos e documentos necessários, todos em linguagem acessível.',
    diferencial:
      'Desenvolvemos cronogramas visuais e relatórios executivos que permitem que você, gestor, acompanhe o progresso sem necessidade de conhecimento técnico profundo.',
    practicalExample:
      'Para a renovação de uma licença de operação, criamos um calendário compartilhado com todos os prazos de envio de relatórios, vistorias e pagamentos de taxas.',
    icon: Calendar,
  },
  {
    id: 3,
    header: 'ETAPA 3',
    title: 'Mediação & Gestão',
    keyQuestion:
      'Pergunta que respondemos: Como atuamos como sua ponte com os órgãos fiscais, poupando seu tempo e nervosismo?',
    description:
      'Atuamos como seu representante técnico e gestor do processo, realizando todos os trâmites, protocolos e comunicações necessárias com as instâncias governamentais.',
    diferencial:
      'Nossos consultores possuem relacionamento construído e know-how das vias mais ágeis em cada órgão, acelerando respostas e resolvendo pendências de forma proativa.',
    practicalExample:
      'Em um processo de licenciamento, nossa equipe é responsável por protocolar a documentação, acompanhar o andamento processual e responder a todos os ofícios e requerimentos dos analistas.',
    icon: Handshake,
  },
  {
    id: 4,
    header: 'ETAPA 4',
    title: 'Conformidade & Entrega',
    keyQuestion:
      'Pergunta que respondemos: Como garantimos que sua empresa não apenas se regularize, mas opere com segurança jurídica contínua?',
    description:
      'Conduzimos o processo até a emissão final do documento e oferecemos um plano de compliance pós-entrega, para que você mantenha-se em conformidade.',
    diferencial:
      'Entregamos um "Kit de Conformidade" personalizado com os documentos, alertas de renovação e um canal direto para consultas rápidas, assegurando tranquilidade duradoura.',
    practicalExample:
      'Após a concessão da Licença de Operação, emitimos um certificado de conformidade e agendamos automaticamente uma reunião de alerta 6 meses antes do vencimento para a renovação.',
    icon: CheckCircle,
  },
]
