import type { Theme, SxProps } from "@mui/material/styles";

export const eligibilityStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "16px",
    p: 2,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 2,
  },

  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111827",
  },

  slab: {
    mt: 2,
    mb: 2,
    fontSize: 13,
    color: "#667085",
  },

  // qualificationGrid: {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(2,1fr)",
  //   gap: 2,
  //   mb: 2,
  // },

  qualificationGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
    columnGap: 6,
    mt: 2,
  },

  qualificationItem: {
    minHeight: 70,
    py: 1.5,
  },

  qualificationItemSecondRow: {
    borderTop: "1px solid #EAECF0",
    pt: 2,
  },

  qualificationHeader: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  statusIcon: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  statusIconSuccess: {
    backgroundColor: "#ECFDF3",
    color: "#12B76A",
  },

  statusIconError: {
    backgroundColor: "#FEF3F2",
    color: "#D92D20",
  },

  qualificationTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: "#101828",
  },

  qualificationValueRow: {
    display: "flex",
    alignItems: "baseline",
    gap: 0.5,
    ml: 3.5,
    mt: 0.25,
  },

  actualLabel: {
    fontSize: 11,
    color: "#667085",
  },

  actualValue: {
    fontSize: 11,
    fontWeight: 600,
  },

  requiredLabel: {
    fontSize: 11,
    color: "#667085",
  },

  requiredValue: {
    fontSize: 11,
    fontWeight: 600,
    color: "#101828",
  },
} satisfies Record<string, SxProps<Theme>>;
