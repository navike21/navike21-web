import { ArrowButton } from '@Components/atoms'
import {
  manCheckingHisEmailLaptop,
  supermarketWorkerSupplyingFruitDepartmentWithFood,
  viewManWorkingDesk,
  youngAttractiveWoman
} from '@Constants/backgroundsImages'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import { Settings } from 'react-slick'

export const useHeroSection = () => {
  const infoSlider = [
    {
      title: 'Software a medida, **diseñado para el éxito.**',
      description:
        'Creamos soluciones digitales que impulsan tu negocio, con tecnología de vanguardia',
      image: youngAttractiveWoman.src
    },
    {
      title: 'Diseño que enamora, **experiencia que convierte.**',
      description:
        'Transformamos ideas en interfaces intuitivas, modernas y centradas en el usuario.',
      image: viewManWorkingDesk.src
    },
    {
      title: 'Vende más, **vende mejor.**',
      description:
        'Creamos tiendas online escalables y optimizadas para convertir visitantes en clientes.',
      image: supermarketWorkerSupplyingFruitDepartmentWithFood.src
    },
    {
      title: 'Conecta con tu audiencia, **sin esfuerzo.**',
      description:
        'Automatiza, segmenta y comunica con campañas de email que funcionan.',
      image: manCheckingHisEmailLaptop.src
    }
  ]

  function ArrowSliderRight({
    onClick
  }: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
    return (
      <ArrowButton
        direction="right"
        className={clsx(
          'right-0 z-10 absolute top-0 bottom-0 m-auto text-white'
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
          'left-0 z-10 absolute top-0 bottom-0 m-auto text-white'
        )}
        onClick={onClick}
      />
    )
  }

  const settingsSlider: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <ArrowSliderRight />,
    prevArrow: <ArrowSliderLeft />
  }

  return {
    infoSlider,
    settingsSlider
  }
}
