import type { Theme, SxProps } from "@mui/material/styles";

export const mpcStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #EAECF0",
    borderRadius: "12px",
    overflow: "hidden",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    px: 3,
    py: 2,
    borderBottom: "1px solid #EAECF0",
  },

  headerIcon: {
    width: 32,
    height: 32,
    borderRadius: "8px",
    background: "#EFF8FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },

  headerTitle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#101828",
    lineHeight: "24px",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    alignItems: "center",
    px: 3,
    py: 1.75,
    background: "#F9FAFB",
    borderBottom: "1px solid #EAECF0",
  },

  headerCell: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#667085",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    alignItems: "center",
    minHeight: 60,
    px: 3,
    borderBottom: "1px solid #F2F4F7",

    "&:last-child": {
      borderBottom: "none",
    },
  },

  role: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#101828",
  },

  value: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#185FA5",
  },

  secondaryValue: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#344054",
  },
} satisfies Record<string, SxProps<Theme>>;
