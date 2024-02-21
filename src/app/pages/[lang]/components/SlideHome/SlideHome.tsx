import { Slider } from '@Components/organisms'
import { TSlide } from '@Types/shared'
import { Slide } from '../Slide/'

import Slide1 from '@Public/images/banner-home/website.webp'

export const SlideHome = () => {
  const slides: TSlide[] = [
    {
      slide: <Slide title="Hola Mundo" description="lorem" image={Slide1} />
    }
  ]
  return <Slider slides={slides} />
}
