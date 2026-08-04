import { useState } from "react";
import { Box } from "@mui/material";

import PeriodBar from "../components/PeriodBar";
import IncentiveTabs from "../components/Tabs";

import Overview from "../sections/Overview/Overview";
import PolicySummary from "../sections/Overview/PolicySummary";

import { INCENTIVE_TABS } from "../constants/tab.data";
import { POLICY_TABS } from "../constants/policyTabs.data";

import type {
  IncentivePeriod,
  IncentiveTab,
  PolicyTab,
} from "../types/incentive.types";
import IncentiveCalculator from "../sections/Overview/IncentiveCalculator";
import AnnualTarget from "../sections/Overview/AnnualTarget/AnnualTarget";

const IncentivePage = () => {
  const [period, setPeriod] = useState<IncentivePeriod>("fy");

  const [tab, setTab] = useState<IncentiveTab>("overview");

  const [policyTab, setPolicyTab] = useState<PolicyTab>("policy-summary");

  const isPolicyPage = period === "sales-policy";
  const isAnnualTargetPage = period === "annual-target";
  const tabs = isPolicyPage ? POLICY_TABS : INCENTIVE_TABS;

  const activeTab = isPolicyPage ? policyTab : tab;

  const handleTabChange = (value: string) => {
    if (isPolicyPage) {
      setPolicyTab(value as PolicyTab);
    } else {
      setTab(value as IncentiveTab);
    }
  };

  return (
    <>
      <PeriodBar value={period} onChange={setPeriod} />

      <Box
        sx={{
          px: 3,
          py: 0,
          backgroundColor: "#F5F7FB",
        }}
      >
        {!isAnnualTargetPage && (
          <IncentiveTabs
            items={tabs}
            value={activeTab}
            onChange={handleTabChange}
          />
        )}

        {isPolicyPage ? (
          policyTab === "policy-summary" ? (
            <PolicySummary />
          ) : (
            <IncentiveCalculator />
          )
        ) : isAnnualTargetPage ? (
          <AnnualTarget />
        ) : (
          <Overview period={period} />
        )}
      </Box>
    </>
  );
};

export default IncentivePage;
