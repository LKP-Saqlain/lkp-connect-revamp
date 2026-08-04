import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/variables.css";
import "./styles/global.css";
import App from "@/app/App";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
