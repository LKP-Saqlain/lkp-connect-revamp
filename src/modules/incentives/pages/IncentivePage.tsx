import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import PeriodBar from "../components/PeriodBar";
import IncentiveTabs from "../components/Tabs";

import Overview from "../sections/Overview/Overview";
import ClientRevenue from "../sections/ClientRevenue";
import PolicySummary from "../sections/Overview/PolicySummary";
import IncentiveCalculator from "../sections/Overview/IncentiveCalculator";
import AnnualTarget from "../sections/Overview/AnnualTarget/AnnualTarget";
import RevenueBreakdown from "../sections/RevenueBreakdown";
import ClientAcquisition from "../sections/ClientAcquisition";
import { INCENTIVE_TABS } from "../constants/tab.data";
import { POLICY_TABS } from "../constants/policyTabs.data";
import { getQuarterName } from "../constants/overall";

import type {
  IncentivePeriod,
  IncentiveTab,
  PolicyTab,
} from "../types/incentive.types";
import ApiLoader from "@/components/common/ApiLoader/ApiLoader";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  fetchTeamMemberDetails,
  fetchEmployeeIncentive,
} from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

const IncentivePage = () => {
  const [period, setPeriod] = useState<IncentivePeriod>("fy");
  const [tab, setTab] = useState<IncentiveTab>("overview");
  const [policyTab, setPolicyTab] = useState<PolicyTab>("policy-summary");
  const dispatch = useAppDispatch();

  const {
    teamMemberDetails,
    employeeIncentive,
    loading: isIncentivePeriodLoading,
  } = useAppSelector((state) => state.incentivePeriod);

  const isPolicyPage = period === "sales-policy";
  const isAnnualTargetPage = period === "annual-target";
  const tabs = isPolicyPage ? POLICY_TABS : INCENTIVE_TABS;
  const activeTab = isPolicyPage ? policyTab : tab;
  const quarterName = getQuarterName(period);
  const isQuarterPeriod = quarterName !== null;

  useEffect(() => {
    if (!isQuarterPeriod || !quarterName) {
      return;
    }

    const payload = {
      empCode: "0040",
      financialYear: "2026-27",
      quarterName,
    };

    dispatch(fetchEmployeeIncentive(payload));
  }, [dispatch, quarterName, isQuarterPeriod]);

  useEffect(() => {
    const employeeType = employeeIncentive?.data?.employeeType;

    if (!isQuarterPeriod || !quarterName || !employeeType) {
      return;
    }

    const allowedEmployeeTypes = ["TL", "BM", "AH"];

    if (!allowedEmployeeTypes.includes(employeeType)) {
      return;
    }

    const payload = {
      empCode: "0040",
      financialYear: "2026-27",
      quarterName,
    };

    dispatch(fetchTeamMemberDetails(payload));
  }, [
    dispatch,
    employeeIncentive?.data?.employeeType,
    quarterName,
    isQuarterPeriod,
  ]);

  const handleTabChange = (value: string) => {
    if (isPolicyPage) {
      setPolicyTab(value as PolicyTab);
    } else {
      setTab(value as IncentiveTab);
    }
  };

  const renderContent = () => {
    if (isPolicyPage) {
      return policyTab === "policy-summary" ? (
        <PolicySummary />
      ) : (
        <IncentiveCalculator />
      );
    }

    if (isAnnualTargetPage) {
      return <AnnualTarget />;
    }

    switch (tab) {
      case "overview":
        return <Overview period={period} />;

      case "client-revenue":
        return <ClientRevenue period={period} />;

      case "revenue-breakdown":
        return <RevenueBreakdown period={period} />;

      case "client-acquisition":
        return <ClientAcquisition period={period} />;

      default:
        return (
          <Overview
            period={period}
            teamMemberDetails={teamMemberDetails}
            employeeIncentive={employeeIncentive}
          />
        );
    }
  };

  return (
    <>
      <PeriodBar value={period} onChange={setPeriod} />

      <ApiLoader open={isQuarterPeriod && isIncentivePeriodLoading} />

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

        {renderContent()}
      </Box>
    </>
  );
};

export default IncentivePage;
