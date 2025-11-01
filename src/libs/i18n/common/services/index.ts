import { ESP } from '@Constants/languages'
import { servicesEs } from './locales/es'
import { formatServices } from './helper'

export const servicesList = {
  [ESP]: formatServices(servicesEs)
}
