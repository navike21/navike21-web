import { EPrimary } from "@Enums/color";
import { styled } from "@mui/material";
import Link from "next/link";

export const LinkButtonElement = styled(Link)(({ theme }) => ({
  position: "relative",
  display: "flex",
  padding: theme.spacing(1.1, 3.5),
  backgroundImage: "var(--background-gradient-hover)",
  color: EPrimary.CONTRAST_TEXT,
  borderRadius: "var(--mui-shape-borderRadius)",
  overflow: "hidden",
  cursor: "pointer",
  gap: theme.spacing(1.5),
  transition: "background 0.6s ease, transform 0.3s ease",
  backgroundSize: "200%",
  backgroundPosition: "center",
  width: "fit-content",

  "&:hover": {
    backgroundPosition: "8%",
  },

  "& .ripple": {
    position: "absolute",
    borderRadius: "50%",
    transform: "scale(0)",
    background: "rgba(255, 255, 255, 0.5)",
    animation: "ripple 600ms ease-out",
    pointerEvents: "none",
    zIndex: 1,
  },

  "@keyframes ripple": {
    to: {
      transform: "scale(4)",
      opacity: 0,
    },
  },
}));

export const TextLinkButton = styled("span")(() => ({
  position: "relative",
  zIndex: 2,
  fontWeight: 600,
}));
