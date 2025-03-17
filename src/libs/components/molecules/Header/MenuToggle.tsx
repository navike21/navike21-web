import { IconButton } from '@mui/material'
import { MenuIcon, MenuIconPath } from './Header.styles'

interface IMenuToggleProps {
  toggle: () => void
}

export const MenuToggle = ({ toggle }: IMenuToggleProps) => (
  <IconButton onClick={toggle} title="Menu">
    <MenuIcon viewBox="0 0 20 20">
      <MenuIconPath
        fill="transparent"
        strokeWidth="2"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <MenuIconPath
        d="M 2 9.423 L 20 9.423"
        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        transition={{ duration: 0.1 }}
        fill="transparent"
        strokeWidth="2"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
      />
      <MenuIconPath
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' }
        }}
        fill="transparent"
        strokeWidth="2"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
      />
    </MenuIcon>
  </IconButton>
)
