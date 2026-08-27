import type { SxProps, Theme } from "@mui/material/styles";

export const performanceSectionStyles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 0.75,
  },
  titleIcon: {
    fontSize: 18,
    color: "#101828",
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#101828",
  },
  criteria: {
    fontSize: 12,
    color: "#667085",
    fontWeight: 400,
  },
  criteriaStrong: {
    fontWeight: 700,
    color: "#101828",
  },
} satisfies Record<string, SxProps<Theme>>;
