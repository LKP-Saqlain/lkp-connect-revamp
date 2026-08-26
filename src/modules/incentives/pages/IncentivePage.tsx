import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import PeriodBar from "../components/PeriodBar";
import IncentiveTabs from "../components/Tabs";

import Overview from "../sections/Overview/Overview";
import ClientRevenue from "../sections/ClientRevenue";
import AnnualTarget from "../sections/Overview/AnnualTarget/AnnualTarget";
import RevenueBreakdown from "../sections/RevenueBreakdown";
import ClientAcquisition from "../sections/ClientAcquisition";
import { INCENTIVE_TABS, INCENTIVE_ACTION_TABS } from "../constants/tab.data";
import SalesPolicy from "../sections/Overview/SalesPolicy";
import { getQuarterName } from "../constants/overall";

import type {
  IncentivePeriod,
  IncentiveTab,
  SpecialIncentiveTab,
} from "../types/incentive.types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  fetchTeamMemberDetails,
  fetchEmployeeIncentive,
  fetchGetRevenueEmployeeType,
} from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

const IncentivePage = () => {
  const [period, setPeriod] = useState<IncentivePeriod>("fy");
  const [tab, setTab] = useState<IncentiveTab>("overview");

  const [actionTab, setActionTab] = useState<SpecialIncentiveTab | null>(null);

  const dispatch = useAppDispatch();

  const { teamMemberDetails, employeeIncentive, GetRevenueEmployeeType } =
    useAppSelector((state) => state.incentivePeriod);

  // const isPolicyPage = specialTab === "sales-policy";
  // const isAnnualTargetPage = specialTab === "annual-target";
  // const tabs = isPolicyPage ? POLICY_TABS : INCENTIVE_TABS;
  // const activeTab = isPolicyPage ? policyTab : tab;
  const quarterName = getQuarterName(period);
  const isQuarterPeriod = quarterName !== null;

  useEffect(() => {
    if (!isQuarterPeriod || !quarterName) {
      return;
    }
    const payload = {
      empCode: "5434",
      financialYear: "2026-27",
      quarterName,
    };

    dispatch(fetchEmployeeIncentive(payload));

    const employeePayload = {
      empCode: "5434",
    };
    dispatch(fetchGetRevenueEmployeeType(employeePayload));
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
      empCode: "5434",
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

  useEffect(() => {
    console.log("GetRevenueEmployeeTypeResponse", GetRevenueEmployeeType);
  }, [GetRevenueEmployeeType]);

  const handleTabChange = (value: string) => {
    setTab(value as IncentiveTab);
    setActionTab(null);
  };

  const handleActionTabChange = (value: string) => {
    setActionTab(value as SpecialIncentiveTab);
    setTab(null);
  };

  const renderContent = () => {
    if (actionTab === "sales-policy") {
      return <SalesPolicy />;
    }

    if (actionTab === "annual-target") {
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
      <PeriodBar
        value={period}
        onChange={(value) => {
          setPeriod(value);
        }}
      />
      <Box
        sx={{
          px: 3,
          py: 0,
          backgroundColor: "#F5F7FB",
        }}
      >
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
            items={INCENTIVE_TABS}
            actionItems={INCENTIVE_ACTION_TABS}
            value={tab}
            actionValue={actionTab ?? undefined}
            onChange={handleTabChange}
            onActionChange={handleActionTabChange}
          />
        </Box>
        {renderContent()}
      </Box>
    </>
  );
};

export default IncentivePage;
