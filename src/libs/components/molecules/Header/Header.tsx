'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { Content } from '@Components/atoms/Content'
import { Logo } from '@Components/atoms/Logo'
import { Paragraph } from '@Components/atoms/Paragraph'
import { MenuToggle } from './MenuToggle'
import { useHeader } from './Header.hook'
import styles from './Header.module.scss'

export const Header = () => {
  const { container, homeMenu, isOpen, itemMenu, menu, setIsOpen } = useHeader()

  return (
    <>
      <motion.header className={styles.header}>
        <Content className={styles.headerContent}>
          <Link href={homeMenu.path} className={styles.headerLogo}>
            <Logo showSlogan variation="white" size="sm" />
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
