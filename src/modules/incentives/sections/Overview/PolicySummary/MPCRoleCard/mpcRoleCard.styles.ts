import type { Theme, SxProps } from "@mui/material/styles";

export const mpcRoleCardStyles = {
  card: {
    background: "#FFFFFF",
    border: "1px solid #EAECF0",
    borderRadius: "12px",
    overflow: "hidden",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    px: 3,
    py: 2.25,
  },

  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: "8px",
    background: "#EEF4FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  icon: {
    color: "#185FA5",
    fontSize: 18,
  },

  title: {
    fontSize: 16,
    fontWeight: 600,
    color: "#101828",
  },

  divider: {
    borderColor: "#EAECF0",
  },

  tableWrapper: {
    px: 3,
    py: 2,
  },
} satisfies Record<string, SxProps<Theme>>;
