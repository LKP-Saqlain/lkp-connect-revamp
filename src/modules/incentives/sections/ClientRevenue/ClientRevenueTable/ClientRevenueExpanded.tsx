import { Box } from "@mui/material";

import RevenueSplit from "./RevenueSplit";

import BrokingSection from "../BrokingSection";
import NonBrokingSection from "../NonBrokingSection";

interface RevenueItem {
  label: string;
  value: string;
}

interface Props {
  broking: string;
  nonBroking: string;
  brokingItems: RevenueItem[];
  nonBrokingItems: RevenueItem[];
  totalCredit?: any;
}

const ClientRevenueExpanded = ({
  broking,
  nonBroking,
  brokingItems,
  nonBrokingItems,
}: Props) => {
  return (
    <Box
      sx={{
        px: 3,
        py: 1.5,
        background: "#F7F9FC",
        borderTop: "1px solid #EAECF0",
      }}
    >
      {/* Broking + Non-Broking */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 3,
          alignItems: "start",
        }}
      >
        <BrokingSection items={brokingItems} />

        <NonBrokingSection items={nonBrokingItems} />

        {/* <NonBrokingSection /> */}
      </Box>

      {/* Bottom Credit Summary */}

      <Box>
        <RevenueSplit broking={broking} nonBroking={nonBroking} />
      </Box>
    </Box>
  );
};

export default ClientRevenueExpanded;
