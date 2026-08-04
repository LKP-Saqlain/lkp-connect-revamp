import type { Theme, SxProps } from "@mui/material/styles";

export const revenueProgressStyles = {
  card: {
    // mt: 2,

    background: "#FFFFFF",

    borderRadius: "16px",

    border: "1px solid #E5E7EB",
    p: 2,
  },

  header: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    // border: "1px solid red",
    marginBottom: 1,
  },
  leftSection: {
    flex: 1,
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  targetInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  mpc: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: 400,

    "& span": {
      fontWeight: 600,
      color: "#185FA5",
    },
  },

  slabLabel: {
    mt: 1,
    fontSize: 12,
    fontWeight: 500,
    color: "#5F7F38",
  },

  targetAmount: {
    color: "#98A2B3", // Change this to your Figma color if different
    fontWeight: 500,
    fontSize: 10,
    marginLeft: 0.5,
  },

  title: {
    fontSize: 12,

    fontWeight: 400,

    color: "#6B7280",
  },

  multiplier: {
    fontSize: 42,

    fontWeight: 600,

    color: "#185FA5",

    lineHeight: 1,
  },

  multiplierX: {
    color: "#98A2B3",

    fontSize: 22,
  },

  target: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",

    minWidth: 170,
  },

  targetLabel: {
    color: "#9CA3AF",

    fontSize: 12,
  },

  targetValue: {
    fontSize: 12,
    fontWeight: 700,

    color: "#101828",
  },

  targetText: {
    color: "#111111",
    fontWeight: 400,
  },

  progressWrapper: {
    // mt: 2,
  },
  progressLabels: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 1,
    position: "relative",
  },
  progressLabel: {
    fontSize: 12,
    color: "#98A2B3",
    fontWeight: 500,
  },
  progressLabelCenter: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",

    fontSize: 12,
    fontWeight: 600,
    color: "#185FA5",
  },
  progressLabelEnd: {
    fontSize: 12,
    color: "#98A2B3",
    fontWeight: 500,
  },

  progressTrack: {
    height: 12,

    borderRadius: "999px",

    bgcolor: "#E5E7EB",

    overflow: "hidden",
  },

  progressFill: {
    width: "100%",

    height: "100%",

    bgcolor: "#378ADD",
  },

  legend: {
    mt: 2,

    display: "flex",

    flexDirection: "column",

    // gap: 0.5,
  },

  legendLabel: {
    fontSize: 12,
    fontWeight: 400,
    color: "#6B7280",
  },

  legendAmount: {
    fontSize: 13,
    fontWeight: 600,
  },

  legendPercent: {
    fontSize: 13,
    fontWeight: 500,
    color: "#98A2B3",
  },

  legendRow: {
    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",
  },

  left: {
    display: "flex",

    alignItems: "center",

    gap: 1,
  },

  dotBlue: {
    width: 8,

    height: 8,

    borderRadius: "50%",

    bgcolor: "#2F80ED",
  },

  dotGreen: {
    width: 8,

    height: 8,

    borderRadius: "50%",

    bgcolor: "#12B76A",
  },

  dotBlack: {
    width: 8,

    height: 8,

    borderRadius: "50%",

    bgcolor: "#101828",
  },

  slabContainer: {
    mt: 3,

    display: "flex",

    flexDirection: "column",

    gap: 1.2,
  },

  slabRow: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },

  slabRange: {
    width: 80,
    flexShrink: 0,
    fontSize: 12,
    fontWeight: 500,
    color: "#667085",
  },

  slabContent: {
    flex: 1,
    minHeight: 34,
    borderRadius: "8px",
    background: "#EAF3FD",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 2,
  },

  slabText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#185FA5",
  },

  activeSlab: {
    background: "#185FA5",
  },

  disabledSlab: {
    background: "#F3F4F6",
  },

  row: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },

  range: {
    width: 70,
    flexShrink: 0,
    fontSize: 12,
    color: "#667085",
    fontWeight: 500,
  },

  bar: {
    flex: 1,
    height: 26,
    borderRadius: "6px",
    background: "#EAF3FD",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 12px",
  },

  activeBar: {
    background: "#185FA5",
  },

  disabledBar: {
    background: "#F3F4F6",
  },

  barText: {
    fontSize: 12,
    color: "#185FA5",
  },

  you: {
    fontSize: 11,
    fontWeight: 600,
    color: "#FFFFFF",
  },

  youBadge: {
    fontSize: 11,
    fontWeight: 600,
    color: "#FFFFFF",
  },
} satisfies Record<string, SxProps<Theme>>;
