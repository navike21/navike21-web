import {
  ERROR,
  INFO,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  WARNING
} from '@Constants/shared'

export type TColor =
  | typeof PRIMARY
  | typeof SECONDARY
  | typeof INFO
  | typeof SUCCESS
  | typeof WARNING
  | typeof ERROR
  | 'white'
  | 'black'
  | 'gray_100'
  | 'gray_200'
  | 'gray_300'
  | 'gray_400'
  | 'gray_500'
  | 'gray_600'
  | 'gray_700'
  | 'gray_800'
  | 'gray_900'
