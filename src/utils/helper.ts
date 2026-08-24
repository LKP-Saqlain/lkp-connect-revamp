export const parseAmount = (value: unknown): number => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value !== "string") {
    return 0;
  }

  return Number(value.replace(/[₹,\s]/g, "")) || 0;
};
