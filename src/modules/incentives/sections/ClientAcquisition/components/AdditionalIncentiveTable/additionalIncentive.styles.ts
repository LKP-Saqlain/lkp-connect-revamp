import type { Theme, SxProps } from "@mui/material/styles";

export const additionalIncentiveStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "8px",
    overflow: "hidden",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 2,
    py: 1.5,
    borderBottom: "1px solid #EAECF0",
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 0.8,
  },
  title: {
    fontSize: 13,
    fontWeight: 600,
    color: "#101828",
  },
  headerNote: {
    fontSize: 11,
    color: "#667085",
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    px: 2,
    py: 1,
    color: "#667085",
    fontSize: 11,
    fontWeight: 500,
    borderBottom: "1px solid #EAECF0",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    px: 2,
    py: 1.2,
    alignItems: "center",
    fontSize: 12,
    borderBottom: "1px solid #EAECF0",
  },
  highlightRow: {
    background: "#F8FAFC",
    fontWeight: 600,
  },
  numCell: {
    color: "#185FA5",
    fontWeight: 500,
    fontSize: "12px",
  },
  rateCell: {
    color: "#667085",
    fontSize: "12px",
  },
  bonusCell: {
    color: "#D97706",
    fontWeight: 600,
    textAlign: "right",
    fontSize: "12px",
  },
  footerNote: {
    display: "flex",
    alignItems: "flex-start",
    gap: 0.8,
    px: 2,
    py: 1.2,
    fontSize: 11,
    color: "#667085",
  },
} satisfies Record<string, SxProps<Theme>>;
