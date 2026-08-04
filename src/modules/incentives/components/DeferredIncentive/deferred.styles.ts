import type { Theme, SxProps } from "@mui/material/styles";

export const deferredStyles = {
  card: {
    background: "#FFFFFF",

    borderRadius: "16px",

    border: "1px solid #E5E7EB",

    padding: 2,
  },

  title: {
    fontSize: 13,

    fontWeight: 500,

    color: "#111111",

    mb: 1,
  },

  infoBox: {
    display: "flex",

    alignItems: "flex-start",

    gap: 1,

    background: "#EBF3FC",

    borderRadius: "8px",

    padding: 0.7,
  },

  infoIcon: {
    color: "#185FA5",

    fontSize: 18,

    mt: "2px",
  },

  infoText: {
    fontSize: 13,

    lineHeight: 1.6,

    color: "#667085",
  },

  row: {
    display: "grid",
    // border: "1px solid black",
    gridTemplateColumns: "1fr auto auto",

    alignItems: "center",

    gap: 2,

    py: 0.8,

    "&:not(:last-child)": {
      borderBottom: "1px solid #F2F4F7",
    },
  },

  period: {
    fontSize: 12,

    fontWeight: 500,

    color: "#111111",
  },

  amount: {
    fontSize: 13,
    fontWeight: 500,
    color: "#111111",
  },

  status: {
    fontSize: 13,

    fontWeight: 500,

    textAlign: "right",
  },
} satisfies Record<string, SxProps<Theme>>;
