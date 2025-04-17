import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const emailingPt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.EMAIL_MARKETING,
  title: 'Email Marketing',
  descriptionLite:
    'Conecte-se com seus clientes de forma direta e eficaz por meio de campanhas personalizadas por e-mail.',
  path: `${servicesMenu.path}/email-marketing`,
  slug: 'email-marketing',
  pageSections: {
    metaTag: {
      title: `Email Marketing | Campanhas Eficazes | ${COMPANY_NAME}`,
      description:
        'Criamos e desenvolvemos campanhas de email marketing personalizadas com HTML responsivo, automação e segmentação precisa para maximizar os resultados.',
      ogTitle: `Email Marketing | Campanhas Eficazes | ${COMPANY_NAME}`,
      ogDescription:
        'Impulsione sua comunicação com campanhas de e-mail bem projetadas, automatizadas e segmentadas para conectar com seu público no momento certo.',
      ogImage: coverImage,
      twitterTitle: `Email Marketing | Estratégias Personalizadas | ${COMPANY_NAME}`,
      twitterDescription:
        'Crie campanhas de email marketing que convertem: design visual, desenvolvimento HTML responsivo, automação e segmentação inteligente.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Campanhas de E-mail que Conectam e Convencem',
      description:
        'Criamos estratégias de email marketing com designs impactantes e segmentação precisa para melhorar sua comunicação e fidelização.'
    },
    description: {
      title: 'Mensagens que Chegam, Designs que Impactam',
      description:
        'Cuidamos do design e desenvolvimento do HTML para suas campanhas, garantindo compatibilidade em todos os dispositivos e clientes de e-mail.',
      description2:
        'Além disso, implementamos estratégias automatizadas e segmentadas usando plataformas como Mailchimp, garantindo que cada mensagem chegue ao público certo no momento certo.'
    },
    features: {
      title: 'O que Inclui Nosso Serviço?',
      items: [
        {
          title: 'Design e Layout de E-mails',
          description:
            'Criamos peças visuais alinhadas com sua marca e as desenvolvemos em HTML otimizado para todos os dispositivos e gerenciadores de e-mail.'
        },
        {
          title: 'Configuração de Plataformas',
          description:
            'Implementamos e configuramos ferramentas como Mailchimp, para centralizar suas campanhas e audiências.'
        },
        {
          title: 'Automação de Fluxos',
          description:
            'Criamos fluxos automatizados, como e-mails de boas-vindas, carrinhos abandonados ou newsletters recorrentes para manter o contato com sua audiência.'
        },
        {
          title: 'Segmentação de Audiências',
          description:
            'Segmentamos suas listas de contatos com base em comportamento, interesses ou dados demográficos para melhorar a taxa de abertura e conversão.'
        },
        {
          title: 'Medição e Relatórios',
          description:
            'Analisamos o desempenho de cada campanha (aberturas, cliques, conversões) para otimizar os envios futuros.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Briefing de Comunicação',
        description:
          'Definimos objetivos, tom, frequência e tipo de conteúdo a ser enviado de acordo com sua estratégia comercial.'
      },
      {
        title: 'Design e Desenvolvimento do E-mail',
        description:
          'Criamos o design visual e o desenvolvemos em HTML responsivo para garantir a exibição correta.'
      },
      {
        title: 'Implementação no Mailchimp',
        description:
          'Subimos e configuramos a campanha, segmentamos a audiência e deixamos tudo pronto para envio ou automação.'
      },
      {
        title: 'Envio, Medição e Otimização',
        description:
          'Lançamos a campanha, medimos os resultados e fazemos melhorias contínuas para aumentar sua efetividade.'
      }
    ],
    recentWorks: {
      title: 'Campanhas de Alto Impacto',
      description:
        'Explore alguns dos nossos designs de email marketing que alcançaram altas taxas de abertura e conversão.'
    },
    callToAction: {
      title: 'Quer se Comunicar Melhor com Seu Público?',
      description:
        'Criamos e-mails visuais, funcionais e com resultados. Vamos começar sua próxima campanha de Email Marketing hoje.',
      textButton: 'Quero uma campanha eficaz'
    }
  }
})
