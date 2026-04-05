import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { useMutation } from '@tanstack/react-query'
import { sileo } from 'sileo'
import type { ApiResponse } from '@Types/api'
import type { SubscriberRequest, SubscriberResponse } from './subscriber.types'
import { subscriberService } from './subscriber.service'
import { useSubscriberMutation } from './subscriber.hooks'

vi.mock('@tanstack/react-query', () => ({
  useMutation: vi.fn()
}))

vi.mock('./subscriber.service', () => ({
  subscriberService: {
    subscribe: vi.fn()
  }
}))

vi.mock('sileo', () => ({
  sileo: {
    success: vi.fn(),
    error: vi.fn()
  }
}))

const mockUseMutation = vi.mocked(useMutation)
const mockSubscribe = vi.mocked(subscriberService.subscribe)
const mockSileoSuccess = vi.mocked(sileo.success)
const mockSileoError = vi.mocked(sileo.error)

type SubscriberMutationConfig = {
  mutationFn: (
    data: SubscriberRequest
  ) => Promise<ApiResponse<SubscriberResponse>>
  onSuccess: (response: ApiResponse<SubscriberResponse>) => void
  onError: (error: Error) => void
}

const makeRequest = (): SubscriberRequest => ({
  firstName: 'John',
  lastName: 'Doe',
  contactInformation: { email: 'john@example.com' },
  personalInformation: { gender: 'male' }
})

describe('useSubscriberMutation', () => {
  beforeEach(() => {
    mockUseMutation.mockReset()
    mockSubscribe.mockReset()
    mockSileoSuccess.mockReset()
    mockSileoError.mockReset()

    mockUseMutation.mockImplementation((config: any) => config as never)
  })

  it('creates the expected mutation config and delegates to the service', async () => {
    // Arrange
    const successCallback = vi.fn()
    const { result } = renderHook(() =>
      useSubscriberMutation({ successCallback })
    )
    const request = makeRequest()

    // Assert config
    expect(mockUseMutation).toHaveBeenCalledWith(
      expect.objectContaining({
        mutationKey: ['subscriber'],
        retry: 2,
        networkMode: 'offlineFirst',
        mutationFn: expect.any(Function),
        onSuccess: expect.any(Function),
        onError: expect.any(Function)
      })
    )

    // Act
    mockSubscribe.mockResolvedValueOnce({
      success: true,
      statusCode: 201,
      message: 'Subscribed successfully'
    } satisfies ApiResponse<SubscriberResponse>)

    const mutationConfig = result.current as unknown as SubscriberMutationConfig

    await mutationConfig.mutationFn(request)

    // Assert
    expect(mockSubscribe).toHaveBeenCalledWith(request)
  })

  it('shows success toast and calls success callback on success', () => {
    // Arrange
    const successCallback = vi.fn()
    const { result } = renderHook(() =>
      useSubscriberMutation({ successCallback })
    )

    const response = {
      success: true,
      statusCode: 201,
      message: 'Subscribed successfully'
    } satisfies ApiResponse<SubscriberResponse>

    // Act
    const mutationConfig = result.current as unknown as SubscriberMutationConfig

    mutationConfig.onSuccess(response)

    // Assert
    expect(mockSileoSuccess).toHaveBeenCalledWith(
      expect.objectContaining({
        title: '¡Suscripción exitosa!',
        description: 'Subscribed successfully',
        autopilot: true
      })
    )
    expect(successCallback).toHaveBeenCalledTimes(1)
  })

  it('shows detailed error text when the cause contains details', () => {
    // Arrange
    const successCallback = vi.fn()
    const { result } = renderHook(() =>
      useSubscriberMutation({ successCallback })
    )
    const errorCause = {
      success: false,
      statusCode: 400,
      message: 'Invalid request',
      error: { code: 'BAD_REQUEST', details: 'Email is invalid' }
    } satisfies ApiResponse<unknown>

    // Act
    const mutationConfig = result.current as unknown as SubscriberMutationConfig

    mutationConfig.onError(
      Object.assign(new Error('boom'), { cause: errorCause })
    )

    // Assert
    expect(mockSileoError).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Error al suscribirse',
        description: 'Email is invalid',
        autopilot: true
      })
    )
  })

  it('shows the response message when the cause has no details', () => {
    // Arrange
    const successCallback = vi.fn()
    const { result } = renderHook(() =>
      useSubscriberMutation({ successCallback })
    )
    const errorCause = {
      success: false,
      statusCode: 503,
      message: 'Service unavailable'
    } satisfies ApiResponse<unknown>

    // Act
    const mutationConfig = result.current as unknown as SubscriberMutationConfig

    mutationConfig.onError(
      Object.assign(new Error('boom'), { cause: errorCause })
    )

    // Assert
    expect(mockSileoError).toHaveBeenCalledWith(
      expect.objectContaining({
        description: 'Service unavailable'
      })
    )
  })

  it('falls back to a generic error when the cause is missing', () => {
    // Arrange
    const successCallback = vi.fn()
    const { result } = renderHook(() =>
      useSubscriberMutation({ successCallback })
    )

    // Act
    const mutationConfig = result.current as unknown as SubscriberMutationConfig

    mutationConfig.onError(Object.assign(new Error('boom'), { cause: {} }))

    // Assert
    expect(mockSileoError).toHaveBeenCalledWith(
      expect.objectContaining({
        description:
          'Ocurrió un error al intentar suscribirse. Por favor, inténtalo de nuevo.'
      })
    )
  })
})
