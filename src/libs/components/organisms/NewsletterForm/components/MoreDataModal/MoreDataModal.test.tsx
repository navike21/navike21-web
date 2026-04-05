import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'

import { getSubscriberGender, MoreDataModal } from './MoreDataModal'

const mockMutateAsync = vi.fn()

vi.mock('@Services/subscriber/subscriber.hooks', () => ({
  useSubscriberMutation: vi.fn()
}))

vi.mock('@Assets/background/smiling-girl-student-looking.jpg', () => ({
  default: '/mock-image.jpg'
}))

vi.mock('@Components/molecules/Modal/Modal', () => ({
  Modal: ({
    isOpen,
    onClose,
    children,
    title
  }: {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title: string
  }) =>
    isOpen ? (
      <div data-testid="modal">
        <h1>{title}</h1>
        <button onClick={onClose} aria-label="Close modal">
          ×
        </button>
        {children}
      </div>
    ) : null
}))

vi.mock('@Components/molecules/InputField/InputField', () => ({
  InputField: ({
    label,
    errorMessage,
    ...props
  }: {
    label?: string
    errorMessage?: string
    name?: string
    placeholder?: string
    type?: string
  }) => (
    <div>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input id={props.name} {...props} />
      {errorMessage && <span role="alert">{errorMessage}</span>}
    </div>
  )
}))

