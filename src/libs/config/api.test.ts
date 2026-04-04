import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ApiRequestError, createApiClient } from './api'

const BASE_URL = 'https://api.example.com'

const mockFetch = vi.fn<typeof fetch>()

describe('ApiRequestError', () => {
  it('should have the correct name, message, and status', () => {
    // Arrange
    const error = new ApiRequestError('POST', 422)

    // Assert
    expect(error).toBeInstanceOf(Error)
    expect(error).toBeInstanceOf(ApiRequestError)
    expect(error.name).toBe('ApiRequestError')
    expect(error.message).toBe('API POST request failed with status 422')
    expect(error.status).toBe(422)
  })
})

describe('createApiClient', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', mockFetch)
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.unstubAllGlobals()
  })

  const makeOkResponse = (data: unknown): Response =>
    ({
      ok: true,
      json: () => Promise.resolve(data)
    }) as Response

  const makeErrorResponse = (status: number): Response =>
    ({
      ok: false,
      status
    }) as Response

  describe('get', () => {
    it('should call fetch with GET method and return the parsed response', async () => {
      // Arrange
      const expected = {
        success: true,
        statusCode: 200,
        message: 'ok',
        data: { id: '1' }
      }
      mockFetch.mockResolvedValueOnce(makeOkResponse(expected))
      const client = createApiClient(BASE_URL)

      // Act
      const result = await client.get<{ id: string }>({ endpoint: '/items' })

      // Assert
      expect(mockFetch).toHaveBeenCalledOnce()
      expect(mockFetch).toHaveBeenCalledWith(
        `${BASE_URL}/items`,
        expect.objectContaining({ method: 'GET' })
      )
      expect(result).toEqual(expected)
    })

    it('should merge custom headers with default Content-Type', async () => {
      // Arrange
      mockFetch.mockResolvedValueOnce(makeOkResponse({}))
      const client = createApiClient(BASE_URL)

      // Act
      await client.get({
        endpoint: '/items',
        options: { headers: { Authorization: 'Bearer token' } }
      })

      // Assert
      const [, init] = mockFetch.mock.calls[0] as [string, RequestInit]
      const headers = init.headers as Record<string, string>
      expect(headers['Content-Type']).toBe('application/json')
      expect(headers['Authorization']).toBe('Bearer token')
    })

    it('should throw ApiRequestError when response is not ok', async () => {
      // Arrange
      mockFetch.mockResolvedValue(makeErrorResponse(404))
      const client = createApiClient(BASE_URL)

      // Act & Assert
      await expect(client.get({ endpoint: '/missing' })).rejects.toMatchObject({
        name: 'ApiRequestError',
        status: 404,
        message: 'API GET request failed with status 404'
      })
    })
  })

  describe('post', () => {
    it('should call fetch with POST method and serialize body as JSON', async () => {
      // Arrange
      const body = { name: 'John' }
      const expected = {
        success: true,
        statusCode: 201,
        message: 'created',
        data: { id: '2' }
      }
      mockFetch.mockResolvedValueOnce(makeOkResponse(expected))
      const client = createApiClient(BASE_URL)

      // Act
      const result = await client.post<{ id: string }, typeof body>({
        endpoint: '/users',
        body
      })

      // Assert
      const [, init] = mockFetch.mock.calls[0] as [string, RequestInit]
      expect(init.method).toBe('POST')
      expect(init.body).toBe(JSON.stringify(body))
      expect(result).toEqual(expected)
    })

    it('should not include body key when body is undefined (GET request)', async () => {
      // Arrange
      mockFetch.mockResolvedValueOnce(makeOkResponse({}))
      const client = createApiClient(BASE_URL)

      // Act
      await client.get({ endpoint: '/no-body' })

      // Assert
      const [, init] = mockFetch.mock.calls[0] as [string, RequestInit]
      expect(Object.keys(init)).not.toContain('body')
    })

    it('should throw ApiRequestError when response is not ok', async () => {
      // Arrange
      mockFetch.mockResolvedValue(makeErrorResponse(500))
      const client = createApiClient(BASE_URL)

      // Act & Assert
      await expect(
        client.post({ endpoint: '/fail', body: {} })
      ).rejects.toMatchObject({
        name: 'ApiRequestError',
        status: 500,
        message: 'API POST request failed with status 500'
      })
    })
  })

  describe('put', () => {
    it('should call fetch with PUT method and serialize body as JSON', async () => {
      // Arrange
      const body = { name: 'Jane' }
      mockFetch.mockResolvedValueOnce(
        makeOkResponse({ success: true, statusCode: 200, message: 'ok' })
      )
      const client = createApiClient(BASE_URL)

      // Act
      await client.put<unknown, typeof body>({ endpoint: '/users/1', body })

      // Assert
      const [, init] = mockFetch.mock.calls[0] as [string, RequestInit]
      expect(init.method).toBe('PUT')
      expect(init.body).toBe(JSON.stringify(body))
    })

    it('should throw ApiRequestError when response is not ok', async () => {
      // Arrange
      mockFetch.mockResolvedValue(makeErrorResponse(403))
      const client = createApiClient(BASE_URL)

      // Act & Assert
      await expect(
        client.put({ endpoint: '/forbidden', body: {} })
      ).rejects.toMatchObject({
        name: 'ApiRequestError',
        status: 403,
        message: 'API PUT request failed with status 403'
      })
    })
  })

  describe('delete', () => {
    it('should call fetch with DELETE method', async () => {
      // Arrange
      mockFetch.mockResolvedValueOnce(
        makeOkResponse({ success: true, statusCode: 200, message: 'ok' })
      )
      const client = createApiClient(BASE_URL)

      // Act
      await client.delete({ endpoint: '/users/1' })

      // Assert
      const [, init] = mockFetch.mock.calls[0] as [string, RequestInit]
      expect(init.method).toBe('DELETE')
    })

    it('should throw ApiRequestError when response is not ok', async () => {
      // Arrange
      mockFetch.mockResolvedValue(makeErrorResponse(404))
      const client = createApiClient(BASE_URL)

      // Act & Assert
      await expect(client.delete({ endpoint: '/gone' })).rejects.toMatchObject({
        name: 'ApiRequestError',
        status: 404,
        message: 'API DELETE request failed with status 404'
      })
    })
  })

  describe('base URL composition', () => {
    it('should concatenate baseUrl and endpoint correctly', async () => {
      // Arrange
      mockFetch.mockResolvedValueOnce(makeOkResponse({}))
      const client = createApiClient('https://custom.api.io')

      // Act
      await client.get({ endpoint: '/health' })

      // Assert
      expect(mockFetch).toHaveBeenCalledWith(
        'https://custom.api.io/health',
        expect.any(Object)
      )
    })
  })

  describe('pre-built clients', () => {
    it('serverApi should be defined and have get, post, put, delete methods', async () => {
      // Arrange
      const { serverApi } = await import('./api')

      // Assert
      expect(serverApi).toBeDefined()
      expect(typeof serverApi.get).toBe('function')
      expect(typeof serverApi.post).toBe('function')
      expect(typeof serverApi.put).toBe('function')
      expect(typeof serverApi.delete).toBe('function')
    })

    it('clientApi should be defined and have get, post, put, delete methods', async () => {
      // Arrange
      const { clientApi } = await import('./api')

      // Assert
      expect(clientApi).toBeDefined()
      expect(typeof clientApi.get).toBe('function')
      expect(typeof clientApi.post).toBe('function')
      expect(typeof clientApi.put).toBe('function')
      expect(typeof clientApi.delete).toBe('function')
    })

    it('api should be an alias for serverApi', async () => {
      // Arrange
      const { api, serverApi } = await import('./api')

      // Assert
      expect(api).toBe(serverApi)
    })
  })
})
