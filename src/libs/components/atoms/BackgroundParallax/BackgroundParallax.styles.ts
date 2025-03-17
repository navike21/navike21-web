import { styled } from '@mui/material'
import { IBackgroundParallaxContent } from './BackgroundParallax.typed'

export const BackgroundContent = styled('div')<IBackgroundParallaxContent>(
  ({ backgroundImage, backgroundPosition, overlay }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: `center ${backgroundPosition}`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    willChange: 'transform',
    ...(overlay && {
      '&::before': {
        backgroundColor: 'var(--black-color-500)',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }
    })
  })
)
