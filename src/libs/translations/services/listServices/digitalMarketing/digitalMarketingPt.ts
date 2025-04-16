import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const digitalMarketingPt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.DIGITAL_MARKETING,
  title: 'Marketing Digital',
  descriptionLite:
    'Impulsionamos sua marca no ambiente digital com estratégias personalizadas, publicidade eficaz e uma presença forte nas redes sociais.',
  path: `${servicesMenu.path}/marketing-digital`,
  slug: 'marketing-digital',
  pageSections: {
    metaTag: {
      title: `Marketing Digital | Estratégias e Publicidade Online | ${COMPANY_NAME}`,
      description:
        'Impulsione sua marca com estratégias de marketing digital, campanhas pagas, redes sociais e conteúdo otimizado. Resultados mensuráveis com a navike21.',
      ogTitle: `Marketing Digital | Estratégias e Publicidade Online | ${COMPANY_NAME}`,
      ogDescription:
        'Aumente sua presença online com campanhas personalizadas, redes sociais e anúncios eficazes. Resultados reais com a navike21.',
      ogImage: coverImage,
      twitterTitle: `Marketing Digital | Estratégias Online | ${COMPANY_NAME}`,
      twitterDescription:
        'Campanhas digitais, redes sociais e publicidade online que geram resultados. Descubra o que a navike21 pode fazer pela sua marca.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Estratégias Digitais que Geram Resultados',
      description:
        'Desenhamos e executamos campanhas digitais alinhadas aos objetivos do seu negócio, otimizando sua visibilidade online e atraindo os clientes certos.'
    },
    description: {
      title: 'Marketing Personalizado para o seu Negócio',
      description:
        'Analisamos sua situação atual e criamos um plano estratégico de marketing digital adaptado aos seus objetivos, orçamento e público-alvo. Nosso foco é gerar impacto real e mensurável.',
      description2:
        'Nos tornamos parceiros no seu crescimento digital, monitorando constantemente as campanhas e realizando ajustes necessários para maximizar o retorno sobre investimento (ROI).'
    },
    features: {
      title: 'O que Inclui Nosso Serviço?',
      items: [
        {
          title: 'Publicidade em Plataformas Digitais',
          description:
            'Gerenciamos campanhas pagas no Google Ads, Meta Ads, TikTok Ads e mais, otimizadas para atrair tráfego qualificado e gerar conversões.'
        },
        {
          title: 'Gestão de Redes Sociais',
          description:
            'Criamos estratégias de conteúdo e gerenciamos suas contas para construir uma comunidade fiel e impulsionar sua presença digital.'
        },
        {
          title: 'Criação de Conteúdo',
          description:
            'Desenhamos peças gráficas e redigimos textos persuasivos que conectam com seu público-alvo em cada etapa do funil.'
        },
        {
          title: 'Instalação de Pixels e Ferramentas de Medição',
          description:
            'Configuramos os pixels de acompanhamento do Facebook, TikTok, Google Ads e Adobe para medir com precisão o desempenho de suas campanhas.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Diagnóstico e Objetivos',
        description:
          'Avaliamo sua presença atual e definimos metas claras de marketing digital com base no seu negócio.'
      },
      {
        title: 'Planejamento Estratégico',
        description:
          'Criamos um plano de ação detalhado que define as plataformas a serem usadas, tipos de conteúdo, investimentos e cronograma de campanhas.'
      },
      {
        title: 'Execução de Campanhas',
        description:
          'Colocamos as campanhas em prática com execução profissional, garantindo segmentação adequada e criatividade adaptada.'
      },
      {
        title: 'Medição e Otimização',
        description:
          'Monitoramos os resultados e ajustamos em tempo real para maximizar o desempenho e alcançar os objetivos estabelecidos.'
      }
    ],
    recentWorks: {
      title: 'Campanhas que Fazem a Diferença',
      description:
        'Descubra casos onde nossas estratégias digitais aumentaram a presença online de marcas em diversos setores.'
    },
    callToAction: {
      title: 'Pronto para Impulsionar Sua Marca?',
      description:
        'Vamos conversar sobre suas metas e criar juntos uma estratégia de marketing digital que impulsione seus resultados.',
      textButton: 'Quero melhorar meu marketing'
    }
  }
})
