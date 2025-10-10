import heroImage from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'
import { Container, ItemLinkCard, LinkButton, Title } from '@Components/atoms'
import { ItemHeroSection } from '@Components/molecules'
import clsx from 'clsx'
import { useHome } from './home.hooks'
import { randomUUID } from 'crypto'

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
    }
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
              'xl:grid-cols-4 xl:gap-5'
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
    </>
  )
}
