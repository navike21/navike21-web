import { TAppDispatch, TRootState } from '@Store/store'
import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch
} from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector

export const useAppDispatch: () => TAppDispatch = useDispatch
