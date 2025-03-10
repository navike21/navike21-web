'use client'

import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'
import { Content } from '@Components/atoms/Content'
import { Logo } from '@Components/atoms/Logo'
import { usePrincipalMenu } from '@Hooks/usePrincipalMenu'
import { IconButton } from '@Components/atoms/IconButton'
import styles from './Header.module.scss'

export const Header = () => {
  const { homeMenu } = usePrincipalMenu()
  return (
    <header className={styles.header}>
      <Content className={styles.headerContent}>
        <Link href={homeMenu.path} className={styles.headerLogo}>
          <Logo showSlogan variation="white" />
        </Link>
        <IconButton title="Menu">
          <FaBars />
        </IconButton>
      </Content>
    </header>
  )
}
