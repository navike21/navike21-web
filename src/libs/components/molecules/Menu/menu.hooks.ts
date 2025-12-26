import { PAGES_INFORMATION } from '@Constants/pages'
import { useHeaderContext } from '@Context/headerContext.hooks'
import type { InformationPage } from '@Types/pages'
import { type Variants } from 'motion'

export const useMenu = () => {
  const { toggleMenu } = useHeaderContext()

  const menuVariants: Variants = {
    initial: { height: 0 },
    animate: {
      height: '100dvh',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    },
    exit: {
      height: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  const imageVariants: Variants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  }

  const itemMenuVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  }

  const menuList: InformationPage[] = Object.values(PAGES_INFORMATION).map(
    page => page.es
  )

  return {
    menuList,
    toggleMenu,
    menuVariants,
    imageVariants,
    itemMenuVariants
  }
}
