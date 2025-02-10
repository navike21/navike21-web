import React from "react";
import {
  HeroContent,
  HeroDescription,
  HeroExperience,
  HeroSubtitle,
  HeroTextContent,
  HeroTextContentInfo,
  HeroTitle,
} from "./heroSection.style";
import { useThemeMui } from "@Hooks/useThemeMui";
import { LinkButton } from "@Components/LinkButton/LinkButton";
import { useHeader } from "@Components/Header/header.hook";

export const HeroSection = () => {
  const { breakpoints } = useThemeMui();
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
        {breakpoints.lg && <HeroExperience>Holi</HeroExperience>}
      </HeroTextContent>
    </HeroContent>
  );
};
