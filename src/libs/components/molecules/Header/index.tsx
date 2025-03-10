'use client'

import React from 'react'
import styles from './Header.module.scss'
import { Content } from '@Components/atoms/Content'
import { Logo } from '@Components/atoms/Logo'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Content className={styles.headerContent}>
        <Link href="/" className={styles.headerLogo}>
          <Logo />
        </Link>
      </Content>
    </header>
  )
}
