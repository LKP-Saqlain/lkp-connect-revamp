import type { Theme, SxProps } from "@mui/material/styles";

export const payoutStyles = {
  card: {
    background: "#FFF",

    border: "1px solid #EAECF0",

    borderRadius: "12px",

    overflow: "hidden",
  },

  section: {
    px: 3,

    py: 2.5,
  },

  header: {
    display: "flex",

    alignItems: "center",

    gap: 1,

    mb: 2,
  },

  iconWrapper: {
    width: 32,

    height: 32,

    borderRadius: "8px",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    bgcolor: "#EEF4FF",

    flexShrink: 0,
  },

  orangeWrapper: {
    bgcolor: "#FFF4E5",
  },

  blueIcon: {
    color: "#185FA5",

    fontSize: 18,
  },

  orangeIcon: {
    color: "#B54708",

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

  bullets: {
    display: "flex",

    flexDirection: "column",

    gap: 1.5,
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

  orangeBullet: {
    bgcolor: "#B54708",
  },

  text: {
    fontSize: 14,

    lineHeight: "22px",

    color: "#475467",
  },
} satisfies Record<string, SxProps<Theme>>;
