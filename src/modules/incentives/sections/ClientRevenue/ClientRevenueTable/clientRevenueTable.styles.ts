import type { Theme, SxProps } from "@mui/material/styles";

export const clientRevenueTableStyles = {
  card: {
    mt: 1,
    background: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "16px",
    overflow: "hidden",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "14px 18px 10px",
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

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "0 18px 14px",
  },

  legend: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },

  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 0.75,
  },

  legendText: {
    fontSize: "14px",
    color: "#667085",
    fontWeight: 500,
  },

  tableHeader: {
    display: "grid",
    padding: "12px 18px",
    borderTop: "1px solid #EAECF0",
    borderBottom: "1px solid #EAECF0",
    background: "#FFFFFF",
  },

  headerCell: {
    textAlign: "center",
    fontSize: "13px",
    fontWeight: 600,
    color: "#667085",
  },

  rows: {
    display: "flex",
    flexDirection: "column",
  },

  footer: {
    padding: "12px 18px",
    borderTop: "1px solid #EAECF0",
  },
} satisfies Record<string, SxProps<Theme>>;
