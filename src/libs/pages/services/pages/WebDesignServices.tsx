import { HeroSectionSubPage } from '@Components/molecules'
import { homepageLaptop } from '@Constants/backgroundImages'

export const WebDesignServices = () => {
  return (
    <HeroSectionSubPage
      title="Desarrollo de **páginas web**"
      description="Diseñamos y desarrollamos sitios rápidos, seguros y adaptados a tus objetivos."
      backgroundImage={homepageLaptop.xlg.src}
      startPositionImage="center"
    />
  )
}
