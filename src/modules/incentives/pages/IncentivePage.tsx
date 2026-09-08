import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import PeriodBar from "../components/PeriodBar";
import IncentiveTabs from "../components/Tabs";

import Overview from "../sections/Overview/Overview";
import ClientRevenue from "../sections/ClientRevenue";
import AnnualTarget from "../sections/Overview/AnnualTarget/AnnualTarget";
import RevenueBreakdown from "../sections/RevenueBreakdown";
import ClientAcquisition from "../sections/ClientAcquisition";
import TeamOverview from "../sections/TeamOverview/TeamOverview";
import {
  INCENTIVE_TABS,
  INCENTIVE_ACTION_TABS,
  TEAM_SUMMARY_TAB,
} from "../constants/tab.data";
import SalesPolicy from "../sections/Overview/SalesPolicy";
import { getQuarterName } from "../constants/overall";
import type {
  IncentivePeriod,
  IncentiveTab,
  SpecialIncentiveTab,
} from "../types/incentive.types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchEmployeeIncentive,
  fetchGetRevenueEmployeeType,
} from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import { useAuth } from "@/auth/AuthContext";
import TeamSummary from "../sections/TeamSummary/TeamSummary";

const TEAM_ROLE_TYPES = ["TL", "BM", "AH"];

const IncentivePage = () => {
  const [period, setPeriod] = useState<IncentivePeriod>("fy");
  const [tab, setTab] = useState<IncentiveTab>("overview");
  const [actionTab, setActionTab] = useState<SpecialIncentiveTab | null>(null);
  const [showTeamOverview, setShowTeamOverview] = useState(false);

  const dispatch = useAppDispatch();

  const { employeeIncentive, GetRevenueEmployeeType } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  const quarterName = getQuarterName(period);
  const isQuarterPeriod = quarterName !== null;

  const { userId } = useAuth();
  const EMP_CODE = userId;

  const employeeType = GetRevenueEmployeeType?.data?.employeeType;
  const isTeamRole = employeeType
    ? TEAM_ROLE_TYPES.includes(employeeType)
    : false;

  const activeTabs = isTeamRole
    ? [...INCENTIVE_TABS, TEAM_SUMMARY_TAB]
    : INCENTIVE_TABS;

  useEffect(() => {
    dispatch(fetchGetRevenueEmployeeType({ empcode: EMP_CODE }));
  }, [dispatch]);

  useEffect(() => {
    if (!isQuarterPeriod || !quarterName) {
      return;
    }

    const payload = {
      empCode: EMP_CODE,
      financialYear: "2026-27",
      quarterName,
    };

    dispatch(fetchEmployeeIncentive(payload));
  }, [dispatch, quarterName, isQuarterPeriod]);

  const handlePeriodChange = (value: IncentivePeriod) => {
    setShowTeamOverview(false);
    setActionTab(null);
    setPeriod(value);
  };

  const handleTeamOverviewClick = () => {
    setActionTab(null);
    setShowTeamOverview(true);
  };

  const handleTabChange = (value: string) => {
    setShowTeamOverview(false);
    setTab(value as IncentiveTab);
    setActionTab(null);
  };

  const handleActionTabChange = (value: string) => {
    setShowTeamOverview(false);
    setActionTab(value as SpecialIncentiveTab);
    setTab(null as any);
  };

  const renderContent = () => {
    if (showTeamOverview) {
      return <TeamOverview empCode={EMP_CODE} />;
    }

    if (actionTab === "sales-policy") {
      return <SalesPolicy />;
    }

    if (actionTab === "annual-target") {
      return <AnnualTarget />;
    }

    switch (tab) {
      case "overview":
        return (
          <Overview
            period={period}
            employeeIncentive={employeeIncentive}
            employeeType={employeeType}
            empCode={EMP_CODE}
          />
        );

      case "client-revenue":
        return <ClientRevenue period={period} empCode={EMP_CODE} />;

      case "revenue-breakdown":
        return <RevenueBreakdown period={period} empCode={EMP_CODE} />;

      case "client-acquisition":
        return (
          <ClientAcquisition
            period={period}
            employeeType={employeeType}
            empCode={EMP_CODE}
          />
        );

      case "team-summary":
        return <TeamSummary period={period} empCode={EMP_CODE} />;

      default:
        return (
          <Overview
            period={period}
            employeeIncentive={employeeIncentive}
            employeeType={employeeType}
          />
        );
    }
  };

  return (
    <>
      <PeriodBar
        value={period}
        onChange={handlePeriodChange}
        showTeamOverview={isTeamRole}
        teamOverviewActive={showTeamOverview}
        onTeamOverviewClick={handleTeamOverviewClick}
      />
      <Box sx={{ px: 3, py: 0, backgroundColor: "#F5F7FB" }}>
        {!showTeamOverview && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              px: 2,
              border: "1px solid solid",
            }}
          >
            <IncentiveTabs
              items={activeTabs}
              actionItems={INCENTIVE_ACTION_TABS}
              value={tab}
              actionValue={actionTab ?? undefined}
              onChange={handleTabChange}
              onActionChange={handleActionTabChange}
            />
          </Box>
        )}
        {renderContent()}
      </Box>
    </>
  );
};

export default IncentivePage;
