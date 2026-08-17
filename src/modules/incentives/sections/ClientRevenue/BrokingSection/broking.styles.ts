import type { Theme, SxProps } from "@mui/material/styles";

export const brokingStyles = {
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },

  title: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#101828",
    mb: 1,
  },

  rows: {
    display: "flex",
    flexDirection: "column",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr 1fr",
    alignItems: "center",

    py: 1.5,

    borderBottom: "1px solid #F2F4F7",

    "&:last-child": {
      borderBottom: "none",
    },
  },

  label: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#344054",
  },

  revenue: {
    textAlign: "right",
    fontSize: "14px",
    fontWeight: 600,
    color: "#101828",
  },

  credits: {
    textAlign: "right",
    fontSize: "13px",
    fontWeight: 600,
    color: "#2F80ED",
  },
} satisfies Record<string, SxProps<Theme>>;
