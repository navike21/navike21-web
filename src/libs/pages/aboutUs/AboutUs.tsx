import { HeroSectionSubPage } from '@Components/molecules'
import { teamYoungBusinessOfficeFocusIsBusinessman } from '@Constants/backgroundImages'

export const AboutUs = () => {
  return (
    <HeroSectionSubPage
      title="A cerca de nosotros"
      description="Combinamos experiencia y compromiso para crear soluciones digitales centradas en las personas y el crecimiento de tu negocio."
      backgroundImage={teamYoungBusinessOfficeFocusIsBusinessman.lg.src}
      startPositionImage="top"
    />
  )
}
