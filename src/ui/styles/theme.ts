import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#028090",
      light: "#E4FDE1",
      dark: "#114B5F",
    },
    secondary: {
      main: "#ff9100",
      light: "#ff9e00",
      dark: "#ff8500",
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
