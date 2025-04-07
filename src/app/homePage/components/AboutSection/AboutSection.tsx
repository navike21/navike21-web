'use client'

import { PROGRAMMER_WRITES_CODE_LAPTOP } from '@Assets/images'
import {
  AboutSectionContent,
  AboutSectionMain,
  ImageAbout,
  ImageAboutSection,
  ImageYears,
  InfoAboutNavike21,
  InfoAboutNavike21Item,
  InfoAboutSection,
  InfoAboutSectionText
} from './AboutSection.style'
import { Title } from '@Components/atoms/Title'
import { Paragraph } from '@Components/atoms/Paragraph'
import { useAboutSection } from './AboutSection.hook'
import { useMuiTheme } from '@Hooks/useMuiTheme'
import { Button } from '@Components/atoms/Button'

export const AboutSection = () => {
  const {
    bannerAbout: { descriptionNumberOfYears, numberOfYears },
    textAbout: {
      preTitle,
      title,
      description,
      controlAction,
      numberOfProjects,
      descriptionProjects,
      numberOfClients,
      descriptionClients
    }
  } = useAboutSection()
  const { mediaQuery } = useMuiTheme()

  return (
    <AboutSectionMain>
      <AboutSectionContent>
        <ImageAboutSection>
          <ImageAbout
            src={PROGRAMMER_WRITES_CODE_LAPTOP.thumb.src}
            alt="Programmer writes code"
            width={PROGRAMMER_WRITES_CODE_LAPTOP.thumb.width}
            height={PROGRAMMER_WRITES_CODE_LAPTOP.thumb.height}
          />
          <ImageYears>
            <Title>{numberOfYears}+</Title>
            <Paragraph>{descriptionNumberOfYears}</Paragraph>
          </ImageYears>
        </ImageAboutSection>

        <InfoAboutSection>
          <InfoAboutSectionText>
            <Title variant="h6">{preTitle}</Title>
            <Title variant={mediaQuery.sm ? 'h3' : 'h4'}>{title}</Title>
            <Paragraph>{description}</Paragraph>
          </InfoAboutSectionText>
          <Button variant="contained" size="large">
            {controlAction}
          </Button>

          <InfoAboutNavike21>
            <InfoAboutNavike21Item>
              <Title>
                {numberOfProjects}
                <span>+</span>
              </Title>
              <Paragraph>{descriptionProjects}</Paragraph>
            </InfoAboutNavike21Item>
            <InfoAboutNavike21Item>
              <Title>
                {numberOfClients}
                <span>+</span>
              </Title>
              <Paragraph>{descriptionClients}</Paragraph>
            </InfoAboutNavike21Item>
          </InfoAboutNavike21>
        </InfoAboutSection>
      </AboutSectionContent>
    </AboutSectionMain>
  )
}
