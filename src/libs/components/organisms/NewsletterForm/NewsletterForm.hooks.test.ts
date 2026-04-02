import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useNewsletterForm } from './NewsletterForm.hooks'

vi.mock('@Constants/languages', () => ({
  ESP: 'es'
}))

vi.mock('@I18n/common/newsletterForm', () => ({
  newsletterForm: {
    es: {
      title: 'Newsletter Title',
      subTitle: 'Newsletter SubTitle',
      form: {
        email: {
          fieldName: 'email',
          label: 'Email',
          placeholder: 'Enter email',
          EMAIL_REQUIRED: 'Email is required',
          EMAIL_INVALID: 'Email is invalid'
        },
        firstName: { fieldName: 'firstName', label: 'First Name' },
        lastName: { fieldName: 'lastName', label: 'Last Name' },
        submitButton: 'Subscribe',
        termsAccepted: {
          fieldName: 'termsAccepted',
          disclaimer: 'I accept',
          textPolicy: 'Privacy Policy'
        }
      }
    }
  }
}))

describe('useNewsletterForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('returns the expected initial state', () => {
    const { result } = renderHook(() => useNewsletterForm())

    expect(result.current.isSubmitting).toBe(false)
    expect(result.current.isSubmitSuccessful).toBe(false)
    expect(result.current.error.isError).toBe(false)
    expect(result.current.formText.title).toBe('Newsletter Title')
  })

  it('opens the modal on submit', async () => {
    const { result } = renderHook(() => useNewsletterForm())

    await act(async () => {
      result.current.setValue('firstName', 'María')
      result.current.setValue('lastName', 'Gonzales')
      result.current.setValue('email', 'maria@example.com')
    })

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn()
      } as unknown as React.FormEvent)
    })

    expect(result.current.isOpenModal).toBe(true)
  })
})
