import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const ecommercePt = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.ECOMMERCE,
  title: 'E-commerce',
  descriptionLite:
    'Loja online personalizada e otimizada para o seu negócio. Desenvolvemos soluções completas com integração de pagamentos, envios e gestão de estoque.',
  path: `${servicesMenu.path}/ecommerce`,
  slug: 'ecommerce',
  pageSections: {
    metaTag: {
      title: `E-commerce | Desenvolvimento de Lojas Online | ${COMPANY_NAME}`,
      description:
        'Desenvolvimento de lojas online personalizadas com design atrativo e foco em conversões. Utilizamos WooCommerce ou desenvolvimento totalmente sob medida.',
      ogTitle: `E-commerce | Desenvolvimento de Lojas Online | ${COMPANY_NAME}`,
      ogDescription:
        'Tenha uma loja online eficiente e escalável para aumentar suas vendas. Trabalhamos com WooCommerce ou soluções sob medida.',
      ogImage: coverImage,
      twitterTitle: `E-commerce | Desenvolvimento de Lojas Online | ${COMPANY_NAME}`,
      twitterDescription:
        'Crie sua loja online com foco em performance, design e escalabilidade. Oferecemos soluções completas de e-commerce.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Desenvolvimento de E-commerce sob medida',
      description:
        'Criamos lojas online com navegação intuitiva, design impactante e funcionalidades voltadas para conversão de vendas.'
    },
    description: {
      title: 'A solução ideal de e-commerce para o seu negócio',
      description:
        'Cuidamos de todo o processo: planejamento, design, desenvolvimento, integração e otimização. Você recebe uma loja escalável, segura e fácil de gerenciar.',
      description2:
        'Trabalhamos com o modelo baseado em **WordPress + WooCommerce** ou com **desenvolvimento totalmente personalizado**, ideal para quem possui conhecimento técnico.'
    },
    features: {
      title: 'Serviços incluídos',
      items: [
        {
          title: 'Design e desenvolvimento da loja virtual personalizada',
          description:
            'Criamos um layout exclusivo que reflete a identidade da sua marca e proporciona ótima experiência ao usuário.'
        },
        {
          title: 'Gestão de produtos e estoque',
          description:
            'Sistema intuitivo para gerenciar produtos, preços, estoque e promoções com facilidade.'
        },
        {
          title: 'Integração com Facebook, Google Ads e TikTok Pixel',
          description:
            'Instalamos os pixels para rastreamento e otimização de campanhas nos principais canais de marketing digital.'
        },
        {
          title: 'Manutenção e atualizações (opcional)',
          description:
            'Oferecemos suporte técnico contínuo, atualizações de plugins, segurança e otimização de performance.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Levantamento de requisitos',
        description:
          'Definimos os objetivos da loja, o público-alvo, meios de pagamento, envio, estrutura e funcionalidades.'
      },
      {
        title: 'Design e prototipação',
        description:
          'Desenhamos o layout com base na identidade visual da sua marca e validamos a experiência do usuário.'
      },
      {
        title: 'Desenvolvimento da loja online',
        description:
          'Construímos sua loja com WooCommerce ou com tecnologia totalmente personalizada, com foco em performance.'
      },
      {
        title: 'Testes e garantia de qualidade',
        description:
          'Realizamos testes de todos os fluxos da loja: cadastro, compra, pagamento, envio e painel de controle.'
      },
      {
        title: 'Lançamento e publicação',
        description:
          'Publicamos o site em um servidor seguro e configuramos tudo para que funcione perfeitamente em todos os dispositivos.'
      },
      {
        title: 'Treinamento e entrega',
        description:
          'Ensinamos como adicionar produtos, ajustar preços, criar promoções e gerenciar o conteúdo da loja.'
      },
      {
        title: 'Suporte contínuo e manutenção (opcional)',
        description:
          'Caso necessário, prestamos suporte técnico, correções e melhorias contínuas para garantir o sucesso da sua loja.'
      }
    ],
    recentWorks: {
      title: 'Trabalhos recentes',
      description:
        'Confira nossos projetos de e-commerce desenvolvidos com foco em estratégia, design e resultados reais.'
    },
    callToAction: {
      title: 'Vamos criar sua loja virtual?',
      description:
        'Desenvolvemos e-commerces completos e personalizados para que você venda mais e com segurança.',
      textButton: 'Solicitar orçamento'
    }
  }
})
