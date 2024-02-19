import { changeLanguage } from '@Themes/config'
import { TLangSupported } from '@Types/shared'
import { changeLangPath } from '@Utils/shared'
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

export const useChangeLang = () => {
  const dispatch = useDispatch()
  const pathname = usePathname()
  const router = useRouter()
  const changeLangAction = (codeLang: TLangSupported) => {
    dispatch(changeLanguage(codeLang))
    const newPath = changeLangPath(pathname, codeLang)
    router.push(newPath)
  }

  return changeLangAction
}
