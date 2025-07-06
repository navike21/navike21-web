import { Content } from '@Components/atoms'
import { Card, Title } from '@Components/molecules'
import {
  homePageScreen,
  handHoldingCardLaptop,
  programming,
  appMobile,
  digitalMarketing,
  seo,
  designerWithPhone,
  manEmailLaptop
} from '@Constants/backgroundsImages'
import clsx from 'clsx'

export const Services = () => {
  const services = [
    {
      id: 'web-design',
      title: 'Desarrollo de páginas web',
      description: 'Sitios web modernos, rápidos y personalizados.',
      image: homePageScreen
    },
    {
      id: 'eCommerce',
      title: 'Ecommerce web/app',
      description: 'Tiendas online seguras, escalables.',
      image: handHoldingCardLaptop
    },
    {
      id: 'software-development',
      title: 'Desarrollo de Software',
      description: 'Soluciones digitales adaptadas a tu negocio.',
      image: programming
    },
    {
      id: 'mobile-apps',
      title: 'Aplicaciones móviles',
      description: 'Apps funcionales, para iOS y Android.',
      image: appMobile
    },
    {
      id: 'marketing-digital',
      title: 'Marketing Digital',
      description: 'Estrategias que impulsan tu marca y ventas.',
      image: digitalMarketing
    },
    {
      id: 'seo',
      title: 'SEO',
      description: 'Posiciona tu negocio en los primeros resultados.',
      image: seo
    },
    {
      id: 'ux-ui-design',
      title: 'Diseño UX/UI',
      description: 'Experiencias digitales centradas en el usuario.',
      image: designerWithPhone
    },
    {
      id: 'email-marketing',
      title: 'Email marketing',
      description: 'Campañas que conectan con tus clientes.',
      image: manEmailLaptop
    }
  ]

  return (
    <section className="relative">
      <Content className={clsx('sectionContent flex-col flex gap-16')}>
        <Title
          title="De ideas a **resultados confiables**"
          subtitle="Nuestros Servicios"
        />
        <div
          className={clsx(
            'grid grid-cols-1 gap-8',
            'sm:grid-cols-2',
            'md:grid-cols-3',
            'lg:gap-8',
            'xl:grid-cols-4 xl:gap-5'
          )}
        >
          {services.map(({ id, title, description, image }) => (
            <Card
              key={id}
              title={title}
              description={description}
              image={image}
              href="/services"
              className={clsx('w-full h-80', 'lg:aspect-2/3 lg:h-auto')}
            />
          ))}
        </div>
      </Content>
    </section>
  )
}
