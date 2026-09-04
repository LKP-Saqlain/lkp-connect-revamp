import { useEffect, useMemo } from "react";

import RevenueBreakdownLayout from "./RevenueBreakdownLayout";

import { FY_REVENUE_BREAKDOWN } from "./data/fy.data";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchEmpwiseDetailsRevenue } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";
import { getQuarterName } from "../../constants/overall";

import type { RevenueBreakdownData } from "./types/revenueBreakdown.types";

interface Props {
  period: "fy" | "q1" | "q2" | "q3" | "q4";
  empCode?: any;
}

const formatIndianCurrency = (value: number) => {
  return `₹${value.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
};

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

const RevenueBreakdown = ({ period, empCode }: Props) => {
  const dispatch = useAppDispatch();

  const { empwiseDetailsRevenue } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  const quarterName = getQuarterName(period); // null for "fy", "Q1"/"Q2"/"Q3"/"Q4" otherwise

  // -----------------------------------------
  // API call — now dynamic for any quarter
  // -----------------------------------------

  useEffect(() => {
    if (!quarterName) return; // skip FY

    dispatch(
      fetchEmpwiseDetailsRevenue({
        empCode: empCode,
        financialYear: "2026-27",
        quarterName,
      }),
    );
  }, [dispatch, quarterName]);

  // -----------------------------------------
  // API data -> RevenueBreakdownData
  // -----------------------------------------

  const apiData = useMemo(() => {
    if (!empwiseDetailsRevenue?.data) {
      return null;
    }

    const { brokRevenueDetails, nonBrokRevenueDetails, monthWiseRevenues } =
      empwiseDetailsRevenue.data;

    const totalBrokingRevenue = brokRevenueDetails?.totalBrokingRevenue ?? 0;
    const totalNonBrokingRevenue =
      nonBrokRevenueDetails?.totalNonBrokingRevenue ?? 0;
    const totalRevenue = totalBrokingRevenue + totalNonBrokingRevenue;

    const brokingItems = [
      { id: 1, name: "Equity", raw: brokRevenueDetails?.equity ?? 0 },
      { id: 2, name: "Futures", raw: brokRevenueDetails?.futures ?? 0 },
      { id: 3, name: "Options", raw: brokRevenueDetails?.options ?? 0 },
      { id: 4, name: "Comm Fut", raw: brokRevenueDetails?.commFut ?? 0 },
      { id: 5, name: "Comm Opt", raw: brokRevenueDetails?.commOpt ?? 0 },
      { id: 6, name: "Curr Fut", raw: brokRevenueDetails?.currFut ?? 0 },
      { id: 7, name: "Curr Opt", raw: brokRevenueDetails?.currOpt ?? 0 },
      { id: 8, name: "SLBM", raw: brokRevenueDetails?.slbm ?? 0 },
      { id: 9, name: "MTF Interest", raw: brokRevenueDetails?.mtf ?? 0 },
    ];

    const nonBrokingItems = [
      {
        id: 1,
        name: "Research Advisory - LKP",
        raw: nonBrokRevenueDetails?.researchAdvisoryLKP ?? 0,
      },
      {
        id: 2,
        name: "Research Advisory - Third Party",
        raw: nonBrokRevenueDetails?.researchAdvisoryThirdParty ?? 0,
      },
      {
        id: 3,
        name: "PMS – Third Party",
        raw: nonBrokRevenueDetails?.pmsThirdParty ?? 0,
      },
      {
        id: 4,
        name: "AIF – Third Party",
        raw: nonBrokRevenueDetails?.aifThirdParty ?? 0,
      },
      {
        id: 5,
        name: "Mutual Funds",
        raw: nonBrokRevenueDetails?.mututalFunds ?? 0,
      },
      { id: 6, name: "Insurance", raw: nonBrokRevenueDetails?.insurance ?? 0 },
      {
        id: 7,
        name: "Fixed Income",
        raw: nonBrokRevenueDetails?.curFixedIncomerOpt ?? 0,
      },
      {
        id: 8,
        name: "Unlisted Shares",
        raw: nonBrokRevenueDetails?.unlistedShares ?? 0,
      },
    ];

    // Derive "Top product" across both broking + non-broking items
    // const allItems = [
    //   ...brokingItems.map((i) => ({ ...i, source: "Broking" })),
    //   ...nonBrokingItems.map((i) => ({ ...i, source: "Non-broking" })),
    // ];
    // const topProduct = allItems.reduce(
    //   (max, item) => (item.raw > max.raw ? item : max),
    //   allItems[0],
    // );

    const summary: RevenueBreakdownData["summary"] = [
      {
        id: "totalRevenue",
        title: "Total revenue",
        value: formatIndianCurrency(totalRevenue),
        subtitle: `Across ${brokingItems.length + nonBrokingItems.length} products`,
        color: "#101828",
      },
      {
        id: "broking",
        title: "Broking revenue",
        value: formatIndianCurrency(totalBrokingRevenue),
        subtitle: `${brokRevenueDetails?.brokingSharePercentage ?? 0}% of total`,
        color: "#2F80ED",
      },
      {
        id: "nonBroking",
        title: "Non-broking revenue",
        value: formatIndianCurrency(totalNonBrokingRevenue),
        subtitle: `${nonBrokRevenueDetails?.nonBrokingSharePercentage ?? 0}% of total`,
        color: "#27AE60",
      },
      // {
      //   id: "topProduct",
      //   title: "Top product",
      //   value: topProduct?.name ?? "—",
      //   subtitle: topProduct
      //     ? `${formatIndianCurrency(topProduct.raw)} • ${topProduct.source}`
      //     : "—",
      //   color: "#101828",
      // },
    ];

    const broking = {
      title: "Broking",
      total: formatIndianCurrency(totalBrokingRevenue),
      color: "#2F80ED",
      items: brokingItems.map(({ id, name, raw }) => ({
        id,
        name,
        value: formatIndianCurrency(raw),
      })),
    };

    const nonBroking = {
      title: "Non-broking",
      total: formatIndianCurrency(totalNonBrokingRevenue),
      color: "#27AE60",
      items: nonBrokingItems.map(({ id, name, raw }) => ({
        id,
        name,
        value: formatIndianCurrency(raw),
      })),
    };

    const sortedMonthWiseRevenues = [...(monthWiseRevenues ?? [])].sort(
      (a, b) =>
        (MONTH_ORDER[a.monthName] ?? 0) - (MONTH_ORDER[b.monthName] ?? 0),
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

    return { summary, table: { broking, nonBroking }, chart };
  }, [empwiseDetailsRevenue]);

  // -----------------------------------------
  // Select data — API data for any quarter that has it, static FY fallback
  // -----------------------------------------

  const data: RevenueBreakdownData =
    quarterName && apiData ? apiData : FY_REVENUE_BREAKDOWN;

  return (
    <RevenueBreakdownLayout
      summary={data.summary}
      table={data.table}
      chart={data.chart}
    />
  );
};

export default RevenueBreakdown;
