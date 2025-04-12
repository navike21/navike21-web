import { AnimatePresence } from 'motion/react'
import { Logo } from '@Components/atoms/Logo'
import { MenuToggle } from './MenuToggle'
import { useHeader } from './Header.hook'
import {
  HeaderContent,
  HeaderElement,
  HeaderLogo,
  MenuContainer,
  MenuContent,
  MenuItem,
  MenuItemText,
  MotionDiv
} from './Header.styles'

export const Header = () => {
  const { container, homeMenu, isOpen, itemMenu, menu, setIsOpen } = useHeader()

  return (
    <>
      <HeaderElement>
        <HeaderContent>
          <HeaderLogo href={homeMenu.path}>
            <Logo showSlogan />
          </HeaderLogo>
          <MotionDiv initial={false} animate={isOpen ? 'open' : 'closed'}>
            <MenuToggle toggle={() => setIsOpen(prev => !prev)} />
          </MotionDiv>
        </HeaderContent>
      </HeaderElement>

      <AnimatePresence mode="wait">
        {isOpen && (
          <MenuContainer
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <MenuContent>
              <nav>
                {menu.map(({ label, path, key }) => (
                  <MotionDiv key={key} variants={itemMenu}>
                    <MenuItem href={path} onClick={() => setIsOpen(false)}>
                      <MenuItemText
                        variantMapping={{ body1: 'span' }}
                        variant="body1"
                      >
                        {label}
                      </MenuItemText>
                    </MenuItem>
                  </MotionDiv>
                ))}
              </nav>
            </MenuContent>
          </MenuContainer>
        )}
      </AnimatePresence>
    </>
  )
}
