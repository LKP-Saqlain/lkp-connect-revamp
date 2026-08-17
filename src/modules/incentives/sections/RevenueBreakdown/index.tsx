import RevenueBreakdownLayout from "./RevenueBreakdownLayout";

import { FY_REVENUE_BREAKDOWN } from "./data/fy.data";
import { Q1_REVENUE_BREAKDOWN } from "./data/q1.data";
import { Q2_REVENUE_BREAKDOWN } from "./data/q2.data";
import { Q3_REVENUE_BREAKDOWN } from "./data/q3.data";
import { Q4_REVENUE_BREAKDOWN } from "./data/q4.data";

interface Props {
  period: "fy" | "q1" | "q2" | "q3" | "q4";
}

const RevenueBreakdown = ({ period }: Props) => {
  const data =
    period === "fy"
      ? FY_REVENUE_BREAKDOWN
      : period === "q1"
        ? Q1_REVENUE_BREAKDOWN
        : period === "q2"
          ? Q2_REVENUE_BREAKDOWN
          : period === "q3"
            ? Q3_REVENUE_BREAKDOWN
            : Q4_REVENUE_BREAKDOWN;

  return (
    <RevenueBreakdownLayout
      summary={data.summary}
      table={data.table}
      chart={data.chart}
    />
  );
};

export default RevenueBreakdown;
