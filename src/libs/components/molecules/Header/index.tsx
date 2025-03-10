'use client'

import React from 'react'
import styles from './header.module.scss'
import { Content } from '@Components/atoms/Content'
import { Logo } from '@Components/atoms/Logo'
import Link from 'next/link'
import { usePrincipalMenu } from '@Hooks/usePrincipalMenu'

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
