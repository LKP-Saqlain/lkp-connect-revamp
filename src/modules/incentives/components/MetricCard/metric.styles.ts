import type { SxProps, Theme } from "@mui/material/styles";

export const metricStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(3, 1fr)",
    },
    gap: 2,
    mt: 3,
  },

  card: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "16px",
    padding: "15px",
    minHeight: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: ".2s",
    "&:hover": {
      boxShadow: "0 6px 24px rgba(16,24,40,.08)",
    },
  },

  title: {
    fontSize: 12,
    fontWeight: 400,
    color: "#667085",
    mb: 2,
  },
  value: {
    display: "flex",
    alignItems: "center", // vertically centers the meta
    justifyContent: "space-between",
    fontSize: 28,
    fontWeight: 500,
    color: "#101828",
    width: "100%",
  },

  meta: {
    fontSize: 13,
    fontWeight: 500,
    color: "#667085",
    marginLeft: "auto", // pushes it to the right
  },

  subtitle: {
    mt: 1,
    fontSize: 12,
    color: "#3B6D11",
  },
} satisfies Record<string, SxProps<Theme>>;
