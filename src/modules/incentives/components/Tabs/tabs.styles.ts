import type { SxProps, Theme } from "@mui/material/styles";

export const tabsStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    gap: 4,

    width: "100%",
    // border: "1px solid black",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#FFFFFF",

    // borderBottom: "1px solid #E5E7EB",

    px: 2,
    py: 0,
  },

  tab: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    py: 1.2,
    px: 0,

    cursor: "pointer",

    transition: "color .2s ease",

    color: "#667085",

    "&:hover": {
      color: "#185FA5",

      "& .MuiTypography-root": {
        color: "#185FA5",
      },
    },
  },

  activeTab: {
    color: "#185FA5",

    "& .MuiTypography-root": {
      color: "#185FA5",
      fontWeight: 400,
    },

    "&::after": {
      content: '""',
      position: "absolute",

      left: 0,
      right: 0,
      bottom: 0,

      height: "1.5px",

      borderRadius: "999px",

      backgroundColor: "#185FA5",
    },
  },

  tabText: {
    fontSize: 14,
    fontWeight: 500,
    color: "#667085",
    lineHeight: 1.2,
  },
} satisfies Record<string, SxProps<Theme>>;
