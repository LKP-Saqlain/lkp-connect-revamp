import type { IncentivePeriod } from "@/modules/incentives/types/incentive.types";

export const parseAmount = (value: unknown): number => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value !== "string") {
    return 0;
  }

  return Number(value.replace(/[₹,\s]/g, "")) || 0;
};

export const getCurrentQuarter = (): IncentivePeriod => {
  const month = new Date().getMonth() + 1;

  if (month >= 4 && month <= 6) {
    return "q1";
  }

  if (month >= 7 && month <= 9) {
    return "q2";
  }

  if (month >= 10 && month <= 12) {
    return "q3";
  }

  return "q4";
};
