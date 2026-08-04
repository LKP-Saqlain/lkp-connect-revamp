import type { Theme, SxProps } from "@mui/material/styles";

export const eligibilityStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "16px",
    p: 2,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 2,
  },

  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111827",
  },

  slab: {
    mt: 2,
    mb: 2,
    fontSize: 13,
    color: "#667085",
  },

  qualificationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 2,
    mb: 2,
  },
} satisfies Record<string, SxProps<Theme>>;
