import { ReactNode } from "react";

export interface IWrapProps {
  backgroundImage?: string;
  backgroundColor?: string;
}

export interface ITitleProps {
  textAlign?: "left" | "center" | "right";
  color?: "primary" | "white";
}

export interface ITitleAndSubtitle extends ITitleProps {
  text: string;
}

export interface ContentProps extends IWrapProps {
  children: ReactNode;
  title?: ITitleAndSubtitle;
  subtitle?: ITitleAndSubtitle;
  contentDirection?: "row" | "column";
}
