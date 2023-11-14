import {
  EXTRA_LARGE,
  EXTRA_SMALL,
  LARGE,
  MEDIUM,
  SMALL
} from '@Constants/shared'

export type TSize =
  | typeof EXTRA_SMALL
  | typeof SMALL
  | typeof MEDIUM
  | typeof LARGE
  | typeof EXTRA_LARGE
