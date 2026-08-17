import type { Theme, SxProps } from "@mui/material/styles";

export const chartStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "16px",
    overflow: "hidden",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    px: 3,
    py: 2,

    borderBottom: "1px solid #EAECF0",
  },

  title: {
    fontSize: 16,
    fontWeight: 600,
    color: "#101828",
  },

  chartWrapper: {
    px: 2,
    py: 2,
  },
} satisfies Record<string, SxProps<Theme>>;
