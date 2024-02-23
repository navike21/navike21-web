import { BREAKPOINTS_LG } from '@Constants/shared'

export const stylesWrapperSlider = {
  position: 'relative',
  height: 'fit-content'
}

export const styleWrapperArrowsSlider = {
  height: '100%',
  left: 0,
  margin: 'auto',
  position: 'absolute',
  right: 0,
  top: 0,
  width: '85%',
  maxWidth: BREAKPOINTS_LG
}

export const styleArrowsSlider = {
  position: 'absolute',
  bottom: '5%',
  zIndex: 2
}

export const styleArrowLeftSlider = {
  ...styleArrowsSlider,
  right: 70
}

export const styleArrowRightSlider = {
  ...styleArrowsSlider,
  right: 0
}
export const stylePlayAndPauseSlider = {
  position: 'absolute',
  bottom: '5%',
  left: '10%',
  zIndex: 2
}
