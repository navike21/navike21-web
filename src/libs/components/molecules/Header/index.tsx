'use client'

import Link from 'next/link'
import { Content } from '@Components/atoms/Content'
import { Logo } from '@Components/atoms/Logo'
import { usePrincipalMenu } from '@Hooks/usePrincipalMenu'
import styles from './Header.module.scss'

export const Header = () => {
  const { homeMenu } = usePrincipalMenu()
  return (
    <header className={styles.header}>
      <Content className={styles.headerContent}>
        <Link href={homeMenu.path} className={styles.headerLogo}>
          <Logo showSlogan />
        </Link>
      </Content>
    </header>
  )
}
