export const carryForwardStyles = {
  card: {
    background: "#FFF8E8",
    border: "1px solid #F6DCA8",
    borderRadius: "12px",
    p: 2,
    mt: 3,
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    gap: 1.5,
  },

  iconWrapper: {
    width: 24,
    height: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    mt: "2px",
  },

  icon: {
    color: "#9A6700",
    fontSize: 18,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#694100",
  },

  description: {
    mt: 0.5,
    fontSize: 13,
    color: "#694100",
    lineHeight: 1.6,
    whiteSpace: "pre-line",
  },

  summaryGrid: {
    mt: 2,
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 1,
  },
};
