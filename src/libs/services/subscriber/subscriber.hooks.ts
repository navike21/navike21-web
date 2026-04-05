'use client'

import { useMutation } from '@tanstack/react-query'
import { subscriberService } from './subscriber.service'
import type { SubscriberRequest } from './subscriber.types'
import { sileo } from 'sileo'
import type { ApiResponse } from '@Types/api'

interface UseSubscriberMutationProps {
  successCallback: () => void
}

const getErrorDescription = (cause: unknown) => {
  if (
    typeof cause === 'object' &&
    cause !== null &&
    'message' in cause &&
    typeof cause.message === 'string'
  ) {
    const apiResponse = cause as ApiResponse<unknown>

    if (apiResponse.error?.details) {
      return String(apiResponse.error.details)
    }

    return apiResponse.message
  }

  return 'Ocurrió un error al intentar suscribirse. Por favor, inténtalo de nuevo.'
}

export const useSubscriberMutation = ({
  successCallback
}: UseSubscriberMutationProps) =>
  useMutation({
    mutationKey: ['subscriber'],
    retry: 2,
    networkMode: 'offlineFirst',
    mutationFn: (data: SubscriberRequest) => subscriberService.subscribe(data),
    onSuccess: ({ message }) => {
      sileo.success({
        title: '¡Suscripción exitosa!',
        description: message,
        autopilot: true
      })
      successCallback()
    },
    onError: (error: Error) => {
      sileo.error({
        title: 'Error al suscribirse',
        description: getErrorDescription(error.cause),
        autopilot: true
      })
    }
  })
