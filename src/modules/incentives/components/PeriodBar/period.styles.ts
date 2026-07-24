import type { SxProps, Theme } from "@mui/material/styles";

export const periodStyles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",

    background: "#F5F7FB",

    // borderBottom: "1px solid #E5E7EB",

    px: 3,
    py: 2,
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: 3,
  },

  label: {
    fontSize: 12,
    fontWeight: 500,
    color: "#344054",
  },

  chipContainer: {
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
  },

  chip: {
    display: "flex",
    alignItems: "center",
    gap: "4px",

    cursor: "pointer",

    border: "1px solid #D0D5DD",
    borderRadius: "999px",

    padding: "8px 12px",

    transition: ".2s",

    bgcolor: "#fff",

    "&:hover": {
      bgcolor: "#F8FAFC",
    },
  },

  activeChip: {
    backgroundColor: "#185FA5",
    borderColor: "#185FA5",
    color: "#fff",

    "& .MuiTypography-root": {
      color: "#fff",
    },

    "&:hover": {
      backgroundColor: "#185FA5", // keep same color
      borderColor: "#185FA5",
    },
  },

  chipText: {
    fontSize: 12,
    fontWeight: 400,
    color: "#344054",
  },

  notificationDot: {
    width: 7,
    height: 7,

    borderRadius: "50%",

    backgroundColor: "#FF4D4F",
  },

  financialYearContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    px: 1.5,
    py: 0.5,

    borderRadius: "10px",

    backgroundColor: "#EBF3FC",

    minWidth: "10px",
  },

  financialYear: {
    fontSize: 12,
    fontWeight: 500,

    color: "#185FA5",
  },
} satisfies Record<string, SxProps<Theme>>;
