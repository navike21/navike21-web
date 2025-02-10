import { SimplePaletteColorOptions } from "@mui/material";

export interface IColor {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
}

export const colors: IColor = {
  primary: {
    main: "#CBFC02",
    light: "#E6FFA8",
    dark: "#A4D800",
    contrastText: "#1D240F",
  },
  secondary: {
    main: "#4CF98F",
    light: "#7CFFB9",
    dark: "#00C96A",
    contrastText: "#1D240F",
  },
};
