import {
  ContentIcon,
  HeroContent,
  HeroDescription,
  HeroExperience,
  HeroTextContentInfo,
  YearExperience,
  YearExperienceText,
} from "./heroSection.style";
import { useThemeMui } from "@Hooks/useThemeMui";
import { LinkButton } from "@Components/LinkButton/LinkButton";
import { useHeader } from "@Components/Header/header.hook";
import { CgArrowTopRight } from "react-icons/cg";
import { Title } from "@Components/Title/Title";
import { Content } from "@Components/Content/Content";
import { TEAM_WORK_BACKGROUND } from "@Assets/images/images";

export const HeroSection = () => {
  const { breakpoints, palette } = useThemeMui();
  const { contactMenu } = useHeader();

  return (
    <HeroContent backgroundImage={TEAM_WORK_BACKGROUND.src} overlay>
      <Content>
        <HeroTextContentInfo>
          <Title type="subtitle" variant="h4" color="primary">
            Diseñamos el cambio.
          </Title>
          <Title type="title" variant="h2">
            Impulsamos tu visión digital.
          </Title>
          <HeroDescription variant="body1">
            Software a medida, páginas web, diseño UX/UI y eCommerce que
            impulsan tu negocio.
          </HeroDescription>
          {breakpoints.xs && !breakpoints.lg && <span />}
          <LinkButton href={`${contactMenu?.slug}`}>Hablemos</LinkButton>
        </HeroTextContentInfo>
        {breakpoints.lg && (
          <HeroExperience elevation={8}>
            <ContentIcon>
              <CgArrowTopRight color={palette.common.white} size={40} />
            </ContentIcon>
            <YearExperience>
              06<span>+</span>
            </YearExperience>
            <YearExperienceText>Años de experiencia</YearExperienceText>
          </HeroExperience>
        )}
      </Content>
    </HeroContent>
  );
};
