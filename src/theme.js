import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4d5761",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "rgb(38, 48, 59)",
    },
    text: {
      primary: "#fff",
    },
  },

  overrides: {
    MuiButton: {
      outLined: {
        border: "2px solid rgba(0, 0, 0, 0.23)",
      },
    },
  },
});

export default theme;
