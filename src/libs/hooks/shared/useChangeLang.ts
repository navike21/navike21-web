import { changeLanguage } from '@Themes/config'
import { TLangSupported } from '@Types/shared'
import { useDispatch } from 'react-redux'

export const useChangeLang = () => {
  const dispatch = useDispatch()
  const changeLangAction = (codeLang: TLangSupported) => {
    dispatch(changeLanguage(codeLang))
  }

  return changeLangAction
}
