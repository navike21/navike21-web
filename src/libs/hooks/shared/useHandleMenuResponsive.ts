import { handleMenuResponsive } from '@Themes/config'
import { useDispatch } from 'react-redux'

export const useHandleMenuResponsive = () => {
  const dispatch = useDispatch()
  const handleOpenMenu = () => {
    dispatch(handleMenuResponsive(true))
  }

  const handleCloseMenu = () => {
    dispatch(handleMenuResponsive(false))
  }

  return {
    handleOpenMenu,
    handleCloseMenu
  }
}
