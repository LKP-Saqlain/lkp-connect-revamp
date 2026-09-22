import { useEffect } from "react";
import { Box } from "@mui/material";

import MetricGrid from "../../components/MetricCard";
import RevenueProgress from "../../components/RevenueProgress";
import PolicyCard from "../../components/PolicyCard";
import DeferredIncentive from "../../components/DeferredIncentive";
import SectionHeader from "../../components/SectionHeader";

import {
  SELF_PERFORMANCE_METRICS,
  SELF_PERFORMANCE_CRITERIA,
  TEAM_PERFORMANCE_CRITERIA,
} from "../../constants/overviewTL.data";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchYearlyOverview } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

import PercentageIcon from "@/assets/images/percentage.svg";
import TrendingUp from "@/assets/images/trending-up.svg";
import BankImg from "@/assets/images/building-bank.svg";

const TEAM_ROLE_TYPES = ["TL", "BM", "AH"];

const QUARTER_LABELS: Record<string, string> = {
  Q1: "Q1 · Apr–Jun",
  Q2: "Q2 · Jul–Sep",
  Q3: "Q3 · Oct–Dec",
  Q4: "Q4 · Jan–Mar",
};

const OverviewFY = ({ period, employeeType, empCode }: any) => {
  const isTeamRole = TEAM_ROLE_TYPES.includes(employeeType);

  const dispatch = useAppDispatch();
  const { yearlyOverview } = useAppSelector((state) => state.incentivePeriod);

  useEffect(() => {
    if (!empCode || isTeamRole) return;
    dispatch(fetchYearlyOverview({ empCode, financialYear: "2026-27" }));
  }, [dispatch, empCode, isTeamRole]);

  const summary = yearlyOverview?.data?.yearlyOverview;
  const quarterlyIncentives = yearlyOverview?.data?.yearlyIncentive ?? [];

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

    // Deferred incentive rows — 20% of each quarter's finalIncentive
    const rows = quarterlyIncentives.map((q) => {
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

    const totalDeferred = rows.reduce((sum, row) => {
      const amount = Number(row.amount.replace(/[₹,]/g, "")) || 0;
      return sum + amount;
    }, 0);

    const deferred = {
      title: "Quarterly deferred incentive (20%)",
      info: `20% of each quarter's incentive is deferred and becomes payable only once the annual MPC of ${
        summary?.mpc ?? "—"
      }x CTC is met.`,
      rows,
      total: {
        label: "Total deferred incentive",
        amount: `₹${totalDeferred.toLocaleString("en-IN")}`,
        color: "#12B76A",
      },
    };

    const policy = {
      title: summary?.employeeType ?? "—",
      description: "Revenue credit policy details unavailable.",
      icon: "person",
    };

    return { metrics, progress, deferred, policy };
  };

  const fyData = buildFYData();

  if (isTeamRole) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            p: 2,
          }}
        >
          <SectionHeader
            title={SELF_PERFORMANCE_CRITERIA.title}
            actual={SELF_PERFORMANCE_CRITERIA.actual}
            required={SELF_PERFORMANCE_CRITERIA.required}
          />
          <MetricGrid metrics={SELF_PERFORMANCE_METRICS} period={period} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            p: 2,
          }}
        >
          <SectionHeader
            title={TEAM_PERFORMANCE_CRITERIA.title}
            actual={TEAM_PERFORMANCE_CRITERIA.actual}
            required={TEAM_PERFORMANCE_CRITERIA.required}
          />
          <MetricGrid metrics={fyData.metrics} period={period} />
        </Box>

        <DeferredIncentive data={fyData.deferred} centerAmount />
      </Box>
    );
  }

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
