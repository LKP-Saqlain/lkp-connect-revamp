import { Box, Divider } from "@mui/material";

import { payoutStyles as styles } from "./payout.styles";

import PayoutSection from "./PayoutSection";
import ShortfallSection from "./ShortfallSection";

import {
  PAYOUT_SCHEDULE,
  SHORTFALL,
} from "@/modules/incentives/constants/policyTabs.data";

const PayoutCard = () => {
  return (
    <Box sx={styles.card}>
      <PayoutSection data={PAYOUT_SCHEDULE} />

      <Divider sx={styles.divider} />

      <ShortfallSection data={SHORTFALL} />
    </Box>
  );
};

export default PayoutCard;
