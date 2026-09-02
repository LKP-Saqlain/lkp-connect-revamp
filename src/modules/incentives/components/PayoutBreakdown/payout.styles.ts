import type { Theme, SxProps } from "@mui/material/styles";

export const payoutStyles = {
  card: {
    background: "#fff",

    border: "1px solid #E4E7EC",

    borderRadius: "14px",

    overflow: "hidden",
  },

  header: {
    display: "flex",

    alignItems: "center",

    gap: 1,

    px: 2,

    pt: 2,

    pb: 1.5,
  },

  title: {
    fontSize: 13,

    fontWeight: 500,

    color: "#111827",
  },

  tableHeader: {
    display: "grid",

    gridTemplateColumns: "2fr 2fr 1fr 1fr",

    px: 2,

    py: 1,

    color: "#6B7280",

    fontSize: 11,

    borderBottom: "1px solid #EEF2F6",
  },

  row: {
    display: "grid",

    gridTemplateColumns: "2fr 2fr 1fr 1fr",

    px: 2,

    py: 1.3,

    alignItems: "center",

    borderBottom: "1px solid #EEF2F6",

    fontSize: 3,
  },

  highlightRow: {
    bgcolor: "#F8FAFC",

    fontWeight: 600,
  },

  amount: {
    textAlign: "right",
    fontSize: "12px",
    fontWeight: 400,
  },

  basis: {
    color: "#667085",
    fontSize: 12,
  },

  rate: {
    color: "#667085",
    fontSize: 12,
  },
} satisfies Record<string, SxProps<Theme>>;
