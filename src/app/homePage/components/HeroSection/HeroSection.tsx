import { HERO_SLIDER_1 } from '@Assets/images'
import { BackgroundParallax } from '@Components/atoms/BackgroundParallax'
import { Slider } from '@Components/molecules/Slider'
import styles from './HeroSection.module.scss'
import { Content } from '@Components/atoms/Content'
import { Button } from '@Components/atoms/Button'
import { Paragraph } from '@Components/atoms/Paragraph'
import { Title } from '@Components/atoms/Title'

export const HeroSection = () => {
  const slides = [
    <BackgroundParallax
      key="slide1"
      backgroundImage={HERO_SLIDER_1.src}
      className={styles.slideHero}
      overlay
    >
      <Content className={styles.slideHero__content}>
        <div className={styles.slideHero__content__inner}>
          <Title
            align="left"
            className={styles.slideHero__content__inner_title}
          >
            Software a medida, diseñado para el éxito
          </Title>
          <Paragraph align="left">
            Creamos soluciones digitales que impulsan tu negocio, con tecnología
            de vanguardia y un enfoque en la experiencia del usuario.
          </Paragraph>
          <Button variant="contained" size="large">
            Conversemos
          </Button>
        </div>
      </Content>
    </BackgroundParallax>
  ]
  return (
    <Slider
      slides={slides}
      options={{
        animationType: 'slide',
        showControls: true,
        slidesPerView: 1,
        slidesToScroll: 'auto',
        loop: true,
        autoHeight: false,
        active: true
      }}
    />
  )
}
