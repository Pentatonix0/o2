import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5b4a3d",
    },
    secondary: {
      main: "#bf6a2d",
    },
    background: {
      default: "#fffdf9",
      paper: "#fff9f1",
    },
    text: {
      primary: "#201912",
      secondary: "#695849",
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: '"Avenir Next", "Trebuchet MS", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
