import type { Theme, SxProps } from "@mui/material/styles";

export const targetMetricStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #EAECF0",
    borderRadius: "16px",
    padding: "12px 15px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 0.75,
  },

  icon: {
    fontSize: 16,
  },

  title: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#344054",
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    mt: 0,
  },

  label: {
    fontSize: "12px",
    color: "#667085",
    fontWeight: 400,
  },

  targetValue: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#101828",
  },

  achievedValue: {
    fontSize: "13px",
    fontWeight: 500,
  },

  progressWrapper: {
    mt: 0.75,
  },

  percentageContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },

  percentageChip: {
    mt: 1,
    height: 24,

    px: 1.25,

    borderRadius: "999px",

    background: "#FFF4E5",

    color: "#B54708",

    fontSize: "12px",

    fontWeight: 400,
  },

  track: {
    width: "100%",

    height: 8,

    background: "#EEF2F6",

    borderRadius: "999px",

    overflow: "hidden",
  },

  fill: {
    height: "100%",

    borderRadius: "999px",

    transition: ".35s ease",
  },
} satisfies Record<string, SxProps<Theme>>;
