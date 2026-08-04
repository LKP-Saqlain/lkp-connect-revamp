import type { Theme, SxProps } from "@mui/material/styles";

export const alertBannerStyles = {
  root: {
    display: "flex",
    alignItems: "flex-start",

    gap: 2,

    padding: "18px 20px",

    borderRadius: "10px",

    border: "1px solid",
    mt: 3,
    background: "#FDECEC",
    borderColor: "#F5C2C7",
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
    fontSize: 20,

    color: "#B42318",

    marginTop: "2px",
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 14,

    fontWeight: 600,

    color: "#7A271A",

    marginBottom: "4px",
  },

  description: {
    fontSize: 13,

    lineHeight: 1.5,

    color: "#7A271A",
  },
} satisfies Record<string, SxProps<Theme>>;
