import type { Theme, SxProps } from "@mui/material/styles";

export const policyInfoStyles = {
  card: {
    background: "#FFF",
    border: "1px solid #EAECF0",
    borderRadius: "12px",
    p: 3,
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 2,
  },

  title: {
    fontSize: 18,
    fontWeight: 600,
    color: "#101828",
  },

  divider: {
    mt: 2,
    mb: 2,
    borderColor: "#EAECF0",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  },
} satisfies Record<string, SxProps<Theme>>;
