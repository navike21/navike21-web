import { Logo } from '@Components/atoms/Logo'
import { Paragraph } from '@Components/atoms/Paragraph'
import {
  FooterContent,
  FooterElement,
  FooterLogoSection
} from './Footer.styles'

export const Footer = () => {
  return (
    <FooterElement>
      <FooterContent>
        <FooterLogoSection>
          <Logo size="xs" />
          <Paragraph>
            We growing up your business with personal AI manager.
          </Paragraph>
        </FooterLogoSection>
        <div>Footer</div>
      </FooterContent>
    </FooterElement>
  )
}
