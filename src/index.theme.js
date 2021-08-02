import { createMuiTheme } from "@material-ui/core";

import { blueGrey } from "@material-ui/core/colors";
// These predefined colors contain shades so that we do not have to define light, main, dark individually. (we have to define those individually when using hex values)

const CustomTheme = createMuiTheme({
  palette: {
    primary: blueGrey, // Predefined color that we imported from mui (contains shades)

    secondary: {
      main: "#e3e3e3", // we can define any or all of these three: light, main, dark colors (shades)
    },

    typography: {
      // Add google fonts to main stylesheet and then do this to change font
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  },
});

export default CustomTheme;
