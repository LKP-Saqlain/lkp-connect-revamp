import type { Theme, SxProps } from "@mui/material/styles";

export const policyContentStyles = {
  root: {
    mt: 3,
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      lg: "1fr 1.35fr",
    },
    gap: 3,
    alignItems: "start",
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
} satisfies Record<string, SxProps<Theme>>;
