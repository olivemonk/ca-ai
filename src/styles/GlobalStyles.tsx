import { Global, css } from "@emotion/react";
import { theme } from "./theme";

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        line-height: 1.5;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      * {
        box-sizing: border-box;
      }
      h1, h2, h3, h4, h5, h6 {
        margin: 0;
      }
      *, *::before, *::after {
        font-family: inherit;
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }
    `}
  />
);
