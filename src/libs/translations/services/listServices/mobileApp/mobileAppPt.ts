import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const mobileAppPt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.MOBILE_APP,
  title: 'Aplicações Móveis',
  descriptionLite:
    'Desenvolvemos apps personalizadas para Android e iOS, pensadas para oferecer experiências fluidas e modernas.',
  path: `${servicesMenu.path}/aplicacoes-moveis`,
  slug: 'aplicacoes-moveis',
  pageSections: {
    metaTag: {
      title: `Desenvolvimento de Aplicações Móveis | ${COMPANY_NAME}`,
      description:
        'Criamos apps personalizadas para Android e iOS que combinam desempenho, design moderno e excelente experiência de usuário.',
      keywords: [
        'desenvolvimento de aplicações móveis',
        'apps personalizadas',
        'React Native',
        'Flutter',
        'aplicações Android',
        'aplicações iOS',
        'UX/UI móvel',
        'publicação na App Store',
        'desenvolvimento multiplataforma'
      ],
      ogTitle: `Aplicações Móveis Personalizadas | ${COMPANY_NAME}`,
      ogDescription:
        'Transforme sua ideia em um app funcional, moderno e escalável. Criamos aplicações móveis para Android e iOS com design e desempenho excepcionais.',
      ogImage: coverImage,
      twitterTitle: `Aplicações Móveis Personalizadas | ${COMPANY_NAME}`,
      twitterDescription:
        'Criamos apps para Android e iOS focadas na experiência do usuário, velocidade e qualidade. Lançe seu aplicativo conosco.',
      twitterImage: coverImage
    },

    hero: {
      title: 'Apps que Colocam Seu Negócio no Bolso do Usuário',
      description:
        'Criamos aplicações móveis personalizadas que combinam desempenho, design atrativo e uma experiência de usuário impecável.'
    },
    description: {
      title: 'Soluções Móveis Sob Medida',
      description:
        'Analisamos sua necessidade, projetamos fluxos eficazes e desenvolvemos um app pensado em escalabilidade, usabilidade e eficiência.',
      description2:
        'Desde aplicativos para serviços internos até produtos comerciais, acompanhamos você em todo o processo de idealização, design e desenvolvimento.'
    },
    features: {
      title: 'O Que Está Incluído em Nosso Serviço?',
      items: [
        {
          title: 'Design UX/UI Móvel',
          description:
            'Criamos a interface visual e a experiência do usuário com foco em acessibilidade e simplicidade.'
        },
        {
          title: 'Desenvolvimento Nativo ou Multiplataforma',
          description:
            'Selecionamos a melhor tecnologia de acordo com o projeto: React Native, Flutter ou desenvolvimento nativo quando necessário.'
        },
        {
          title: 'Integração com APIs e Backends',
          description:
            'Conectamos o app com seu sistema existente ou criamos um novo, integrando serviços em nuvem, bancos de dados ou gateways.'
        },
        {
          title: 'Testes e Controle de Qualidade',
          description:
            'Realizamos testes funcionais e de desempenho para garantir que o app se adapte a diferentes dispositivos e cenários.'
        },
        {
          title: 'Publicação nas Lojas',
          description:
            'Ajudamos ou realizamos o processo de upload e publicação do app na Google Play Store e App Store.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Exploração e Análise',
        description:
          'Identificamos os objetivos do projeto, entendemos os fluxos de negócios e propomos uma solução móvel adequada.'
      },
      {
        title: 'Prototipagem UX/UI',
        description:
          'Desenhamos uma interface funcional e atraente com foco em mobile-first e validação constante.'
      },
      {
        title: 'Desenvolvimento do Aplicativo',
        description:
          'Programamos o app com tecnologias modernas, garantindo escalabilidade, velocidade e desempenho.'
      },
      {
        title: 'Testes e Entrega',
        description:
          'Realizamos testes em diferentes ambientes, corrigimos erros e entregamos o app pronto para publicação.'
      }
    ],
    recentWorks: {
      title: 'Apps que Transformam Experiências',
      description:
        'Trabalhamos em soluções móveis que conectam usuários com marcas, produtos e serviços de forma eficaz.'
    },
    callToAction: {
      title: 'Pronto para Ter Seu Próprio App?',
      description:
        'Transforme sua ideia em um aplicativo funcional, rápido e moderno. Vamos conversar sobre o que você quer construir.',
      textButton: 'Quero meu app personalizado'
    }
  }
})
