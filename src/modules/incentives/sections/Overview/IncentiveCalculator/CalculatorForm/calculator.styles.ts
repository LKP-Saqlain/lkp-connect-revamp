import type { Theme, SxProps } from "@mui/material/styles";

export const calculatorStyles = {
  /* ===========================
      Calculator Form Card
  =========================== */

  card: {
    background: "#FFFFFF",
    border: "1px solid #EAECF0",
    borderRadius: "16px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#101828",
    mb: 3,
  },

  divider: {
    borderColor: "#EAECF0",
    my: 3,
  },

  /* ===========================
      Form Fields
  =========================== */

  fieldsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 0.4,
    // border: "1px solid black",
  },

  fieldRow: {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    alignItems: "center",
    gap: 3,
  },

  fieldLabel: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#344054",
  },

  inputBox: {
    height: 48,
    px: 2,
    display: "flex",
    alignItems: "center",
    background: "#FFFFFF",
    border: "1px solid #D0D5DD",
    borderRadius: "10px",
  },

  inputValue: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#101828",
  },

  /* ===========================
      Summary Card
  =========================== */

  summaryCard: {
    background: "#F9FAFB",
    border: "1px solid #EAECF0",
    borderRadius: "12px",
    p: 2.5,
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 2,
  },

  summaryItem: {
    textAlign: "center",
  },

  summaryLabel: {
    fontSize: "12px",
    color: "#667085",
    mb: 0.5,
  },

  multiplier: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#185FA5",
    lineHeight: 1.2,
  },

  slab: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#5F7F38",
    lineHeight: 1.4,
  },

  payout: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#101828",
    lineHeight: 1.4,
  },

  chipsContainer: {
    display: "flex",
    gap: 1,
    mt: 1.5,
    flexWrap: "wrap",
  },

  chip: {
    height: 24,
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 400,
  },
} satisfies Record<string, SxProps<Theme>>;
