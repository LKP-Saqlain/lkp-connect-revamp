import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0C2D62",
    },

    secondary: {
      main: "#D4AF37",
    },
  },

  typography: {
    fontFamily: "Lato",
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;
