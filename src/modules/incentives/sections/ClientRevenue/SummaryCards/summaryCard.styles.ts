import type { Theme, SxProps } from "@mui/material/styles";

export const summaryCardStyles = {
  grid: {
    mt: 2,
    display: "grid",
    // gridTemplateColumns: {
    //   xs: "1fr",
    //   md: "repeat(3,1fr)",
    // },
    gap: 2,
  },

  card: {
    background: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "16px",

    padding: "14px 16px",

    display: "flex",
    flexDirection: "column",

    minHeight: 96,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 1,

    mb: 1,
  },

  icon: {
    fontSize: 18,
  },

  title: {
    fontSize: "11px",
    fontWeight: 400,
    color: "#6b7280",
  },

  value: {
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: 1.1,
    mb: 0.5,
  },

  subtitle: {
    fontSize: "11px",
    color: "#6b7280",
    fontWeight: 400,
  },
} satisfies Record<string, SxProps<Theme>>;
