import type { IncentivePeriod } from "../types/incentive.types";

export const getQuarterName = (period: IncentivePeriod): string | null => {
  switch (period) {
    case "q1":
      return "Q1";

    case "q2":
      return "Q2";

    case "q3":
      return "Q3";

    case "q4":
      return "Q4";

    default:
      return null;
  }
};
