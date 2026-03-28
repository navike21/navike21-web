import { describe, it, expect, vi, beforeEach } from 'vitest'
import { subscriberService } from './subscriber.service'
import type {
  SubscriberRequest,
  ApiResponse,
  SubscriberSchema
} from '@Types/api'

const mockSubscriberRequest: SubscriberRequest = {
  firstName: 'María',
  lastName: 'Gonzales',
  contactInformation: {
    email: 'maria.gonzales@example.com'
  }
}

const mockSuccessResponse: ApiResponse<SubscriberSchema> = {
  success: true,
  statusCode: 201,
  message: 'Subscriber registered successfully',
  code: 'SUCCESS_SUBSCRIBER_REGISTER',
  data: {
    id: '1f106fe7-c5df-6bf0-8b90-ac33b8484828',
    firstName: 'María',
    lastName: 'Gonzales',
    contactInformation: {
      id: '698c012098c7c5ba707945c9',
      email: 'maria.gonzales@example.com'
    },
    personalInformation: {
      id: '698c012098c7c5ba707945ca',
      gender: 'female'
    },
    status: 'active'
  },
  meta: {
    timestamp: '2026-02-10T23:10:09-05:00'
  }
}

const mockErrorResponse: ApiResponse<SubscriberSchema> = {
  success: false,
  statusCode: 400,
  message: 'Bad Request',
  code: 'ERROR_SUBSCRIBER_REGISTER',
  error: {
    code: 'VALIDATION_ERROR',
    details: 'email is invalid'
  }
}

describe('subscriberService', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  describe('subscribe', () => {
    it('returns a successful response when the API call succeeds', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          json: vi.fn().mockResolvedValue(mockSuccessResponse)
        })
      )

      const result = await subscriberService.subscribe(mockSubscriberRequest)

      expect(result.success).toBe(true)
      expect(result.statusCode).toBe(201)
      expect(result.data?.firstName).toBe('María')
      expect(result.data?.status).toBe('active')
    })

    it('calls the correct endpoint with POST method and JSON body', async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        json: vi.fn().mockResolvedValue(mockSuccessResponse)
      })
      vi.stubGlobal('fetch', fetchMock)

      await subscriberService.subscribe(mockSubscriberRequest)

      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/subscriber'),
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mockSubscriberRequest)
        })
      )
    })

    it('returns the error response when the API returns success: false', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          json: vi.fn().mockResolvedValue(mockErrorResponse)
        })
      )

      const result = await subscriberService.subscribe(mockSubscriberRequest)

      expect(result.success).toBe(false)
      expect(result.statusCode).toBe(400)
      expect(result.error?.code).toBe('VALIDATION_ERROR')
    })

    it('throws when fetch rejects (network error)', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockRejectedValue(new Error('Network error'))
      )

      await expect(
        subscriberService.subscribe(mockSubscriberRequest)
      ).rejects.toThrow('Network error')
    })
  })

  describe('list', () => {
    it('returns a list of subscribers on success', async () => {
      const listResponse: ApiResponse<SubscriberSchema[]> = {
        success: true,
        statusCode: 200,
        message: 'Subscribers retrieved successfully',
        data: [mockSuccessResponse.data as SubscriberSchema]
      }

      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          json: vi.fn().mockResolvedValue(listResponse)
        })
      )

      const result = await subscriberService.list()

      expect(result.success).toBe(true)
      expect(Array.isArray(result.data)).toBe(true)
      expect(result.data?.[0]?.firstName).toBe('María')
    })

    it('calls the correct endpoint with GET method', async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        json: vi.fn().mockResolvedValue({
          success: true,
          statusCode: 200,
          message: 'ok',
          data: []
        })
      })
      vi.stubGlobal('fetch', fetchMock)

      await subscriberService.list()

      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/subscriber/list/'),
        expect.objectContaining({ method: 'GET' })
      )
    })
  })
})
