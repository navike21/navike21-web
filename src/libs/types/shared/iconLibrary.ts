import * as IconFA6 from 'react-icons/fa6'
import * as IconFA from 'react-icons/fa'
import * as IconHI from 'react-icons/hi'
import * as IconHI2 from 'react-icons/hi2'
import * as IconBoostrap from 'react-icons/bs'
import * as IconMaterialDesign from 'react-icons/md'

import {
  BOOSTRAP,
  FONT_AWESOME,
  HERO_ICONS,
  MATERIAL_DESIGN
} from '@Constants/shared/iconLibrary'
import { TSize } from './size'
import { TColor } from './colors'

export type TLibrary =
  | typeof FONT_AWESOME
  | typeof HERO_ICONS
  | typeof BOOSTRAP
  | typeof MATERIAL_DESIGN

export type TIconNameFA6 = keyof typeof IconFA6
export type TIconNameFA = keyof typeof IconFA
export type TIconNameHI = keyof typeof IconHI
export type TIconNameHI2 = keyof typeof IconHI2
export type TIconNameBS = keyof typeof IconBoostrap
export type TIconNameMD = keyof typeof IconMaterialDesign

export type TIconName = {
  [FONT_AWESOME]?: TIconNameFA6 | TIconNameFA
  [HERO_ICONS]?: TIconNameHI | TIconNameHI2
  [BOOSTRAP]?: TIconNameBS
  [MATERIAL_DESIGN]?: TIconNameMD
}

export interface IIconProps {
  iconName: TIconName
  className?: string
  library: TLibrary
  size?: TSize
  color?: TColor
}
