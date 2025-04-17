import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const seoPt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.SEO,
  title: 'Otimização de SEO',
  descriptionLite:
    'Melhoramos a visibilidade do seu site nos motores de busca para atrair mais tráfego orgânico de qualidade.',
  path: `${servicesMenu.path}/seo`,
  slug: 'seo',
  pageSections: {
    metaTag: {
      title: `Otimização de SEO | ${COMPANY_NAME}`,
      description:
        'Melhoramos a visibilidade do seu site nos motores de busca para atrair mais tráfego orgânico de qualidade.',
      keywords: [
        'SEO',
        'otimização para mecanismos de busca',
        'posicionamento web',
        'SEO técnico',
        'SEO on-page',
        'análise de palavras-chave',
        'SEO local',
        'relatórios de SEO'
      ],
      ogTitle: `Otimização de SEO | ${COMPANY_NAME}`,
      ogDescription:
        'Melhoramos o posicionamento do seu site para que ele apareça nas primeiras posições dos motores de busca.',
      ogImage: coverImage,
      twitterTitle: `Otimização de SEO | ${COMPANY_NAME}`,
      twitterDescription:
        'Aumente sua visibilidade online e atraia mais tráfego orgânico com nossos serviços de SEO personalizados.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Seja Encontrado Primeiro',
      description:
        'Otimizamos sua presença online para que seus produtos ou serviços apareçam nas primeiras posições de busca.'
    },
    description: {
      title: 'SEO Técnico e de Conteúdo',
      description:
        'Nos concentramos em auditar e melhorar o desempenho técnico do seu site, ao mesmo tempo em que otimizamos os conteúdos com base em palavras-chave relevantes.',
      description2:
        'Nosso objetivo é aumentar o tráfego orgânico e melhorar o posicionamento da sua marca em buscadores como o Google.'
    },
    features: {
      title: 'O Que Está Incluído no Nosso Serviço?',
      items: [
        {
          title: 'Auditoria Técnica de SEO',
          description:
            'Revisamos o estado técnico do seu site: velocidade, estrutura, tags, URLs, redirecionamentos, indexação e mais.'
        },
        {
          title: 'Otimização On-Page',
          description:
            'Melhoramos títulos, metadescrições, estrutura de cabeçalhos e links internos seguindo as boas práticas.'
        },
        {
          title: 'Análise de Palavras-Chave',
          description:
            'Identificamos as buscas mais relevantes para o seu negócio e as integramos naturalmente ao seu conteúdo.'
        },
        {
          title: 'SEO Local (opcional)',
          description:
            'Se o seu negócio for local, melhoramos sua presença em mapas, diretórios e resultados de busca geolocalizados.'
        },
        {
          title: 'Monitoramento e Relatórios',
          description:
            'Entregamos relatórios com métricas-chave como tráfego orgânico, posição das palavras-chave e evolução do site.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Diagnóstico Inicial',
        description:
          'Analisamos seu site e identificamos problemas técnicos, de conteúdo e oportunidades de melhoria.'
      },
      {
        title: 'Estratégia de SEO',
        description:
          'Desenhamos um plano focado no tipo de negócio, mercado-alvo e buscas relevantes.'
      },
      {
        title: 'Otimização Contínua',
        description:
          'Aplicamos melhorias técnicas e de conteúdo, monitoramos os resultados e ajustamos a estratégia quando necessário.'
      },
      {
        title: 'Entrega de Resultados',
        description:
          'Apresentamos a evolução do SEO por meio de relatórios claros, com foco em retorno e crescimento.'
      }
    ],
    recentWorks: {
      title: 'Projetos com Resultados Reais',
      description:
        'Ajudamos empresas a escalar nos resultados de busca e aumentar o tráfego sem depender apenas de anúncios pagos.'
    },
    callToAction: {
      title: 'Faça Seu Site Trabalhar por Você',
      description:
        'Aumente sua visibilidade no Google e atraia mais clientes com uma estratégia de SEO personalizada.',
      textButton: 'Quero melhorar meu posicionamento'
    }
  }
})
