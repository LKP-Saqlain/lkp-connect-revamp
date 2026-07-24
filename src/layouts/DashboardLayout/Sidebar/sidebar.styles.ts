import type { SxProps, Theme } from "@mui/material/styles";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "@/config/navigation";
import { palette } from "@/styles/palette";
import { shadows } from "@/styles/palette";

export const sidebarStyles = {
  root: {
    width: SIDEBAR_WIDTH,
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,

    display: "flex",
    flexDirection: "column",

    backgroundColor: palette.white,
    borderRight: `1px solid ${palette.border}`,
    boxShadow: shadows.sidebar,

    zIndex: 1200,

    overflow: "hidden",
  },

  logoContainer: {
    height: HEADER_HEIGHT,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${palette.border}`,
    // marginTop: "5px",

    // px: 6,
  },

  logo: {
    width: 75,
    height: 75,
    objectFit: "contain",
    // m: 1,
    marginBottom: "5px",
  },

  menuContainer: {
    flex: 1,
    overflowY: "auto",
    // border: "1px solid black",
    py: 2,

    "&::-webkit-scrollbar": {
      width: 4,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#D6D6D6",
      borderRadius: 10,
    },
  },

  footer: {
    borderTop: `1px solid ${palette.border}`,
  },

  section: {
    mb: 2.1,
    // border: "1px solid red",
  },

  sectionTitle: {
    px: 3,
    // mb: 0.4,
    // border: "1px solid black",
    fontSize: 10,
    fontWeight: 500,
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    // border: "1px solid black",
    gap: 1.5,

    mx: 0.5,

    // mb: 0.5,

    px: 1,

    py: 1,

    borderRadius: "10px",

    cursor: "pointer",

    transition: "all .2s",

    "&:hover": {
      bgcolor: "#F3F7FF",
    },
  },
  activeMenu: {
    position: "relative",

    bgcolor: "#EBF3FC",

    "& .MuiSvgIcon-root": {
      color: "#185FA5",
    },

    "& .MuiTypography-root": {
      color: "#185FA5",
      fontWeight: 600,
    },

    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "8px",
      bottom: "8px",
      width: "3px",
      backgroundColor: "#185FA5",
      borderRadius: "0 6px 6px 0",
    },
  },

  menuIcon: {
    fontSize: 20,
  },

  menuText: {
    fontSize: 14,
    fontWeight: 500,
    fontColor: "#6B7280",
  },

  footerContainer: {
    display: "flex",

    alignItems: "center",

    gap: 1.5,

    padding: 1,
  },
} satisfies Record<string, SxProps<Theme>>;
