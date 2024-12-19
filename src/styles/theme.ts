export const theme = {
  colors: {
    primary: "#0D58C1",
    primaryDark: "#0D58C1",
    textTertiary: "#414651",
    textSecondary: "#171717",
    textPrimary: "#181D27",
    white: "#FFFFFF",
    background: "#FAFAFA",
    offwhite: "#E9EAEB",
    text: "#212529",
    gray: "#6C757D",
    blue: "#1570EF",
    ligthBlue: "#B2DDFF",
    blueBg: "#EFF8FF",
    buttonBorder: "#D8DAE5",
    buttonBorderGray: "#D5D7DA"
  },
  spacing: (factor: number) => `${factor * 8}px`,
  borderRadius: "8px",
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
  mediaQueries: {
    mobile: "@media (max-width: 480px)",
    tablet: "@media (max-width: 768px)",
    desktop: "@media (max-width: 1024px)",
  },
};
