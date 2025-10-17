import heroImage from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'
import { Container, ItemLinkCard, LinkButton, Title } from '@Components/atoms'
import { ItemHeroSection, Testimonial } from '@Components/molecules'
import clsx from 'clsx'
import { useHome } from './home.hooks'
import { randomUUID } from 'node:crypto'

export const Home = () => {
  const {
    heroSectionCurrent,
    servicesListCurrent,
    servicesSectionCurrent: {
      title: servicesTitle,
      description: servicesDescription,
      controlAction: {
        href: servicesHref,
        icon: servicesIcon,
        children: servicesChildren,
        variant: servicesVariant
      }
    },
    metricsSectionCurrent: {
      title: metricsTitle,
      description: metricsDescription
    },
    companyMetricsCurrent
  } = useHome()
  return (
    <>
      {heroSectionCurrent.map(({ title, description, controlActions }) => (
        <ItemHeroSection
          key={randomUUID()}
          heroImage={heroImage}
          title={title}
          description={description}
          controlActions={controlActions}
        />
      ))}
      <section className="bg-gray-100">
        <Container className="py-20 flex flex-col gap-20">
          <Title title={servicesTitle} subTitle={servicesDescription} />
          <div
            className={clsx(
              'services-area grid grid-cols-1 gap-6',
              'sm:grid-cols-2 sm:gap-10',
              'lg:grid-cols-3 lg:gap-4',
              'xl:grid-cols-4 xl:gap-7'
            )}
          >
            {servicesListCurrent.map(
              ({ id, title, shortDescription, icon }) => (
                <ItemLinkCard
                  key={id}
                  href="/"
                  title={title}
                  description={shortDescription}
                  icon={icon}
                />
              )
            )}
          </div>
          <LinkButton
            className="mx-auto"
            href={servicesHref}
            icon={servicesIcon}
            variant={servicesVariant}
          >
            {servicesChildren}
          </LinkButton>
        </Container>
      </section>
      <section className="bg-black">
        <Container className="py-20 flex flex-col gap-20 text-white">
          <Title title={metricsTitle} subTitle={metricsDescription} />
          <div
            className={clsx(
              'services-area grid grid-cols-2 gap-6',
              'sm:grid-cols-2 sm:gap-10',
              'lg:grid-cols-4 lg:gap-0'
            )}
          >
            {companyMetricsCurrent.map(({ id, label, value, suffix }) => (
              <div key={id} className="flex flex-col items-center gap-2">
                <h3 className={clsx('text-4xl font-semibold flex items-start')}>
                  {value}
                  <span className="text-3xl font-semibold text-gradient">
                    {suffix}
                  </span>
                </h3>
                <p className="text-center w-10/12 text-balance text-md">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-20 flex flex-col gap-10">
          <Title
            title="Lo que dicen nuetsros clientes"
            subTitle="La confianza de nuestros clientes es nuestro mayor logro"
          />
          <Testimonial />
        </Container>
      </section>
    </>
  )
}
