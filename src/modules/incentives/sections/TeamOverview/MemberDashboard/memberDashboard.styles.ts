import type { Theme, SxProps } from "@mui/material/styles";

export const memberDashboardStyles = {
  wrapper: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "10px",
    p: 3,
    mb: 2,
  },
  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    mb: 2,
  },
  nameRow: { display: "flex", alignItems: "center", gap: 1 },
  name: { fontSize: 18, fontWeight: 700, color: "#101828" },
  roleChip: {
    display: "inline-flex",
    alignItems: "center",
    px: 1,
    py: 0.2,
    borderRadius: "6px",
    fontSize: 11,
    fontWeight: 600,
    backgroundColor: "#EEF1F5",
    color: "#475467",
  },
  subtitle: { fontSize: 12.5, color: "#667085", mt: 0.3 },
  backButton: {
    textTransform: "none",
    fontSize: 10,
    fontWeight: 400,
    color: "#185FA5",
    border: "1px solid #D0D5DD",
    backgroundColor: "#EBF3FC",
    borderRadius: "8px",
    px: 1.5,
    py: 0.6,
  },
  periodRow: { display: "flex", gap: 1, mb: 2 },

  periodPill: {
    px: 1.6,
    py: 0.6,
    borderRadius: "20px",
    border: "1px solid #D0D5DD",
    fontSize: 12.5,
    fontWeight: 600,
    color: "#475467",
    cursor: "pointer",
  },
  periodPillActive: {
    backgroundColor: "#185FA5",
    borderColor: "#185FA5",
    color: "#FFFFFF",
  },
  tabsRow: { display: "flex", gap: 3, borderBottom: "1px solid #E4E7EC" },
  tabItem: {
    fontSize: 13,
    fontWeight: 600,
    color: "#667085",
    pb: 1.2,
    cursor: "pointer",
    borderBottom: "2px solid transparent",
  },
  tabItemActive: { color: "#185FA5", borderBottom: "2px solid #185FA5" },

  periodPillDisabled: {
    backgroundColor: "#F2F4F7",
    borderColor: "#E4E7EC",
    color: "#98A2B3",
    cursor: "not-allowed",
    opacity: 0.6,

    "&:hover": {
      backgroundColor: "#F2F4F7",
      borderColor: "#E4E7EC",
    },
  },

  currentQuarterDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    backgroundColor: "#FF4D4F",
    ml: 0.5,
  },
} satisfies Record<string, SxProps<Theme>>;
