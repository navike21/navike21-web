import React from "react";
import {
  ContentIcon,
  HeroContent,
  HeroDescription,
  HeroExperience,
  HeroSubtitle,
  HeroTextContent,
  HeroTextContentInfo,
  HeroTitle,
  YearExperience,
  YearExperienceText,
} from "./heroSection.style";
import { useThemeMui } from "@Hooks/useThemeMui";
import { LinkButton } from "@Components/LinkButton/LinkButton";
import { useHeader } from "@Components/Header/header.hook";
import { CgArrowTopRight } from "react-icons/cg";

export const HeroSection = () => {
  const { breakpoints, palette } = useThemeMui();
  const { menuContact, language } = useHeader();

  return (
    <HeroContent>
      <HeroTextContent>
        <HeroTextContentInfo>
          <HeroTitle variant="h4">Diseñamos el cambio.</HeroTitle>
          <HeroSubtitle variant="h2">
            Impulsamos tu visión digital.
          </HeroSubtitle>
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
      </HeroTextContent>
    </HeroContent>
  );
};
