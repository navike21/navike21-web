import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Modal } from '.'
import type { Animation, Position, Size } from './Modal.types'
import * as lenisLockHook from '@Hooks/useLenisScrollLock'
import {
  getAlignmentClasses,
  getSizeClasses,
  getDirectionalOffset,
  getPanelVariants
} from './useModal'

type MockMotionProps = Record<string, unknown> & {
  className?: string
  role?: string
  'aria-label'?: string
  children?: React.ReactNode
}

const { animatePresenceMock, motionButtonMock, motionDivMock } = vi.hoisted(
  () => ({
    animatePresenceMock: vi.fn(
      ({ children }: MockMotionProps) => children ?? null
    ),
    motionButtonMock: vi.fn(({ children, ...props }: MockMotionProps) => (
      <button {...props}>{children ?? null}</button>
    )),
    motionDivMock: vi.fn(({ children, ...props }: MockMotionProps) => (
      <div {...props}>{children ?? null}</div>
    ))
  })
)

vi.mock('@Hooks/useLenisScrollLock', () => ({
  useLenisScrollLock: vi.fn()
}))

vi.mock('motion/react', () => ({
  AnimatePresence: animatePresenceMock,
  motion: {
    button: motionButtonMock,
    div: motionDivMock
  }
}))

describe('Modal', () => {
  const getContainerProps = () =>
    motionDivMock.mock.calls.find(
      ([props]) =>
        typeof props['className'] === 'string' &&
        props['className'].includes('fixed inset-0 z-50 flex')
    )?.[0] as {
      variants?: {
        exit?: {
          transition?: {
            when?: string
          }
        }
      }
    }

  const getPanelProps = () =>
    motionDivMock.mock.calls.find(
      ([props]) => props['role'] === 'dialog'
    )?.[0] as {
      variants?: {
        hidden?: {
          opacity?: number
          y?: number
        }
        visible?: {
          opacity?: number
          y?: number
          transition?: {
            delay?: number
            duration?: number
          }
        }
        exit?: {
          opacity?: number
          scale?: number
          y?: number
          transition?: {
            duration?: number
          }
        }
      }
    }

  const getOverlayProps = () =>
    motionButtonMock.mock.calls.find(
      ([props]) => props['aria-label'] === 'Close modal'
    )?.[0] as {
      variants?: {
        visible?: {
          transition?: {
            duration?: number
          }
        }
        exit?: {
          transition?: {
            delay?: number
            duration?: number
          }
        }
      }
    }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should keep the modal unmounted when it is closed', async () => {
    render(<Modal title="Newsletter" />)

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    expect(lenisLockHook.useLenisScrollLock).toHaveBeenCalledWith(false)
  })

  it('should render safely during server-side rendering', () => {
    expect(() => {
      renderToString(
        <Modal isOpen title="Newsletter">
          <div>Subscription content</div>
        </Modal>
      )
    }).not.toThrow()
  })

  it('should render the dialog and allow native scroll inside the panel', async () => {
    render(
      <Modal isOpen title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    const dialog = await screen.findByRole('dialog')

    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('data-lenis-prevent')
    expect(dialog).toHaveAttribute('data-lenis-prevent-wheel')
    expect(dialog).toHaveAttribute('data-lenis-prevent-touch')
    expect(screen.getByText('Subscription content')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Cerrar modal' })
    ).toBeInTheDocument()
    expect(lenisLockHook.useLenisScrollLock).toHaveBeenCalledWith(true)
  })

  it('should hide the close button when showCloseButton is false', async () => {
    render(
      <Modal isOpen showCloseButton={false} title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    await screen.findByRole('dialog')

    expect(
      screen.queryByRole('button', { name: 'Cerrar modal' })
    ).not.toBeInTheDocument()
  })

  it('should call onClose when the overlay is clicked', async () => {
    const onClose = vi.fn()

    render(
      <Modal isOpen onClose={onClose} title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    const overlay = await screen.findByRole('button', {
      name: 'Close modal'
    })

    fireEvent.click(overlay)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should call onClose when the close button is clicked', async () => {
    const onClose = vi.fn()

    render(
      <Modal isOpen onClose={onClose} title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    const closeButton = await screen.findByRole('button', {
      name: 'Cerrar modal'
    })

    fireEvent.click(closeButton)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should call onClose when Escape is pressed', async () => {
    const onClose = vi.fn()

    render(
      <Modal isOpen onClose={onClose} title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    await screen.findByRole('dialog')

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should manage visibility internally when defaultOpen is enabled', async () => {
    render(
      <Modal defaultOpen title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    const closeButton = await screen.findByRole('button', {
      name: 'Cerrar modal'
    })

    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('should keep the portal mounted until reverse exit animations finish', async () => {
    render(
      <Modal isOpen animation="scale" title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    await screen.findByRole('dialog')

    const containerProps = getContainerProps()
    const panelProps = getPanelProps()
    const overlayProps = getOverlayProps()

    expect(containerProps.variants?.exit?.transition?.when).toBe(
      'afterChildren'
    )
    expect(overlayProps.variants?.visible?.transition?.duration).toBe(0.2)
    expect(panelProps.variants?.visible?.transition?.delay).toBe(0.2)
    expect(panelProps.variants?.exit).toMatchObject({
      opacity: 0,
      scale: 0.96,
      y: 16
    })
    expect(panelProps.variants?.exit?.transition?.duration).toBe(0.2)
    expect(overlayProps.variants?.exit?.transition?.delay).toBe(0.2)
    expect(overlayProps.variants?.exit?.transition?.duration).toBe(0.2)
  })

  it.each(['fade', 'slide', 'scale', 'none'] as Animation[])(
    'should sequence the backdrop before the panel on %s entry',
    async animation => {
      render(
        <Modal isOpen animation={animation} title="Newsletter">
          <div>Subscription content</div>
        </Modal>
      )

      await screen.findByRole('dialog')

      const panelProps = getPanelProps()
      const overlayProps = getOverlayProps()

      expect(overlayProps.variants?.visible?.transition?.duration).toBe(0.2)
      expect(panelProps.variants?.visible?.transition?.delay).toBe(0.2)
    }
  )

  it('should skip the reverse overlay delay when animation is none', async () => {
    render(
      <Modal isOpen animation="none" title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    await screen.findByRole('dialog')

    const panelProps = getPanelProps()
    const overlayProps = getOverlayProps()

    expect(panelProps.variants?.visible?.transition?.delay).toBe(0.2)
    expect(panelProps.variants?.visible?.transition?.duration).toBe(0)
    expect(overlayProps.variants?.exit?.transition?.delay).toBe(0)
  })

  it('should use opacity-only transitions for fade animation', async () => {
    render(
      <Modal isOpen animation="fade" title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    await screen.findByRole('dialog')

    const panelProps = getPanelProps()

    expect(panelProps.variants?.hidden).toMatchObject({
      opacity: 0
    })
    expect(panelProps.variants?.hidden?.y).toBeUndefined()
    expect(panelProps.variants?.visible).toMatchObject({
      opacity: 1
    })
    expect(panelProps.variants?.visible?.y).toBeUndefined()
    expect(panelProps.variants?.exit).toMatchObject({
      opacity: 0
    })
    expect(panelProps.variants?.exit?.y).toBeUndefined()
  })

  it('should release the scroll lock only after the exit animation completes', async () => {
    const { rerender } = render(
      <Modal isOpen animation="slide" title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    await screen.findByRole('dialog')

    expect(lenisLockHook.useLenisScrollLock).toHaveBeenLastCalledWith(true)

    rerender(
      <Modal isOpen={false} animation="slide" title="Newsletter">
        <div>Subscription content</div>
      </Modal>
    )

    expect(lenisLockHook.useLenisScrollLock).toHaveBeenLastCalledWith(true)

    const animatePresenceProps = animatePresenceMock.mock.calls.at(-1)?.[0] as {
      onExitComplete?: () => void
    }

    act(() => {
      animatePresenceProps.onExitComplete?.()
    })

    expect(lenisLockHook.useLenisScrollLock).toHaveBeenLastCalledWith(false)
  })
})

describe('useModal utility functions', () => {
  describe('getAlignmentClasses', () => {
    it.each([
      ['top', 'items-start justify-center'],
      ['bottom', 'items-end justify-center'],
      ['left', 'items-center justify-start'],
      ['right', 'items-center justify-end']
    ] as [Position, string][])(
      'should return correct alignment classes for position %s',
      (position, expected) => {
        // Arrange / Act / Assert
        expect(getAlignmentClasses(position)).toBe(expected)
      }
    )
  })

  describe('getSizeClasses', () => {
    it.each([
      ['small', 'max-w-sm'],
      ['large', 'max-w-5xl']
    ] as [Size, string][])(
      'should return correct size class for size %s',
      (size, expected) => {
        // Arrange / Act / Assert
        expect(getSizeClasses(size)).toBe(expected)
      }
    )

    it('should return full-screen classes for full size', () => {
      // Arrange / Act / Assert
      expect(getSizeClasses('full')).toBe(
        'max-w-none w-full h-full max-h-none rounded-[2rem]'
      )
    })
  })

  describe('getDirectionalOffset', () => {
    it.each([
      ['top', { x: 0, y: -32 }],
      ['bottom', { x: 0, y: 32 }],
      ['left', { x: -32, y: 0 }],
      ['right', { x: 32, y: 0 }]
    ] as [Position, { x: number; y: number }][])(
      'should return correct directional offset for position %s',
      (position, expected) => {
        // Arrange / Act / Assert
        expect(getDirectionalOffset(position)).toEqual(expected)
      }
    )
  })

  describe('getPanelVariants', () => {
    it('should return slide-up variants for an unrecognised animation type (fallback branch)', () => {
      // Arrange: cast to Animation to reach the default fallthrough in getPanelVariants
      const unknownAnimation = 'unknown' as Animation

      // Act
      const variants = getPanelVariants(unknownAnimation, 'center')

      // Assert
      expect(variants['hidden']).toMatchObject({ opacity: 0, y: 12 })
      expect(variants['visible']).toMatchObject({ opacity: 1, y: 0 })
    })
  })
})
