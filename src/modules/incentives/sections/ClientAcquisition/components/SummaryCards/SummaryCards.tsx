import ExistingSummaryCards from "@/modules/incentives/sections/ClientRevenue/SummaryCards";

import type { AcquisitionSummaryCard } from "../../types/clientAcquisition.types";

interface Props {
  summary: AcquisitionSummaryCard[];
}

const SummaryCards = ({ summary }: Props) => {
  return <ExistingSummaryCards summary={summary} />;
};

export default SummaryCards;
