import { useMuiTheme } from '@Hooks/useMuiTheme'
import { usePrincipalMenu } from '@Hooks/usePrincipalMenu'
import { useOptionsBrowserStore } from '@Store/optionBrowser'
import { servicesTranslations } from '@Translations/services'

export const useServicesSection = () => {
  const { language } = useOptionsBrowserStore()
  const { mediaQuery } = useMuiTheme()
  const servicesTranslationsInfo = servicesTranslations[language]
  const { servicesMenu } = usePrincipalMenu()

  const {
    homePage: { description, title },
    pages
  } = servicesTranslationsInfo(servicesMenu, 'image')

  return {
    mediaQuery,
    description,
    pages,
    title
  }
}
