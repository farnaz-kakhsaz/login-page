import { createTheme } from "@material-ui/core/styles";
// Fonts
import VazirRegularEof from "../assets/fonts/vazir/Vazir-Regular.eot";
import VazirMediumEof from "../assets/fonts/vazir/Vazir-Medium.eot";
import VazirBoldEof from "../assets/fonts/vazir/Vazir-Bold.eot";
import VazirLightEof from "../assets/fonts/vazir/Vazir-Light.eot";
/* IE6-8 */
import VazirRegularWoff2 from "../assets/fonts/vazir/Vazir-Regular.woff2";
import VazirMediumWoff2 from "../assets/fonts/vazir/Vazir-Medium.woff2";
import VazirBoldWoff2 from "../assets/fonts/vazir/Vazir-Bold.woff2";
import VazirLightWoff2 from "../assets/fonts/vazir/Vazir-Light.woff2";
/* Chrome36+, Opera24+*/
import VazirRegularWoff from "../assets/fonts/vazir/Vazir-Regular.woff";
import VazirMediumWoff from "../assets/fonts/vazir/Vazir-Medium.woff";
import VazirBoldWoff from "../assets/fonts/vazir/Vazir-Bold.woff";
import VazirLightWoff from "../assets/fonts/vazir/Vazir-Light.woff";
/* FF3.6+, IE9, Chrome6+, Saf5.1+*/
import VazirRegularTtf from "../assets/fonts/vazir/Vazir-Regular.ttf";
import VazirMediumTtf from "../assets/fonts/vazir/Vazir-Medium.ttf";
import VazirBoldTtf from "../assets/fonts/vazir/Vazir-Bold.ttf";
import VazirLightTtf from "../assets/fonts/vazir/Vazir-Light.ttf";

const VazirRegular = {
  fontFamily: "Vazir",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "normal",
  src: `
    local('Vazir'),
    local('Vazir-Regular'),
    url(${VazirRegularEof}) format('embedded-opentype'),
    url(${VazirRegularWoff2}) format('woff2'),
    url(${VazirRegularWoff}) format('woff'),
    url(${VazirRegularTtf}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const VazirMedium = {
  fontFamily: "Vazir",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    local('Vazir'),
    local('Vazir-Regular'),
    url(${VazirMediumEof}) format('embedded-opentype'),
    url(${VazirMediumWoff2}) format('woff2'),
    url(${VazirMediumWoff}) format('woff'),
    url(${VazirMediumTtf}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const VazirBold = {
  fontFamily: "Vazir",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "bold",
  src: `
    local('Vazir'),
    local('Vazir-Regular'),
    url(${VazirBoldEof}) format('embedded-opentype'),
    url(${VazirBoldWoff2}) format('woff2'),
    url(${VazirBoldWoff}) format('woff'),
    url(${VazirBoldTtf}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const VazirLight = {
  fontFamily: "Vazir",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    local('Vazir'),
    local('Vazir-Regular'),
    url(${VazirLightEof}) format('embedded-opentype'),
    url(${VazirLightWoff2}) format('woff2'),
    url(${VazirLightWoff}) format('woff'),
    url(${VazirLightTtf}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Vazir",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [VazirRegular, VazirMedium, VazirBold, VazirLight],
      },
    },
  },
});
