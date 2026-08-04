import type { Theme, SxProps } from "@mui/material/styles";

export const slabReferenceStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #EAECF0",
    borderRadius: "16px",
    p: 3,
  },

  table: {
    display: "flex",
    flexDirection: "column",
    // gap: 14,
    // mt: 2,
  },

  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#101828",
    mb: 2,
  },

  legend: {
    display: "flex",
    gap: 3,
    mb: 3,
  },

  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 1,
  },

  legendText: {
    fontSize: 13,
    fontWeight: 500,
    color: "#667085",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "90px 1fr 1fr",
    alignItems: "center",
    gap: 14,
    py: 1,
  },

  cell: {
    fontSize: 15,
    fontWeight: 500,
    color: "#667085",
  },

  track: {
    position: "relative",
    width: "100%",
    height: 34,
    background: "#EEF2F6",
    borderRadius: "6px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },

  fillBlue: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    paddingRight: 12,

    background: "#BFD9F7",

    borderRadius: "6px 0 0 6px",
  },

  fillGreen: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    paddingRight: 12,

    background: "#BFE8D7",

    borderRadius: "6px 0 0 6px",
  },

  percent: {
    fontSize: 15,
    fontWeight: 600,
    color: "#344054",
    lineHeight: 1,
  },

  infoBox: {
    mt: 3,
    p: 1,
    bgcolor: "#EEF4FF",
    border: "1px solid #D6E4FF",
    borderRadius: "10px",

    display: "flex",
    alignItems: "flex-start",
    gap: 1.5,
  },

  infoText: {
    fontSize: 13,
    color: "#185FA5",
    lineHeight: 1.6,
    flex: 1,
  },
} satisfies Record<string, SxProps<Theme>>;