vi.mock('@Components/molecules/Select/Select', () => ({
  Select: ({
    label,
    errorMessage,
    options: selectOptions,
    ...props
  }: {
    label?: string
    errorMessage?: string
    name?: string
    value?: string
    options?: Array<{ label: string; value: string; disabled?: boolean }>
  }) => (
    <div>
      {label && <label htmlFor={props.name}>{label}</label>}
      <select id={props.name} {...props} value={props.value ?? ''}>
        {selectOptions?.map(opt => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
      {errorMessage && <span role="alert">{errorMessage}</span>}
    </div>
  )
}))

vi.mock('@Components/atoms/Button/Button', () => ({
  Button: ({
    children,
    type,
    loading,
    ...props
  }: {
    children: React.ReactNode
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
    variant?: string
    size?: string
    icon?: string
    loading?: boolean
  }) => (
    <button type={type} data-loading={String(loading ?? false)} {...props}>
      {children}
    </button>
  )
}))

import { useSubscriberMutation } from '@Services/subscriber/subscriber.hooks'

const mockUseSubscriberMutation = vi.mocked(useSubscriberMutation)

interface SetupOptions {
  isOpenModal?: boolean
  emailValue?: string
  handleCloseModal?: () => void
  isPending?: boolean
}

const setup = (overrides: SetupOptions = {}) => {
  const handleCloseModal = overrides.handleCloseModal ?? vi.fn()

  mockUseSubscriberMutation.mockReturnValue({
    mutateAsync: mockMutateAsync,
    isPending: overrides.isPending ?? false
  } as never)

  render(
    <MoreDataModal
      isOpenModal={overrides.isOpenModal ?? true}
      emailValue={overrides.emailValue ?? 'test@example.com'}
      handleCloseModal={handleCloseModal}
    />
  )

  return { handleCloseModal }
}

describe('MoreDataModal', () => {
  beforeEach(() => {
    mockMutateAsync.mockReset()
    mockUseSubscriberMutation.mockReset()
    mockUseSubscriberMutation.mockReturnValue({
      mutateAsync: mockMutateAsync,
      isPending: false
    } as never)
    mockMutateAsync.mockResolvedValue({
      success: false,
      statusCode: 200,
      message: 'default'
    })
  })

  describe('helper', () => {
    it('should normalize empty sex values to prefer_not_to_say', () => {
      expect(getSubscriberGender('')).toBe('prefer_not_to_say')
      expect(getSubscriberGender('male')).toBe('male')
    })
  })

  describe('visibility', () => {
    it('should render the modal when isOpenModal is true', () => {
      // Arrange & Act
      setup({ isOpenModal: true })

      // Assert
      expect(screen.getByTestId('modal')).toBeInTheDocument()
    })

    it('should not render the modal when isOpenModal is false', () => {
      // Arrange & Act
      setup({ isOpenModal: false })

      // Assert
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
    })

    it('should call handleCloseModal when close button is clicked', () => {
      // Arrange
      const handleCloseModal = vi.fn()
      setup({ handleCloseModal })

      // Act
      fireEvent.click(screen.getByRole('button', { name: 'Close modal' }))

      // Assert
      expect(handleCloseModal).toHaveBeenCalledTimes(1)
    })

    it('should wire the mutation success callback to the close handler', () => {
      // Arrange
      const handleCloseModal = vi.fn()
      setup({ handleCloseModal })

      const mutationOptions = mockUseSubscriberMutation.mock.calls[0][0] as {
        successCallback: () => void
      }

      // Act
      mutationOptions.successCallback()

      // Assert
      expect(handleCloseModal).toHaveBeenCalledTimes(1)
    })
  })

  describe('form fields', () => {
    it('should render all form fields', () => {
      // Arrange & Act
      setup()

      // Assert
      expect(screen.getByLabelText(/nombres/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/apellidos/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/correo/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/sexo/i)).toBeInTheDocument()
    })

    it('should pre-fill email field with emailValue prop', () => {
      // Arrange & Act
      setup({ emailValue: 'user@example.com' })

      // Assert
      expect(screen.getByLabelText<HTMLInputElement>(/correo/i).value).toBe(
        'user@example.com'
      )
    })

    it('should sync select value with the watched sex field', () => {
      // Arrange & Act
      setup()

      // Assert
      expect(screen.getByLabelText<HTMLSelectElement>(/sexo/i)).toHaveValue('')
    })

    it('should render the submit button', () => {
      // Arrange & Act
      setup()

      // Assert
      expect(
        screen.getByRole('button', { name: /suscríbete/i })
      ).toBeInTheDocument()
    })
  })

  describe('form validation', () => {
    it('should show required errors when submitting empty form', async () => {
      // Arrange
      setup({ emailValue: '' })

      // Act
      const form = document.querySelector('form')
      fireEvent.submit(form!)

      // Assert
      await waitFor(() => {
        const alerts = screen.getAllByRole('alert')
        expect(alerts.length).toBeGreaterThan(0)
      })
    })
  })

  describe('form submission', () => {
    it('should call subscribe with correct data on valid submit', async () => {
      // Arrange
      mockMutateAsync.mockResolvedValue({
        success: true,
        statusCode: 201,
        message: 'Subscribed successfully'
      })
      setup({ emailValue: 'valid@example.com' })

      fireEvent.change(screen.getByLabelText(/nombres/i), {
        target: { value: 'Juan' }
      })
      fireEvent.change(screen.getByLabelText(/apellidos/i), {
        target: { value: 'Perez' }
      })
      fireEvent.change(screen.getByLabelText(/correo/i), {
        target: { value: 'valid@example.com' }
      })
      fireEvent.change(screen.getByLabelText(/sexo/i), {
        target: { value: 'male' }
      })

      expect(screen.getByLabelText<HTMLSelectElement>(/sexo/i)).toHaveValue(
        'male'
      )

      // Act
      fireEvent.click(screen.getByRole('button', { name: /suscríbete/i }))

      // Assert
      await waitFor(() => {
        expect(mockMutateAsync).toHaveBeenCalledWith(
          expect.objectContaining({
            firstName: 'Juan',
            lastName: 'Perez',
            contactInformation: { email: 'valid@example.com' },
            personalInformation: { gender: 'male' }
          })
        )
      })
    })

    it('should reset form after successful submission', async () => {
      // Arrange
      mockMutateAsync.mockResolvedValue({
        success: true,
        statusCode: 201,
        message: 'Subscribed successfully'
      })
      setup({ emailValue: 'valid@example.com' })

      fireEvent.change(screen.getByLabelText(/nombres/i), {
        target: { value: 'Juan' }
      })
      fireEvent.change(screen.getByLabelText(/apellidos/i), {
        target: { value: 'Perez' }
      })
      fireEvent.change(screen.getByLabelText(/correo/i), {
        target: { value: 'valid@example.com' }
      })
      fireEvent.change(screen.getByLabelText(/sexo/i), {
        target: { value: 'male' }
      })

      // Act
      fireEvent.click(screen.getByRole('button', { name: /suscríbete/i }))

      // Assert
      await waitFor(() => {
        expect(mockMutateAsync).toHaveBeenCalledTimes(1)
        expect(screen.getByLabelText<HTMLInputElement>(/nombres/i).value).toBe(
          ''
        )
      })
    })

    it('should not reset form when submission fails', async () => {
      // Arrange
      mockMutateAsync.mockResolvedValue({
        success: false,
        statusCode: 400,
        message: 'Failed'
      })
      setup({ emailValue: 'valid@example.com' })

      fireEvent.change(screen.getByLabelText(/nombres/i), {
        target: { value: 'Juan' }
      })
      fireEvent.change(screen.getByLabelText(/apellidos/i), {
        target: { value: 'Perez' }
      })
      fireEvent.change(screen.getByLabelText(/correo/i), {
        target: { value: 'valid@example.com' }
      })
      fireEvent.change(screen.getByLabelText(/sexo/i), {
        target: { value: 'male' }
      })

      // Act
      fireEvent.click(screen.getByRole('button', { name: /suscríbete/i }))

      // Assert
      await waitFor(() => {
        expect(mockMutateAsync).toHaveBeenCalledTimes(1)
        expect(screen.getByLabelText<HTMLInputElement>(/nombres/i).value).toBe(
          'Juan'
        )
      })
    })

    it('should keep the modal open when close is blocked by a pending mutation', () => {
      // Arrange
      const handleCloseModal = vi.fn()
      setup({ handleCloseModal, isPending: true })

      // Act
      fireEvent.click(screen.getByRole('button', { name: 'Close modal' }))

      // Assert
      expect(handleCloseModal).not.toHaveBeenCalled()
      expect(
        screen.getByRole('button', { name: /suscríbete/i })
      ).toHaveAttribute('data-loading', 'true')
    })

    it('should reset and close the modal when it is not pending', () => {
      // Arrange
      const handleCloseModal = vi.fn()
      setup({ handleCloseModal })

      fireEvent.change(screen.getByLabelText(/nombres/i), {
        target: { value: 'Juan' }
      })

      // Act
      fireEvent.click(screen.getByRole('button', { name: 'Close modal' }))

      // Assert
      expect(handleCloseModal).toHaveBeenCalledTimes(1)
      expect(screen.getByLabelText<HTMLInputElement>(/nombres/i).value).toBe('')
    })
  })

  describe('emailValue changes', () => {
    it('should update email field when emailValue prop changes', async () => {
      // Arrange
      const { rerender } = render(
        <MoreDataModal
          isOpenModal
          emailValue="first@example.com"
          handleCloseModal={vi.fn()}
        />
      )

      // Act
      rerender(
        <MoreDataModal
          isOpenModal
          emailValue="second@example.com"
          handleCloseModal={vi.fn()}
        />
      )

      // Assert
      await waitFor(() => {
        expect(screen.getByLabelText<HTMLInputElement>(/correo/i).value).toBe(
          'second@example.com'
        )
      })
    })
  })
})
