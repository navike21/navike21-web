'use client'

import clsx from 'clsx'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Icon } from '@Components/atoms'
import { LARGE, LIGHT, MEDIUM, PRIMARY, WHITE } from '@Constants/shared'
import { useId, useThemeMode } from '@Hooks/shared'
import { IconButton } from '@mui/material'
import { TSliderProps } from '@Types/shared'
import {
  styleArrowLeftSlider,
  styleArrowRightSlider,
  stylePlayAndPauseSlider,
  styleWrapperArrowsSlider,
  stylesWrapperSlider
} from './styles'

export const Slider = ({ options = {}, slides }: TSliderProps) => {
  const themeMode = useThemeMode()
  const { generateId } = useId('slide')

  const colorsButton = themeMode === LIGHT ? PRIMARY : WHITE
  const colorButton = PRIMARY
  const sizeElements = LARGE

  return (
    <Splide
      hasTrack={false}
      options={{
        type: 'loop',
        autoplay: true,
        pagination: false,
        ...options
      }}
    >
      <Grid sx={stylesWrapperSlider}>
        <IconButton
          className={clsx('splide__toggle')}
          color={colorButton}
          size={sizeElements}
          sx={stylePlayAndPauseSlider}
        >
          <Icon
            className={clsx('splide__toggle__play')}
            library="materialDesign"
            iconName={{
              materialDesign: 'MdPlayArrow'
            }}
            size={sizeElements}
            color={colorsButton}
          />
          <Icon
            className={clsx('splide__toggle__pause')}
            library="materialDesign"
            iconName={{
              materialDesign: 'MdPause'
            }}
            size={sizeElements}
            color={colorsButton}
          />
        </IconButton>

        <Grid className={clsx('splide__progress')}>
          <Grid className={clsx('splide__progress__bar')} />
        </Grid>

        <Grid component="ul" className={clsx('splide__pagination')} />

        <Grid className={clsx('splide__arrows')} sx={styleWrapperArrowsSlider}>
          <IconButton
            className={clsx('splide__arrow splide__arrow--prev')}
            size={sizeElements}
            color={colorButton}
            sx={styleArrowLeftSlider}
          >
            <Icon
              library="materialDesign"
              iconName={{
                materialDesign: 'MdKeyboardArrowLeft'
              }}
              size={sizeElements}
              color={colorsButton}
            />
          </IconButton>
          <IconButton
            className={clsx('splide__arrow splide__arrow--next')}
            size={sizeElements}
            color={colorButton}
            sx={styleArrowRightSlider}
          >
            <Icon
              library="materialDesign"
              iconName={{
                materialDesign: 'MdKeyboardArrowRight'
              }}
              size={sizeElements}
              color={colorsButton}
            />
          </IconButton>
        </Grid>

        <SplideTrack>
          {slides.map(({ slide }) => (
            <SplideSlide key={generateId()}>{slide}</SplideSlide>
          ))}
        </SplideTrack>
      </Grid>
    </Splide>
  )
}
