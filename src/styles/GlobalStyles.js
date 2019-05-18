import { createGlobalStyle } from "styled-components";

export const fonts = {
  regular: "../assets/fonts/Roboto-Regular.ttf",
  medium: "../assets/fonts/Roboto-Medium.ttf"
};

const GlobalStyles = createGlobalStyle`
  body {
    @import url(${fonts.regular});
    font-family: 'Regular', sans-serif;
  }
  :root {
    --blue: #0bb4f2;
    --black: #282828;
    --grey: #EDEDEF;
    --white: #FFF;
    --green: #7DED5E
  }
`;

export default GlobalStyles;
