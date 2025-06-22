import { ArrowButton } from '@Components/atoms'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import { Settings } from 'react-slick'

export const useHeroSection = () => {
  function ArrowSliderRight({
    onClick
  }: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
    return (
      <ArrowButton
        direction="right"
        className={clsx(
          'right-2 z-10 absolute top-0 bottom-0 m-auto text-white'
        )}
        onClick={onClick}
      />
    )
  }
  function ArrowSliderLeft({
    onClick
  }: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
    return (
      <ArrowButton
        direction="left"
        className={clsx(
          'left-2 z-10 absolute top-0 bottom-0 m-auto text-white'
        )}
        onClick={onClick}
      />
    )
  }

  const settingsSlider: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <ArrowSliderRight />,
    prevArrow: <ArrowSliderLeft />
  }

  return {
    settingsSlider
  }
}
