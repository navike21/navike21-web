import { ReactNode } from "react";
import {
  ContentInfoCard,
  Description,
  FeatureCardWrapper,
  IconWrapper,
  TitleCard,
} from "./featureCard.style";
import { LinkButton } from "@Components/LinkButton/LinkButton";

interface IFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  ctaText,
  ctaLink,
}: IFeatureCardProps) => {
  return (
    <FeatureCardWrapper>
      <ContentInfoCard>
        <IconWrapper>{icon}</IconWrapper>
        <TitleCard type="subtitle" variant="h3">
          {title}
        </TitleCard>
        <Description>{description}</Description>
      </ContentInfoCard>
      {ctaText && ctaLink && <LinkButton href={ctaLink}>{ctaText}</LinkButton>}
    </FeatureCardWrapper>
  );
};
