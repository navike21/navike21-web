'use client'

import { uuidV7 } from '@Utils/generateKeys'
import iphone from '@Assets/images/devices/iphone.svg'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import Slider, { Settings } from 'react-slick'

export interface IImageMobileDevice {
  image: StaticImageData
  alt: string
}

interface ISliderMobileDeviceProps {
  images: IImageMobileDevice[]
  className?: string
}

export const SliderMobileDevice = ({
  images,
  className
}: ISliderMobileDeviceProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  return (
    <div className={clsx('relative', className)}>
      <Image
        src={iphone}
        alt="mobile-mockup"
        className="w-full relative z-10 pointer-events-none"
      />
      <div className="absolute top-[1%] bottom-2 left-0 right-0 m-auto w-11/12 h-auto bg-white pt-[13%] rounded-3xl overflow-hidden">
        <Slider {...settings}>
          {images.map(({ alt, image }) => (
            <Image
              key={uuidV7()}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={alt}
              className="w-full h-full object-cover z-0 object-left-top"
              quality={100}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}
