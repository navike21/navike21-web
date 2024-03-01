import {
  EXTRA_LARGE,
  EXTRA_SMALL,
  LARGE,
  MEDIUM,
  SMALL
} from '@Constants/shared'
import { TColor, TSize } from '@Types/shared'
import styled from '@emotion/styled'
import { blackColor } from '@Themes/constants'
import { useTheme } from '@mui/material'

type TExcludeColors<tCode extends string | number | symbol> = tCode extends
  | 'gray_100'
  | 'gray_200'
  | 'gray_300'
  | 'gray_400'
  | 'gray_500'
  | 'gray_600'
  | 'gray_700'
  | 'gray_800'
  | 'gray_900'
  | 'info'
  | 'success'
  | 'error'
  | 'warning'
  ? never
  : tCode

type TColorsExcluded = TExcludeColors<TColor>

type TSizeVariation = {
  [key in TSize]: string
}

type TLogo = {
  color?: TColorsExcluded
  size?: TSize
}

const sizeVariation: TSizeVariation = {
  [EXTRA_SMALL]: '1.25rem',
  [SMALL]: '2.5rem',
  [MEDIUM]: '3.5rem',
  [LARGE]: '5rem',
  [EXTRA_LARGE]: '8rem'
}
export const Logo = ({ color, size = MEDIUM }: TLogo) => {
  const theme = useTheme()

  const mainColor = color ?? theme.palette.primary.main

  const Svg = styled('svg')({
    width: sizeVariation[size],
    height: sizeVariation[size],
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    fill: 'none',
    zIndex: 1
  })

  const CircleAfter = styled('span')({
    display: 'block',
    width: '55%',
    height: '55%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: blackColor,
    borderRadius: '50%',
    zIndex: 0,
    transition: 'all 0.2s ease-in-out',
    margin: 'auto'
  })

  const ContentLogo = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 1
  })

  return (
    <ContentLogo>
      <CircleAfter />
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 224" fill="none">
        <path d="M40 42H185V176H40V42Z" fill="#0C0F16"></path>
        <path
          d="M111.457 0.00129395C49.5975 0.295432 -0.292844 50.6835 0.00129395 112.543C0.295432 174.403 50.6835 224.293 112.543 223.999C174.403 223.705 224.293 173.316 223.999 111.457C223.705 49.5975 173.316 -0.292844 111.457 0.00129395ZM149.423 155.623H128.743V100.936C128.743 95.6867 127.521 91.6366 125.1 88.7405C122.679 85.867 119.037 84.4189 114.172 84.4189C110.597 84.4189 107.249 85.2334 104.126 86.8399C101.004 88.469 98.0398 90.6637 95.2568 93.4467V155.578H74.5766V69.712H87.2245C89.8944 69.712 91.6592 70.9564 92.4964 73.4679L93.9218 80.2557C95.6414 78.4683 97.4741 76.8618 99.3973 75.3911C101.321 73.9431 103.357 72.676 105.506 71.6352C107.656 70.5718 109.964 69.7573 112.407 69.2142C114.851 68.6486 117.543 68.3771 120.44 68.3771C125.123 68.3771 129.286 69.169 132.906 70.7528C136.527 72.3366 139.558 74.5766 142.002 77.4501C144.423 80.3236 146.278 83.7627 147.523 87.7449C148.767 91.7271 149.401 96.1392 149.401 100.936L149.423 155.623Z"
          fill={mainColor}
        ></path>
      </Svg>
    </ContentLogo>
  )
}
