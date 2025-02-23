import {
  ContentInfoCard,
  Description,
  FeatureCardWrapper,
  IconWrapper,
  TitleCard,
} from "./featureCard.style";
import { LinkButton } from "@Components/LinkButton/LinkButton";
import { IFeatureCardProps } from "./featureCard.types";

export const FeatureCard = ({
  icon,
  title,
  description,
  ctaText,
  ctaLink,
}: IFeatureCardProps) => (
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
