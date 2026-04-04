import { clientApi } from '@Config/api'
import { API_PATHS } from '@Config/apiPaths'
import type { ApiResponse } from '@Types/api'
import type { SubscriberRequest, SubscriberResponse } from './subscriber.types'

export const subscriberService = {
  subscribe(data: SubscriberRequest): Promise<ApiResponse<SubscriberResponse>> {
    return clientApi.post<SubscriberResponse, SubscriberRequest>({
      endpoint: API_PATHS.SUBSCRIBER_REGISTER,
      body: data
    })
  }
}
