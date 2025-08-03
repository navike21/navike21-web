import { ABOUT_US, SERVICES } from '@Constants/pages'
import { TLanguageKey } from '@Types/languages'
import { ReactNode } from 'react'

export interface IParams {
  params: Promise<{
    lang: TLanguageKey
    pages: string
  }>
}

export interface IMetadataProps {
  params: Promise<{ lang: TLanguageKey; pages: string }>
}

export type TPages = typeof ABOUT_US | typeof SERVICES

export type TPageMap = {
  [key in TPages]: ReactNode
}
