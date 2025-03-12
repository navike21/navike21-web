'use client'

import Link from 'next/link'
import { Content } from '@Components/atoms/Content'
import { Logo } from '@Components/atoms/Logo'
import { usePrincipalMenu } from '@Hooks/usePrincipalMenu'
import { IconButton } from '@Components/atoms/IconButton'
import { useState } from 'react'
import styles from './Header.module.scss'
import { AnimatePresence, motion, Variants } from 'motion/react'
import { Paragraph } from '@Components/atoms/Paragraph'

interface IMenuToggleProps {
  toggle: () => void
}

const MenuToggle = ({ toggle }: IMenuToggleProps) => (
  <IconButton onClick={toggle} title="Menu">
    <svg viewBox="0 0 20 20" className={styles.menuIcon}>
      <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <motion.path
        d="M 2 9.423 L 20 9.423"
        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        transition={{ duration: 0.1 }}
        strokeWidth="2"
      />
      <motion.path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' }
        }}
        strokeWidth="2"
      />
    </svg>
  </IconButton>
)

export const Header = () => {
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

  return (
    <>
      <motion.header className={styles.header}>
        <Content className={styles.headerContent}>
          <Link href={homeMenu.path} className={styles.headerLogo}>
            <Logo showSlogan variation="white" />
          </Link>
          <motion.div initial={false} animate={isOpen ? 'open' : 'closed'}>
            <MenuToggle toggle={() => setIsOpen(prev => !prev)} />
          </motion.div>
        </Content>
      </motion.header>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className={styles.menuContainer}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Content className={styles.menuContent}>
              <motion.nav>
                {menu.map(({ label, path, key }) => (
                  <motion.div key={key} variants={itemMenu}>
                    <Link href={path} className={styles.menuItem}>
                      <Paragraph
                        variantMapping={{ body1: 'span' }}
                        variant="body1"
                      >
                        {label}
                      </Paragraph>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </Content>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
