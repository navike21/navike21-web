import { usePrincipalMenu } from '@Hooks/usePrincipalMenu'
import { useState } from 'react'
import { Variants } from 'motion/react'

export const useHeader = () => {
  const { homeMenu, menu } = usePrincipalMenu()
  const [isOpen, setIsOpen] = useState(false)

  const container: Variants = {
    hidden: {
      opacity: 0,
      width: '0dvh',
      transition: {
        when: 'afterChildren', // Primero desaparecen los hijos, luego el contenedor
        staggerChildren: 0.2, // Intervalo entre la animación de cada hijo
        staggerDirection: -1, // Hace que la animación de salida sea en orden inverso
        ease: 'easeOut' // Efecto de salida
      }
    },
    show: {
      opacity: 1,
      width: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
        delayChildren: 0.5, // Espera 0.3s antes de mostrar los ítems
        staggerChildren: 0.15 // Hace que los ítems aparezcan en secuencia
      }
    }
  }

  const itemMenu: Variants = {
    hidden: {
      opacity: 0,
      y: 5,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  }

  return {
    homeMenu,
    menu,
    isOpen,
    setIsOpen,
    container,
    itemMenu
  }
}
