import { ESP } from '@Constants/languages'
import { servicesEs } from './locales/es'
import { formatServices } from './helpers'

export const servicesList = {
  [ESP]: formatServices(servicesEs)
}
