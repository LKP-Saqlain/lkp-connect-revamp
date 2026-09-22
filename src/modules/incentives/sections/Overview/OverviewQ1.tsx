import Box from "@mui/material/Box";

import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import EligibilityChecklist from "../../components/EligibilityChecklist";
import TeamEligibilityChecklist from "../../components/TeamEligibilityChecklist";
import PayoutBreakdown from "../../components/PayoutBreakdown";
import PolicyCard from "../../components/PolicyCard";
import InfoNote from "../../components/InfoNote/InfoNote";
import TeamRoleCard from "../../components/TeamRoleCard/TeamRoleCard";
import SectionHeader from "../../components/SectionHeader";

import {
  Q1_TL_PAYOUT_NOTE,
  Q1_TL_ROLE,
} from "../../constants/q1OverviewTL.data";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type {
  EligibilityChecklistData,
  MetricCardData,
  RevenueProgressData,
  PayoutBreakdownData,
} from "../../types/incentive.types";
import { fetchIncentiveSlabs } from "@/redux/slices";
import {
  buildTLSummary,
  buildTLSelfMetrics,
  buildTLSelfCriteria,
  buildTLTeamMetrics,
  buildTLTeamCriteria,
  buildTLEligibility,
  buildTLPayout,
} from "../../constants/q2OverviewTL.data";

import PercentageIcon from "@/assets/images/percentage.svg";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import Coin from "@/assets/images/coin.svg";
import { OVERVIEW_DATA } from "../../constants/overview.data";

const TEAM_ROLE_TYPES = ["TL", "BM", "AH"];

const performanceCardSx = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  p: 2,
} as const;

