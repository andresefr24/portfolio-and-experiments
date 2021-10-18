import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9100",
      light: "#ff9e00",
      dark: "ff8500",
    },
    secondary: {
      main: "#7b2cbf",
      light: "#9d4edd",
      dark: "#5a189a",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          padding: "0 8px",
          boxShadow: "none",
          height: 48,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: "100vh",
          backgroundColor: "#2A2D34",
        },
      },
    },
  },
});
