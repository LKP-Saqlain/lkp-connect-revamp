import type { Theme, SxProps } from "@mui/material/styles";

export const complianceStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #EAECF0",
    borderRadius: "12px",
    overflow: "hidden",
    mb: 3,
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: 1,

    px: 3,
    py: 2.25,
  },

  iconWrapper: {
    width: 32,
    height: 32,

    borderRadius: "8px",

    background: "#EEF4FF",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    flexShrink: 0,
  },

  icon: {
    color: "#185FA5",
    fontSize: 18,
  },

  title: {
    fontSize: 16,
    fontWeight: 600,
    color: "#101828",
  },

  divider: {
    borderColor: "#EAECF0",
  },

  body: {
    p: 3,

    display: "flex",
    flexDirection: "column",

    gap: 2,
  },

  bulletRow: {
    display: "flex",
    alignItems: "flex-start",

    gap: 1.5,
  },

  bullet: {
    width: 6,
    height: 6,

    borderRadius: "50%",

    bgcolor: "#185FA5",

    mt: "8px",

    flexShrink: 0,
  },

  text: {
    fontSize: 14,
    lineHeight: "22px",

    color: "#475467",

    fontWeight: 400,
  },
} satisfies Record<string, SxProps<Theme>>;
