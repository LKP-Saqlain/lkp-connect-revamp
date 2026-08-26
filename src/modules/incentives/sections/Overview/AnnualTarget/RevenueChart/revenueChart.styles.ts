import type { Theme, SxProps } from "@mui/material/styles";

export const revenueChartStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #EAECF0",
    borderRadius: "16px",
    padding: "18px 20px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: 700,
    color: "#101828",

    mb: 1.5,
  },

  title: {
    fontSize: "15px",
    fontWeight: 500,
    color: "#111",
  },

  legend: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
  },

  legendDot: {
    width: 10,
    height: 10,
    borderRadius: "10%",
  },

  legendText: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#475467",
  },

  chartWrapper: {
    width: "100%",
    height: 430,
  },
} satisfies Record<string, SxProps<Theme>>;
