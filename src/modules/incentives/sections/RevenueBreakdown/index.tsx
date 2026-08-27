import { useEffect, useMemo } from "react";

import RevenueBreakdownLayout from "./RevenueBreakdownLayout";

import { FY_REVENUE_BREAKDOWN } from "./data/fy.data";
import { Q1_REVENUE_BREAKDOWN } from "./data/q1.data";
// import { Q2_REVENUE_BREAKDOWN } from "./data/q2.data";
import { Q3_REVENUE_BREAKDOWN } from "./data/q3.data";
import { Q4_REVENUE_BREAKDOWN } from "./data/q4.data";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchEmpwiseDetailsRevenue } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

import type { RevenueBreakdownData } from "./types/revenueBreakdown.types";

interface Props {
  period: "fy" | "q1" | "q2" | "q3" | "q4";
}

// -----------------------------------------
// Indian currency formatter
// -----------------------------------------

const formatIndianCurrency = (value: number) => {
  return `₹${value.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
};

// -----------------------------------------
// Month order
// -----------------------------------------

const MONTH_ORDER: Record<string, number> = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const RevenueBreakdown = ({ period }: Props) => {
  const dispatch = useAppDispatch();

  const { empwiseDetailsRevenue } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  // -----------------------------------------
  // Q2 API
  // -----------------------------------------

  useEffect(() => {
    if (period !== "q2") {
      return;
    }

    dispatch(
      fetchEmpwiseDetailsRevenue({
        empCode: "0238",
        financialYear: "2026-27",
        quarterName: "Q2",
      }),
    );
  }, [dispatch, period]);

  // -----------------------------------------
  // Q2 API data -> RevenueBreakdownData
  // -----------------------------------------

  const q2ApiData = useMemo(() => {
    if (!empwiseDetailsRevenue?.data) {
      return null;
    }

    const { brokRevenueDetails, nonBrokRevenueDetails, monthWiseRevenues } =
      empwiseDetailsRevenue.data;

    const totalBrokingRevenue = brokRevenueDetails?.totalBrokingRevenue ?? 0;

    const totalNonBrokingRevenue =
      nonBrokRevenueDetails?.totalNonBrokingRevenue ?? 0;

    const totalRevenue = totalBrokingRevenue + totalNonBrokingRevenue;

    const summary: RevenueBreakdownData["summary"] = [
      {
        id: "totalRevenue",
        title: "Total revenue",
        value: formatIndianCurrency(totalRevenue),
        subtitle: "Across 17 products",
        color: "#101828",
      },
      {
        id: "broking",
        title: "Broking revenue",
        value: formatIndianCurrency(totalBrokingRevenue),
        subtitle: `${brokRevenueDetails?.brokingSharePercentage} of total`, //"78% of total"
        color: "#2F80ED",
      },
      {
        id: "nonBroking",
        title: "Non-broking revenue",
        value: formatIndianCurrency(totalNonBrokingRevenue),
        subtitle: `${nonBrokRevenueDetails?.nonBrokingSharePercentage} of total`,
        color: "#27AE60",
      },
    ];

    const broking = {
      title: "Broking",
      total: formatIndianCurrency(totalBrokingRevenue),
      color: "#2F80ED",
      items: [
        {
          id: 1,
          name: "Equity",
          value: formatIndianCurrency(brokRevenueDetails?.equity ?? 0),
        },
        {
          id: 2,
          name: "Futures",
          value: formatIndianCurrency(brokRevenueDetails?.futures ?? 0),
        },
        {
          id: 3,
          name: "Options",
          value: formatIndianCurrency(brokRevenueDetails?.options ?? 0),
        },
        {
          id: 4,
          name: "Comm Fut",
          value: formatIndianCurrency(brokRevenueDetails?.commFut ?? 0),
        },
        {
          id: 5,
          name: "Comm Opt",
          value: formatIndianCurrency(brokRevenueDetails?.commOpt ?? 0),
        },
        {
          id: 6,
          name: "Curr Fut",
          value: formatIndianCurrency(brokRevenueDetails?.currFut ?? 0),
        },
        {
          id: 7,
          name: "Curr Opt",
          value: formatIndianCurrency(brokRevenueDetails?.currOpt ?? 0),
        },
        {
          id: 8,
          name: "SLBM",
          value: formatIndianCurrency(brokRevenueDetails?.slbm ?? 0),
        },
        {
          id: 9,
          name: "MTF Interest",
          value: formatIndianCurrency(brokRevenueDetails?.mtf ?? 0),
        },
      ],
    };

    const nonBroking = {
      title: "Non-broking",
      total: formatIndianCurrency(totalNonBrokingRevenue),
      color: "#27AE60",
      items: [
        {
          id: 1,
          name: "Research Advisory - LKP",
          value: formatIndianCurrency(
            nonBrokRevenueDetails?.researchAdvisoryLKP ?? 0,
          ),
        },
        {
          id: 2,
          name: "Research Advisory - Third Party",
          value: formatIndianCurrency(
            nonBrokRevenueDetails?.researchAdvisoryThirdParty ?? 0,
          ),
        },
        {
          id: 3,
          name: "PMS – Third Party",
          value: formatIndianCurrency(
            nonBrokRevenueDetails?.pmsThirdParty ?? 0,
          ),
        },
        {
          id: 4,
          name: "AIF – Third Party",
          value: formatIndianCurrency(
            nonBrokRevenueDetails?.aifThirdParty ?? 0,
          ),
        },
        {
          id: 5,
          name: "Mutual Funds",
          value: formatIndianCurrency(nonBrokRevenueDetails?.mututalFunds ?? 0),
        },
        {
          id: 6,
          name: "Insurance",
          value: formatIndianCurrency(nonBrokRevenueDetails?.insurance ?? 0),
        },
        {
          id: 7,
          name: "Fixed Income",
          value: formatIndianCurrency(
            nonBrokRevenueDetails?.curFixedIncomerOpt ?? 0,
          ),
        },
        {
          id: 8,
          name: "Unlisted Shares",
          value: formatIndianCurrency(
            nonBrokRevenueDetails?.unlistedShares ?? 0,
          ),
        },
      ],
    };

    const sortedMonthWiseRevenues = [...(monthWiseRevenues ?? [])].sort(
      (a, b) => {
        return (
          (MONTH_ORDER[a.monthName] ?? 0) - (MONTH_ORDER[b.monthName] ?? 0)
        );
      },
    );

    const chart = {
      categories: sortedMonthWiseRevenues.map((item) =>
        item.monthName.substring(0, 3),
      ),

      series: [
        {
          name: "Broking",
          data: sortedMonthWiseRevenues.map((item) => item.brokingRevenue ?? 0),
        },
        {
          name: "Non-broking",
          data: sortedMonthWiseRevenues.map(
            (item) => item.nonBrokingRevenue ?? 0,
          ),
        },
      ],
    };

    return {
      summary,
      table: {
        broking,
        nonBroking,
      },
      chart,
    };
  }, [empwiseDetailsRevenue]);

  // -----------------------------------------
  // Select data
  // -----------------------------------------

  const data =
    period === "q2" && q2ApiData
      ? q2ApiData
      : period === "fy"
        ? FY_REVENUE_BREAKDOWN
        : period === "q1"
          ? Q1_REVENUE_BREAKDOWN
          : period === "q3"
            ? Q3_REVENUE_BREAKDOWN
            : Q4_REVENUE_BREAKDOWN;

  return (
    <RevenueBreakdownLayout
      summary={data.summary}
      table={data.table}
      chart={data.chart}
    />
  );
};

export default RevenueBreakdown;
