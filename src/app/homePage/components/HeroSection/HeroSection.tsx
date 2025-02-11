import React from "react";
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
import { Container } from "@Components/Content/content.style";
import { Title } from "@Components/Title/Title";

export const HeroSection = () => {
  const { breakpoints, palette } = useThemeMui();
  const { menuContact, language } = useHeader();

  return (
    <HeroContent>
      <Container>
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
          <LinkButton href={`/${language}/${menuContact?.slug}`}>
            Hablemos
          </LinkButton>
        </HeroTextContentInfo>
        {breakpoints.lg && (
          <HeroExperience elevation={8}>
            <ContentIcon>
              <CgArrowTopRight color={palette.common.white} size={40} />
            </ContentIcon>
            <YearExperience>
              05<span>+</span>
            </YearExperience>
            <YearExperienceText>Años de experiencia</YearExperienceText>
          </HeroExperience>
        )}
      </Container>
    </HeroContent>
  );
};
