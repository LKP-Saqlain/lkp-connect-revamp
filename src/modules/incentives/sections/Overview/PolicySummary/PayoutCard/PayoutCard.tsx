import { Box, Divider } from "@mui/material";

import { payoutStyles as styles } from "./payout.styles";
import PayoutSection from "./PayoutSection";
import ShortfallSection from "./ShortfallSection";

import type { SummaryModule } from "@/modules/incentives/types/salesSummary.types";
import { getModuleItems } from "@/modules/incentives/constants/policyTabs.data";

interface Props {
  payoutModule?: SummaryModule;
  shortfallModule?: SummaryModule;
}

const PayoutCard = ({ payoutModule, shortfallModule }: Props) => {
  return (
    <Box sx={styles.card}>
      <PayoutSection
        data={{
          title: payoutModule?.moduleHeader ?? "Payout schedule",
          items: getModuleItems(payoutModule),
        }}
      />

      <Divider sx={styles.divider} />

      <ShortfallSection
        data={{
          title: shortfallModule?.moduleHeader ?? "Shortfall carry-forward",
          items: getModuleItems(shortfallModule),
        }}
      />
    </Box>
  );
};

export default PayoutCard;
