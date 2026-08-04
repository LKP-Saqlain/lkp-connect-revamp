import type { Theme, SxProps } from "@mui/material/styles";

export const policyStyles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    gap: 1.2,

    background: "#FFFFFF",

    // border: "1px solid #E4E7EC",

    borderRadius: "16px",

    padding: "10px",
    mb: 2,
    minHeight: "56px",
  },

  iconContainer: {
    width: 42,
    height: 42,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",
    backgroundColor: "#EBF3FC",

    flexShrink: 0,

    alignSelf: "center",
  },

  icon: {
    fontSize: 22,
    color: "#185FA5",
  },

  content: {
    flex: 1,

    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
  },

  title: {
    fontSize: "12px",

    fontWeight: 600,

    color: "#111111",

    // mb: 0.75,
  },

  description: {
    fontSize: "12px",

    lineHeight: "22px",

    color: "#667085",
  },
} satisfies Record<string, SxProps<Theme>>;
