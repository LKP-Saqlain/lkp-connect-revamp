import type { Theme, SxProps } from "@mui/material/styles";

export const carryForwardTLStyles = {
  card: {
    background: "#FFF9EB",
    border: "1px solid #FBD988",
    borderRadius: "12px",
    p: 2.5,
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 0.5,
  },
  title: {
    fontSize: 13.5,
    fontWeight: 700,
    color: "#9A6700",
  },
  description: {
    fontSize: 12,
    color: "#8A6D3B",
    mb: 2,
  },
  boxRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 2,
  },
  box: {
    border: "1px solid #FBD988",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    py: 1.5,
    px: 2,
    textAlign: "center",
  },
  boxHighlight: {
    backgroundColor: "#EAF3DE",
    borderColor: "#C3DDA1",
  },
  boxLabel: {
    fontSize: 11,
    color: "#8A6D3B",
    mb: 0.5,
  },
  boxValue: {
    fontSize: 16,
    fontWeight: 700,
    color: "#101828",
  },
  boxValuePositive: {
    color: "#3B6D11",
  },
} satisfies Record<string, SxProps<Theme>>;
