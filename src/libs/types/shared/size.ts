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

type TExcludeSizes<tCode extends string | number | symbol> = tCode extends
  | typeof EXTRA_SMALL
  | typeof EXTRA_LARGE
  ? never
  : tCode

export type TSizesMUI = TExcludeSizes<TSize>
