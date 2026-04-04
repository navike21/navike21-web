import type { StatusRegister } from '@Types/api'

export type UserGender = 'female' | 'male' | 'other' | 'prefer_not_to_say'

export interface SubscriberResponse {
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
 * Subset of SubscriberResponse for the newsletter subscription form.
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
