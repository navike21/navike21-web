import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const uxUiPt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.UX_UI,
  title: 'Design UX/UI',
  descriptionLite:
    'Transformamos a experiência dos seus usuários por meio de interfaces atraentes, funcionais e fáceis de usar, com foco na simplificação dos fluxos e melhoria da interação.',
  path: `${servicesMenu.path}/ux-ui`,
  slug: 'ux-ui',
  pageSections: {
    metaTag: {
      title: `Design UX/UI | ${COMPANY_NAME}`,
      description:
        'Transformamos a experiência dos seus usuários com interfaces atraentes e funcionais, simplificando fluxos e melhorando a interação.',
      keywords: [
        'design UX',
        'design UI',
        'experiência do usuário',
        'interface de usuário',
        'protótipos interativos',
        'design web',
        'design responsivo',
        'otimização UX/UI'
      ],
      ogTitle: `Design UX/UI | ${COMPANY_NAME}`,
      ogDescription:
        'Melhore a experiência dos seus usuários com um design UX/UI atraente e funcional que otimiza a interação com seu produto.',
      ogImage: coverImage,
      twitterTitle: `Design UX/UI | ${COMPANY_NAME}`,
      twitterDescription:
        'Transforme a interação com seu produto por meio de um design UX/UI focado na simplicidade e eficácia.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Design UX/UI Criativo',
      description:
        'Criamos soluções de design que melhoram a experiência dos seus usuários, simplificando os fluxos e otimizando a interação com seu produto ou serviço.'
    },
    description: {
      title: 'Soluções UX/UI Sob Medida',
      description:
        'Focados no entendimento profundo dos fluxos do seu negócio, propomos soluções UX/UI que transformam a interação dos seus usuários com o produto, simplificando cada etapa e melhorando a experiência geral.',
      description2:
        'Da concepção ao design final, nosso enfoque é criar experiências claras, intuitivas e acessíveis para o usuário final, alinhadas com seus objetivos de negócios.'
    },
    features: {
      title: 'O Que Inclui Nosso Serviço?',
      items: [
        {
          title: 'Pesquisa e Análise de Fluxos',
          description:
            'Estudamos os fluxos atuais do seu negócio, identificando pontos de melhoria e áreas de oportunidade para simplificar a experiência do usuário.'
        },
        {
          title: 'Design de Interfaces Funcionais',
          description:
            'Criação de interfaces visualmente atraentes, que refletem a identidade da sua marca e garantem uma navegação fluida e sem fricções.'
        },
        {
          title: 'Protótipos Interativos',
          description:
            'Desenhamos protótipos interativos para validar as soluções propostas antes de sua implementação, garantindo que o fluxo seja eficiente e fácil de usar.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Pesquisa e Compreensão do Negócio',
        description:
          'Mergulhamos no seu negócio para entender os objetivos e fluxos atuais, buscando maneiras de otimizar a experiência do usuário sem perder a essência do seu produto.'
      },
      {
        title: 'Análise de Fluxos e Proposta de Soluções UX',
        description:
          'Avaliamo os fluxos de trabalho e propomos soluções UX que facilitem a navegação, eliminando barreiras e maximizando a eficiência em cada interação.'
      },
      {
        title: 'Design Visual e Protótipos',
        description:
          'Criamos designs visuais alinhados à identidade da sua marca e desenvolvemos protótipos interativos para testar e ajustar o fluxo antes da implementação.'
      },
      {
        title: 'Validação e Refinamento',
        description:
          'Realizamos sessões de validação com os usuários para garantir que o design proposto seja intuitivo e atenda às expectativas, refinando os detalhes conforme o feedback recebido.'
      }
    ],
    recentWorks: {
      title: 'Projetos Recentes',
      description:
        'Conheça alguns dos projetos em que trabalhamos, melhorando a experiência do usuário por meio de um design focado na simplicidade e eficácia dos fluxos.'
    },
    callToAction: {
      title: 'Pronto para Transformar a Experiência dos Seus Usuários?',
      description:
        'Deixe-nos ajudá-lo a criar uma experiência de usuário que simplifique seus processos e melhore a interação com seu produto. Vamos conversar sobre como podemos trabalhar juntos no seu próximo projeto de design UX/UI.',
      textButton: 'Comece Seu Projeto UX/UI'
    }
  }
})
