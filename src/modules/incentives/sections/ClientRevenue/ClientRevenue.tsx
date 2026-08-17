import ClientRevenueLayout from "./ClientRevenueLayout";

import { FY_CLIENT_REVENUE } from "./data/fy.data";
import { Q1_CLIENT_REVENUE } from "./data/q1.data";
import { Q2_CLIENT_REVENUE } from "./data/q2.data";
import { Q3_CLIENT_REVENUE } from "./data/q3.data";
import { Q4_CLIENT_REVENUE } from "./data/q4.data";

import type { IncentivePeriod } from "../../types/incentive.types";

interface Props {
  period: IncentivePeriod;
}

const ClientRevenue = ({ period }: Props) => {
  const data =
    period === "q1"
      ? Q1_CLIENT_REVENUE
      : period === "q2"
        ? Q2_CLIENT_REVENUE
        : period === "q3"
          ? Q3_CLIENT_REVENUE
          : period === "q4"
            ? Q4_CLIENT_REVENUE
            : FY_CLIENT_REVENUE;

  return (
    <ClientRevenueLayout
      period={period}
      summary={data.summary}
      rows={data.rows}
      total={data.total}
    />
  );
};

export default ClientRevenue;
