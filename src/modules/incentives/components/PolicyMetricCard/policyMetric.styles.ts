import type { Theme, SxProps } from "@mui/material/styles";

export const policyMetricStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #EAECF0",
    borderRadius: "12px",
    p: 2.5,
    minHeight: 124,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
  },

  leftBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 4,
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",
  },

  title: {
    fontSize: 13,
    fontWeight: 500,
    color: "#475467",
  },

  value: {
    mt: 1.5,
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1.1,
    color: "#101828",
  },

  helper: {
    mt: 1.5,
    fontSize: 12,
    lineHeight: "18px",
    color: "#667085",
  },
} satisfies Record<string, SxProps<Theme>>;
