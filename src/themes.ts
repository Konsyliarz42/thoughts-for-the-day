export enum ThemeMode {
  DARK = "darkTheme",
  LIGHT = "lightTheme",
  AUTO = "autoTheme",
}

export interface ThemeStyle {
  backgroundColor: string;
  color: string;
}

export const darkStyle: ThemeStyle = {
  backgroundColor: "#252422",
  color: "#DEE2E6",
};

export const lightStyle: ThemeStyle = {
  backgroundColor: "#DEE2E6",
  color: "#252422",
};
