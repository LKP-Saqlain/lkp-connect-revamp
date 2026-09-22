import { useEffect } from "react";
import { Box } from "@mui/material";

import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import PolicyCard from "../../components/PolicyCard";
import DeferredIncentive from "../../components/DeferredIncentive";
import SectionHeader from "../../components/SectionHeader";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchYearlyOverview } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

import PercentageIcon from "@/assets/images/percentage.svg";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const TEAM_ROLE_TYPES = ["TL", "BM", "AH"];

const QUARTER_LABELS: Record<string, string> = {
  Q1: "Q1 · Apr–Jun",
  Q2: "Q2 · Jul–Sep",
  Q3: "Q3 · Oct–Dec",
  Q4: "Q4 · Jan–Mar",
};

const performanceCardSx = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  p: 2,
} as const;

const OverviewFY = ({ period, employeeType, empCode }: any) => {
  const isTeamRole = TEAM_ROLE_TYPES.includes(employeeType);

  const dispatch = useAppDispatch();
  const { yearlyOverview } = useAppSelector((state) => state.incentivePeriod);

  useEffect(() => {
    if (!empCode) return;
    dispatch(fetchYearlyOverview({ empCode, financialYear: "2026-27" }));
  }, [dispatch, empCode]);

  const summary = yearlyOverview?.data?.yearlyOverview;
  const quarterlyIncentives = yearlyOverview?.data?.yearlyIncentive ?? [];

  const buildDeferred = (mpcLabel: string) => {
    const rows = quarterlyIncentives.map((q: any) => {
      const finalIncentive = Number(q.finalIncentive) || 0;
      const deferredAmount = Math.round(finalIncentive * 0.2);
      const isEligible = finalIncentive > 0;

      return {
        id: q.quarterName.toLowerCase(),
        period: QUARTER_LABELS[q.quarterName] ?? q.quarterName,
        amount: `₹${deferredAmount.toLocaleString("en-IN")}`,
        status: isEligible
          ? "Due · pending annual MPC"
          : "Not eligible this quarter",
        statusColor: isEligible ? "#3B6D11" : "#A32D2D",
      };
    });

    const totalDeferred = rows.reduce((sum: number, row: any) => {
      const amount = Number(row.amount.replace(/[₹,]/g, "")) || 0;
      return sum + amount;
    }, 0);

    return {
      title: "Quarterly deferred incentive (20%)",
      info: `20% of each quarter's incentive is deferred and becomes payable only once the annual MPC of ${mpcLabel} is met.`,
      rows,
      total: {
        label: "Total deferred incentive",
        amount: `₹${totalDeferred.toLocaleString("en-IN")}`,
        color: "#12B76A",
      },
    };
  };

  // -----------------------------------------
  // RM / BDM / Dealer — build purely from API
  // -----------------------------------------

  const buildFYData = () => {
    const metrics = [
      {
        id: "revenue-multiple",
        title: "Revenue multiple",
        value:
          summary?.revenueMultiple != null
            ? `${summary.revenueMultiple}x`
            : "—",
        icon: PercentageIcon,
      },
      {
        id: "broking-credit",
        title: "Broking Revenue Credit",
        value:
          summary?.brokingCredits != null
            ? `₹${summary.brokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        subtitle:
          summary?.brokingPercent != null
            ? `${summary.brokingPercent}% of total`
            : undefined,
        icon: TrendingUp,
      },
      {
        id: "non-broking-credit",
        title: "Non-Broking Revenue Credit",
        value:
          summary?.nonBrokingCredits != null
            ? `₹${summary.nonBrokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        subtitle:
          summary?.nonBrokingPercent != null
            ? `${summary.nonBrokingPercent}% of total`
            : undefined,
        icon: BankImg,
      },
    ];

    const reqMultiple = summary?.mpc != null ? Number(summary.mpc) : 0;

    const progress = {
      multiplier:
        summary?.revenueMultiple != null ? `${summary.revenueMultiple}x` : "0x",
      mpc: summary?.mpc != null ? `${summary.mpc}x` : "0x",
      barMax: reqMultiple,
      target: {
        label: summary?.mpc != null ? `${summary.mpc}x CTC` : "—",
        value:
          summary?.empCTC != null && reqMultiple
            ? `₹${(summary.empCTC * reqMultiple).toLocaleString("en-IN")}`
            : "₹0",
      },
      broking: {
        label: `Broking credit (${summary?.brokingPercent ?? 0}%)`,
        amount:
          summary?.brokingCredits != null
            ? `₹${summary.brokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        percent: "—",
      },
      nonBroking: {
        label: `Non-broking credit (${summary?.nonBrokingPercent ?? 0}%)`,
        amount:
          summary?.nonBrokingCredits != null
            ? `₹${summary.nonBrokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        percent: "—",
      },
      netCredit: {
        label: "Net credit",
        amount:
          summary?.totalCredits != null
            ? `₹${summary.totalCredits.toLocaleString("en-IN")}`
            : "₹0",
        percent: "—",
      },
    };

    const deferred = buildDeferred(
      summary?.mpc != null ? `${summary.mpc}x CTC` : "—",
    );

    const policy = {
      title: summary?.employeeType ?? "—",
      description: "Revenue credit policy details unavailable.",
      icon: "person",
    };

    return { metrics, progress, deferred, policy };
  };

  // -----------------------------------------
  // TL / BM / AH — self + team cards, API-driven
  // -----------------------------------------

  const buildFYTeamData = () => {
    const selfMetrics = [
      {
        id: "self-broking",
        title: "Broking Revenue Credit",
        value:
          summary?.brokingCredits != null
            ? `₹${summary.brokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        subtitle:
          summary?.brokingPercent != null
            ? `${summary.brokingPercent}% of total`
            : undefined,
        icon: TrendingUp,
      },
      {
        id: "self-non-broking",
        title: "Non Broking Revenue Credit",
        value:
          summary?.nonBrokingCredits != null
            ? `₹${summary.nonBrokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        subtitle:
          summary?.nonBrokingPercent != null
            ? `${summary.nonBrokingPercent}% of total`
            : undefined,
        icon: BankImg,
      },
      {
        id: "self-total",
        title: "Total revenue credit",
        value:
          summary?.totalCredits != null
            ? `₹${summary.totalCredits.toLocaleString("en-IN")}`
            : "₹0",
        icon: <InfoOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
      },
    ];

    const teamMetrics = [
      {
        id: "team-broking",
        title: "Broking Revenue Credit",
        value:
          summary?.teamBrokingCredits != null
            ? `₹${summary.teamBrokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        subtitle:
          summary?.teamTotalBrokingCredits != null
            ? `of total ₹${summary.teamTotalBrokingCredits.toLocaleString("en-IN")}`
            : undefined,
        icon: TrendingUp,
      },
      {
        id: "team-non-broking",
        title: "Non Broking Revenue Credit",
        value:
          summary?.teamNonBrokingCredits != null
            ? `₹${summary.teamNonBrokingCredits.toLocaleString("en-IN")}`
            : "₹0",
        icon: BankImg,
      },
      {
        id: "team-total",
        title: "Total revenue credit",
        value:
          summary?.teamBrokingCredits != null &&
          summary?.teamNonBrokingCredits != null
            ? `₹${(summary.teamBrokingCredits + summary.teamNonBrokingCredits).toLocaleString("en-IN")}`
            : "₹0",
        icon: <InfoOutlinedIcon sx={{ fontSize: 16, color: "#98A2B3" }} />,
      },
    ];

    const selfCriteria = {
      title: "My performance (self book)",
      actual:
        summary?.revenueMultiple != null ? `${summary.revenueMultiple}x` : "0x",
      required: summary?.mpc != null ? `${summary.mpc}x of total CTC` : "—",
    };

    const teamCriteria = {
      title: "Team performance (excl. self)",
      actual:
        summary?.teamRevenueMultiple != null
          ? `${summary.teamRevenueMultiple}x`
          : "0x",
      required: summary?.mpc != null ? `${summary.mpc}x of total CTC` : "—",
    };

    const deferred = buildDeferred(
      summary?.mpc != null ? `${summary.mpc}x team CTC` : "—",
    );

    return { selfMetrics, teamMetrics, selfCriteria, teamCriteria, deferred };
  };

  if (isTeamRole) {
    const teamData = buildFYTeamData();

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
        <Box sx={performanceCardSx}>
          <SectionHeader
            title={teamData.selfCriteria.title}
            actual={teamData.selfCriteria.actual}
            required={teamData.selfCriteria.required}
          />
          <MetricGrid metrics={teamData.selfMetrics} period={period} />
        </Box>

        <Box sx={performanceCardSx}>
          <SectionHeader
            title={teamData.teamCriteria.title}
            actual={teamData.teamCriteria.actual}
            required={teamData.teamCriteria.required}
          />
          <MetricGrid metrics={teamData.teamMetrics} period={period} />
        </Box>

        <DeferredIncentive data={teamData.deferred} centerAmount />
      </Box>
    );
  }

  const fyData = buildFYData();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <MetricGrid metrics={fyData.metrics} period={period} />
      <RevenueProgress data={fyData.progress} />
      <DeferredIncentive data={fyData.deferred} />
      <PolicyCard data={fyData.policy} />
    </Box>
  );
};

export default OverviewFY;
