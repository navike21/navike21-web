import { API_BASE_URL, SERVER_API_BASE_URL, API_ENDPOINTS } from '@Config/api'
import type {
  ApiResponse,
  SubscriberRequest,
  SubscriberSchema
} from '@Types/api'

export const subscriberService = {
  /**
   * Subscribe a new user to the newsletter.
   * Uses NEXT_PUBLIC_API_URL — safe to call from Client Components.
   */
  async subscribe(
    data: SubscriberRequest
  ): Promise<ApiResponse<SubscriberSchema>> {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.SUBSCRIBER}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const json: unknown = await response.json()
    return json as ApiResponse<SubscriberSchema>
  },

  /**
   * Retrieve the full list of subscribers.
   * Uses API_URL — intended for Server Components only; never call from the browser.
   */
  async list(): Promise<ApiResponse<SubscriberSchema[]>> {
    const response = await fetch(
      `${SERVER_API_BASE_URL}${API_ENDPOINTS.SUBSCRIBER_LIST}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
    )

    const json: unknown = await response.json()
    return json as ApiResponse<SubscriberSchema[]>
  }
}
