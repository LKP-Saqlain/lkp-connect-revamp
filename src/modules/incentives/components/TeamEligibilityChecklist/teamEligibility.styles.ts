import type { Theme, SxProps } from "@mui/material/styles";

export const teamEligibilityStyles = {
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
    mb: 1.5,
  },

  title: {
    fontSize: 13,
    fontWeight: 600,
    color: "#111827",
  },

  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 1,
    "&:not(:last-child)": {
      borderBottom: "1px solid #F2F4F7",
    },
  },

  labelGroup: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  labelCompleted: {
    fontSize: 12,
    color: "#101828",
  },

  labelPending: {
    fontSize: 12,
    color: "#B54708",
  },

  iconCompleted: {
    fontSize: 12,
    color: "#12B76A",
  },

  iconPending: {
    fontSize: 16,
    color: "#F79009",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    px: 1,
    py: 0.3,
    borderRadius: "12px",
    fontSize: 10,
    fontWeight: 500,
  },

  badgeCompleted: {
    backgroundColor: "#EAF3DE",
    color: "#27500A",
  },

  badgePending: {
    backgroundColor: "#FFF3D6",
    color: "#B54708",
  },
} satisfies Record<string, SxProps<Theme>>;
