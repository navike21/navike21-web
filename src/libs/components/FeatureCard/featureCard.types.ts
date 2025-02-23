import { ReactNode } from "react";

export interface IFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}
