import type { Theme, SxProps } from "@mui/material/styles";

import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "@/config/navigation";

import { palette } from "@/styles/palette";

import { shadows } from "@/styles/palette";

export const headerStyles = {
  root: {
    position: "fixed",
    top: 0,
    left: SIDEBAR_WIDTH,
    right: 0,
    height: HEADER_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 3,
    backgroundColor: palette.white,
    borderBottom: `1px solid ${palette.border}`,
    boxShadow: shadows.header,
    zIndex: 1100,
  },

  leftContainer: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },

  title: {
    fontSize: 24,
    fontWeight: 700,
    color: palette.textPrimary,
  },

  rightContainer: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
} satisfies Record<string, SxProps<Theme>>;
