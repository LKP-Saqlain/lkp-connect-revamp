import RevenueBreakdownSummaryCard from "@/modules/incentives/sections/ClientRevenue/SummaryCards/SummaryCards";

import type { RevenueSummaryCard } from "../../types/revenueBreakdown.types";

interface Props {
  summary: RevenueSummaryCard[];
}

const SummaryCards = ({ summary }: Props) => {
  return <RevenueBreakdownSummaryCard summary={summary} columns={4} />;
};

export default SummaryCards;
