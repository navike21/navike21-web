import type { ApiResponse } from '@Types/api'
import { SERVER_API_BASE_URL } from './environments'

/* =========================
 * Types
 * ========================= */

type FetchOptions = RequestInit & {
  next?: {
    revalidate?: number
    tags?: string[]
  }
}

type ApiBaseParams = {
  endpoint: string
  options?: FetchOptions
}

type ApiBodyParams<TBody> = ApiBaseParams & {
  body: TBody
}

/* =========================
 * Typed error
 * ========================= */

export class ApiRequestError extends Error {
  readonly status: number

  constructor(method: string, status: number) {
    super(`API ${method} request failed with status ${status}`)
    this.name = 'ApiRequestError'
    this.status = status
  }
}

/* =========================
 * Client factory
 * Creates a fetch client bound to a given base URL.
 * Use SERVER_API_BASE_URL for SSR / Route Handlers.
 * Use '/api' (local proxy) for CSR via Next.js Route Handlers.
 * ========================= */

export const createApiClient = (baseUrl: string) => {
  const request = async <TResponse, TBody = undefined>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    body?: TBody,
    options?: FetchOptions
  ): Promise<ApiResponse<TResponse>> => {
    const { headers: extraHeaders, ...restOptions } = options ?? {}

    const response = await fetch(`${baseUrl}${endpoint}`, {
      ...restOptions,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(extraHeaders as Record<string, string> | undefined)
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) })
    })

    if (!response.ok) {
      throw new ApiRequestError(method, response.status)
    }

    const json: unknown = await response.json()

    return json as ApiResponse<TResponse>
  }

  const get = <TResponse>({
    endpoint,
    options
  }: ApiBaseParams): Promise<ApiResponse<TResponse>> =>
    request<TResponse>('GET', endpoint, undefined, options)

  const post = <TResponse, TBody>({
    endpoint,
    body,
    options
  }: ApiBodyParams<TBody>): Promise<ApiResponse<TResponse>> =>
    request<TResponse, TBody>('POST', endpoint, body, options)

  const put = <TResponse, TBody>({
    endpoint,
    body,
    options
  }: ApiBodyParams<TBody>): Promise<ApiResponse<TResponse>> =>
    request<TResponse, TBody>('PUT', endpoint, body, options)

  const del = <TResponse>({
    endpoint,
    options
  }: ApiBaseParams): Promise<ApiResponse<TResponse>> =>
    request<TResponse>('DELETE', endpoint, undefined, options)

  return { get, post, put, delete: del }
}

/* =========================
 * Pre-built clients
 * ========================= */

// For Server Components and Route Handlers (server-to-server, uses private env var)
export const serverApi = createApiClient(SERVER_API_BASE_URL)

// For Client Components (calls the local Next.js proxy, same-origin — no CORS)
export const clientApi = createApiClient('/api')
