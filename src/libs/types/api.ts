export type UserGender = 'female' | 'male' | 'other' | 'prefer_not_to_say'

export type StatusRegister = 'active' | 'inactive'

export interface ApiError {
  code: string
  details?: unknown
}

export interface MetaInformation {
  page?: number
  limit?: number
  total?: number
  totalPages?: number
}

export interface QueryMeta extends MetaInformation {
  timestamp: string
  requestId?: string
}

export interface ApiResponse<T> {
  success: boolean
  statusCode: number
  message: string
  data?: T
  code?: string
  error?: ApiError
  meta?: QueryMeta
}

export interface SubscriberSchema {
  id?: string
  firstName: string
  lastName: string
  contactInformation: {
    id?: string
    email: string
    phoneNumber?: string
    address?: string
  }
  personalInformation: {
    id?: string
    profilePictureUrl?: string
    dateOfBirth?: Date | string
    gender: UserGender
  }
  status?: StatusRegister
}

/**
 * Subset of SubscriberSchema for the newsletter subscription form.
 * Only firstName, lastName and email are required; everything else is optional.
 */
export interface SubscriberRequest {
  firstName: string
  lastName: string
  contactInformation: {
    email: string
    phoneNumber?: string
    address?: string
  }
  personalInformation?: {
    profilePictureUrl?: string
    dateOfBirth?: string
    gender?: UserGender
  }
}
