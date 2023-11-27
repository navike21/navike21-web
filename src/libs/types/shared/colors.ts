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
