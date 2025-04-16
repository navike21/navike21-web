import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const customSoftwareServicePt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.CUSTOM_SOFTWARE,
  title: 'Software Sob Medida',
  descriptionLite:
    'Desenvolvemos soluções de software personalizadas que se adaptam perfeitamente às necessidades únicas do seu negócio, aumentando a eficiência e a competitividade.',
  path: `${servicesMenu.path}/software-sob-medida`,
  slug: 'software-sob-medida',
  pageSections: {
    metaTag: {
      title: `Desenvolvimento de Software Sob Medida | ${COMPANY_NAME}`,
      description:
        'Criamos softwares sob medida para otimizar seus processos, aumentar a escalabilidade e melhorar a competitividade do seu negócio.',
      keywords: [
        'software sob medida',
        'desenvolvimento personalizado',
        'soluções empresariais',
        'aplicativos personalizados',
        'software corporativo',
        'desenvolvimento de software',
        'sistemas customizados',
        'engenharia de software'
      ],
      ogTitle: `Software Sob Medida para sua Empresa | ${COMPANY_NAME}`,
      ogDescription:
        'Projetamos soluções tecnológicas sob medida para melhorar a operação e eficiência da sua empresa.',
      ogImage: coverImage,
      twitterTitle: `Desenvolvimento de Software Sob Medida | ${COMPANY_NAME}`,
      twitterDescription:
        'Soluções tecnológicas personalizadas, seguras e escaláveis para empresas exigentes.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Soluções em Software Sob Medida',
      description:
        'Desenvolvemos softwares personalizados que atendem perfeitamente às necessidades e desafios específicos da sua empresa.'
    },
    description: {
      title: 'Software feito sob medida para o seu negócio',
      description:
        'Oferecemos soluções personalizadas para desktop, mobile e sistemas integrados que aumentam o desempenho e reduzem custos.',
      description2:
        'Trabalhamos com agilidade e foco na qualidade para entregar software de alto valor e fácil manutenção.'
    },
    features: {
      title: 'O que inclui o serviço',
      items: [
        {
          title: 'Arquitetura personalizada',
          description:
            'Projetamos a estrutura do sistema com foco em segurança, escalabilidade e performance.'
        },
        {
          title: 'Desenvolvimento full-stack',
          description:
            'Nossa equipe especializada entrega soluções completas utilizando tecnologias como React, Node.js, .NET, Java e outras.'
        },
        {
          title: 'Integração de APIs e sistemas',
          description:
            'Conectamos seus sistemas a plataformas externas e internas com APIs robustas.'
        },
        {
          title: 'Testes e controle de qualidade',
          description:
            'Aplicamos testes automatizados e manuais para garantir estabilidade, desempenho e segurança.'
        },
        {
          title: 'Tecnologias em nuvem',
          description:
            'Utilizamos AWS, Google Cloud e Azure para garantir infraestrutura escalável e confiável.'
        },
        {
          title: 'Metodologias ágeis',
          description:
            'Trabalhamos com Scrum e Kanban para adaptar-se às mudanças e entregar valor continuamente.'
        },
        {
          title: 'Treinamento personalizado',
          description:
            'Fornecemos treinamentos completos para garantir o uso eficiente do software pelos usuários.'
        },
        {
          title: 'Suporte pós-projeto (serviço adicional)',
          description:
            'Oferecemos suporte contínuo, atualizações e melhorias sob demanda como serviço complementar.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Análise e levantamento de requisitos',
        description:
          'Entendemos a fundo o seu negócio para definir objetivos claros para o sistema.'
      },
      {
        title: 'Arquitetura e planejamento técnico',
        description:
          'Desenhamos a solução mais adequada com foco em eficiência, segurança e viabilidade técnica.'
      },
      {
        title: 'Desenvolvimento front-end e back-end',
        description:
          'Criamos interfaces intuitivas e funcionalidades robustas em uma base de código unificada.'
      },
      {
        title: 'Testes automatizados e integração contínua',
        description:
          'Usamos CI/CD e testes para garantir qualidade e agilidade na entrega.'
      },
      {
        title: 'Implantação e monitoramento',
        description:
          'Publicamos a aplicação e realizamos o monitoramento para garantir performance e estabilidade.'
      },
      {
        title: 'Treinamento e entrega de documentação',
        description:
          'Capacitamos a equipe interna com manuais e treinamento para uso eficaz da ferramenta.'
      },
      {
        title: 'Manutenção e suporte contínuo (adicional)',
        description:
          'Serviço adicional que inclui correções, atualizações e novas funcionalidades conforme necessário.'
      }
    ],
    recentWorks: {
      title: 'Projetos Recentes',
      description:
        'Veja alguns projetos de software sob medida que já realizamos para nossos clientes.'
    },
    callToAction: {
      title: 'Quer um software sob medida para seu negócio?',
      description:
        'Fale com a nossa equipe e vamos juntos construir uma solução perfeita para sua empresa.',
      textButton: 'Solicite uma proposta'
    }
  }
})
