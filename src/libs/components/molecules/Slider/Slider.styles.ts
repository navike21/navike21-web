import { styled } from '@mui/material'
import { IEmblaContainer, IEmblaSlide } from './Slider.typed'
import { Content } from '@Components/atoms/Content'

export const Embla = styled('div')(() => ({
  margin: 'auto',
  position: 'relative'
}))

export const EmblaViewport = styled('div')(() => ({
  overflow: 'hidden',
  position: 'relative'
}))

export const EmblaContainer = styled('div')<IEmblaContainer>(
  ({ loop, animationType }) => ({
    alignItems: 'flex-start',
    display: 'flex',
    touchAction: 'pan-y pinch-zoom',
    ...(!loop &&
      animationType === 'slide' && {
        transition: 'transform 0.4s'
      })
  })
)

export const EmblaSlide = styled('div')<IEmblaSlide>(
  ({ styleToItemsPerView }) => ({
    minWidth: 0,
    transform: 'translate3d(0, 0, 0)',
    flex: `0 0 ${styleToItemsPerView}%`
  })
)

export const EmblaContentArrows = styled(Content)(() => ({
  bottom: 0,
  height: 0,
  left: 0,
  margin: 'auto',
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 4
}))

export const EmblaArrows = styled('div')(() => ({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  transition: 'color 0.3s',
  zIndex: 3
}))

export const EmblaArrowLeft = styled(EmblaArrows)(() => ({
  left: 0
}))

export const EmblaArrowRight = styled(EmblaArrows)(() => ({
  right: 0
}))
