import { changeThemeMode } from '@Themes/config'
import { TThemeMode } from '@Types/shared'
import { useDispatch } from 'react-redux'

export const useChangeThemeMode = () => {
  const dispatch = useDispatch()
  const changeThemeModeAction = (color: TThemeMode) => {
    dispatch(changeThemeMode(color))
  }

  return { changeThemeModeAction }
}
