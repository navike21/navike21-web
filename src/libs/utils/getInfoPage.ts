import { pages } from '@Translations/pages'
import { TLanguage } from '@Types/languages'

export interface IPageInfoProps {
  lang: TLanguage
  key: string
}

export interface IPageInfo {
  text: string
  href: string
  key: string
}

export const getInfoPage = ({ lang, key }: IPageInfoProps): IPageInfo => {
  const { title = '', slug = '' } =
    pages.find(page => page.id === key)?.language[lang] || {}
  return {
    text: title,
    href: key === 'home' ? `/${lang}/` : `/${lang}/${slug}`,
    key
  }
}
