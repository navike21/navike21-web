import { keyframes } from '@emotion/react'
import { styled } from '@mui/system'

export const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const spinFade = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.4);
    opacity: 1;
  }
`

export const textWave = {
  animate: {
    rotate: [0, 2, -2, 2, -2, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut'
    }
  }
}

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'var(--black-color-800)',
  color: 'var(--mui-palette-primary-contrastText)'
}))

export const SpinnerWrapper = styled('div')(() => ({
  position: 'relative',
  width: 80,
  height: 80
}))

export const SpinnerCircle = styled('div')(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  border: '3px solid transparent',
  borderTopColor: 'var(--mui-palette-primary-main)',
  borderRadius: '50%',
  animation: `${rotate} 0.9s ease-in-out infinite`
}))

export const PulseDot = styled('div')(() => ({
  position: 'absolute',
  width: 12,
  height: 12,
  top: 34,
  left: 34,
  backgroundColor: 'var(--mui-palette-primary-main)',
  borderRadius: '50%',
  animation: `${spinFade} 1s ease-in-out infinite`
}))
