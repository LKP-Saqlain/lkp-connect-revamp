import type { Theme, SxProps } from "@mui/material/styles";

export const revenueBreakdownStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "16px",
    overflow: "hidden",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: 1,

    px: "24px",
    py: "18px",

    borderBottom: "1px solid #EAECF0",
  },

  titleWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  title: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#101828",
  },

  body: {
    display: "grid",

    gridTemplateColumns: "1fr 1fr",

    gap: "32px",

    px: "24px",
    py: "24px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
  },

  columnHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    pb: "12px",
    mb: "4px",
  },

  columnTitle: {
    fontSize: "15px",
    fontWeight: 700,
  },

  columnValue: {
    fontSize: "15px",
    fontWeight: 700,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    minHeight: "42px",

    borderBottom: "1px solid #F2F4F7",

    "&:last-child": {
      borderBottom: "none",
    },
  },

  rowLabel: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#344054",
  },

  rowValue: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#101828",
  },
} satisfies Record<string, SxProps<Theme>>;
