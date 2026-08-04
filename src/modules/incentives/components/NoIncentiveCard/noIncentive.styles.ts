import type { Theme, SxProps } from "@mui/material/styles";

export const noIncentiveStyles = {
  card: {
    display: "flex",
    alignItems: "flex-start",

    gap: 2,

    background: "#FDECEC",

    border: "1px solid #F5C2C7",

    borderRadius: "12px",

    p: 2.5,
  },

  iconWrapper: {
    width: 36,

    height: 36,

    borderRadius: "50%",

    bgcolor: "#FED7D4",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    flexShrink: 0,
  },

  icon: {
    color: "#B42318",

    fontSize: 20,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 15,

    fontWeight: 600,

    color: "#B42318",

    mb: 0.5,
  },

  description: {
    fontSize: 13,

    lineHeight: "20px",

    color: "#475467",
  },
} satisfies Record<string, SxProps<Theme>>;
