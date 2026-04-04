import { CLIENTS } from '@Constants/clients'
import { ESP } from '@Constants/languages'
import { clientsInformation } from '@I18n/common/clients'

export const useClients = () => {
  const { subtitleClients, titleClients } = clientsInformation[ESP]
  const clientsList = CLIENTS

  return {
    subtitleClients,
    titleClients,
    clientsList
  }
}
