import { typography, Typography } from "./typography";

export interface Theme {
  name: string;
  textColorPrimary: string;
  textColorPurple: string;
  textColorSecondary: string;
  textColorHoverSelected: string;
  textDark1: string;
  backgroundDark: string;
  backgroundDark4: string;
  backgroundDark3: string;
  backgroundDark2: string;
  backgroundDark1: string;
  backgroundLight3: string;
  backgroundLight2: string;
  backgroundLight1: string;
  backgroundWhite: string;
  backgroundGradient: string;
  backgroundShadeDark2: string;
  red: string;
  yellow: string;
  green: string;
  purple: string;
  blueElectric: string;
  typography: Typography;
}

export const themes = {
  dark: {
    name: "dark",
    textColorPrimary: "#CED0DD",
    textColorPurple: "#7367FF",
    textColorSecondary: "#82848E",
    textColorHoverSelected: "#EEF0FF",
    textDark1: "#F8FCFF",
    backgroundDark: "#101113",
    backgroundDark4: "#17191D",
    backgroundDark3: "#202226",
    backgroundDark2: "#27292E",
    backgroundDark1: "#36383F",
    backgroundLight3: "#494B50",
    backgroundLight2: "#82848E",
    backgroundLight1: "#CED0DD",
    backgroundWhite: "#EEF0FF",
    backgroundGradient:
      "linear-gradient(180deg, #5B48D1 -11.46%, #6784FF 122.92%)",
    backgroundShadeDark2: "#27292E",
    red: "#FF3864",
    yellow: "#DBB889",
    green: "#7FC18A",
    purple: "#7367FF",
    blueElectric: "#7367FF",
    typography,
  },
  light: {
    name: "light",
    textColorPrimary: "#2A2F3D",
    textColorPurple: "#7367FF",
    textColorSecondary: "#28282B",
    textColorHoverSelected: "#101113",
    textDark1: "#101113",
    backgroundDark: "#FFFFFF",
    backgroundDark4: "#FCFDFF",
    backgroundDark3: "#F7F8FA",
    backgroundDark2: "#F0F4F6",
    backgroundDark1: "#F8FCFF",
    backgroundLight3: "#B2BAC3",
    backgroundLight2: "#28282B",
    backgroundLight1: "#2A2F3D",
    backgroundWhite: "#101113",
    backgroundGradient:
      "linear-gradient(180deg, #5B48D1 -11.46%, #6784FF 122.92%)",
    backgroundShadeDark2: "#F0F4F7",
    red: "#FF3864",
    yellow: "#DBB889",
    green: "#7FC18A",
    purple: "#7367FF",
    blueElectric: "#7367FF",
    typography,
  },
};