const OverviewQ1 = ({ period, employeeType, empCode }: any) => {
  const isTeamRole = employeeType
    ? TEAM_ROLE_TYPES.includes(employeeType)
    : false;

  const { employeeIncentive, incentiveSlabs } = useAppSelector(
    (state) => state.incentivePeriod,
  );
  const employeeData = employeeIncentive?.data;
  const dispatch = useAppDispatch();

  const q1Slabs =
    incentiveSlabs?.data?.map((slab: any, index: any) => ({
      id: String(index + 1),
      range:
        slab.toMultiple === 999
          ? `${slab.fromMultiple}x & above`
          : `${slab.fromMultiple}x – ${slab.toMultiple}x`,
      text: `Broking ${slab.brokingPercentage}% · Non-broking ${slab.nonBrokingPercentage}%`,
      disabled: slab.toMultiple === 999,
    })) ?? [];

  // -----------------------------------------
  // RM/BDM/Dealer — build purely from API, no static fallback
  // -----------------------------------------

  const q1Metrics: MetricCardData[] = [
    {
      id: "revenue-multiple",
      title: "Revenue multiple",
      value:
        employeeData?.brokRevMultiple != null
          ? `${employeeData.brokRevMultiple}x`
          : "—",
      icon: PercentageIcon,
    },
    {
      id: "broking-credit",
      title: "Broking Revenue Credit",
      value:
        employeeData?.brokingCredits != null
          ? `₹${employeeData.brokingCredits.toLocaleString("en-IN")}`
          : "₹0",
      subtitle:
        employeeData?.brokingPercent != null &&
        employeeData?.totalBrokingRevenue != null
          ? `${employeeData.brokingPercent}% of ₹${employeeData.totalBrokingRevenue.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`
          : undefined,
      icon: TrendingUp,
    },
    {
      id: "non-broking-credit",
      title: "Non-Broking Revenue Credit",
      value:
        employeeData?.nonBrokingCredits != null
          ? `₹${employeeData.nonBrokingCredits.toLocaleString("en-IN")}`
          : "₹0",
      subtitle:
        employeeData?.nonBrokingPercent != null &&
        employeeData?.totalNonBrokingRevenue != null
          ? `${employeeData.nonBrokingPercent}% of ₹${employeeData.totalNonBrokingRevenue.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`
          : undefined,
      icon: BankImg,
    },
    {
      id: "estimated-incentive",
      title: "Est. incentive",
      value:
        employeeData?.finalIncentive != null
          ? `₹${employeeData.finalIncentive.toLocaleString("en-IN")}`
          : "₹0",
      icon: Coin,
      color: "#5F7F38",
    },
  ];

  const q1RevenueProgress: RevenueProgressData = {
    multiplier:
      employeeData?.revenueMultiple != null
        ? `${employeeData.revenueMultiple}x`
        : "0x",
    mpc:
      employeeData?.reqRevenueMultiple != null
        ? `${employeeData.reqRevenueMultiple}x`
        : "0x",
    barMax: employeeData?.reqRevenueMultiple ?? 0,
    progressPercent:
      employeeData?.revenueMultiple != null && employeeData?.reqRevenueMultiple
        ? Math.min(
            (employeeData.revenueMultiple / employeeData.reqRevenueMultiple) *
              100,
            100,
          )
        : 0,
    target: {
      label:
        employeeData?.reqRevenueMultiple != null
          ? `${employeeData.reqRevenueMultiple}x CTC`
          : "—",
      value:
        employeeData?.empQuarterCTC != null &&
        employeeData?.reqRevenueMultiple != null
          ? `₹${(employeeData.empQuarterCTC * employeeData.reqRevenueMultiple).toLocaleString("en-IN")}`
          : "₹0",
    },
    broking: {
      label: `Broking credit (${employeeData?.brokingPercent ?? 0}%)`,
      amount:
        employeeData?.brokingCredits != null
          ? `₹${employeeData.brokingCredits.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`
          : "₹0",
      percent:
        employeeData?.brokingCredits != null && employeeData?.empCTC
          ? `${((employeeData.brokingCredits / employeeData.empCTC) * 100).toLocaleString("en-IN", { maximumFractionDigits: 2 })}%`
          : "0%",
    },
    nonBroking: {
      label: `Non-Broking credit (${employeeData?.nonBrokingPercent ?? 0}%)`,
      amount:
        employeeData?.nonBrokingCredits != null
          ? `₹${employeeData.nonBrokingCredits.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`
          : "₹0",
      percent:
        employeeData?.nonBrokingCredits != null && employeeData?.empCTC
          ? `${((employeeData.nonBrokingCredits / employeeData.empCTC) * 100).toLocaleString("en-IN", { maximumFractionDigits: 2 })}%`
          : "0%",
    },
    netCredit: {
      label: "Net credit",
      amount:
        employeeData?.brokingCredits != null &&
        employeeData?.nonBrokingCredits != null
          ? `₹${(employeeData.brokingCredits + employeeData.nonBrokingCredits).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`
          : "₹0",
      percent:
        employeeData?.brokingCredits != null &&
        employeeData?.nonBrokingCredits != null &&
        employeeData?.empCTC
          ? `${(
              (employeeData.brokingCredits / employeeData.empCTC) * 100 +
              (employeeData.nonBrokingCredits / employeeData.empCTC) * 100
            ).toLocaleString("en-IN", { maximumFractionDigits: 2 })}%`
          : "0%",
    },
    slabLabel:
      employeeData?.revenueMultiple != null &&
      employeeData?.reqRevenueMultiple != null
        ? employeeData.revenueMultiple >= employeeData.reqRevenueMultiple
          ? "Eligible"
          : "Below minimum"
        : undefined,
    slabs: q1Slabs,
  };

  const q1Eligibility: EligibilityChecklistData = {
    title: "Eligibility checklist",
    banner: {
      type:
        employeeData?.revenueMultiple != null &&
        employeeData.revenueMultiple >= 3
          ? "success"
          : "error",
      title:
        employeeData?.revenueMultiple != null &&
        employeeData.revenueMultiple >= 3
          ? "Eligible for incentive"
          : "Not eligible yet",
      description:
        employeeData?.revenueMultiple != null
          ? `Revenue multiple ${employeeData.revenueMultiple}x ${
              employeeData.revenueMultiple >= 3 ? "meets" : "is below"
            } the 3x minimum.`
          : "No revenue data available for this quarter.",
    },
    currentSlab:
      employeeData?.revenueMultiple != null
        ? `${employeeData.revenueMultiple}x`
        : "—",
    qualifications: [
      {
        title: "Min Revenue",
        actual:
          employeeData?.totalRevenue != null
            ? `${employeeData.revenueMultiple}x (₹${employeeData.totalRevenue.toLocaleString("en-IN")})`
            : "—",
        required: "3x",
        status:
          employeeData?.revenueMultiple != null
            ? employeeData.revenueMultiple >= 3
              ? "completed"
              : "failed"
            : "failed",
      },
      {
        title: "Non-broking revenue",
        actual:
          employeeData?.nonBrokRevMultiple != null
            ? `${employeeData.nonBrokRevMultiple}x`
            : "—",
        required: "1x",
        status:
          employeeData?.nonBrokRevMultiple != null
            ? employeeData.nonBrokRevMultiple >= 1
              ? "completed"
              : "failed"
            : "failed",
      },
    ],
    accounts: [
      {
        label: "New accounts opened",
        required: `${employeeData?.requiredAccounts ?? 0} accounts`,
        actual: `${employeeData?.totalNewAccounts ?? 0} accounts`,
        eligible: employeeData?.accountStatus ?? false,
      },
      {
        label: "Accounts fulfilling all criteria",
        required: `${employeeData?.requiredAccounts ?? 0} accounts`,
        actual: `${employeeData?.actualMarginCount ?? 0} accounts`,
        eligible: employeeData?.marginStatus ?? false,
      },
    ],
  };

  const q1Payout: PayoutBreakdownData = {
    title: "Payout breakdown",
    rows: [
      {
        component: "Team broking incentive",
        basis:
          employeeData?.teamBrokingCredits != null
            ? `₹${employeeData.teamBrokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        rate:
          employeeData?.brokIncPercent != null
            ? `${employeeData.brokIncPercent}%`
            : "0%",
        amount:
          employeeData?.brokingIncentive != null
            ? `₹${employeeData.brokingIncentive.toLocaleString("en-IN")}`
            : "₹0",
      },
      {
        component: "Team Non-broking incentive",
        basis:
          employeeData?.teamNonBrokingCredits != null
            ? `₹${employeeData.teamNonBrokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        rate:
          employeeData?.nonBrokIncPercent != null
            ? `${employeeData.nonBrokIncPercent}%`
            : "0%",
        amount:
          employeeData?.nonBrokingIncentive != null
            ? `₹${employeeData.nonBrokingIncentive.toLocaleString("en-IN")}`
            : "₹0",
      },
      {
        component: "Additional incentive — self accounts",
        basis:
          employeeData?.eligibleAccounts != null
            ? `${employeeData.eligibleAccounts} accounts`
            : "0 accounts",
        rate:
          employeeData?.selfNewAccountRate != null
            ? `₹${employeeData.selfNewAccountRate}/account`
            : "₹0/account",
        amount:
          employeeData?.newAccountsIncentive != null
            ? `₹${employeeData.newAccountsIncentive.toLocaleString("en-IN")}`
            : "₹0",
      },
      {
        component: "Additional incentive — team accounts",
        basis:
          employeeData?.teamEligibleNewAccounts != null
            ? `${employeeData.teamEligibleNewAccounts} accounts`
            : "0 accounts",
        rate:
          employeeData?.teamNewAccountRate != null
            ? `₹${employeeData.teamNewAccountRate}/account`
            : "₹0/account",
        amount:
          employeeData?.teamNewAccBonus != null
            ? `₹${employeeData.teamNewAccBonus.toLocaleString("en-IN")}`
            : "₹0",
      },
      {
        component: "Total Incentive",
        basis: "",
        rate: "",
        amount:
          employeeData?.finalIncentive != null
            ? `₹${employeeData.finalIncentive.toLocaleString("en-IN")}`
            : "₹0",
        amountColor: "#5F7F38",
        highlight: true,
      },
    ],
  };

  useEffect(() => {
    console.log(period);

    if (!employeeData?.empCode || isTeamRole) return;
    dispatch(fetchIncentiveSlabs({ empCode, financialYear: "2026-27" }));
  }, [dispatch, employeeData?.empCode, isTeamRole]);

  if (isTeamRole) {
    const q1TLSummary = buildTLSummary(employeeData);
    const q1TLSelfMetrics = buildTLSelfMetrics(employeeData);
    const q1TLSelfCriteria = buildTLSelfCriteria(employeeData);
    const q1TLTeamMetrics = buildTLTeamMetrics(employeeData);
    const q1TLTeamCriteria = buildTLTeamCriteria(employeeData);
    const q1TLEligibility = buildTLEligibility(employeeData);
    const q1TLPayout = buildTLPayout(employeeData);

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <MetricGrid metrics={q1TLSummary} period={"q1"} />

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q1TLSelfCriteria.title}
            actual={q1TLSelfCriteria.actual}
            required={q1TLSelfCriteria.required}
          />
          <MetricGrid metrics={q1TLSelfMetrics} />
        </Box>

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={q1TLTeamCriteria.title}
            actual={q1TLTeamCriteria.actual}
            required={q1TLTeamCriteria.required}
          />
          <MetricGrid metrics={q1TLTeamMetrics} />
        </Box>

        <TeamEligibilityChecklist data={q1TLEligibility} />
        <PayoutBreakdown data={q1TLPayout} />
        <InfoNote text={Q1_TL_PAYOUT_NOTE} />
        <TeamRoleCard data={Q1_TL_ROLE} />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <MetricGrid metrics={q1Metrics} period={"q1"} />
      <RevenueProgress data={q1RevenueProgress} />
      <EligibilityChecklist data={q1Eligibility} />
      <PayoutBreakdown data={q1Payout} />
      <PolicyCard data={OVERVIEW_DATA.policy} />
    </Box>
  );
};

export default OverviewQ1;
