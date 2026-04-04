import { beforeEach, describe, expect, it, vi } from 'vitest'

import type { ApiResponse } from '@Types/api'
import type { SubscriberRequest, SubscriberResponse } from './subscriber.types'

const mockPost = vi.hoisted(() =>
  vi.fn<
    (params: {
      endpoint: string
      body: SubscriberRequest
    }) => Promise<ApiResponse<SubscriberResponse>>
  >()
)

vi.mock('@Config/api', () => ({
  clientApi: {
    post: mockPost
  }
}))

vi.mock('@Config/apiPaths', () => ({
  API_PATHS: {
    SUBSCRIBER_REGISTER: '/subscriber/register'
  }
}))

import { subscriberService } from './subscriber.service'

const makeRequest = (
  overrides?: Partial<SubscriberRequest>
): SubscriberRequest => ({
  firstName: 'John',
  lastName: 'Doe',
  contactInformation: { email: 'john@example.com' },
  ...overrides
})

const makeResponse = (
  overrides?: Partial<ApiResponse<SubscriberResponse>>
): ApiResponse<SubscriberResponse> => ({
  success: true,
  statusCode: 201,
  message: 'Subscribed successfully',
  data: {
    firstName: 'John',
    lastName: 'Doe',
    contactInformation: { email: 'john@example.com' },
    personalInformation: { gender: 'prefer_not_to_say' }
  },
  ...overrides
})

describe('subscriberService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('subscribe', () => {
    it('should call clientApi.post with the correct endpoint and body', async () => {
      // Arrange
      const request = makeRequest()
      const response = makeResponse()
      mockPost.mockResolvedValueOnce(response)

      // Act
      await subscriberService.subscribe(request)

      // Assert
      expect(mockPost).toHaveBeenCalledOnce()
      expect(mockPost).toHaveBeenCalledWith({
        endpoint: '/subscriber/register',
        body: request
      })
    })

    it('should return the ApiResponse from clientApi.post', async () => {
      // Arrange
      const request = makeRequest()
      const expected = makeResponse()
      mockPost.mockResolvedValueOnce(expected)

      // Act
      const result = await subscriberService.subscribe(request)

      // Assert
      expect(result).toEqual(expected)
    })

    it('should propagate errors thrown by clientApi.post', async () => {
      // Arrange
      const request = makeRequest()
      const error = new Error('Network error')
      mockPost.mockRejectedValueOnce(error)

      // Act & Assert
      await expect(subscriberService.subscribe(request)).rejects.toThrow(
        'Network error'
      )
    })

    it('should pass optional personalInformation fields when provided', async () => {
      // Arrange
      const request = makeRequest({
        personalInformation: { gender: 'female', dateOfBirth: '1990-01-01' }
      })
      mockPost.mockResolvedValueOnce(makeResponse())

      // Act
      await subscriberService.subscribe(request)

      // Assert
      expect(mockPost).toHaveBeenCalledWith({
        endpoint: '/subscriber/register',
        body: request
      })
    })
  })
})
