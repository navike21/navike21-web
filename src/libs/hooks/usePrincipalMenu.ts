import { EPrincipalMenuKey } from '@Enums/principalMenuKey'
import { useOptionsBrowserStore } from '@Store/optionBrowser/optionBrowser.hook'
import {
  principalMenuTranslations,
  TMenuItem
} from '@Translations/principalMenu'

type TUsePrincipalMenu = {
  menu: TMenuItem[]
  homeMenu: TMenuItem
  aboutMenu: TMenuItem
  servicesMenu: TMenuItem
  projectsMenu: TMenuItem
  blogMenu: TMenuItem
  contactMenu: TMenuItem
}

export const usePrincipalMenu = (): TUsePrincipalMenu => {
  const { language } = useOptionsBrowserStore()

  const menuTranslation = principalMenuTranslations(language)
  const menu = menuTranslation[language]

  const findMenuItem = (menuKey: EPrincipalMenuKey): TMenuItem =>
    menu.find(({ key }) => key === menuKey) as TMenuItem

  return {
    menu,
    homeMenu: findMenuItem(EPrincipalMenuKey.HOME),
    aboutMenu: findMenuItem(EPrincipalMenuKey.ABOUT),
    servicesMenu: findMenuItem(EPrincipalMenuKey.SERVICES),
    projectsMenu: findMenuItem(EPrincipalMenuKey.PROJECTS),
    blogMenu: findMenuItem(EPrincipalMenuKey.BLOG),
    contactMenu: findMenuItem(EPrincipalMenuKey.CONTACT)
  }
}
