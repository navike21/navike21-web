import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const webDevelopmentPt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.WEB_DEVELOPMENT,
  title: 'Desenvolvimento Web',
  descriptionLite:
    'Criamos sites modernos, seguros e de alto desempenho, projetados para se destacar, atrair e converter em um ambiente digital altamente competitivo.',
  path: `${servicesMenu.path}/desenvolvimento-web`,
  slug: 'desenvolvimento-web',
  pageSections: {
    metaTag: {
      title: `Desenvolvimento Web | ${COMPANY_NAME}`,
      description:
        'Criamos sites adaptados às suas necessidades, com foco em desempenho, segurança e usabilidade para se destacar no ambiente digital.',
      keywords: [
        'desenvolvimento web',
        'sites',
        'páginas web',
        'web responsivo',
        'desenvolvimento sob medida',
        'otimização de sites',
        'design web adaptativo',
        'tecnologia web moderna'
      ],
      ogTitle: `Desenvolvimento Web | ${COMPANY_NAME}`,
      ogDescription:
        'Impulsione sua presença online com sites otimizados e projetados para a experiência do usuário, com alto desempenho e acessibilidade.',
      ogImage: coverImage,
      twitterTitle: `Desenvolvimento Web | ${COMPANY_NAME}`,
      twitterDescription:
        'Desenvolvemos sites de alto desempenho que melhoram a experiência do usuário e maximizam o impacto digital do seu negócio.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Desenvolvimento Web Profissional',
      description:
        'Impulsione sua presença online com sites personalizados, projetados para velocidade, segurança e desempenho, utilizando as últimas tendências e tecnologias do desenvolvimento web moderno.'
    },
    description: {
      title: 'Soluções Web Adaptadas ao Seu Negócio',
      description:
        'Desde a definição de requisitos até o lançamento final, criamos experiências web intuitivas, robustas e escaláveis. Utilizamos metodologias ágeis e ferramentas modernas para que seu projeto tenha uma base sólida desde o início.',
      description2:
        'Nosso foco está na excelência técnica, acessibilidade e eficiência. Seja uma landing page ou um sistema web complexo, garantimos que seu site funcione perfeitamente e esteja preparado para crescer junto com seu negócio.'
    },
    features: {
      title: 'O Que Inclui Nosso Serviço?',
      items: [
        {
          title: 'Sites de Alto Desempenho',
          description:
            'Otimizamos cada aspecto técnico para garantir tempos de carregamento mínimos, boa experiência do usuário e resultados sólidos de qualquer dispositivo.'
        },
        {
          title: 'Design Responsivo',
          description:
            'Seu site ficará perfeito em telas de qualquer tamanho, garantindo uma experiência consistente de desktops a dispositivos móveis.'
        },
        {
          title: 'Otimização de Recursos',
          description:
            'Reduzimos o peso de imagens e arquivos com técnicas de compressão avançada, sem comprometer a qualidade visual ou a funcionalidade.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Planejamento Estratégico',
        description:
          'Definimos com você os objetivos do projeto, as funcionalidades principais e um roadmap claro para o desenvolvimento.'
      },
      {
        title: 'Design e Prototipagem',
        description:
          'Geramos wireframes ou protótipos funcionais que servem como guia visual para estruturar o desenvolvimento e validar ideias antes de codificar.'
      },
      {
        title: 'Desenvolvimento e Validação',
        description:
          'Implementamos o site usando ferramentas modernas e realizamos testes rigorosos para garantir desempenho, compatibilidade e estabilidade.'
      },
      {
        title: 'Lançamento e Suporte',
        description:
          'Publicamos seu site no ambiente de produção e, se desejar, oferecemos um plano de suporte mensal para mantê-lo atualizado, seguro e funcional.'
      }
    ],
    recentWorks: {
      title: 'Projetos Realizados',
      description:
        'Conheça alguns projetos recentes que mostram como combinamos estratégia, tecnologia e execução para entregar resultados web excepcionais.'
    },
    callToAction: {
      title: 'Pronto para Desenvolver Seu Próximo Projeto Web?',
      description:
        'Vamos conversar sobre suas necessidades e descobrir como podemos ajudá-lo a construir uma solução web eficaz, escalável e adaptada ao seu negócio.',
      textButton: 'Fale Conosco sobre Seu Projeto'
    }
  }
})
