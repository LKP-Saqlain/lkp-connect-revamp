import { useState } from "react";

import PeriodBar from "../components/PeriodBar";
import IncentiveTabs from "../components/Tabs";

import type { IncentivePeriod, IncentiveTab } from "../types/incentive.types";
import { Box } from "@mui/material";
import Overview from "../sections/Overview/Overview";

const IncentivePage = () => {
  const [period, setPeriod] = useState<IncentivePeriod>("fy");

  const [tab, setTab] = useState<IncentiveTab>("overview");

  return (
    <>
      <PeriodBar value={period} onChange={setPeriod} />

      <Box
        sx={{
          px: 3,
          py: 0,
          backgroundColor: "#F5F7FB", // same as PeriodBar
        }}
      >
        <IncentiveTabs value={tab} onChange={setTab} />
        <Overview />
      </Box>

      {/* Overview / Client Revenue / etc */}
    </>
  );
};

export default IncentivePage;
