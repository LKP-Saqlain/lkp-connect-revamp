import type { Theme, SxProps } from "@mui/material/styles";

export const acquisitionTableStyles = {
  root: {
    background: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "16px",
    overflow: "hidden",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: 1,

    px: 3,
    py: 2,

    borderBottom: "1px solid #EAECF0",
  },

  headerIcon: {
    color: "#185FA5",
    fontSize: 18,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#101828",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  tableHead: {
    background: "#FFFFFF",
    borderBottom: "1px solid #EAECF0",
  },

  headCell: {
    fontSize: 13,
    fontWeight: 500,
    color: "#667085",
    textAlign: "left",
    padding: "14px 18px",
    whiteSpace: "nowrap",
  },

  bodyRow: {
    borderBottom: "1px solid #EAECF0",
  },

  cell: {
    padding: "14px 18px",
    fontSize: 14,
    color: "#101828",
    whiteSpace: "nowrap",
  },

  revenueBlue: {
    color: "#2F80ED",
    fontWeight: 600,
  },

  revenueGreen: {
    color: "#27AE60",
    fontWeight: 600,
  },

  revenueBlack: {
    fontWeight: 600,
    color: "#101828",
  },

  actionCell: {
    textAlign: "right",
  },

  actionButton: {
    minWidth: 74,
    height: 30,

    borderRadius: "8px",

    textTransform: "none",

    fontWeight: 600,

    fontSize: 13,
  },

  expandedWrapper: {
    px: 3,
    py: 3,

    background: "#F9FAFB",

    borderTop: "1px solid #EAECF0",
  },

  expandedContent: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gap: 2.5,
    alignItems: "flex-start",
  },

  expandedColumn: {
    display: "flex",

    flexDirection: "column",

    gap: 2,
  },

  headingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    mb: 0.5,
  },

  headingTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: "#185FA5",
  },

  headingValue: {
    fontSize: 16,
    fontWeight: 700,
  },

  headingDivider: {
    width: "100%",
    height: "2px",
    borderRadius: "4px",
    mb: 1.5,
  },

  itemList: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  },

  itemRow: {
    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",
  },

  itemName: {
    fontSize: 14,
    fontWeight: 500,
    color: "#475467",
  },

  itemValue: {
    fontSize: 14,
    fontWeight: 600,
  },

  creditFooter: {
    mt: 2.5,
    pt: 2,
    borderTop: "1px solid #EAECF0",

    display: "flex",
    alignItems: "center",
    gap: 4,
    flexWrap: "wrap",
  },
  creditItem: {
    display: "flex",
    alignItems: "center",
    gap: 4 / 8,
  },
  creditLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: "#667085",
  },
  creditValue: {
    fontSize: 14,
    fontWeight: 700,
  },
} satisfies Record<string, SxProps<Theme>>;
