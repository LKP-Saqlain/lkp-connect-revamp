import type { Theme, SxProps } from "@mui/material/styles";

import {
  // CONTENT_PADDING,
  HEADER_HEIGHT,
  SIDEBAR_WIDTH,
} from "@/config/navigation";

import { palette } from "@/styles/palette";

export const layoutStyles = {
  root: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: palette.background,
  },

  main: {
    marginLeft: `${SIDEBAR_WIDTH}px`,

    width: `calc(100vw - ${SIDEBAR_WIDTH}px)`,

    minHeight: "100vh",

    display: "flex",
    flexDirection: "column",

    overflow: "hidden",
  },

  content: {
    marginTop: `${HEADER_HEIGHT}px`,

    flex: 1,

    width: "100%",

    // padding: CONTENT_PADDING,

    backgroundColor: palette.background,

    overflowY: "auto",
  },
} satisfies Record<string, SxProps<Theme>>;
