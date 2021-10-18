import React from "react";
import Router from "./ui/routes/Router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./ui/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
