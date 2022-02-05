import { createTheme, responsiveFontSizes } from "@mui/material";

let MyTheme = createTheme({
  palette: {
    primary: {
      main: "#50b7f5",
    },
    secondary: {
      main: "#e6ecf0",
    },
  },
  spacing: (factor: number) => `${factor}px`,
  breakpoints: {},
});

MyTheme = responsiveFontSizes(MyTheme);

export default MyTheme;
